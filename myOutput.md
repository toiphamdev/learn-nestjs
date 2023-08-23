---
title: API v1.0.0
language_tabs:
  - javascript: Javascript
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="api"> v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

<h1 id="api-default">Default</h1>

## AppController_getHello

<a id="opIdAppController_getHello"></a>

`GET /`

<h3 id="appcontroller_gethello-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## UserController_createUser

<a id="opIdUserController_createUser"></a>

`POST /user`

> Body parameter

```json
{
  "type": "object",
  "properties": {}
}
```

<h3 id="usercontroller_createuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UserDto](#schemauserdto)|true|none|

<h3 id="usercontroller_createuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## UserController_getAllUser

<a id="opIdUserController_getAllUser"></a>

`GET /user`

<h3 id="usercontroller_getalluser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## UserController_updateUser

<a id="opIdUserController_updateUser"></a>

`PUT /user`

> Body parameter

```json
{
  "type": "object",
  "properties": {}
}
```

<h3 id="usercontroller_updateuser-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpdateUserDto](#schemaupdateuserdto)|true|none|

<h3 id="usercontroller_updateuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## UserController_getProfile

<a id="opIdUserController_getProfile"></a>

`GET /user/profile`

<h3 id="usercontroller_getprofile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## UserController_dislikeCommentAction

<a id="opIdUserController_dislikeCommentAction"></a>

`PATCH /user/comment/dislike/{commentId}`

<h3 id="usercontroller_dislikecommentaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## UserController_likeCommentAction

<a id="opIdUserController_likeCommentAction"></a>

`PATCH /user/comment/like/{commentId}`

<h3 id="usercontroller_likecommentaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## UserController_addToVoucherList

<a id="opIdUserController_addToVoucherList"></a>

`PATCH /user/voucher/add/{code}`

<h3 id="usercontroller_addtovoucherlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## UserController_sendVerifyEmail

<a id="opIdUserController_sendVerifyEmail"></a>

`POST /user/verify-email`

<h3 id="usercontroller_sendverifyemail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## UserController_sendVerifyChangePass

<a id="opIdUserController_sendVerifyChangePass"></a>

`POST /user/change-pass`

<h3 id="usercontroller_sendverifychangepass-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## UserController_verifyPass

<a id="opIdUserController_verifyPass"></a>

`PATCH /user/change-pass`

<h3 id="usercontroller_verifypass-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## UserController_verifyEmail

<a id="opIdUserController_verifyEmail"></a>

`PATCH /user/verify`

<h3 id="usercontroller_verifyemail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## UserController_createAdd

<a id="opIdUserController_createAdd"></a>

`POST /user/address`

> Body parameter

```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "number"
    },
    "shipName": {
      "type": "string"
    },
    "statusId": {
      "type": "string"
    },
    "shipAddress": {
      "type": "string"
    },
    "shipPhoneNumber": {
      "type": "string"
    },
    "shipEmail": {
      "type": "string"
    }
  },
  "required": [
    "userId",
    "shipName",
    "statusId",
    "shipAddress",
    "shipPhoneNumber",
    "shipEmail"
  ]
}
```

<h3 id="usercontroller_createadd-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UserAddressDto](#schemauseraddressdto)|true|none|

<h3 id="usercontroller_createadd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## UserController_getAdds

<a id="opIdUserController_getAdds"></a>

`GET /user/address`

<h3 id="usercontroller_getadds-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## UserController_updateAdd

<a id="opIdUserController_updateAdd"></a>

`PUT /user/address/{id}`

> Body parameter

```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "number"
    },
    "shipName": {
      "type": "string"
    },
    "statusId": {
      "type": "string"
    },
    "shipAddress": {
      "type": "string"
    },
    "shipPhoneNumber": {
      "type": "string"
    },
    "shipEmail": {
      "type": "string"
    }
  },
  "required": [
    "userId",
    "shipName",
    "statusId",
    "shipAddress",
    "shipPhoneNumber",
    "shipEmail"
  ]
}
```

<h3 id="usercontroller_updateadd-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number|true|none|
|body|body|[UserAddressDto](#schemauseraddressdto)|true|none|

<h3 id="usercontroller_updateadd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## UserController_deleteAdd

<a id="opIdUserController_deleteAdd"></a>

`DELETE /user/address/{id}`

<h3 id="usercontroller_deleteadd-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number|true|none|

<h3 id="usercontroller_deleteadd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## UserController_sendVerifyTakePass

<a id="opIdUserController_sendVerifyTakePass"></a>

`POST /user/take-pass`

<h3 id="usercontroller_sendverifytakepass-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## VoucherController_createVoucher

<a id="opIdVoucherController_createVoucher"></a>

`POST /voucher`

<h3 id="vouchercontroller_createvoucher-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## VoucherController_getAllVoucher

<a id="opIdVoucherController_getAllVoucher"></a>

`GET /voucher`

<h3 id="vouchercontroller_getallvoucher-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## VoucherController_getVoucherByCode

<a id="opIdVoucherController_getVoucherByCode"></a>

`GET /voucher/code`

<h3 id="vouchercontroller_getvoucherbycode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## VoucherController_updateVoucher

<a id="opIdVoucherController_updateVoucher"></a>

`PATCH /voucher/update/{id}`

<h3 id="vouchercontroller_updatevoucher-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number|true|none|

<h3 id="vouchercontroller_updatevoucher-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## VoucherController_createTypeVoucher

<a id="opIdVoucherController_createTypeVoucher"></a>

`POST /voucher/type-voucher`

> Body parameter

```json
{
  "type": "object",
  "properties": {}
}
```

<h3 id="vouchercontroller_createtypevoucher-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TypeVoucherDto](#schematypevoucherdto)|true|none|

<h3 id="vouchercontroller_createtypevoucher-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## VoucherController_getAllTypeVoucher

<a id="opIdVoucherController_getAllTypeVoucher"></a>

`GET /voucher/type-voucher`

<h3 id="vouchercontroller_getalltypevoucher-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## VoucherController_updateTypeVoucher

<a id="opIdVoucherController_updateTypeVoucher"></a>

`PATCH /voucher/type-voucher/{id}`

> Body parameter

```json
{
  "type": "string"
}
```

<h3 id="vouchercontroller_updatetypevoucher-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number|true|none|
|body|body|string|true|none|

<h3 id="vouchercontroller_updatetypevoucher-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## ProductController_createNewProduct

<a id="opIdProductController_createNewProduct"></a>

`POST /product`

> Body parameter

```json
{
  "type": "object",
  "properties": {}
}
```

<h3 id="productcontroller_createnewproduct-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ProductDto](#schemaproductdto)|true|none|

<h3 id="productcontroller_createnewproduct-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## ProductController_fillterProduct

<a id="opIdProductController_fillterProduct"></a>

`GET /product`

<h3 id="productcontroller_fillterproduct-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## ProductController_deleteProductById

<a id="opIdProductController_deleteProductById"></a>

`DELETE /product/{id}`

<h3 id="productcontroller_deleteproductbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## ProductController_updateProductById

<a id="opIdProductController_updateProductById"></a>

`PUT /product/{id}`

> Body parameter

```json
{
  "type": "object",
  "properties": {}
}
```

<h3 id="productcontroller_updateproductbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ProductDto](#schemaproductdto)|true|none|

<h3 id="productcontroller_updateproductbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## ProductController_getProductById

<a id="opIdProductController_getProductById"></a>

`GET /product/{id}`

<h3 id="productcontroller_getproductbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## ProductController_getProductByName

<a id="opIdProductController_getProductByName"></a>

`GET /product/search`

<h3 id="productcontroller_getproductbyname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## ProductController_updateProductDetail

<a id="opIdProductController_updateProductDetail"></a>

`PUT /product/detail/{id}`

> Body parameter

```json
{
  "type": "object",
  "properties": {}
}
```

<h3 id="productcontroller_updateproductdetail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ProductDetail](#schemaproductdetail)|true|none|

<h3 id="productcontroller_updateproductdetail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## ProductController_deleteProdDetail

<a id="opIdProductController_deleteProdDetail"></a>

`DELETE /product/detail/{id}`

<h3 id="productcontroller_deleteproddetail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## ProductController_createProductDetail

<a id="opIdProductController_createProductDetail"></a>

`POST /product/detail`

> Body parameter

```json
{
  "type": "object",
  "properties": {}
}
```

<h3 id="productcontroller_createproductdetail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ProductDetailDto](#schemaproductdetaildto)|true|none|

<h3 id="productcontroller_createproductdetail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## ProductController_getAllProductDetail

<a id="opIdProductController_getAllProductDetail"></a>

`GET /product/detail/{productId}`

<h3 id="productcontroller_getallproductdetail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## ProductController_createSize

<a id="opIdProductController_createSize"></a>

`POST /product/size`

<h3 id="productcontroller_createsize-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## ProductController_updateSize

<a id="opIdProductController_updateSize"></a>

`PUT /product/size/{id}`

<h3 id="productcontroller_updatesize-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## ProductController_deleteSize

<a id="opIdProductController_deleteSize"></a>

`DELETE /product/size/{id}`

<h3 id="productcontroller_deletesize-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## ProductController_getSizeByProductDetailId

<a id="opIdProductController_getSizeByProductDetailId"></a>

`GET /product/size/{productDetailId}`

<h3 id="productcontroller_getsizebyproductdetailid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## ProductController_getColors

<a id="opIdProductController_getColors"></a>

`GET /product/colors/{productId}`

<h3 id="productcontroller_getcolors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## RoomMessageController_createRoomMessage

<a id="opIdRoomMessageController_createRoomMessage"></a>

`POST /room-messages/create`

<h3 id="roommessagecontroller_createroommessage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## RoomMessageController_createMessage

<a id="opIdRoomMessageController_createMessage"></a>

`POST /room-messages/message`

<h3 id="roommessagecontroller_createmessage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## RoomMessageController_getAllRooms

<a id="opIdRoomMessageController_getAllRooms"></a>

`GET /room-messages/rooms`

<h3 id="roommessagecontroller_getallrooms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## RoomMessageController_getAllAdminRooms

<a id="opIdRoomMessageController_getAllAdminRooms"></a>

`GET /room-messages/rooms-admin`

<h3 id="roommessagecontroller_getalladminrooms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## RoomMessageController_getCount

<a id="opIdRoomMessageController_getCount"></a>

`GET /room-messages/test`

<h3 id="roommessagecontroller_getcount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## UploadController_uploadFile

<a id="opIdUploadController_uploadFile"></a>

`POST /upload/image`

<h3 id="uploadcontroller_uploadfile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## UploadController_uploadFiles

<a id="opIdUploadController_uploadFiles"></a>

`POST /upload/images`

<h3 id="uploadcontroller_uploadfiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## CommentController_createComment

<a id="opIdCommentController_createComment"></a>

`POST /comment`

> Body parameter

```json
{
  "type": "object",
  "properties": {}
}
```

<h3 id="commentcontroller_createcomment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CommentDto](#schemacommentdto)|true|none|

<h3 id="commentcontroller_createcomment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## CommentController_getAllComment

<a id="opIdCommentController_getAllComment"></a>

`GET /comment`

<h3 id="commentcontroller_getallcomment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## CommentController_deleteComment

<a id="opIdCommentController_deleteComment"></a>

`DELETE /comment/{id}`

<h3 id="commentcontroller_deletecomment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## CartController_initCart

<a id="opIdCartController_initCart"></a>

`PUT /cart`

<h3 id="cartcontroller_initcart-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## CartController_addTocart

<a id="opIdCartController_addTocart"></a>

`POST /cart/add-to-cart`

> Body parameter

```json
{
  "type": "object",
  "properties": {}
}
```

<h3 id="cartcontroller_addtocart-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CartDetailDto](#schemacartdetaildto)|true|none|

<h3 id="cartcontroller_addtocart-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## ReceiptController_createReceipt

<a id="opIdReceiptController_createReceipt"></a>

`POST /receipt`

> Body parameter

```json
{
  "type": "object",
  "properties": {}
}
```

<h3 id="receiptcontroller_createreceipt-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ReceiptDto](#schemareceiptdto)|true|none|

<h3 id="receiptcontroller_createreceipt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## ReceiptController_getAllReceipt

<a id="opIdReceiptController_getAllReceipt"></a>

`GET /receipt`

<h3 id="receiptcontroller_getallreceipt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## ReceiptController_updateReceipt

<a id="opIdReceiptController_updateReceipt"></a>

`PUT /receipt/{id}`

> Body parameter

```json
{
  "type": "object",
  "properties": {}
}
```

<h3 id="receiptcontroller_updatereceipt-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ReceiptDto](#schemareceiptdto)|true|none|

<h3 id="receiptcontroller_updatereceipt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## ReceiptController_deleteReceipt

<a id="opIdReceiptController_deleteReceipt"></a>

`DELETE /receipt/{id}`

<h3 id="receiptcontroller_deletereceipt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## ReceiptController_createReceiptDetail

<a id="opIdReceiptController_createReceiptDetail"></a>

`POST /receipt/detail`

> Body parameter

```json
{
  "type": "object",
  "properties": {}
}
```

<h3 id="receiptcontroller_createreceiptdetail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ReceiptDetailDto](#schemareceiptdetaildto)|true|none|

<h3 id="receiptcontroller_createreceiptdetail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## ReceiptController_updateReceiptDetail

<a id="opIdReceiptController_updateReceiptDetail"></a>

`PUT /receipt/detail/{id}`

> Body parameter

```json
{
  "type": "object",
  "properties": {}
}
```

<h3 id="receiptcontroller_updatereceiptdetail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ReceiptDetailDto](#schemareceiptdetaildto)|true|none|

<h3 id="receiptcontroller_updatereceiptdetail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## ReceiptController_deleteReceiptDetail

<a id="opIdReceiptController_deleteReceiptDetail"></a>

`DELETE /receipt/detail/{id}`

<h3 id="receiptcontroller_deletereceiptdetail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## ReceiptController_getAllReceiptDeatil

<a id="opIdReceiptController_getAllReceiptDeatil"></a>

`GET /receipt/{receiptId}`

<h3 id="receiptcontroller_getallreceiptdeatil-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## SupplierController_createSup

<a id="opIdSupplierController_createSup"></a>

`POST /supplier`

> Body parameter

```json
{
  "type": "object",
  "properties": {}
}
```

<h3 id="suppliercontroller_createsup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SupplierDto](#schemasupplierdto)|true|none|

<h3 id="suppliercontroller_createsup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## SupplierController_getAllSupplier

<a id="opIdSupplierController_getAllSupplier"></a>

`GET /supplier`

<h3 id="suppliercontroller_getallsupplier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## SupplierController_updateSup

<a id="opIdSupplierController_updateSup"></a>

`PUT /supplier/{id}`

> Body parameter

```json
{
  "type": "object",
  "properties": {}
}
```

<h3 id="suppliercontroller_updatesup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SupplierDto](#schemasupplierdto)|true|none|

<h3 id="suppliercontroller_updatesup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## SupplierController_deleteSup

<a id="opIdSupplierController_deleteSup"></a>

`DELETE /supplier/{id}`

<h3 id="suppliercontroller_deletesup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## DashboardController_getTotalUsers

<a id="opIdDashboardController_getTotalUsers"></a>

`GET /dashboard/new-user`

<h3 id="dashboardcontroller_gettotalusers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## DashboardController_getTotalUser

<a id="opIdDashboardController_getTotalUser"></a>

`GET /dashboard/total-user`

<h3 id="dashboardcontroller_gettotaluser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## DashboardController_getUserOnline

<a id="opIdDashboardController_getUserOnline"></a>

`GET /dashboard/user-online`

<h3 id="dashboardcontroller_getuseronline-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## DashboardController_getOrder

<a id="opIdDashboardController_getOrder"></a>

`GET /dashboard/order`

<h3 id="dashboardcontroller_getorder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## DashboardController_getProductSold

<a id="opIdDashboardController_getProductSold"></a>

`GET /dashboard/product-sold`

<h3 id="dashboardcontroller_getproductsold-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## DashboardController_getCountOrder

<a id="opIdDashboardController_getCountOrder"></a>

`GET /dashboard/count-order`

<h3 id="dashboardcontroller_getcountorder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## PaymentController_paymentDisplay

<a id="opIdPaymentController_paymentDisplay"></a>

`GET /payments/create_payment_url`

<h3 id="paymentcontroller_paymentdisplay-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## PaymentController_createPaymentUrl

<a id="opIdPaymentController_createPaymentUrl"></a>

`POST /payments/create_payment_url`

<h3 id="paymentcontroller_createpaymenturl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## PaymentController_returnDisplay

<a id="opIdPaymentController_returnDisplay"></a>

`GET /payments/vnpay_return`

<h3 id="paymentcontroller_returndisplay-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## PaymentController_displayError

<a id="opIdPaymentController_displayError"></a>

`GET /payments/error`

<h3 id="paymentcontroller_displayerror-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|message|query|string|true|none|

<h3 id="paymentcontroller_displayerror-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-swagger">Swagger</h1>

## SwaggerController_getSwaggerJson

<a id="opIdSwaggerController_getSwaggerJson"></a>

`GET /doc/json`

*Get Swagger JSON*

<h3 id="swaggercontroller_getswaggerjson-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Swagger JSON|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-auth">auth</h1>

## AuthController_login

<a id="opIdAuthController_login"></a>

`POST /auth/login`

*login user*

> Body parameter

```json
{
  "type": "object",
  "properties": {
    "email": {
      "type": "string"
    },
    "password": {
      "type": "string"
    }
  },
  "required": [
    "email",
    "password"
  ]
}
```

<h3 id="authcontroller_login-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[LoginDto](#schemalogindto)|true|none|

> Example responses

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "accessToken": {
      "type": "string"
    },
    "user": {
      "type": "object",
      "properties": {
        "id": {
          "type": "number",
          "example": 1,
          "description": "User Id"
        },
        "firstName": {
          "type": "string",
          "example": "Phạm",
          "description": "User firstname"
        },
        "lastName": {
          "type": "string",
          "example": "Tới",
          "description": "User lastname"
        },
        "email": {
          "type": "string",
          "example": "toi@gmail.com",
          "description": "User email"
        },
        "genderId": {
          "type": "string",
          "example": "MALE",
          "description": "User genderId"
        },
        "roleId": {
          "type": "string",
          "example": "USER",
          "description": "User RoleId"
        },
        "phoneNumber": {
          "type": "string",
          "example": "02838483",
          "description": "User phone number"
        },
        "image": {
          "type": "string",
          "example": "avatar.png",
          "description": "User avatar"
        },
        "dob": {
          "type": "string",
          "example": "19/5/2000",
          "description": "User date of birth"
        },
        "statusId": {
          "type": "string",
          "enum": [
            "ON",
            "OFF",
            "BLOCK"
          ],
          "example": "ON",
          "description": "User statusId"
        },
        "status": {
          "example": {},
          "description": "User status",
          "allOf": [
            {
              "type": "object",
              "properties": {
                "type": {
                  "type": "string"
                },
                "value": {
                  "type": "string"
                },
                "code": {
                  "type": "string"
                },
                "parentCode": {
                  "type": "string"
                },
                "hexCode": {
                  "type": "string"
                }
              },
              "required": [
                "type",
                "value",
                "code",
                "parentCode",
                "hexCode"
              ]
            }
          ]
        },
        "token": {
          "type": "string",
          "example": "2392uehp1901",
          "description": "User token"
        },
        "isActiveEmail": {
          "type": "boolean",
          "example": false,
          "description": "User active email"
        },
        "address": {
          "example": [
            {}
          ],
          "description": "User list address",
          "type": "array",
          "items": {
            "type": "object",
            "properties": {}
          }
        },
        "voucherList": {
          "example": [
            {}
          ],
          "description": "User list vouchers",
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "id": {
                "type": "number",
                "example": 1,
                "description": "Voucher id"
              },
              "fromDate": {
                "type": "string",
                "example": "30/7/2023",
                "description": "Voucher active from date"
              },
              "toDate": {
                "type": "string",
                "example": "30/8/2023",
                "description": "Voucher active to date"
              },
              "typeVoucher": {
                "example": {},
                "description": "Type of voucher",
                "allOf": [
                  {
                    "type": "object",
                    "properties": {}
                  }
                ]
              },
              "typeVoucherId": {
                "type": "number",
                "example": 1,
                "description": "id of type voucher"
              },
              "amount": {
                "type": "number",
                "example": 10,
                "description": "Total voucher can be used"
              },
              "addToUserAmount": {
                "type": "number",
                "example": 2,
                "description": "A count of user add voucher to user's voucherList"
              },
              "statusId": {
                "type": "string",
                "enum": [
                  "ACTIVE",
                  "INACTIVE",
                  "DELETED",
                  "DRAFT"
                ],
                "example": "ACTIVE",
                "description": "Status Id of voucher"
              },
              "usedAmount": {
                "type": "number",
                "example": 2,
                "description": "Total numer of vocher which user have to use"
              },
              "codeVoucher": {
                "type": "string",
                "example": "HOLIDAY",
                "description": "Enter this code to use in user's order"
              },
              "createdAt": {
                "format": "date-time",
                "type": "string",
                "example": "2023-08-23T09:00:45.976Z",
                "description": "Voucher created at the date"
              },
              "updatedAt": {
                "format": "date-time",
                "type": "string",
                "example": "2023-08-23T09:00:45.976Z",
                "description": "Voucher updated at the date"
              }
            },
            "required": [
              "id",
              "fromDate",
              "toDate",
              "typeVoucher",
              "typeVoucherId",
              "amount",
              "addToUserAmount",
              "statusId",
              "usedAmount",
              "codeVoucher",
              "createdAt",
              "updatedAt"
            ]
          }
        },
        "createdAt": {
          "format": "date-time",
          "type": "string",
          "example": "2023-08-23T09:00:45.981Z",
          "description": "User created at the date"
        },
        "updatedAt": {
          "format": "date-time",
          "type": "string",
          "example": "2023-08-23T09:00:45.981Z",
          "description": "User updated at the date"
        }
      },
      "required": [
        "id",
        "firstName",
        "lastName",
        "email",
        "genderId",
        "roleId",
        "phoneNumber",
        "image",
        "dob",
        "statusId",
        "status",
        "token",
        "isActiveEmail",
        "address",
        "voucherList",
        "createdAt",
        "updatedAt"
      ]
    }
  },
  "required": [
    "accessToken",
    "user"
  ]
}
```

<h3 id="authcontroller_login-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[ResponseLoginDto](#schemaresponselogindto)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## AuthController_getAccessToken

<a id="opIdAuthController_getAccessToken"></a>

`GET /auth/refresh`

*User get access token when it was expried*

> Example responses

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "accessToken": {
      "type": "string"
    }
  },
  "required": [
    "accessToken"
  ]
}
```

<h3 id="authcontroller_getaccesstoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[ResponseRereshTokenDto](#schemaresponserereshtokendto)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Somethings went wrong|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None
</aside>

## AuthController_logout

<a id="opIdAuthController_logout"></a>

`PATCH /auth/logout`

*User logout method*

<h3 id="authcontroller_logout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None
</aside>

<h1 id="api-allcode">allcode</h1>

## AllcodeController_createTypeCode

<a id="opIdAllcodeController_createTypeCode"></a>

`POST /all-code`

*Admin create new allcode*

> Body parameter

```json
undefined
```

<h3 id="allcodecontroller_createtypecode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AllcodeDto](#schemaallcodedto)|true|none|

<h3 id="allcodecontroller_createtypecode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|The allcode has been created|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None
</aside>

## AllcodeController_updateAllcode

<a id="opIdAllcodeController_updateAllcode"></a>

`PUT /all-code`

*Admin update allcode*

> Body parameter

```json
{
  "type": "object",
  "properties": {
    "type": {
      "type": "string"
    },
    "value": {
      "type": "string"
    },
    "code": {
      "type": "string"
    },
    "parentCode": {
      "type": "string"
    },
    "hexCode": {
      "type": "string"
    }
  },
  "required": [
    "type",
    "value",
    "code",
    "parentCode",
    "hexCode"
  ]
}
```

<h3 id="allcodecontroller_updateallcode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number|true|Id of allcode|
|body|body|[AllcodeDto](#schemaallcodedto)|true|none|

> Example responses

> 201 Response

```json
{
  "type": "object",
  "properties": {
    "message": {
      "type": "string"
    },
    "err": {
      "type": "boolean"
    }
  },
  "required": [
    "message",
    "err"
  ]
}
```

<h3 id="allcodecontroller_updateallcode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|[ResponseWithErrDto](#schemaresponsewitherrdto)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None
</aside>

## AllcodeController_getAllCodeByType

<a id="opIdAllcodeController_getAllCodeByType"></a>

`GET /all-code/{type}`

*User get allcodes by type*

<h3 id="allcodecontroller_getallcodebytype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|path|string|true|Type allcode|

> Example responses

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "data": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string"
          },
          "value": {
            "type": "string"
          },
          "code": {
            "type": "string"
          },
          "parentCode": {
            "type": "string"
          },
          "hexCode": {
            "type": "string"
          }
        },
        "required": [
          "type",
          "value",
          "code",
          "parentCode",
          "hexCode"
        ]
      }
    },
    "meta": {
      "type": "object",
      "example": {
        "current": 1,
        "size": 10,
        "totalItems": 100
      }
    }
  },
  "required": [
    "data",
    "meta"
  ]
}
```

<h3 id="allcodecontroller_getallcodebytype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|List and pagination of allcode|[AllcodeApiResponseDto](#schemaallcodeapiresponsedto)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Forbidden|None|

<aside class="success">
This operation does not require authentication
</aside>

## AllcodeController_deleteAllcode

<a id="opIdAllcodeController_deleteAllcode"></a>

`DELETE /all-code/{id}`

<h3 id="allcodecontroller_deleteallcode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-banners">banners</h1>

## BannerController_createBanner

<a id="opIdBannerController_createBanner"></a>

`POST /banner`

*Create new banner*

> Body parameter

```json
{
  "type": "object",
  "properties": {
    "description": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "statusId": {
      "type": "string"
    },
    "image": {
      "type": "string"
    }
  },
  "required": [
    "description",
    "name",
    "statusId",
    "image"
  ]
}
```

<h3 id="bannercontroller_createbanner-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BannerDto](#schemabannerdto)|true|none|

> Example responses

> 201 Response

```json
{
  "type": "object",
  "properties": {
    "message": {
      "type": "string"
    }
  },
  "required": [
    "message"
  ]
}
```

<h3 id="bannercontroller_createbanner-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|[ResponseCommonDto](#schemaresponsecommondto)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|none|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None
</aside>

## BannerController_getAllBanner

<a id="opIdBannerController_getAllBanner"></a>

`GET /banner`

*Get all banner*

<h3 id="bannercontroller_getallbanner-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|statusId|query|string|false|none|
|page|query|number|false|none|
|size|query|number|false|none|
|updatedAt|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|updatedAt|DESC|
|updatedAt|ASC|

> Example responses

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "data": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number"
          },
          "description": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "statusId": {
            "type": "string"
          },
          "status": {
            "type": "object",
            "properties": {
              "type": {
                "type": "string"
              },
              "value": {
                "type": "string"
              },
              "code": {
                "type": "string"
              },
              "parentCode": {
                "type": "string"
              },
              "hexCode": {
                "type": "string"
              }
            },
            "required": [
              "type",
              "value",
              "code",
              "parentCode",
              "hexCode"
            ]
          },
          "image": {
            "type": "string"
          },
          "createdAt": {
            "format": "date-time",
            "type": "string"
          },
          "updatedAt": {
            "format": "date-time",
            "type": "string"
          }
        },
        "required": [
          "id",
          "description",
          "name",
          "statusId",
          "status",
          "image",
          "createdAt",
          "updatedAt"
        ]
      }
    },
    "meta": {
      "type": "object",
      "example": {
        "current": 1,
        "size": 10,
        "totalItems": 100
      }
    }
  },
  "required": [
    "data",
    "meta"
  ]
}
```

<h3 id="bannercontroller_getallbanner-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[BannerApiResponseDto](#schemabannerapiresponsedto)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## BannerController_updateBanner

<a id="opIdBannerController_updateBanner"></a>

`PUT /banner/{id}`

*Update banner by id*

> Body parameter

```json
{
  "type": "object",
  "properties": {
    "description": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "statusId": {
      "type": "string"
    },
    "image": {
      "type": "string"
    }
  },
  "required": [
    "description",
    "name",
    "statusId",
    "image"
  ]
}
```

<h3 id="bannercontroller_updatebanner-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number|true|none|
|body|body|[BannerDto](#schemabannerdto)|true|none|

> Example responses

> 201 Response

```json
{
  "type": "object",
  "properties": {
    "message": {
      "type": "string"
    }
  },
  "required": [
    "message"
  ]
}
```

<h3 id="bannercontroller_updatebanner-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|[ResponseCommonDto](#schemaresponsecommondto)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|none|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None
</aside>

## BannerController_deleteBanner

<a id="opIdBannerController_deleteBanner"></a>

`DELETE /banner/{id}`

<h3 id="bannercontroller_deletebanner-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-blogs">blogs</h1>

## BlogController_createBlog

<a id="opIdBlogController_createBlog"></a>

`POST /blog`

*Create new Blog*

> Body parameter

```json
{
  "type": "object",
  "properties": {
    "title": {
      "type": "string"
    },
    "shortDescription": {
      "type": "string"
    },
    "subjectId": {
      "type": "string"
    },
    "statusId": {
      "type": "string"
    },
    "images": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "contentMarkdown": {
      "type": "string"
    },
    "userId": {
      "type": "number"
    }
  },
  "required": [
    "title"
  ]
}
```

<h3 id="blogcontroller_createblog-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BlogDto](#schemablogdto)|true|blog information|

> Example responses

> 201 Response

```json
{
  "type": "object",
  "properties": {
    "message": {
      "type": "string"
    }
  },
  "required": [
    "message"
  ]
}
```

<h3 id="blogcontroller_createblog-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|[ResponseCommonDto](#schemaresponsecommondto)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized!|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Somethings went wrong|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None
</aside>

## BlogController_searchBlogs

<a id="opIdBlogController_searchBlogs"></a>

`GET /blog`

*Search blog by query*

<h3 id="blogcontroller_searchblogs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|number|false|none|
|size|query|number|false|none|
|name|query|string|false|none|
|statusId|query|string|false|none|
|subjectId|query|string|false|none|
|notDel|query|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "data": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {}
      }
    },
    "meta": {
      "type": "object",
      "example": {
        "current": 1,
        "size": 10,
        "totalItems": {
          "items": 4
        }
      }
    }
  },
  "required": [
    "data",
    "meta"
  ]
}
```

<h3 id="blogcontroller_searchblogs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[BlogApiResponseDto](#schemablogapiresponsedto)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## BlogController_updateBlog

<a id="opIdBlogController_updateBlog"></a>

`PUT /blog/{id}`

*Updateblog*

> Body parameter

```json
{
  "type": "object",
  "properties": {
    "title": {
      "type": "string"
    },
    "shortDescription": {
      "type": "string"
    },
    "subjectId": {
      "type": "string"
    },
    "statusId": {
      "type": "string"
    },
    "images": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "contentMarkdown": {
      "type": "string"
    },
    "userId": {
      "type": "number"
    }
  },
  "required": [
    "title"
  ]
}
```

<h3 id="blogcontroller_updateblog-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BlogDto](#schemablogdto)|true|none|

<h3 id="blogcontroller_updateblog-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|none|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None
</aside>

## BlogController_getBlogDetail

<a id="opIdBlogController_getBlogDetail"></a>

`GET /blog/{id}`

<h3 id="blogcontroller_getblogdetail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## BlogController_deleteBlog

<a id="opIdBlogController_deleteBlog"></a>

`DELETE /blog/{id}`

<h3 id="blogcontroller_deleteblog-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-orders">Orders</h1>

## OrderController_createOrder

<a id="opIdOrderController_createOrder"></a>

`POST /order`

*User create new order *

> Body parameter

```json
{
  "type": "object",
  "properties": {
    "addressUserId": {
      "type": "number"
    },
    "statusId": {
      "type": "string"
    },
    "typeShipId": {
      "type": "number"
    },
    "voucherCode": {
      "type": "string"
    },
    "note": {
      "type": "string"
    },
    "isPaymentOnline": {
      "type": "boolean"
    },
    "type": {
      "type": "string",
      "enum": [
        "PAYMENT",
        "COD"
      ]
    }
  },
  "required": [
    "addressUserId",
    "statusId",
    "typeShipId",
    "voucherCode",
    "note",
    "isPaymentOnline",
    "type"
  ]
}
```

<h3 id="ordercontroller_createorder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[OrderDto](#schemaorderdto)|true|none|

> Example responses

> 201 Response

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "number"
    },
    "addressUser": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {}
      }
    },
    "addressUserId": {
      "type": "number"
    },
    "statusId": {
      "type": "string"
    },
    "typeShip": {
      "type": "object",
      "properties": {
        "id": {
          "type": "number"
        },
        "typeId": {
          "type": "string"
        },
        "type": {
          "type": "object",
          "properties": {}
        },
        "price": {
          "type": "number"
        },
        "createdAt": {
          "format": "date-time",
          "type": "string"
        },
        "updatedAt": {
          "format": "date-time",
          "type": "string"
        }
      },
      "required": [
        "id",
        "typeId",
        "type",
        "price",
        "createdAt",
        "updatedAt"
      ]
    },
    "typeShipId": {
      "type": "number"
    },
    "voucher": {
      "type": "object",
      "properties": {
        "id": {
          "type": "number",
          "example": 1,
          "description": "Voucher id"
        },
        "fromDate": {
          "type": "string",
          "example": "30/7/2023",
          "description": "Voucher active from date"
        },
        "toDate": {
          "type": "string",
          "example": "30/8/2023",
          "description": "Voucher active to date"
        },
        "typeVoucher": {
          "example": {},
          "description": "Type of voucher",
          "allOf": [
            {
              "type": "object",
              "properties": {}
            }
          ]
        },
        "typeVoucherId": {
          "type": "number",
          "example": 1,
          "description": "id of type voucher"
        },
        "amount": {
          "type": "number",
          "example": 10,
          "description": "Total voucher can be used"
        },
        "addToUserAmount": {
          "type": "number",
          "example": 2,
          "description": "A count of user add voucher to user's voucherList"
        },
        "statusId": {
          "type": "string",
          "enum": [
            "ACTIVE",
            "INACTIVE",
            "DELETED",
            "DRAFT"
          ],
          "example": "ACTIVE",
          "description": "Status Id of voucher"
        },
        "usedAmount": {
          "type": "number",
          "example": 2,
          "description": "Total numer of vocher which user have to use"
        },
        "codeVoucher": {
          "type": "string",
          "example": "HOLIDAY",
          "description": "Enter this code to use in user's order"
        },
        "createdAt": {
          "format": "date-time",
          "type": "string",
          "example": "2023-08-23T09:00:45.976Z",
          "description": "Voucher created at the date"
        },
        "updatedAt": {
          "format": "date-time",
          "type": "string",
          "example": "2023-08-23T09:00:45.976Z",
          "description": "Voucher updated at the date"
        }
      },
      "required": [
        "id",
        "fromDate",
        "toDate",
        "typeVoucher",
        "typeVoucherId",
        "amount",
        "addToUserAmount",
        "statusId",
        "usedAmount",
        "codeVoucher",
        "createdAt",
        "updatedAt"
      ]
    },
    "orderDetails": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {}
      }
    },
    "voucherId": {
      "type": "number"
    },
    "totalPrice": {
      "type": "number"
    },
    "note": {
      "type": "string"
    },
    "isPaymentOnline": {
      "type": "boolean"
    },
    "createdAt": {
      "format": "date-time",
      "type": "string"
    },
    "updatedAt": {
      "format": "date-time",
      "type": "string"
    }
  },
  "required": [
    "id",
    "addressUser",
    "addressUserId",
    "statusId",
    "typeShip",
    "typeShipId",
    "voucher",
    "orderDetails",
    "voucherId",
    "totalPrice",
    "note",
    "isPaymentOnline",
    "createdAt",
    "updatedAt"
  ]
}
```

<h3 id="ordercontroller_createorder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|[Order](#schemaorder)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Some things wwent wrong|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None
</aside>

## OrderController_getAllOrder

<a id="opIdOrderController_getAllOrder"></a>

`GET /order`

*User get order*

<h3 id="ordercontroller_getallorder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|statusId|query|string|false|none|
|userId|query|number|false|none|
|sortcreatedAt|query|string|false|none|
|sortupdatedAt|query|string|false|none|
|sorttotalPrice|query|string|false|none|
|page|query|number|false|none|
|size|query|number|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|statusId|WAIT_FOR_COMFIRMATION|
|statusId|WAIT_FOR_PAYMENT|
|statusId|DELIVERING|
|statusId|DELIVERED|
|statusId|CANCEL|

> Example responses

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "data": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number"
          },
          "addressUser": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {}
            }
          },
          "addressUserId": {
            "type": "number"
          },
          "statusId": {
            "type": "string"
          },
          "typeShip": {
            "type": "object",
            "properties": {
              "id": {
                "type": "number"
              },
              "typeId": {
                "type": "string"
              },
              "type": {
                "type": "object",
                "properties": {}
              },
              "price": {
                "type": "number"
              },
              "createdAt": {
                "format": "date-time",
                "type": "string"
              },
              "updatedAt": {
                "format": "date-time",
                "type": "string"
              }
            },
            "required": [
              "id",
              "typeId",
              "type",
              "price",
              "createdAt",
              "updatedAt"
            ]
          },
          "typeShipId": {
            "type": "number"
          },
          "voucher": {
            "type": "object",
            "properties": {
              "id": {
                "type": "number",
                "example": 1,
                "description": "Voucher id"
              },
              "fromDate": {
                "type": "string",
                "example": "30/7/2023",
                "description": "Voucher active from date"
              },
              "toDate": {
                "type": "string",
                "example": "30/8/2023",
                "description": "Voucher active to date"
              },
              "typeVoucher": {
                "example": {},
                "description": "Type of voucher",
                "allOf": [
                  {
                    "type": "object",
                    "properties": {}
                  }
                ]
              },
              "typeVoucherId": {
                "type": "number",
                "example": 1,
                "description": "id of type voucher"
              },
              "amount": {
                "type": "number",
                "example": 10,
                "description": "Total voucher can be used"
              },
              "addToUserAmount": {
                "type": "number",
                "example": 2,
                "description": "A count of user add voucher to user's voucherList"
              },
              "statusId": {
                "type": "string",
                "enum": [
                  "ACTIVE",
                  "INACTIVE",
                  "DELETED",
                  "DRAFT"
                ],
                "example": "ACTIVE",
                "description": "Status Id of voucher"
              },
              "usedAmount": {
                "type": "number",
                "example": 2,
                "description": "Total numer of vocher which user have to use"
              },
              "codeVoucher": {
                "type": "string",
                "example": "HOLIDAY",
                "description": "Enter this code to use in user's order"
              },
              "createdAt": {
                "format": "date-time",
                "type": "string",
                "example": "2023-08-23T09:00:45.976Z",
                "description": "Voucher created at the date"
              },
              "updatedAt": {
                "format": "date-time",
                "type": "string",
                "example": "2023-08-23T09:00:45.976Z",
                "description": "Voucher updated at the date"
              }
            },
            "required": [
              "id",
              "fromDate",
              "toDate",
              "typeVoucher",
              "typeVoucherId",
              "amount",
              "addToUserAmount",
              "statusId",
              "usedAmount",
              "codeVoucher",
              "createdAt",
              "updatedAt"
            ]
          },
          "orderDetails": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {}
            }
          },
          "voucherId": {
            "type": "number"
          },
          "totalPrice": {
            "type": "number"
          },
          "note": {
            "type": "string"
          },
          "isPaymentOnline": {
            "type": "boolean"
          },
          "createdAt": {
            "format": "date-time",
            "type": "string"
          },
          "updatedAt": {
            "format": "date-time",
            "type": "string"
          }
        },
        "required": [
          "id",
          "addressUser",
          "addressUserId",
          "statusId",
          "typeShip",
          "typeShipId",
          "voucher",
          "orderDetails",
          "voucherId",
          "totalPrice",
          "note",
          "isPaymentOnline",
          "createdAt",
          "updatedAt"
        ]
      }
    },
    "meta": {
      "type": "object",
      "example": {
        "current": 1,
        "size": 10,
        "totalItems": 100
      }
    }
  },
  "required": [
    "data",
    "meta"
  ]
}
```

<h3 id="ordercontroller_getallorder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[OrderApiResponseDto](#schemaorderapiresponsedto)|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Some things wwent wrong|None|

<aside class="success">
This operation does not require authentication
</aside>

## OrderController_changeorderStatus

<a id="opIdOrderController_changeorderStatus"></a>

`PATCH /order/change-status/{id}`

*Admin change status order*

> Body parameter

```json
{
  "type": "object",
  "properties": {
    "statusId": {
      "type": "string",
      "enum": [
        "WAIT_FOR_COMFIRMATION",
        "WAIT_FOR_PAYMENT",
        "DELIVERING",
        "DELIVERED",
        "CANCEL"
      ]
    }
  },
  "required": [
    "statusId"
  ]
}
```

<h3 id="ordercontroller_changeorderstatus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number|true|none|
|body|body|[ChangeStatusDto](#schemachangestatusdto)|true|none|

> Example responses

> 201 Response

```json
{
  "type": "object",
  "properties": {
    "message": {
      "type": "string"
    }
  },
  "required": [
    "message"
  ]
}
```

<h3 id="ordercontroller_changeorderstatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|[ResponseCommonDto](#schemaresponsecommondto)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Some things wwent wrong|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None
</aside>

## OrderController_cancelOrder

<a id="opIdOrderController_cancelOrder"></a>

`PATCH /order/cancel/{id}`

*User cancel order*

<h3 id="ordercontroller_cancelorder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number|true|none|

> Example responses

> 201 Response

```json
{
  "type": "object",
  "properties": {
    "message": {
      "type": "string"
    }
  },
  "required": [
    "message"
  ]
}
```

<h3 id="ordercontroller_cancelorder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|[ResponseCommonDto](#schemaresponsecommondto)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Some things wwent wrong|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None
</aside>

## OrderController_getAllTypeShip

<a id="opIdOrderController_getAllTypeShip"></a>

`GET /order/type-ship`

*User get all type ship*

> Example responses

> 200 Response

```json
{
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "id": {
        "type": "number"
      },
      "typeId": {
        "type": "string"
      },
      "type": {
        "type": "object",
        "properties": {}
      },
      "price": {
        "type": "number"
      },
      "createdAt": {
        "format": "date-time",
        "type": "string"
      },
      "updatedAt": {
        "format": "date-time",
        "type": "string"
      }
    },
    "required": [
      "id",
      "typeId",
      "type",
      "price",
      "createdAt",
      "updatedAt"
    ]
  }
}
```

<h3 id="ordercontroller_getalltypeship-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Somethings went wrong|None|

<h3 id="ordercontroller_getalltypeship-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TypeShip](#schematypeship)]|false|none|none|
|» id|number|true|none|none|
|» typeId|string|true|none|none|
|» type|[Allcode](#schemaallcode)|true|none|none|
|» price|number|true|none|none|
|» createdAt|string(date-time)|true|none|none|
|» updatedAt|string(date-time)|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## OrderController_getOrderById

<a id="opIdOrderController_getOrderById"></a>

`GET /order/{id}`

*Get detail order*

<h3 id="ordercontroller_getorderbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|number|true|none|

> Example responses

> default Response

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "number"
    },
    "addressUser": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {}
      }
    },
    "addressUserId": {
      "type": "number"
    },
    "statusId": {
      "type": "string"
    },
    "typeShip": {
      "type": "object",
      "properties": {
        "id": {
          "type": "number"
        },
        "typeId": {
          "type": "string"
        },
        "type": {
          "type": "object",
          "properties": {}
        },
        "price": {
          "type": "number"
        },
        "createdAt": {
          "format": "date-time",
          "type": "string"
        },
        "updatedAt": {
          "format": "date-time",
          "type": "string"
        }
      },
      "required": [
        "id",
        "typeId",
        "type",
        "price",
        "createdAt",
        "updatedAt"
      ]
    },
    "typeShipId": {
      "type": "number"
    },
    "voucher": {
      "type": "object",
      "properties": {
        "id": {
          "type": "number",
          "example": 1,
          "description": "Voucher id"
        },
        "fromDate": {
          "type": "string",
          "example": "30/7/2023",
          "description": "Voucher active from date"
        },
        "toDate": {
          "type": "string",
          "example": "30/8/2023",
          "description": "Voucher active to date"
        },
        "typeVoucher": {
          "example": {},
          "description": "Type of voucher",
          "allOf": [
            {
              "type": "object",
              "properties": {}
            }
          ]
        },
        "typeVoucherId": {
          "type": "number",
          "example": 1,
          "description": "id of type voucher"
        },
        "amount": {
          "type": "number",
          "example": 10,
          "description": "Total voucher can be used"
        },
        "addToUserAmount": {
          "type": "number",
          "example": 2,
          "description": "A count of user add voucher to user's voucherList"
        },
        "statusId": {
          "type": "string",
          "enum": [
            "ACTIVE",
            "INACTIVE",
            "DELETED",
            "DRAFT"
          ],
          "example": "ACTIVE",
          "description": "Status Id of voucher"
        },
        "usedAmount": {
          "type": "number",
          "example": 2,
          "description": "Total numer of vocher which user have to use"
        },
        "codeVoucher": {
          "type": "string",
          "example": "HOLIDAY",
          "description": "Enter this code to use in user's order"
        },
        "createdAt": {
          "format": "date-time",
          "type": "string",
          "example": "2023-08-23T09:00:45.976Z",
          "description": "Voucher created at the date"
        },
        "updatedAt": {
          "format": "date-time",
          "type": "string",
          "example": "2023-08-23T09:00:45.976Z",
          "description": "Voucher updated at the date"
        }
      },
      "required": [
        "id",
        "fromDate",
        "toDate",
        "typeVoucher",
        "typeVoucherId",
        "amount",
        "addToUserAmount",
        "statusId",
        "usedAmount",
        "codeVoucher",
        "createdAt",
        "updatedAt"
      ]
    },
    "orderDetails": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {}
      }
    },
    "voucherId": {
      "type": "number"
    },
    "totalPrice": {
      "type": "number"
    },
    "note": {
      "type": "string"
    },
    "isPaymentOnline": {
      "type": "boolean"
    },
    "createdAt": {
      "format": "date-time",
      "type": "string"
    },
    "updatedAt": {
      "format": "date-time",
      "type": "string"
    }
  },
  "required": [
    "id",
    "addressUser",
    "addressUserId",
    "statusId",
    "typeShip",
    "typeShipId",
    "voucher",
    "orderDetails",
    "voucherId",
    "totalPrice",
    "note",
    "isPaymentOnline",
    "createdAt",
    "updatedAt"
  ]
}
```

<h3 id="ordercontroller_getorderbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Some things wwent wrong|None|
|default|Default|none|[Order](#schemaorder)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_LoginDto">LoginDto</h2>
<!-- backwards compatibility -->
<a id="schemalogindto"></a>
<a id="schema_LoginDto"></a>
<a id="tocSlogindto"></a>
<a id="tocslogindto"></a>

```json
{
  "type": "object",
  "properties": {
    "email": {
      "type": "string"
    },
    "password": {
      "type": "string"
    }
  },
  "required": [
    "email",
    "password"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|none|
|password|string|true|none|none|

<h2 id="tocS_AllcodeDto">AllcodeDto</h2>
<!-- backwards compatibility -->
<a id="schemaallcodedto"></a>
<a id="schema_AllcodeDto"></a>
<a id="tocSallcodedto"></a>
<a id="tocsallcodedto"></a>

```json
{
  "type": "object",
  "properties": {
    "type": {
      "type": "string"
    },
    "value": {
      "type": "string"
    },
    "code": {
      "type": "string"
    },
    "parentCode": {
      "type": "string"
    },
    "hexCode": {
      "type": "string"
    }
  },
  "required": [
    "type",
    "value",
    "code",
    "parentCode",
    "hexCode"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|value|string|true|none|none|
|code|string|true|none|none|
|parentCode|string|true|none|none|
|hexCode|string|true|none|none|

<h2 id="tocS_UserAddress">UserAddress</h2>
<!-- backwards compatibility -->
<a id="schemauseraddress"></a>
<a id="schema_UserAddress"></a>
<a id="tocSuseraddress"></a>
<a id="tocsuseraddress"></a>

```json
{
  "type": "object",
  "properties": {}
}

```

### Properties

*None*

<h2 id="tocS_TypeVoucher">TypeVoucher</h2>
<!-- backwards compatibility -->
<a id="schematypevoucher"></a>
<a id="schema_TypeVoucher"></a>
<a id="tocStypevoucher"></a>
<a id="tocstypevoucher"></a>

```json
{
  "type": "object",
  "properties": {}
}

```

### Properties

*None*

<h2 id="tocS_Voucher">Voucher</h2>
<!-- backwards compatibility -->
<a id="schemavoucher"></a>
<a id="schema_Voucher"></a>
<a id="tocSvoucher"></a>
<a id="tocsvoucher"></a>

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "number",
      "example": 1,
      "description": "Voucher id"
    },
    "fromDate": {
      "type": "string",
      "example": "30/7/2023",
      "description": "Voucher active from date"
    },
    "toDate": {
      "type": "string",
      "example": "30/8/2023",
      "description": "Voucher active to date"
    },
    "typeVoucher": {
      "example": {},
      "description": "Type of voucher",
      "allOf": [
        {
          "type": "object",
          "properties": {}
        }
      ]
    },
    "typeVoucherId": {
      "type": "number",
      "example": 1,
      "description": "id of type voucher"
    },
    "amount": {
      "type": "number",
      "example": 10,
      "description": "Total voucher can be used"
    },
    "addToUserAmount": {
      "type": "number",
      "example": 2,
      "description": "A count of user add voucher to user's voucherList"
    },
    "statusId": {
      "type": "string",
      "enum": [
        "ACTIVE",
        "INACTIVE",
        "DELETED",
        "DRAFT"
      ],
      "example": "ACTIVE",
      "description": "Status Id of voucher"
    },
    "usedAmount": {
      "type": "number",
      "example": 2,
      "description": "Total numer of vocher which user have to use"
    },
    "codeVoucher": {
      "type": "string",
      "example": "HOLIDAY",
      "description": "Enter this code to use in user's order"
    },
    "createdAt": {
      "format": "date-time",
      "type": "string",
      "example": "2023-08-23T09:00:45.976Z",
      "description": "Voucher created at the date"
    },
    "updatedAt": {
      "format": "date-time",
      "type": "string",
      "example": "2023-08-23T09:00:45.976Z",
      "description": "Voucher updated at the date"
    }
  },
  "required": [
    "id",
    "fromDate",
    "toDate",
    "typeVoucher",
    "typeVoucherId",
    "amount",
    "addToUserAmount",
    "statusId",
    "usedAmount",
    "codeVoucher",
    "createdAt",
    "updatedAt"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|true|none|Voucher id|
|fromDate|string|true|none|Voucher active from date|
|toDate|string|true|none|Voucher active to date|
|typeVoucher|[TypeVoucher](#schematypevoucher)|true|none|Type of voucher|
|typeVoucherId|number|true|none|id of type voucher|
|amount|number|true|none|Total voucher can be used|
|addToUserAmount|number|true|none|A count of user add voucher to user's voucherList|
|statusId|string|true|none|Status Id of voucher|
|usedAmount|number|true|none|Total numer of vocher which user have to use|
|codeVoucher|string|true|none|Enter this code to use in user's order|
|createdAt|string(date-time)|true|none|Voucher created at the date|
|updatedAt|string(date-time)|true|none|Voucher updated at the date|

#### Enumerated Values

|Property|Value|
|---|---|
|statusId|ACTIVE|
|statusId|INACTIVE|
|statusId|DELETED|
|statusId|DRAFT|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "number",
      "example": 1,
      "description": "User Id"
    },
    "firstName": {
      "type": "string",
      "example": "Phạm",
      "description": "User firstname"
    },
    "lastName": {
      "type": "string",
      "example": "Tới",
      "description": "User lastname"
    },
    "email": {
      "type": "string",
      "example": "toi@gmail.com",
      "description": "User email"
    },
    "genderId": {
      "type": "string",
      "example": "MALE",
      "description": "User genderId"
    },
    "roleId": {
      "type": "string",
      "example": "USER",
      "description": "User RoleId"
    },
    "phoneNumber": {
      "type": "string",
      "example": "02838483",
      "description": "User phone number"
    },
    "image": {
      "type": "string",
      "example": "avatar.png",
      "description": "User avatar"
    },
    "dob": {
      "type": "string",
      "example": "19/5/2000",
      "description": "User date of birth"
    },
    "statusId": {
      "type": "string",
      "enum": [
        "ON",
        "OFF",
        "BLOCK"
      ],
      "example": "ON",
      "description": "User statusId"
    },
    "status": {
      "example": {},
      "description": "User status",
      "allOf": [
        {
          "type": "object",
          "properties": {
            "type": {
              "type": "string"
            },
            "value": {
              "type": "string"
            },
            "code": {
              "type": "string"
            },
            "parentCode": {
              "type": "string"
            },
            "hexCode": {
              "type": "string"
            }
          },
          "required": [
            "type",
            "value",
            "code",
            "parentCode",
            "hexCode"
          ]
        }
      ]
    },
    "token": {
      "type": "string",
      "example": "2392uehp1901",
      "description": "User token"
    },
    "isActiveEmail": {
      "type": "boolean",
      "example": false,
      "description": "User active email"
    },
    "address": {
      "example": [
        {}
      ],
      "description": "User list address",
      "type": "array",
      "items": {
        "type": "object",
        "properties": {}
      }
    },
    "voucherList": {
      "example": [
        {}
      ],
      "description": "User list vouchers",
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "example": 1,
            "description": "Voucher id"
          },
          "fromDate": {
            "type": "string",
            "example": "30/7/2023",
            "description": "Voucher active from date"
          },
          "toDate": {
            "type": "string",
            "example": "30/8/2023",
            "description": "Voucher active to date"
          },
          "typeVoucher": {
            "example": {},
            "description": "Type of voucher",
            "allOf": [
              {
                "type": "object",
                "properties": {}
              }
            ]
          },
          "typeVoucherId": {
            "type": "number",
            "example": 1,
            "description": "id of type voucher"
          },
          "amount": {
            "type": "number",
            "example": 10,
            "description": "Total voucher can be used"
          },
          "addToUserAmount": {
            "type": "number",
            "example": 2,
            "description": "A count of user add voucher to user's voucherList"
          },
          "statusId": {
            "type": "string",
            "enum": [
              "ACTIVE",
              "INACTIVE",
              "DELETED",
              "DRAFT"
            ],
            "example": "ACTIVE",
            "description": "Status Id of voucher"
          },
          "usedAmount": {
            "type": "number",
            "example": 2,
            "description": "Total numer of vocher which user have to use"
          },
          "codeVoucher": {
            "type": "string",
            "example": "HOLIDAY",
            "description": "Enter this code to use in user's order"
          },
          "createdAt": {
            "format": "date-time",
            "type": "string",
            "example": "2023-08-23T09:00:45.976Z",
            "description": "Voucher created at the date"
          },
          "updatedAt": {
            "format": "date-time",
            "type": "string",
            "example": "2023-08-23T09:00:45.976Z",
            "description": "Voucher updated at the date"
          }
        },
        "required": [
          "id",
          "fromDate",
          "toDate",
          "typeVoucher",
          "typeVoucherId",
          "amount",
          "addToUserAmount",
          "statusId",
          "usedAmount",
          "codeVoucher",
          "createdAt",
          "updatedAt"
        ]
      }
    },
    "createdAt": {
      "format": "date-time",
      "type": "string",
      "example": "2023-08-23T09:00:45.981Z",
      "description": "User created at the date"
    },
    "updatedAt": {
      "format": "date-time",
      "type": "string",
      "example": "2023-08-23T09:00:45.981Z",
      "description": "User updated at the date"
    }
  },
  "required": [
    "id",
    "firstName",
    "lastName",
    "email",
    "genderId",
    "roleId",
    "phoneNumber",
    "image",
    "dob",
    "statusId",
    "status",
    "token",
    "isActiveEmail",
    "address",
    "voucherList",
    "createdAt",
    "updatedAt"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|true|none|User Id|
|firstName|string|true|none|User firstname|
|lastName|string|true|none|User lastname|
|email|string|true|none|User email|
|genderId|string|true|none|User genderId|
|roleId|string|true|none|User RoleId|
|phoneNumber|string|true|none|User phone number|
|image|string|true|none|User avatar|
|dob|string|true|none|User date of birth|
|statusId|string|true|none|User statusId|
|status|[AllcodeDto](#schemaallcodedto)|true|none|User status|
|token|string|true|none|User token|
|isActiveEmail|boolean|true|none|User active email|
|address|[[UserAddress](#schemauseraddress)]|true|none|User list address|
|voucherList|[[Voucher](#schemavoucher)]|true|none|User list vouchers|
|createdAt|string(date-time)|true|none|User created at the date|
|updatedAt|string(date-time)|true|none|User updated at the date|

#### Enumerated Values

|Property|Value|
|---|---|
|statusId|ON|
|statusId|OFF|
|statusId|BLOCK|

<h2 id="tocS_ResponseLoginDto">ResponseLoginDto</h2>
<!-- backwards compatibility -->
<a id="schemaresponselogindto"></a>
<a id="schema_ResponseLoginDto"></a>
<a id="tocSresponselogindto"></a>
<a id="tocsresponselogindto"></a>

```json
{
  "type": "object",
  "properties": {
    "accessToken": {
      "type": "string"
    },
    "user": {
      "type": "object",
      "properties": {
        "id": {
          "type": "number",
          "example": 1,
          "description": "User Id"
        },
        "firstName": {
          "type": "string",
          "example": "Phạm",
          "description": "User firstname"
        },
        "lastName": {
          "type": "string",
          "example": "Tới",
          "description": "User lastname"
        },
        "email": {
          "type": "string",
          "example": "toi@gmail.com",
          "description": "User email"
        },
        "genderId": {
          "type": "string",
          "example": "MALE",
          "description": "User genderId"
        },
        "roleId": {
          "type": "string",
          "example": "USER",
          "description": "User RoleId"
        },
        "phoneNumber": {
          "type": "string",
          "example": "02838483",
          "description": "User phone number"
        },
        "image": {
          "type": "string",
          "example": "avatar.png",
          "description": "User avatar"
        },
        "dob": {
          "type": "string",
          "example": "19/5/2000",
          "description": "User date of birth"
        },
        "statusId": {
          "type": "string",
          "enum": [
            "ON",
            "OFF",
            "BLOCK"
          ],
          "example": "ON",
          "description": "User statusId"
        },
        "status": {
          "example": {},
          "description": "User status",
          "allOf": [
            {
              "type": "object",
              "properties": {
                "type": {
                  "type": "string"
                },
                "value": {
                  "type": "string"
                },
                "code": {
                  "type": "string"
                },
                "parentCode": {
                  "type": "string"
                },
                "hexCode": {
                  "type": "string"
                }
              },
              "required": [
                "type",
                "value",
                "code",
                "parentCode",
                "hexCode"
              ]
            }
          ]
        },
        "token": {
          "type": "string",
          "example": "2392uehp1901",
          "description": "User token"
        },
        "isActiveEmail": {
          "type": "boolean",
          "example": false,
          "description": "User active email"
        },
        "address": {
          "example": [
            {}
          ],
          "description": "User list address",
          "type": "array",
          "items": {
            "type": "object",
            "properties": {}
          }
        },
        "voucherList": {
          "example": [
            {}
          ],
          "description": "User list vouchers",
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "id": {
                "type": "number",
                "example": 1,
                "description": "Voucher id"
              },
              "fromDate": {
                "type": "string",
                "example": "30/7/2023",
                "description": "Voucher active from date"
              },
              "toDate": {
                "type": "string",
                "example": "30/8/2023",
                "description": "Voucher active to date"
              },
              "typeVoucher": {
                "example": {},
                "description": "Type of voucher",
                "allOf": [
                  {
                    "type": "object",
                    "properties": {}
                  }
                ]
              },
              "typeVoucherId": {
                "type": "number",
                "example": 1,
                "description": "id of type voucher"
              },
              "amount": {
                "type": "number",
                "example": 10,
                "description": "Total voucher can be used"
              },
              "addToUserAmount": {
                "type": "number",
                "example": 2,
                "description": "A count of user add voucher to user's voucherList"
              },
              "statusId": {
                "type": "string",
                "enum": [
                  "ACTIVE",
                  "INACTIVE",
                  "DELETED",
                  "DRAFT"
                ],
                "example": "ACTIVE",
                "description": "Status Id of voucher"
              },
              "usedAmount": {
                "type": "number",
                "example": 2,
                "description": "Total numer of vocher which user have to use"
              },
              "codeVoucher": {
                "type": "string",
                "example": "HOLIDAY",
                "description": "Enter this code to use in user's order"
              },
              "createdAt": {
                "format": "date-time",
                "type": "string",
                "example": "2023-08-23T09:00:45.976Z",
                "description": "Voucher created at the date"
              },
              "updatedAt": {
                "format": "date-time",
                "type": "string",
                "example": "2023-08-23T09:00:45.976Z",
                "description": "Voucher updated at the date"
              }
            },
            "required": [
              "id",
              "fromDate",
              "toDate",
              "typeVoucher",
              "typeVoucherId",
              "amount",
              "addToUserAmount",
              "statusId",
              "usedAmount",
              "codeVoucher",
              "createdAt",
              "updatedAt"
            ]
          }
        },
        "createdAt": {
          "format": "date-time",
          "type": "string",
          "example": "2023-08-23T09:00:45.981Z",
          "description": "User created at the date"
        },
        "updatedAt": {
          "format": "date-time",
          "type": "string",
          "example": "2023-08-23T09:00:45.981Z",
          "description": "User updated at the date"
        }
      },
      "required": [
        "id",
        "firstName",
        "lastName",
        "email",
        "genderId",
        "roleId",
        "phoneNumber",
        "image",
        "dob",
        "statusId",
        "status",
        "token",
        "isActiveEmail",
        "address",
        "voucherList",
        "createdAt",
        "updatedAt"
      ]
    }
  },
  "required": [
    "accessToken",
    "user"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessToken|string|true|none|none|
|user|[User](#schemauser)|true|none|none|

<h2 id="tocS_ResponseRereshTokenDto">ResponseRereshTokenDto</h2>
<!-- backwards compatibility -->
<a id="schemaresponserereshtokendto"></a>
<a id="schema_ResponseRereshTokenDto"></a>
<a id="tocSresponserereshtokendto"></a>
<a id="tocsresponserereshtokendto"></a>

```json
{
  "type": "object",
  "properties": {
    "accessToken": {
      "type": "string"
    }
  },
  "required": [
    "accessToken"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessToken|string|true|none|none|

<h2 id="tocS_UserDto">UserDto</h2>
<!-- backwards compatibility -->
<a id="schemauserdto"></a>
<a id="schema_UserDto"></a>
<a id="tocSuserdto"></a>
<a id="tocsuserdto"></a>

```json
{
  "type": "object",
  "properties": {}
}

```

### Properties

*None*

<h2 id="tocS_UserAddressDto">UserAddressDto</h2>
<!-- backwards compatibility -->
<a id="schemauseraddressdto"></a>
<a id="schema_UserAddressDto"></a>
<a id="tocSuseraddressdto"></a>
<a id="tocsuseraddressdto"></a>

```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "number"
    },
    "shipName": {
      "type": "string"
    },
    "statusId": {
      "type": "string"
    },
    "shipAddress": {
      "type": "string"
    },
    "shipPhoneNumber": {
      "type": "string"
    },
    "shipEmail": {
      "type": "string"
    }
  },
  "required": [
    "userId",
    "shipName",
    "statusId",
    "shipAddress",
    "shipPhoneNumber",
    "shipEmail"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userId|number|true|none|none|
|shipName|string|true|none|none|
|statusId|string|true|none|none|
|shipAddress|string|true|none|none|
|shipPhoneNumber|string|true|none|none|
|shipEmail|string|true|none|none|

<h2 id="tocS_UpdateUserDto">UpdateUserDto</h2>
<!-- backwards compatibility -->
<a id="schemaupdateuserdto"></a>
<a id="schema_UpdateUserDto"></a>
<a id="tocSupdateuserdto"></a>
<a id="tocsupdateuserdto"></a>

```json
{
  "type": "object",
  "properties": {}
}

```

### Properties

*None*

<h2 id="tocS_TypeVoucherDto">TypeVoucherDto</h2>
<!-- backwards compatibility -->
<a id="schematypevoucherdto"></a>
<a id="schema_TypeVoucherDto"></a>
<a id="tocStypevoucherdto"></a>
<a id="tocstypevoucherdto"></a>

```json
{
  "type": "object",
  "properties": {}
}

```

### Properties

*None*

<h2 id="tocS_ProductDto">ProductDto</h2>
<!-- backwards compatibility -->
<a id="schemaproductdto"></a>
<a id="schema_ProductDto"></a>
<a id="tocSproductdto"></a>
<a id="tocsproductdto"></a>

```json
{
  "type": "object",
  "properties": {}
}

```

### Properties

*None*

<h2 id="tocS_ProductDetail">ProductDetail</h2>
<!-- backwards compatibility -->
<a id="schemaproductdetail"></a>
<a id="schema_ProductDetail"></a>
<a id="tocSproductdetail"></a>
<a id="tocsproductdetail"></a>

```json
{
  "type": "object",
  "properties": {}
}

```

### Properties

*None*

<h2 id="tocS_ProductDetailDto">ProductDetailDto</h2>
<!-- backwards compatibility -->
<a id="schemaproductdetaildto"></a>
<a id="schema_ProductDetailDto"></a>
<a id="tocSproductdetaildto"></a>
<a id="tocsproductdetaildto"></a>

```json
{
  "type": "object",
  "properties": {}
}

```

### Properties

*None*

<h2 id="tocS_AllcodeApiResponseDto">AllcodeApiResponseDto</h2>
<!-- backwards compatibility -->
<a id="schemaallcodeapiresponsedto"></a>
<a id="schema_AllcodeApiResponseDto"></a>
<a id="tocSallcodeapiresponsedto"></a>
<a id="tocsallcodeapiresponsedto"></a>

```json
{
  "type": "object",
  "properties": {
    "data": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string"
          },
          "value": {
            "type": "string"
          },
          "code": {
            "type": "string"
          },
          "parentCode": {
            "type": "string"
          },
          "hexCode": {
            "type": "string"
          }
        },
        "required": [
          "type",
          "value",
          "code",
          "parentCode",
          "hexCode"
        ]
      }
    },
    "meta": {
      "type": "object",
      "example": {
        "current": 1,
        "size": 10,
        "totalItems": 100
      }
    }
  },
  "required": [
    "data",
    "meta"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[AllcodeDto](#schemaallcodedto)]|true|none|none|
|meta|object|true|none|none|

<h2 id="tocS_ResponseWithErrDto">ResponseWithErrDto</h2>
<!-- backwards compatibility -->
<a id="schemaresponsewitherrdto"></a>
<a id="schema_ResponseWithErrDto"></a>
<a id="tocSresponsewitherrdto"></a>
<a id="tocsresponsewitherrdto"></a>

```json
{
  "type": "object",
  "properties": {
    "message": {
      "type": "string"
    },
    "err": {
      "type": "boolean"
    }
  },
  "required": [
    "message",
    "err"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|none|
|err|boolean|true|none|none|

<h2 id="tocS_BannerDto">BannerDto</h2>
<!-- backwards compatibility -->
<a id="schemabannerdto"></a>
<a id="schema_BannerDto"></a>
<a id="tocSbannerdto"></a>
<a id="tocsbannerdto"></a>

```json
{
  "type": "object",
  "properties": {
    "description": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "statusId": {
      "type": "string"
    },
    "image": {
      "type": "string"
    }
  },
  "required": [
    "description",
    "name",
    "statusId",
    "image"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|name|string|true|none|none|
|statusId|string|true|none|none|
|image|string|true|none|none|

<h2 id="tocS_ResponseCommonDto">ResponseCommonDto</h2>
<!-- backwards compatibility -->
<a id="schemaresponsecommondto"></a>
<a id="schema_ResponseCommonDto"></a>
<a id="tocSresponsecommondto"></a>
<a id="tocsresponsecommondto"></a>

```json
{
  "type": "object",
  "properties": {
    "message": {
      "type": "string"
    }
  },
  "required": [
    "message"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|none|

<h2 id="tocS_Banner">Banner</h2>
<!-- backwards compatibility -->
<a id="schemabanner"></a>
<a id="schema_Banner"></a>
<a id="tocSbanner"></a>
<a id="tocsbanner"></a>

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "number"
    },
    "description": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "statusId": {
      "type": "string"
    },
    "status": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string"
        },
        "value": {
          "type": "string"
        },
        "code": {
          "type": "string"
        },
        "parentCode": {
          "type": "string"
        },
        "hexCode": {
          "type": "string"
        }
      },
      "required": [
        "type",
        "value",
        "code",
        "parentCode",
        "hexCode"
      ]
    },
    "image": {
      "type": "string"
    },
    "createdAt": {
      "format": "date-time",
      "type": "string"
    },
    "updatedAt": {
      "format": "date-time",
      "type": "string"
    }
  },
  "required": [
    "id",
    "description",
    "name",
    "statusId",
    "status",
    "image",
    "createdAt",
    "updatedAt"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|true|none|none|
|description|string|true|none|none|
|name|string|true|none|none|
|statusId|string|true|none|none|
|status|[AllcodeDto](#schemaallcodedto)|true|none|none|
|image|string|true|none|none|
|createdAt|string(date-time)|true|none|none|
|updatedAt|string(date-time)|true|none|none|

<h2 id="tocS_BannerApiResponseDto">BannerApiResponseDto</h2>
<!-- backwards compatibility -->
<a id="schemabannerapiresponsedto"></a>
<a id="schema_BannerApiResponseDto"></a>
<a id="tocSbannerapiresponsedto"></a>
<a id="tocsbannerapiresponsedto"></a>

```json
{
  "type": "object",
  "properties": {
    "data": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number"
          },
          "description": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "statusId": {
            "type": "string"
          },
          "status": {
            "type": "object",
            "properties": {
              "type": {
                "type": "string"
              },
              "value": {
                "type": "string"
              },
              "code": {
                "type": "string"
              },
              "parentCode": {
                "type": "string"
              },
              "hexCode": {
                "type": "string"
              }
            },
            "required": [
              "type",
              "value",
              "code",
              "parentCode",
              "hexCode"
            ]
          },
          "image": {
            "type": "string"
          },
          "createdAt": {
            "format": "date-time",
            "type": "string"
          },
          "updatedAt": {
            "format": "date-time",
            "type": "string"
          }
        },
        "required": [
          "id",
          "description",
          "name",
          "statusId",
          "status",
          "image",
          "createdAt",
          "updatedAt"
        ]
      }
    },
    "meta": {
      "type": "object",
      "example": {
        "current": 1,
        "size": 10,
        "totalItems": 100
      }
    }
  },
  "required": [
    "data",
    "meta"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Banner](#schemabanner)]|true|none|none|
|meta|object|true|none|none|

<h2 id="tocS_CommentDto">CommentDto</h2>
<!-- backwards compatibility -->
<a id="schemacommentdto"></a>
<a id="schema_CommentDto"></a>
<a id="tocScommentdto"></a>
<a id="tocscommentdto"></a>

```json
{
  "type": "object",
  "properties": {}
}

```

### Properties

*None*

<h2 id="tocS_BlogDto">BlogDto</h2>
<!-- backwards compatibility -->
<a id="schemablogdto"></a>
<a id="schema_BlogDto"></a>
<a id="tocSblogdto"></a>
<a id="tocsblogdto"></a>

```json
{
  "type": "object",
  "properties": {
    "title": {
      "type": "string"
    },
    "shortDescription": {
      "type": "string"
    },
    "subjectId": {
      "type": "string"
    },
    "statusId": {
      "type": "string"
    },
    "images": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "contentMarkdown": {
      "type": "string"
    },
    "userId": {
      "type": "number"
    }
  },
  "required": [
    "title"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|true|none|none|
|shortDescription|string|false|none|none|
|subjectId|string|false|none|none|
|statusId|string|false|none|none|
|images|[string]|false|none|none|
|contentMarkdown|string|false|none|none|
|userId|number|false|none|none|

<h2 id="tocS_Blog">Blog</h2>
<!-- backwards compatibility -->
<a id="schemablog"></a>
<a id="schema_Blog"></a>
<a id="tocSblog"></a>
<a id="tocsblog"></a>

```json
{
  "type": "object",
  "properties": {}
}

```

### Properties

*None*

<h2 id="tocS_BlogApiResponseDto">BlogApiResponseDto</h2>
<!-- backwards compatibility -->
<a id="schemablogapiresponsedto"></a>
<a id="schema_BlogApiResponseDto"></a>
<a id="tocSblogapiresponsedto"></a>
<a id="tocsblogapiresponsedto"></a>

```json
{
  "type": "object",
  "properties": {
    "data": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {}
      }
    },
    "meta": {
      "type": "object",
      "example": {
        "current": 1,
        "size": 10,
        "totalItems": {
          "items": 4
        }
      }
    }
  },
  "required": [
    "data",
    "meta"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Blog](#schemablog)]|true|none|none|
|meta|object|true|none|none|

<h2 id="tocS_OrderDto">OrderDto</h2>
<!-- backwards compatibility -->
<a id="schemaorderdto"></a>
<a id="schema_OrderDto"></a>
<a id="tocSorderdto"></a>
<a id="tocsorderdto"></a>

```json
{
  "type": "object",
  "properties": {
    "addressUserId": {
      "type": "number"
    },
    "statusId": {
      "type": "string"
    },
    "typeShipId": {
      "type": "number"
    },
    "voucherCode": {
      "type": "string"
    },
    "note": {
      "type": "string"
    },
    "isPaymentOnline": {
      "type": "boolean"
    },
    "type": {
      "type": "string",
      "enum": [
        "PAYMENT",
        "COD"
      ]
    }
  },
  "required": [
    "addressUserId",
    "statusId",
    "typeShipId",
    "voucherCode",
    "note",
    "isPaymentOnline",
    "type"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressUserId|number|true|none|none|
|statusId|string|true|none|none|
|typeShipId|number|true|none|none|
|voucherCode|string|true|none|none|
|note|string|true|none|none|
|isPaymentOnline|boolean|true|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|PAYMENT|
|type|COD|

<h2 id="tocS_Allcode">Allcode</h2>
<!-- backwards compatibility -->
<a id="schemaallcode"></a>
<a id="schema_Allcode"></a>
<a id="tocSallcode"></a>
<a id="tocsallcode"></a>

```json
{
  "type": "object",
  "properties": {}
}

```

### Properties

*None*

<h2 id="tocS_TypeShip">TypeShip</h2>
<!-- backwards compatibility -->
<a id="schematypeship"></a>
<a id="schema_TypeShip"></a>
<a id="tocStypeship"></a>
<a id="tocstypeship"></a>

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "number"
    },
    "typeId": {
      "type": "string"
    },
    "type": {
      "type": "object",
      "properties": {}
    },
    "price": {
      "type": "number"
    },
    "createdAt": {
      "format": "date-time",
      "type": "string"
    },
    "updatedAt": {
      "format": "date-time",
      "type": "string"
    }
  },
  "required": [
    "id",
    "typeId",
    "type",
    "price",
    "createdAt",
    "updatedAt"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|true|none|none|
|typeId|string|true|none|none|
|type|[Allcode](#schemaallcode)|true|none|none|
|price|number|true|none|none|
|createdAt|string(date-time)|true|none|none|
|updatedAt|string(date-time)|true|none|none|

<h2 id="tocS_OrderDetail">OrderDetail</h2>
<!-- backwards compatibility -->
<a id="schemaorderdetail"></a>
<a id="schema_OrderDetail"></a>
<a id="tocSorderdetail"></a>
<a id="tocsorderdetail"></a>

```json
{
  "type": "object",
  "properties": {}
}

```

### Properties

*None*

<h2 id="tocS_Order">Order</h2>
<!-- backwards compatibility -->
<a id="schemaorder"></a>
<a id="schema_Order"></a>
<a id="tocSorder"></a>
<a id="tocsorder"></a>

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "number"
    },
    "addressUser": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {}
      }
    },
    "addressUserId": {
      "type": "number"
    },
    "statusId": {
      "type": "string"
    },
    "typeShip": {
      "type": "object",
      "properties": {
        "id": {
          "type": "number"
        },
        "typeId": {
          "type": "string"
        },
        "type": {
          "type": "object",
          "properties": {}
        },
        "price": {
          "type": "number"
        },
        "createdAt": {
          "format": "date-time",
          "type": "string"
        },
        "updatedAt": {
          "format": "date-time",
          "type": "string"
        }
      },
      "required": [
        "id",
        "typeId",
        "type",
        "price",
        "createdAt",
        "updatedAt"
      ]
    },
    "typeShipId": {
      "type": "number"
    },
    "voucher": {
      "type": "object",
      "properties": {
        "id": {
          "type": "number",
          "example": 1,
          "description": "Voucher id"
        },
        "fromDate": {
          "type": "string",
          "example": "30/7/2023",
          "description": "Voucher active from date"
        },
        "toDate": {
          "type": "string",
          "example": "30/8/2023",
          "description": "Voucher active to date"
        },
        "typeVoucher": {
          "example": {},
          "description": "Type of voucher",
          "allOf": [
            {
              "type": "object",
              "properties": {}
            }
          ]
        },
        "typeVoucherId": {
          "type": "number",
          "example": 1,
          "description": "id of type voucher"
        },
        "amount": {
          "type": "number",
          "example": 10,
          "description": "Total voucher can be used"
        },
        "addToUserAmount": {
          "type": "number",
          "example": 2,
          "description": "A count of user add voucher to user's voucherList"
        },
        "statusId": {
          "type": "string",
          "enum": [
            "ACTIVE",
            "INACTIVE",
            "DELETED",
            "DRAFT"
          ],
          "example": "ACTIVE",
          "description": "Status Id of voucher"
        },
        "usedAmount": {
          "type": "number",
          "example": 2,
          "description": "Total numer of vocher which user have to use"
        },
        "codeVoucher": {
          "type": "string",
          "example": "HOLIDAY",
          "description": "Enter this code to use in user's order"
        },
        "createdAt": {
          "format": "date-time",
          "type": "string",
          "example": "2023-08-23T09:00:45.976Z",
          "description": "Voucher created at the date"
        },
        "updatedAt": {
          "format": "date-time",
          "type": "string",
          "example": "2023-08-23T09:00:45.976Z",
          "description": "Voucher updated at the date"
        }
      },
      "required": [
        "id",
        "fromDate",
        "toDate",
        "typeVoucher",
        "typeVoucherId",
        "amount",
        "addToUserAmount",
        "statusId",
        "usedAmount",
        "codeVoucher",
        "createdAt",
        "updatedAt"
      ]
    },
    "orderDetails": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {}
      }
    },
    "voucherId": {
      "type": "number"
    },
    "totalPrice": {
      "type": "number"
    },
    "note": {
      "type": "string"
    },
    "isPaymentOnline": {
      "type": "boolean"
    },
    "createdAt": {
      "format": "date-time",
      "type": "string"
    },
    "updatedAt": {
      "format": "date-time",
      "type": "string"
    }
  },
  "required": [
    "id",
    "addressUser",
    "addressUserId",
    "statusId",
    "typeShip",
    "typeShipId",
    "voucher",
    "orderDetails",
    "voucherId",
    "totalPrice",
    "note",
    "isPaymentOnline",
    "createdAt",
    "updatedAt"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|number|true|none|none|
|addressUser|[[UserAddress](#schemauseraddress)]|true|none|none|
|addressUserId|number|true|none|none|
|statusId|string|true|none|none|
|typeShip|[TypeShip](#schematypeship)|true|none|none|
|typeShipId|number|true|none|none|
|voucher|[Voucher](#schemavoucher)|true|none|none|
|orderDetails|[[OrderDetail](#schemaorderdetail)]|true|none|none|
|voucherId|number|true|none|none|
|totalPrice|number|true|none|none|
|note|string|true|none|none|
|isPaymentOnline|boolean|true|none|none|
|createdAt|string(date-time)|true|none|none|
|updatedAt|string(date-time)|true|none|none|

<h2 id="tocS_ChangeStatusDto">ChangeStatusDto</h2>
<!-- backwards compatibility -->
<a id="schemachangestatusdto"></a>
<a id="schema_ChangeStatusDto"></a>
<a id="tocSchangestatusdto"></a>
<a id="tocschangestatusdto"></a>

```json
{
  "type": "object",
  "properties": {
    "statusId": {
      "type": "string",
      "enum": [
        "WAIT_FOR_COMFIRMATION",
        "WAIT_FOR_PAYMENT",
        "DELIVERING",
        "DELIVERED",
        "CANCEL"
      ]
    }
  },
  "required": [
    "statusId"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|statusId|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|statusId|WAIT_FOR_COMFIRMATION|
|statusId|WAIT_FOR_PAYMENT|
|statusId|DELIVERING|
|statusId|DELIVERED|
|statusId|CANCEL|

<h2 id="tocS_OrderApiResponseDto">OrderApiResponseDto</h2>
<!-- backwards compatibility -->
<a id="schemaorderapiresponsedto"></a>
<a id="schema_OrderApiResponseDto"></a>
<a id="tocSorderapiresponsedto"></a>
<a id="tocsorderapiresponsedto"></a>

```json
{
  "type": "object",
  "properties": {
    "data": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number"
          },
          "addressUser": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {}
            }
          },
          "addressUserId": {
            "type": "number"
          },
          "statusId": {
            "type": "string"
          },
          "typeShip": {
            "type": "object",
            "properties": {
              "id": {
                "type": "number"
              },
              "typeId": {
                "type": "string"
              },
              "type": {
                "type": "object",
                "properties": {}
              },
              "price": {
                "type": "number"
              },
              "createdAt": {
                "format": "date-time",
                "type": "string"
              },
              "updatedAt": {
                "format": "date-time",
                "type": "string"
              }
            },
            "required": [
              "id",
              "typeId",
              "type",
              "price",
              "createdAt",
              "updatedAt"
            ]
          },
          "typeShipId": {
            "type": "number"
          },
          "voucher": {
            "type": "object",
            "properties": {
              "id": {
                "type": "number",
                "example": 1,
                "description": "Voucher id"
              },
              "fromDate": {
                "type": "string",
                "example": "30/7/2023",
                "description": "Voucher active from date"
              },
              "toDate": {
                "type": "string",
                "example": "30/8/2023",
                "description": "Voucher active to date"
              },
              "typeVoucher": {
                "example": {},
                "description": "Type of voucher",
                "allOf": [
                  {
                    "type": "object",
                    "properties": {}
                  }
                ]
              },
              "typeVoucherId": {
                "type": "number",
                "example": 1,
                "description": "id of type voucher"
              },
              "amount": {
                "type": "number",
                "example": 10,
                "description": "Total voucher can be used"
              },
              "addToUserAmount": {
                "type": "number",
                "example": 2,
                "description": "A count of user add voucher to user's voucherList"
              },
              "statusId": {
                "type": "string",
                "enum": [
                  "ACTIVE",
                  "INACTIVE",
                  "DELETED",
                  "DRAFT"
                ],
                "example": "ACTIVE",
                "description": "Status Id of voucher"
              },
              "usedAmount": {
                "type": "number",
                "example": 2,
                "description": "Total numer of vocher which user have to use"
              },
              "codeVoucher": {
                "type": "string",
                "example": "HOLIDAY",
                "description": "Enter this code to use in user's order"
              },
              "createdAt": {
                "format": "date-time",
                "type": "string",
                "example": "2023-08-23T09:00:45.976Z",
                "description": "Voucher created at the date"
              },
              "updatedAt": {
                "format": "date-time",
                "type": "string",
                "example": "2023-08-23T09:00:45.976Z",
                "description": "Voucher updated at the date"
              }
            },
            "required": [
              "id",
              "fromDate",
              "toDate",
              "typeVoucher",
              "typeVoucherId",
              "amount",
              "addToUserAmount",
              "statusId",
              "usedAmount",
              "codeVoucher",
              "createdAt",
              "updatedAt"
            ]
          },
          "orderDetails": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {}
            }
          },
          "voucherId": {
            "type": "number"
          },
          "totalPrice": {
            "type": "number"
          },
          "note": {
            "type": "string"
          },
          "isPaymentOnline": {
            "type": "boolean"
          },
          "createdAt": {
            "format": "date-time",
            "type": "string"
          },
          "updatedAt": {
            "format": "date-time",
            "type": "string"
          }
        },
        "required": [
          "id",
          "addressUser",
          "addressUserId",
          "statusId",
          "typeShip",
          "typeShipId",
          "voucher",
          "orderDetails",
          "voucherId",
          "totalPrice",
          "note",
          "isPaymentOnline",
          "createdAt",
          "updatedAt"
        ]
      }
    },
    "meta": {
      "type": "object",
      "example": {
        "current": 1,
        "size": 10,
        "totalItems": 100
      }
    }
  },
  "required": [
    "data",
    "meta"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Order](#schemaorder)]|true|none|none|
|meta|object|true|none|none|

<h2 id="tocS_CartDetailDto">CartDetailDto</h2>
<!-- backwards compatibility -->
<a id="schemacartdetaildto"></a>
<a id="schema_CartDetailDto"></a>
<a id="tocScartdetaildto"></a>
<a id="tocscartdetaildto"></a>

```json
{
  "type": "object",
  "properties": {}
}

```

### Properties

*None*

<h2 id="tocS_ReceiptDto">ReceiptDto</h2>
<!-- backwards compatibility -->
<a id="schemareceiptdto"></a>
<a id="schema_ReceiptDto"></a>
<a id="tocSreceiptdto"></a>
<a id="tocsreceiptdto"></a>

```json
{
  "type": "object",
  "properties": {}
}

```

### Properties

*None*

<h2 id="tocS_ReceiptDetailDto">ReceiptDetailDto</h2>
<!-- backwards compatibility -->
<a id="schemareceiptdetaildto"></a>
<a id="schema_ReceiptDetailDto"></a>
<a id="tocSreceiptdetaildto"></a>
<a id="tocsreceiptdetaildto"></a>

```json
{
  "type": "object",
  "properties": {}
}

```

### Properties

*None*

<h2 id="tocS_SupplierDto">SupplierDto</h2>
<!-- backwards compatibility -->
<a id="schemasupplierdto"></a>
<a id="schema_SupplierDto"></a>
<a id="tocSsupplierdto"></a>
<a id="tocssupplierdto"></a>

```json
{
  "type": "object",
  "properties": {}
}

```

### Properties

*None*

