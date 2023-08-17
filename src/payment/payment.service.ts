// payment.service.ts
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as crypto from 'crypto';
import { Payment } from './payment.dto';
import * as moment from 'moment';
import * as querystring from 'qs';
import { Request, Response } from 'express';
import { OrderService } from 'src/order/order.service';

@Injectable()
export class PaymentService {
  constructor(
    private readonly configService: ConfigService,
    private readonly orderService: OrderService,
  ) {}

  createPaymentUrl(reqBody: Payment, ipAddr: string | string[]) {
    process.env.TZ = 'Asia/Ho_Chi_Minh';
    const tmnCode = this.configService.get<string>('vnp_TmnCode');
    const secretKey = this.configService.get<string>('vnp_HashSecret');
    let vnpUrl = this.configService.get<string>('vnp_Url');
    const returnUrl = this.configService.get<string>('vnp_ReturnUrl');
    const date = new Date();
    const createDate = moment(date).format('YYYYMMDDHHmmss');
    const orderId = reqBody.orderId;
    const amount = reqBody.amount;
    const bankCode = reqBody.bankCode;
    let locale = reqBody.language;
    if (!locale) {
      locale = 'vn';
    }
    const currCode = 'VND';

    const vnp_Params: any = {};
    vnp_Params['vnp_Version'] = '2.1.0';
    vnp_Params['vnp_Command'] = 'pay';
    vnp_Params['vnp_TmnCode'] = tmnCode;
    vnp_Params['vnp_Locale'] = locale;
    vnp_Params['vnp_CurrCode'] = currCode;
    vnp_Params['vnp_TxnRef'] = orderId;
    vnp_Params['vnp_OrderInfo'] = 'Thanh toan cho ma GD:' + orderId;
    vnp_Params['vnp_OrderType'] = 'other';
    vnp_Params['vnp_Amount'] = amount * 100;
    vnp_Params['vnp_ReturnUrl'] = returnUrl;
    vnp_Params['vnp_IpAddr'] = ipAddr;
    vnp_Params['vnp_CreateDate'] = createDate;
    if (bankCode !== null && bankCode !== '') {
      vnp_Params['vnp_BankCode'] = bankCode;
    }

    if (bankCode) {
      vnp_Params['vnp_BankCode'] = bankCode;
    }

    const sortedParams = sortObject(vnp_Params);

    const signData = querystring.stringify(sortedParams, { encode: false });
    const hmac = crypto.createHmac('sha512', secretKey);
    const signed = hmac.update(new Buffer(signData, 'utf-8')).digest('hex');
    vnp_Params['vnp_SecureHash'] = signed;
    vnpUrl += '?' + querystring.stringify(vnp_Params, { encode: false });
    return vnpUrl;
  }

  async handleReturnPayment(req: Request) {
    let vnp_Params = req.query;

    const secureHash = vnp_Params['vnp_SecureHash'];

    delete vnp_Params['vnp_SecureHash'];
    delete vnp_Params['vnp_SecureHashType'];

    vnp_Params = sortObject(vnp_Params);

    const tmnCode = this.configService.get<string>('vnp_TmnCode');
    const secretKey = this.configService.get<string>('vnp_HashSecret');
    const signData = querystring.stringify(vnp_Params, { encode: false });
    const hmac = crypto.createHmac('sha512', secretKey);
    const signed = hmac.update(new Buffer(signData, 'utf-8')).digest('hex');
    const href = this.configService.get<string>('CLIENT_URL');
    if (secureHash === signed) {
      //Kiem tra xem du lieu trong db co hop le hay khong va thong bao ket qua
      await this.orderService.updatePayment(
        parseInt(vnp_Params['vnp_TxnRef'] as string),
      );
      return { code: vnp_Params['vnp_ResponseCode'], href: `${href}` };
    } else {
      return { code: '97', href };
    }
  }

  async displayCreatePayment(id: number, res: Response) {
    try {
      const order = await this.orderService.getOrderById(id);
      if (!order) throw new Error('Order not found');
      return {
        title: 'Tạo mới đơn hàng',
        amount: order.totalPrice,
        orderId: order.id,
      };
    } catch (error) {
      console.log(error);
      const base_url = this.configService.get<string>('BASE_URL');
      res.redirect(
        `${base_url}/payments/error?message=${
          error.message ? error.message : 'Please choose valid order'
        }`,
      );
    }
  }
}

const sortObject = (obj: any) => {
  const sorted = {};
  const str = [];
  let key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      str.push(encodeURIComponent(key));
    }
  }
  str.sort();
  for (key = 0; key < str.length; key++) {
    sorted[str[key]] = encodeURIComponent(obj[str[key]]).replace(/%20/g, '+');
  }
  return sorted;
};
