import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitDB1686480592430 implements MigrationInterface {
  name = 'InitDB1686480592430';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "type_voucher" ("id" SERIAL NOT NULL, "typeVoucher" character varying NOT NULL, "value" bigint NOT NULL, "maxValue" bigint NOT NULL, "minValue" bigint NOT NULL, "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_0da3346cafc506d27cdad8d5108" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "voucher" ("id" SERIAL NOT NULL, "fromDate" character varying NOT NULL, "toDate" character varying NOT NULL, "typeVoucherId" integer NOT NULL, "amount" integer NOT NULL, "usedAmount" integer NOT NULL, "codeVoucher" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_677ae75f380e81c2f103a57ffaf" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "type_ship" ("id" SERIAL NOT NULL, "type" character varying NOT NULL, "price" bigint NOT NULL, "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_2c71028c96fefcd82a035113638" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "blog" ("id" SERIAL NOT NULL, "shortDescription" text NOT NULL, "title" character varying NOT NULL, "subjectId" character varying NOT NULL, "statusId" character varying NOT NULL, "image" character varying NOT NULL, "contentMarkdown" text NOT NULL, "contentHtml" text NOT NULL, "userId" integer NOT NULL, "view" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_85c6532ad065a448e9de7638571" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "comment" ("id" SERIAL NOT NULL, "content" text NOT NULL, "image" character varying NOT NULL, "parenId" integer NOT NULL, "productId" integer, "start" integer NOT NULL, "blogId" integer, "userId" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_0b0e4bbc8415ec426f87f3a88e2" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "product" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "contentMarkdown" text NOT NULL, "contentHtml" text NOT NULL, "categoryId" character varying NOT NULL, "statusId" character varying NOT NULL, "view" integer NOT NULL, "madeBy" character varying NOT NULL, "material" character varying NOT NULL, "brandId" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "product_image" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "productDetailId" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_337e1b4d2dc42cd7f55d7888751" UNIQUE ("name"), CONSTRAINT "PK_99d98a80f57857d51b5f63c8240" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "product_detail" ("id" SERIAL NOT NULL, "productId" integer NOT NULL, "name" character varying NOT NULL, "originalPrice" integer NOT NULL, "discountPrice" integer NOT NULL, "description" text NOT NULL, "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_12ea67a439667df5593ff68fc33" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "supplier" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "address" character varying NOT NULL, "email" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_2bc0d2cab6276144d2ff98a2828" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "receipt" ("id" SERIAL NOT NULL, "userId" integer NOT NULL, "suplierId" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "supplierId" integer, CONSTRAINT "PK_b4b9ec7d164235fbba023da9832" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "receipt_detail" ("id" SERIAL NOT NULL, "receiptId" integer NOT NULL, "productDetailSizeId" integer NOT NULL, "quantity" integer NOT NULL, "price" bigint NOT NULL, "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d1e559010e59818b426315eb912" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "product_detail_size" ("id" SERIAL NOT NULL, "productDetailId" integer NOT NULL, "width" character varying NOT NULL, "height" character varying NOT NULL, "weight" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_8f0bf3881843fd7b8b3fd8be6fe" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "order_detail" ("id" SERIAL NOT NULL, "orderId" integer NOT NULL, "productDetailSizeId" integer NOT NULL, "quantity" integer NOT NULL, CONSTRAINT "PK_0afbab1fa98e2fb0be8e74f6b38" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "order" ("id" SERIAL NOT NULL, "addressUserId" integer NOT NULL, "statusId" character varying NOT NULL, "typeShipId" integer NOT NULL, "voucherId" integer NOT NULL, "note" character varying NOT NULL, "isPaymentOnline" boolean NOT NULL, "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "user_address" ("id" SERIAL NOT NULL, "userId" integer NOT NULL, "shipName" character varying NOT NULL, "shipAddress" character varying NOT NULL, "shipPhoneNumber" character varying NOT NULL, "shipEmail" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_302d96673413455481d5ff4022a" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "voucher_used" ("id" SERIAL NOT NULL, "voucherId" integer NOT NULL, "userId" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_abf72300bc8bff22e92fa5d53af" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "room_message" ("id" SERIAL NOT NULL, "userOneId" integer NOT NULL, "userTwoId" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_4d4598ed140cbdaf3e9879aca1a" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "message" ("id" SERIAL NOT NULL, "text" text NOT NULL, "userId" integer NOT NULL, "roomId" integer NOT NULL, "unRead" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_ba01f0a3e0123651915008bc578" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."user_roleid_enum" AS ENUM('USER', 'SELLER', 'ADMIN')`,
    );
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "password" character varying NOT NULL, "email" character varying NOT NULL, "genderId" character varying NOT NULL, "roleId" "public"."user_roleid_enum" NOT NULL, "phoneNumber" character varying NOT NULL, "image" character varying NOT NULL DEFAULT 'avatar.png', "dob" character varying NOT NULL, "statusId" character varying NOT NULL, "token" character varying NOT NULL, "isActiveEmail" boolean NOT NULL, "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "allcode" ("id" SERIAL NOT NULL, "type" character varying NOT NULL, "value" character varying NOT NULL, "code" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_5bbece62bc767604c4a7dc0d922" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "banner" ("id" SERIAL NOT NULL, "description" text NOT NULL, "name" character varying NOT NULL, "statusId" character varying NOT NULL, "image" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_6d9e2570b3d85ba37b681cd4256" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "voucher" ADD CONSTRAINT "FK_c4efa84a8736b7a3dfd20481254" FOREIGN KEY ("typeVoucherId") REFERENCES "type_voucher"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "blog" ADD CONSTRAINT "FK_fc46ede0f7ab797b7ffacb5c08d" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "comment" ADD CONSTRAINT "FK_1e9f24a68bd2dcd6390a4008395" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "comment" ADD CONSTRAINT "FK_5dec255234c5b7418f3d1e88ce4" FOREIGN KEY ("blogId") REFERENCES "blog"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "comment" ADD CONSTRAINT "FK_c0354a9a009d3bb45a08655ce3b" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "product_image" ADD CONSTRAINT "FK_94fe0b0c135404c994dd009d32f" FOREIGN KEY ("productDetailId") REFERENCES "product_detail"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "product_detail" ADD CONSTRAINT "productId" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "receipt" ADD CONSTRAINT "FK_e011d4704c491f4d821d7ebb6ca" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "receipt" ADD CONSTRAINT "FK_acff0f13d84db55b7b3fe6b04c6" FOREIGN KEY ("supplierId") REFERENCES "supplier"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "receipt_detail" ADD CONSTRAINT "FK_26d5e4342c6ba6dd43d3e1e91a0" FOREIGN KEY ("receiptId") REFERENCES "receipt"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "receipt_detail" ADD CONSTRAINT "FK_0836f377ea609b7a5e467fd9213" FOREIGN KEY ("productDetailSizeId") REFERENCES "product_detail_size"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "product_detail_size" ADD CONSTRAINT "FK_bb0933ec5366df204dea2b8f8a0" FOREIGN KEY ("productDetailId") REFERENCES "product_detail"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "order_detail" ADD CONSTRAINT "FK_88850b85b38a8a2ded17a1f5369" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "order" ADD CONSTRAINT "FK_e1967ddc70407fb409551d51ab4" FOREIGN KEY ("addressUserId") REFERENCES "user_address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "order" ADD CONSTRAINT "FK_53f525bcb1988088ee513991b98" FOREIGN KEY ("typeShipId") REFERENCES "type_ship"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "order" ADD CONSTRAINT "FK_cff8eff4c72e7c4cb5bf045447c" FOREIGN KEY ("voucherId") REFERENCES "voucher"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_address" ADD CONSTRAINT "FK_1abd8badc4a127b0f357d9ecbc2" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "voucher_used" ADD CONSTRAINT "FK_9b6f786de454c6368772d6e0af5" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "room_message" ADD CONSTRAINT "FK_43a065a53c7bba8f99cc4f2cfd8" FOREIGN KEY ("userOneId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "room_message" ADD CONSTRAINT "FK_4fe61963fb10947ede4510dbe5a" FOREIGN KEY ("userTwoId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "message" ADD CONSTRAINT "FK_446251f8ceb2132af01b68eb593" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "message" ADD CONSTRAINT "FK_fdfe54a21d1542c564384b74d5c" FOREIGN KEY ("roomId") REFERENCES "room_message"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "message" DROP CONSTRAINT "FK_fdfe54a21d1542c564384b74d5c"`,
    );
    await queryRunner.query(
      `ALTER TABLE "message" DROP CONSTRAINT "FK_446251f8ceb2132af01b68eb593"`,
    );
    await queryRunner.query(
      `ALTER TABLE "room_message" DROP CONSTRAINT "FK_4fe61963fb10947ede4510dbe5a"`,
    );
    await queryRunner.query(
      `ALTER TABLE "room_message" DROP CONSTRAINT "FK_43a065a53c7bba8f99cc4f2cfd8"`,
    );
    await queryRunner.query(
      `ALTER TABLE "voucher_used" DROP CONSTRAINT "FK_9b6f786de454c6368772d6e0af5"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_address" DROP CONSTRAINT "FK_1abd8badc4a127b0f357d9ecbc2"`,
    );
    await queryRunner.query(
      `ALTER TABLE "order" DROP CONSTRAINT "FK_cff8eff4c72e7c4cb5bf045447c"`,
    );
    await queryRunner.query(
      `ALTER TABLE "order" DROP CONSTRAINT "FK_53f525bcb1988088ee513991b98"`,
    );
    await queryRunner.query(
      `ALTER TABLE "order" DROP CONSTRAINT "FK_e1967ddc70407fb409551d51ab4"`,
    );
    await queryRunner.query(
      `ALTER TABLE "order_detail" DROP CONSTRAINT "FK_88850b85b38a8a2ded17a1f5369"`,
    );
    await queryRunner.query(
      `ALTER TABLE "product_detail_size" DROP CONSTRAINT "FK_bb0933ec5366df204dea2b8f8a0"`,
    );
    await queryRunner.query(
      `ALTER TABLE "receipt_detail" DROP CONSTRAINT "FK_0836f377ea609b7a5e467fd9213"`,
    );
    await queryRunner.query(
      `ALTER TABLE "receipt_detail" DROP CONSTRAINT "FK_26d5e4342c6ba6dd43d3e1e91a0"`,
    );
    await queryRunner.query(
      `ALTER TABLE "receipt" DROP CONSTRAINT "FK_acff0f13d84db55b7b3fe6b04c6"`,
    );
    await queryRunner.query(
      `ALTER TABLE "receipt" DROP CONSTRAINT "FK_e011d4704c491f4d821d7ebb6ca"`,
    );
    await queryRunner.query(
      `ALTER TABLE "product_detail" DROP CONSTRAINT "productId"`,
    );
    await queryRunner.query(
      `ALTER TABLE "product_image" DROP CONSTRAINT "FK_94fe0b0c135404c994dd009d32f"`,
    );
    await queryRunner.query(
      `ALTER TABLE "comment" DROP CONSTRAINT "FK_c0354a9a009d3bb45a08655ce3b"`,
    );
    await queryRunner.query(
      `ALTER TABLE "comment" DROP CONSTRAINT "FK_5dec255234c5b7418f3d1e88ce4"`,
    );
    await queryRunner.query(
      `ALTER TABLE "comment" DROP CONSTRAINT "FK_1e9f24a68bd2dcd6390a4008395"`,
    );
    await queryRunner.query(
      `ALTER TABLE "blog" DROP CONSTRAINT "FK_fc46ede0f7ab797b7ffacb5c08d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "voucher" DROP CONSTRAINT "FK_c4efa84a8736b7a3dfd20481254"`,
    );
    await queryRunner.query(`DROP TABLE "banner"`);
    await queryRunner.query(`DROP TABLE "allcode"`);
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TYPE "public"."user_roleid_enum"`);
    await queryRunner.query(`DROP TABLE "message"`);
    await queryRunner.query(`DROP TABLE "room_message"`);
    await queryRunner.query(`DROP TABLE "voucher_used"`);
    await queryRunner.query(`DROP TABLE "user_address"`);
    await queryRunner.query(`DROP TABLE "order"`);
    await queryRunner.query(`DROP TABLE "order_detail"`);
    await queryRunner.query(`DROP TABLE "product_detail_size"`);
    await queryRunner.query(`DROP TABLE "receipt_detail"`);
    await queryRunner.query(`DROP TABLE "receipt"`);
    await queryRunner.query(`DROP TABLE "supplier"`);
    await queryRunner.query(`DROP TABLE "product_detail"`);
    await queryRunner.query(`DROP TABLE "product_image"`);
    await queryRunner.query(`DROP TABLE "product"`);
    await queryRunner.query(`DROP TABLE "comment"`);
    await queryRunner.query(`DROP TABLE "blog"`);
    await queryRunner.query(`DROP TABLE "type_ship"`);
    await queryRunner.query(`DROP TABLE "voucher"`);
    await queryRunner.query(`DROP TABLE "type_voucher"`);
  }
}
