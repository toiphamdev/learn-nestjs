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

> Code samples

```javascript
fetch('/', {
  method: 'GET',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`GET /`

<h3 id="appcontroller_gethello-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## UserController_createUser

<a id="opIdUserController_createUser"></a>

> Code samples

```javascript
const inputBody = '{}';
const headers = {
  'Content-Type': 'application/json',
};

fetch('/user', {
  method: 'POST',
  body: inputBody,
  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`POST /user`

> Body parameter

```json
{}
```

<h3 id="usercontroller_createuser-parameters">Parameters</h3>

| Name | In   | Type                      | Required | Description |
| ---- | ---- | ------------------------- | -------- | ----------- |
| body | body | [UserDto](#schemauserdto) | true     | none        |

<h3 id="usercontroller_createuser-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## UserController_getAllUser

<a id="opIdUserController_getAllUser"></a>

> Code samples

```javascript
fetch('/user', {
  method: 'GET',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`GET /user`

<h3 id="usercontroller_getalluser-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## UserController_updateUser

<a id="opIdUserController_updateUser"></a>

> Code samples

```javascript
const inputBody = '{}';
const headers = {
  'Content-Type': 'application/json',
};

fetch('/user', {
  method: 'PUT',
  body: inputBody,
  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`PUT /user`

> Body parameter

```json
{}
```

<h3 id="usercontroller_updateuser-parameters">Parameters</h3>

| Name | In   | Type                                  | Required | Description |
| ---- | ---- | ------------------------------------- | -------- | ----------- |
| body | body | [UpdateUserDto](#schemaupdateuserdto) | true     | none        |

<h3 id="usercontroller_updateuser-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## UserController_getProfile

<a id="opIdUserController_getProfile"></a>

> Code samples

```javascript
fetch('/user/profile', {
  method: 'GET',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`GET /user/profile`

<h3 id="usercontroller_getprofile-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## UserController_dislikeCommentAction

<a id="opIdUserController_dislikeCommentAction"></a>

> Code samples

```javascript
fetch('/user/comment/dislike/{commentId}', {
  method: 'PATCH',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`PATCH /user/comment/dislike/{commentId}`

<h3 id="usercontroller_dislikecommentaction-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## UserController_likeCommentAction

<a id="opIdUserController_likeCommentAction"></a>

> Code samples

```javascript
fetch('/user/comment/like/{commentId}', {
  method: 'PATCH',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`PATCH /user/comment/like/{commentId}`

<h3 id="usercontroller_likecommentaction-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## UserController_addToVoucherList

<a id="opIdUserController_addToVoucherList"></a>

> Code samples

```javascript
fetch('/user/voucher/add/{code}', {
  method: 'PATCH',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`PATCH /user/voucher/add/{code}`

<h3 id="usercontroller_addtovoucherlist-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## UserController_sendVerifyEmail

<a id="opIdUserController_sendVerifyEmail"></a>

> Code samples

```javascript
fetch('/user/verify-email', {
  method: 'POST',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`POST /user/verify-email`

<h3 id="usercontroller_sendverifyemail-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## UserController_sendVerifyChangePass

<a id="opIdUserController_sendVerifyChangePass"></a>

> Code samples

```javascript
fetch('/user/change-pass', {
  method: 'POST',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`POST /user/change-pass`

<h3 id="usercontroller_sendverifychangepass-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## UserController_verifyPass

<a id="opIdUserController_verifyPass"></a>

> Code samples

```javascript
fetch('/user/change-pass', {
  method: 'PATCH',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`PATCH /user/change-pass`

<h3 id="usercontroller_verifypass-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## UserController_verifyEmail

<a id="opIdUserController_verifyEmail"></a>

> Code samples

```javascript
fetch('/user/verify', {
  method: 'PATCH',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`PATCH /user/verify`

<h3 id="usercontroller_verifyemail-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## UserController_createAdd

<a id="opIdUserController_createAdd"></a>

> Code samples

```javascript
const inputBody = '{
  "userId": 0,
  "shipName": "string",
  "statusId": "string",
  "shipAddress": "string",
  "shipPhoneNumber": "string",
  "shipEmail": "string"
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/user/address',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /user/address`

> Body parameter

```json
{
  "userId": 0,
  "shipName": "string",
  "statusId": "string",
  "shipAddress": "string",
  "shipPhoneNumber": "string",
  "shipEmail": "string"
}
```

<h3 id="usercontroller_createadd-parameters">Parameters</h3>

| Name | In   | Type                                    | Required | Description |
| ---- | ---- | --------------------------------------- | -------- | ----------- |
| body | body | [UserAddressDto](#schemauseraddressdto) | true     | none        |

<h3 id="usercontroller_createadd-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## UserController_getAdds

<a id="opIdUserController_getAdds"></a>

> Code samples

```javascript
fetch('/user/address', {
  method: 'GET',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`GET /user/address`

<h3 id="usercontroller_getadds-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## UserController_updateAdd

<a id="opIdUserController_updateAdd"></a>

> Code samples

```javascript
const inputBody = '{
  "userId": 0,
  "shipName": "string",
  "statusId": "string",
  "shipAddress": "string",
  "shipPhoneNumber": "string",
  "shipEmail": "string"
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/user/address/{id}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`PUT /user/address/{id}`

> Body parameter

```json
{
  "userId": 0,
  "shipName": "string",
  "statusId": "string",
  "shipAddress": "string",
  "shipPhoneNumber": "string",
  "shipEmail": "string"
}
```

<h3 id="usercontroller_updateadd-parameters">Parameters</h3>

| Name | In   | Type                                    | Required | Description |
| ---- | ---- | --------------------------------------- | -------- | ----------- |
| id   | path | number                                  | true     | none        |
| body | body | [UserAddressDto](#schemauseraddressdto) | true     | none        |

<h3 id="usercontroller_updateadd-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## UserController_deleteAdd

<a id="opIdUserController_deleteAdd"></a>

> Code samples

```javascript
fetch('/user/address/{id}', {
  method: 'DELETE',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`DELETE /user/address/{id}`

<h3 id="usercontroller_deleteadd-parameters">Parameters</h3>

| Name | In   | Type   | Required | Description |
| ---- | ---- | ------ | -------- | ----------- |
| id   | path | number | true     | none        |

<h3 id="usercontroller_deleteadd-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## UserController_sendVerifyTakePass

<a id="opIdUserController_sendVerifyTakePass"></a>

> Code samples

```javascript
fetch('/user/take-pass', {
  method: 'POST',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`POST /user/take-pass`

<h3 id="usercontroller_sendverifytakepass-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## VoucherController_createVoucher

<a id="opIdVoucherController_createVoucher"></a>

> Code samples

```javascript
fetch('/voucher', {
  method: 'POST',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`POST /voucher`

<h3 id="vouchercontroller_createvoucher-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## VoucherController_getAllVoucher

<a id="opIdVoucherController_getAllVoucher"></a>

> Code samples

```javascript
fetch('/voucher', {
  method: 'GET',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`GET /voucher`

<h3 id="vouchercontroller_getallvoucher-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## VoucherController_getVoucherByCode

<a id="opIdVoucherController_getVoucherByCode"></a>

> Code samples

```javascript
fetch('/voucher/code', {
  method: 'GET',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`GET /voucher/code`

<h3 id="vouchercontroller_getvoucherbycode-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## VoucherController_updateVoucher

<a id="opIdVoucherController_updateVoucher"></a>

> Code samples

```javascript
fetch('/voucher/update/{id}', {
  method: 'PATCH',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`PATCH /voucher/update/{id}`

<h3 id="vouchercontroller_updatevoucher-parameters">Parameters</h3>

| Name | In   | Type   | Required | Description |
| ---- | ---- | ------ | -------- | ----------- |
| id   | path | number | true     | none        |

<h3 id="vouchercontroller_updatevoucher-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## VoucherController_createTypeVoucher

<a id="opIdVoucherController_createTypeVoucher"></a>

> Code samples

```javascript
const inputBody = '{}';
const headers = {
  'Content-Type': 'application/json',
};

fetch('/voucher/type-voucher', {
  method: 'POST',
  body: inputBody,
  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`POST /voucher/type-voucher`

> Body parameter

```json
{}
```

<h3 id="vouchercontroller_createtypevoucher-parameters">Parameters</h3>

| Name | In   | Type                                    | Required | Description |
| ---- | ---- | --------------------------------------- | -------- | ----------- |
| body | body | [TypeVoucherDto](#schematypevoucherdto) | true     | none        |

<h3 id="vouchercontroller_createtypevoucher-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## VoucherController_getAllTypeVoucher

<a id="opIdVoucherController_getAllTypeVoucher"></a>

> Code samples

```javascript
fetch('/voucher/type-voucher', {
  method: 'GET',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`GET /voucher/type-voucher`

<h3 id="vouchercontroller_getalltypevoucher-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## VoucherController_updateTypeVoucher

<a id="opIdVoucherController_updateTypeVoucher"></a>

> Code samples

```javascript
const inputBody = 'string';
const headers = {
  'Content-Type': 'application/json',
};

fetch('/voucher/type-voucher/{id}', {
  method: 'PATCH',
  body: inputBody,
  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`PATCH /voucher/type-voucher/{id}`

> Body parameter

```json
"string"
```

<h3 id="vouchercontroller_updatetypevoucher-parameters">Parameters</h3>

| Name | In   | Type   | Required | Description |
| ---- | ---- | ------ | -------- | ----------- |
| id   | path | number | true     | none        |
| body | body | string | true     | none        |

<h3 id="vouchercontroller_updatetypevoucher-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## ProductController_createNewProduct

<a id="opIdProductController_createNewProduct"></a>

> Code samples

```javascript
const inputBody = '{}';
const headers = {
  'Content-Type': 'application/json',
};

fetch('/product', {
  method: 'POST',
  body: inputBody,
  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`POST /product`

> Body parameter

```json
{}
```

<h3 id="productcontroller_createnewproduct-parameters">Parameters</h3>

| Name | In   | Type                            | Required | Description |
| ---- | ---- | ------------------------------- | -------- | ----------- |
| body | body | [ProductDto](#schemaproductdto) | true     | none        |

<h3 id="productcontroller_createnewproduct-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## ProductController_fillterProduct

<a id="opIdProductController_fillterProduct"></a>

> Code samples

```javascript
fetch('/product', {
  method: 'GET',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`GET /product`

<h3 id="productcontroller_fillterproduct-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## ProductController_deleteProductById

<a id="opIdProductController_deleteProductById"></a>

> Code samples

```javascript
fetch('/product/{id}', {
  method: 'DELETE',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`DELETE /product/{id}`

<h3 id="productcontroller_deleteproductbyid-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## ProductController_updateProductById

<a id="opIdProductController_updateProductById"></a>

> Code samples

```javascript
const inputBody = '{}';
const headers = {
  'Content-Type': 'application/json',
};

fetch('/product/{id}', {
  method: 'PUT',
  body: inputBody,
  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`PUT /product/{id}`

> Body parameter

```json
{}
```

<h3 id="productcontroller_updateproductbyid-parameters">Parameters</h3>

| Name | In   | Type                            | Required | Description |
| ---- | ---- | ------------------------------- | -------- | ----------- |
| body | body | [ProductDto](#schemaproductdto) | true     | none        |

<h3 id="productcontroller_updateproductbyid-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## ProductController_getProductById

<a id="opIdProductController_getProductById"></a>

> Code samples

```javascript
fetch('/product/{id}', {
  method: 'GET',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`GET /product/{id}`

<h3 id="productcontroller_getproductbyid-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## ProductController_getProductByName

<a id="opIdProductController_getProductByName"></a>

> Code samples

```javascript
fetch('/product/search', {
  method: 'GET',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`GET /product/search`

<h3 id="productcontroller_getproductbyname-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## ProductController_updateProductDetail

<a id="opIdProductController_updateProductDetail"></a>

> Code samples

```javascript
const inputBody = '{}';
const headers = {
  'Content-Type': 'application/json',
};

fetch('/product/detail/{id}', {
  method: 'PUT',
  body: inputBody,
  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`PUT /product/detail/{id}`

> Body parameter

```json
{}
```

<h3 id="productcontroller_updateproductdetail-parameters">Parameters</h3>

| Name | In   | Type                                  | Required | Description |
| ---- | ---- | ------------------------------------- | -------- | ----------- |
| body | body | [ProductDetail](#schemaproductdetail) | true     | none        |

<h3 id="productcontroller_updateproductdetail-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## ProductController_deleteProdDetail

<a id="opIdProductController_deleteProdDetail"></a>

> Code samples

```javascript
fetch('/product/detail/{id}', {
  method: 'DELETE',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`DELETE /product/detail/{id}`

<h3 id="productcontroller_deleteproddetail-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## ProductController_createProductDetail

<a id="opIdProductController_createProductDetail"></a>

> Code samples

```javascript
const inputBody = '{}';
const headers = {
  'Content-Type': 'application/json',
};

fetch('/product/detail', {
  method: 'POST',
  body: inputBody,
  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`POST /product/detail`

> Body parameter

```json
{}
```

<h3 id="productcontroller_createproductdetail-parameters">Parameters</h3>

| Name | In   | Type                                        | Required | Description |
| ---- | ---- | ------------------------------------------- | -------- | ----------- |
| body | body | [ProductDetailDto](#schemaproductdetaildto) | true     | none        |

<h3 id="productcontroller_createproductdetail-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## ProductController_getAllProductDetail

<a id="opIdProductController_getAllProductDetail"></a>

> Code samples

```javascript
fetch('/product/detail/{productId}', {
  method: 'GET',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`GET /product/detail/{productId}`

<h3 id="productcontroller_getallproductdetail-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## ProductController_createSize

<a id="opIdProductController_createSize"></a>

> Code samples

```javascript
fetch('/product/size', {
  method: 'POST',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`POST /product/size`

<h3 id="productcontroller_createsize-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## ProductController_updateSize

<a id="opIdProductController_updateSize"></a>

> Code samples

```javascript
fetch('/product/size/{id}', {
  method: 'PUT',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`PUT /product/size/{id}`

<h3 id="productcontroller_updatesize-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## ProductController_deleteSize

<a id="opIdProductController_deleteSize"></a>

> Code samples

```javascript
fetch('/product/size/{id}', {
  method: 'DELETE',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`DELETE /product/size/{id}`

<h3 id="productcontroller_deletesize-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## ProductController_getSizeByProductDetailId

<a id="opIdProductController_getSizeByProductDetailId"></a>

> Code samples

```javascript
fetch('/product/size/{productDetailId}', {
  method: 'GET',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`GET /product/size/{productDetailId}`

<h3 id="productcontroller_getsizebyproductdetailid-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## ProductController_getColors

<a id="opIdProductController_getColors"></a>

> Code samples

```javascript
fetch('/product/colors/{productId}', {
  method: 'GET',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`GET /product/colors/{productId}`

<h3 id="productcontroller_getcolors-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## RoomMessageController_createRoomMessage

<a id="opIdRoomMessageController_createRoomMessage"></a>

> Code samples

```javascript
fetch('/room-messages/create', {
  method: 'POST',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`POST /room-messages/create`

<h3 id="roommessagecontroller_createroommessage-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## RoomMessageController_createMessage

<a id="opIdRoomMessageController_createMessage"></a>

> Code samples

```javascript
fetch('/room-messages/message', {
  method: 'POST',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`POST /room-messages/message`

<h3 id="roommessagecontroller_createmessage-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## RoomMessageController_getAllRooms

<a id="opIdRoomMessageController_getAllRooms"></a>

> Code samples

```javascript
fetch('/room-messages/rooms', {
  method: 'GET',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`GET /room-messages/rooms`

<h3 id="roommessagecontroller_getallrooms-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## RoomMessageController_getAllAdminRooms

<a id="opIdRoomMessageController_getAllAdminRooms"></a>

> Code samples

```javascript
fetch('/room-messages/rooms-admin', {
  method: 'GET',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`GET /room-messages/rooms-admin`

<h3 id="roommessagecontroller_getalladminrooms-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## RoomMessageController_getCount

<a id="opIdRoomMessageController_getCount"></a>

> Code samples

```javascript
fetch('/room-messages/test', {
  method: 'GET',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`GET /room-messages/test`

<h3 id="roommessagecontroller_getcount-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## UploadController_uploadFile

<a id="opIdUploadController_uploadFile"></a>

> Code samples

```javascript
fetch('/upload/image', {
  method: 'POST',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`POST /upload/image`

<h3 id="uploadcontroller_uploadfile-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## UploadController_uploadFiles

<a id="opIdUploadController_uploadFiles"></a>

> Code samples

```javascript
fetch('/upload/images', {
  method: 'POST',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`POST /upload/images`

<h3 id="uploadcontroller_uploadfiles-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## CommentController_createComment

<a id="opIdCommentController_createComment"></a>

> Code samples

```javascript
const inputBody = '{}';
const headers = {
  'Content-Type': 'application/json',
};

fetch('/comment', {
  method: 'POST',
  body: inputBody,
  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`POST /comment`

> Body parameter

```json
{}
```

<h3 id="commentcontroller_createcomment-parameters">Parameters</h3>

| Name | In   | Type                            | Required | Description |
| ---- | ---- | ------------------------------- | -------- | ----------- |
| body | body | [CommentDto](#schemacommentdto) | true     | none        |

<h3 id="commentcontroller_createcomment-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## CommentController_getAllComment

<a id="opIdCommentController_getAllComment"></a>

> Code samples

```javascript
fetch('/comment', {
  method: 'GET',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`GET /comment`

<h3 id="commentcontroller_getallcomment-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## CommentController_deleteComment

<a id="opIdCommentController_deleteComment"></a>

> Code samples

```javascript
fetch('/comment/{id}', {
  method: 'DELETE',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`DELETE /comment/{id}`

<h3 id="commentcontroller_deletecomment-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## CartController_initCart

<a id="opIdCartController_initCart"></a>

> Code samples

```javascript
fetch('/cart', {
  method: 'PUT',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`PUT /cart`

<h3 id="cartcontroller_initcart-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## CartController_addTocart

<a id="opIdCartController_addTocart"></a>

> Code samples

```javascript
const inputBody = '{}';
const headers = {
  'Content-Type': 'application/json',
};

fetch('/cart/add-to-cart', {
  method: 'POST',
  body: inputBody,
  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`POST /cart/add-to-cart`

> Body parameter

```json
{}
```

<h3 id="cartcontroller_addtocart-parameters">Parameters</h3>

| Name | In   | Type                                  | Required | Description |
| ---- | ---- | ------------------------------------- | -------- | ----------- |
| body | body | [CartDetailDto](#schemacartdetaildto) | true     | none        |

<h3 id="cartcontroller_addtocart-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## ReceiptController_createReceipt

<a id="opIdReceiptController_createReceipt"></a>

> Code samples

```javascript
const inputBody = '{}';
const headers = {
  'Content-Type': 'application/json',
};

fetch('/receipt', {
  method: 'POST',
  body: inputBody,
  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`POST /receipt`

> Body parameter

```json
{}
```

<h3 id="receiptcontroller_createreceipt-parameters">Parameters</h3>

| Name | In   | Type                            | Required | Description |
| ---- | ---- | ------------------------------- | -------- | ----------- |
| body | body | [ReceiptDto](#schemareceiptdto) | true     | none        |

<h3 id="receiptcontroller_createreceipt-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## ReceiptController_getAllReceipt

<a id="opIdReceiptController_getAllReceipt"></a>

> Code samples

```javascript
fetch('/receipt', {
  method: 'GET',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`GET /receipt`

<h3 id="receiptcontroller_getallreceipt-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## ReceiptController_updateReceipt

<a id="opIdReceiptController_updateReceipt"></a>

> Code samples

```javascript
const inputBody = '{}';
const headers = {
  'Content-Type': 'application/json',
};

fetch('/receipt/{id}', {
  method: 'PUT',
  body: inputBody,
  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`PUT /receipt/{id}`

> Body parameter

```json
{}
```

<h3 id="receiptcontroller_updatereceipt-parameters">Parameters</h3>

| Name | In   | Type                            | Required | Description |
| ---- | ---- | ------------------------------- | -------- | ----------- |
| body | body | [ReceiptDto](#schemareceiptdto) | true     | none        |

<h3 id="receiptcontroller_updatereceipt-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## ReceiptController_deleteReceipt

<a id="opIdReceiptController_deleteReceipt"></a>

> Code samples

```javascript
fetch('/receipt/{id}', {
  method: 'DELETE',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`DELETE /receipt/{id}`

<h3 id="receiptcontroller_deletereceipt-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## ReceiptController_createReceiptDetail

<a id="opIdReceiptController_createReceiptDetail"></a>

> Code samples

```javascript
const inputBody = '{}';
const headers = {
  'Content-Type': 'application/json',
};

fetch('/receipt/detail', {
  method: 'POST',
  body: inputBody,
  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`POST /receipt/detail`

> Body parameter

```json
{}
```

<h3 id="receiptcontroller_createreceiptdetail-parameters">Parameters</h3>

| Name | In   | Type                                        | Required | Description |
| ---- | ---- | ------------------------------------------- | -------- | ----------- |
| body | body | [ReceiptDetailDto](#schemareceiptdetaildto) | true     | none        |

<h3 id="receiptcontroller_createreceiptdetail-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## ReceiptController_updateReceiptDetail

<a id="opIdReceiptController_updateReceiptDetail"></a>

> Code samples

```javascript
const inputBody = '{}';
const headers = {
  'Content-Type': 'application/json',
};

fetch('/receipt/detail/{id}', {
  method: 'PUT',
  body: inputBody,
  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`PUT /receipt/detail/{id}`

> Body parameter

```json
{}
```

<h3 id="receiptcontroller_updatereceiptdetail-parameters">Parameters</h3>

| Name | In   | Type                                        | Required | Description |
| ---- | ---- | ------------------------------------------- | -------- | ----------- |
| body | body | [ReceiptDetailDto](#schemareceiptdetaildto) | true     | none        |

<h3 id="receiptcontroller_updatereceiptdetail-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## ReceiptController_deleteReceiptDetail

<a id="opIdReceiptController_deleteReceiptDetail"></a>

> Code samples

```javascript
fetch('/receipt/detail/{id}', {
  method: 'DELETE',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`DELETE /receipt/detail/{id}`

<h3 id="receiptcontroller_deletereceiptdetail-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## ReceiptController_getAllReceiptDeatil

<a id="opIdReceiptController_getAllReceiptDeatil"></a>

> Code samples

```javascript
fetch('/receipt/{receiptId}', {
  method: 'GET',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`GET /receipt/{receiptId}`

<h3 id="receiptcontroller_getallreceiptdeatil-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## SupplierController_createSup

<a id="opIdSupplierController_createSup"></a>

> Code samples

```javascript
const inputBody = '{}';
const headers = {
  'Content-Type': 'application/json',
};

fetch('/supplier', {
  method: 'POST',
  body: inputBody,
  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`POST /supplier`

> Body parameter

```json
{}
```

<h3 id="suppliercontroller_createsup-parameters">Parameters</h3>

| Name | In   | Type                              | Required | Description |
| ---- | ---- | --------------------------------- | -------- | ----------- |
| body | body | [SupplierDto](#schemasupplierdto) | true     | none        |

<h3 id="suppliercontroller_createsup-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## SupplierController_getAllSupplier

<a id="opIdSupplierController_getAllSupplier"></a>

> Code samples

```javascript
fetch('/supplier', {
  method: 'GET',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`GET /supplier`

<h3 id="suppliercontroller_getallsupplier-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## SupplierController_updateSup

<a id="opIdSupplierController_updateSup"></a>

> Code samples

```javascript
const inputBody = '{}';
const headers = {
  'Content-Type': 'application/json',
};

fetch('/supplier/{id}', {
  method: 'PUT',
  body: inputBody,
  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`PUT /supplier/{id}`

> Body parameter

```json
{}
```

<h3 id="suppliercontroller_updatesup-parameters">Parameters</h3>

| Name | In   | Type                              | Required | Description |
| ---- | ---- | --------------------------------- | -------- | ----------- |
| body | body | [SupplierDto](#schemasupplierdto) | true     | none        |

<h3 id="suppliercontroller_updatesup-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## SupplierController_deleteSup

<a id="opIdSupplierController_deleteSup"></a>

> Code samples

```javascript
fetch('/supplier/{id}', {
  method: 'DELETE',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`DELETE /supplier/{id}`

<h3 id="suppliercontroller_deletesup-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## DashboardController_getTotalUsers

<a id="opIdDashboardController_getTotalUsers"></a>

> Code samples

```javascript
fetch('/dashboard/new-user', {
  method: 'GET',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`GET /dashboard/new-user`

<h3 id="dashboardcontroller_gettotalusers-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## DashboardController_getTotalUser

<a id="opIdDashboardController_getTotalUser"></a>

> Code samples

```javascript
fetch('/dashboard/total-user', {
  method: 'GET',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`GET /dashboard/total-user`

<h3 id="dashboardcontroller_gettotaluser-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## DashboardController_getUserOnline

<a id="opIdDashboardController_getUserOnline"></a>

> Code samples

```javascript
fetch('/dashboard/user-online', {
  method: 'GET',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`GET /dashboard/user-online`

<h3 id="dashboardcontroller_getuseronline-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## DashboardController_getOrder

<a id="opIdDashboardController_getOrder"></a>

> Code samples

```javascript
fetch('/dashboard/order', {
  method: 'GET',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`GET /dashboard/order`

<h3 id="dashboardcontroller_getorder-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## DashboardController_getProductSold

<a id="opIdDashboardController_getProductSold"></a>

> Code samples

```javascript
fetch('/dashboard/product-sold', {
  method: 'GET',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`GET /dashboard/product-sold`

<h3 id="dashboardcontroller_getproductsold-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## DashboardController_getCountOrder

<a id="opIdDashboardController_getCountOrder"></a>

> Code samples

```javascript
fetch('/dashboard/count-order', {
  method: 'GET',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`GET /dashboard/count-order`

<h3 id="dashboardcontroller_getcountorder-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## PaymentController_paymentDisplay

<a id="opIdPaymentController_paymentDisplay"></a>

> Code samples

```javascript
fetch('/payments/create_payment_url', {
  method: 'GET',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`GET /payments/create_payment_url`

<h3 id="paymentcontroller_paymentdisplay-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## PaymentController_createPaymentUrl

<a id="opIdPaymentController_createPaymentUrl"></a>

> Code samples

```javascript
fetch('/payments/create_payment_url', {
  method: 'POST',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`POST /payments/create_payment_url`

<h3 id="paymentcontroller_createpaymenturl-responses">Responses</h3>

| Status | Meaning                                                      | Description | Schema |
| ------ | ------------------------------------------------------------ | ----------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## PaymentController_returnDisplay

<a id="opIdPaymentController_returnDisplay"></a>

> Code samples

```javascript
fetch('/payments/vnpay_return', {
  method: 'GET',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`GET /payments/vnpay_return`

<h3 id="paymentcontroller_returndisplay-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## PaymentController_displayError

<a id="opIdPaymentController_displayError"></a>

> Code samples

```javascript
fetch('/payments/error?message=string', {
  method: 'GET',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`GET /payments/error`

<h3 id="paymentcontroller_displayerror-parameters">Parameters</h3>

| Name    | In    | Type   | Required | Description |
| ------- | ----- | ------ | -------- | ----------- |
| message | query | string | true     | none        |

<h3 id="paymentcontroller_displayerror-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-swagger">Swagger</h1>

## SwaggerController_getSwaggerJson

<a id="opIdSwaggerController_getSwaggerJson"></a>

> Code samples

```javascript
fetch('/doc/json', {
  method: 'GET',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`GET /doc/json`

_Get Swagger JSON_

<h3 id="swaggercontroller_getswaggerjson-responses">Responses</h3>

| Status | Meaning                                                 | Description  | Schema |
| ------ | ------------------------------------------------------- | ------------ | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Swagger JSON | None   |

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-auth">auth</h1>

## AuthController_login

<a id="opIdAuthController_login"></a>

> Code samples

```javascript
const inputBody = '{
  "email": "string",
  "password": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/auth/login',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /auth/login`

_login user_

> Body parameter

```json
{
  "email": "string",
  "password": "string"
}
```

<h3 id="authcontroller_login-parameters">Parameters</h3>

| Name | In   | Type                        | Required | Description |
| ---- | ---- | --------------------------- | -------- | ----------- |
| body | body | [LoginDto](#schemalogindto) | true     | none        |

> Example responses

> 200 Response

```json
{
  "accessToken": "string",
  "user": {
    "id": 1,
    "firstName": "Phạm",
    "lastName": "Tới",
    "email": "toi@gmail.com",
    "genderId": "MALE",
    "roleId": "USER",
    "phoneNumber": "02838483",
    "image": "avatar.png",
    "dob": "19/5/2000",
    "statusId": "ON",
    "status": {},
    "token": "2392uehp1901",
    "isActiveEmail": false,
    "address": [{}],
    "voucherList": [{}],
    "createdAt": "2023-08-23T09:00:45.981Z",
    "updatedAt": "2023-08-23T09:00:45.981Z"
  }
}
```

<h3 id="authcontroller_login-responses">Responses</h3>

| Status | Meaning                                                         | Description  | Schema                                      |
| ------ | --------------------------------------------------------------- | ------------ | ------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)         | none         | [ResponseLoginDto](#schemaresponselogindto) |
| 401    | [Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1) | Unauthorized | None                                        |

<aside class="success">
This operation does not require authentication
</aside>

## AuthController_getAccessToken

<a id="opIdAuthController_getAccessToken"></a>

> Code samples

```javascript
const headers = {
  Accept: 'application/json',
};

fetch('/auth/refresh', {
  method: 'GET',

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`GET /auth/refresh`

_User get access token when it was expried_

> Example responses

> 200 Response

```json
{
  "accessToken": "string"
}
```

<h3 id="authcontroller_getaccesstoken-responses">Responses</h3>

| Status | Meaning                                                        | Description           | Schema                                                  |
| ------ | -------------------------------------------------------------- | --------------------- | ------------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | none                  | [ResponseRereshTokenDto](#schemaresponserereshtokendto) |
| 403    | [Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) | Somethings went wrong | None                                                    |

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None
</aside>

## AuthController_logout

<a id="opIdAuthController_logout"></a>

> Code samples

```javascript
fetch('/auth/logout', {
  method: 'PATCH',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`PATCH /auth/logout`

_User logout method_

<h3 id="authcontroller_logout-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | None   |

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None
</aside>

<h1 id="api-allcode">allcode</h1>

## AllcodeController_createTypeCode

<a id="opIdAllcodeController_createTypeCode"></a>

> Code samples

```javascript
const inputBody = 'undefined';
const headers = {
  'Content-Type': 'application/json',
};

fetch('/all-code', {
  method: 'POST',
  body: inputBody,
  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`POST /all-code`

_Admin create new allcode_

> Body parameter

```json
undefined
```

<h3 id="allcodecontroller_createtypecode-parameters">Parameters</h3>

| Name | In   | Type                            | Required | Description |
| ---- | ---- | ------------------------------- | -------- | ----------- |
| body | body | [AllcodeDto](#schemaallcodedto) | true     | none        |

<h3 id="allcodecontroller_createtypecode-responses">Responses</h3>

| Status | Meaning                                                         | Description                  | Schema |
| ------ | --------------------------------------------------------------- | ---------------------------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)    | The allcode has been created | None   |
| 401    | [Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1) | Unauthorized                 | None   |
| 403    | [Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)  | Forbidden                    | None   |

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None
</aside>

## AllcodeController_updateAllcode

<a id="opIdAllcodeController_updateAllcode"></a>

> Code samples

```javascript
const inputBody = '{
  "type": "string",
  "value": "string",
  "code": "string",
  "parentCode": "string",
  "hexCode": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/all-code',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`PUT /all-code`

_Admin update allcode_

> Body parameter

```json
{
  "type": "string",
  "value": "string",
  "code": "string",
  "parentCode": "string",
  "hexCode": "string"
}
```

<h3 id="allcodecontroller_updateallcode-parameters">Parameters</h3>

| Name | In   | Type                            | Required | Description   |
| ---- | ---- | ------------------------------- | -------- | ------------- |
| id   | path | number                          | true     | Id of allcode |
| body | body | [AllcodeDto](#schemaallcodedto) | true     | none          |

> Example responses

> 201 Response

```json
{
  "message": "string",
  "err": true
}
```

<h3 id="allcodecontroller_updateallcode-responses">Responses</h3>

| Status | Meaning                                                         | Description  | Schema                                          |
| ------ | --------------------------------------------------------------- | ------------ | ----------------------------------------------- |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)    | none         | [ResponseWithErrDto](#schemaresponsewitherrdto) |
| 401    | [Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1) | Unauthorized | None                                            |
| 403    | [Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)  | Forbidden    | None                                            |

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None
</aside>

## AllcodeController_getAllCodeByType

<a id="opIdAllcodeController_getAllCodeByType"></a>

> Code samples

```javascript
const headers = {
  Accept: 'application/json',
};

fetch('/all-code/{type}', {
  method: 'GET',

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`GET /all-code/{type}`

_User get allcodes by type_

<h3 id="allcodecontroller_getallcodebytype-parameters">Parameters</h3>

| Name | In   | Type   | Required | Description  |
| ---- | ---- | ------ | -------- | ------------ |
| type | path | string | true     | Type allcode |

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "type": "string",
      "value": "string",
      "code": "string",
      "parentCode": "string",
      "hexCode": "string"
    }
  ],
  "meta": {
    "current": 1,
    "size": 10,
    "totalItems": 100
  }
}
```

<h3 id="allcodecontroller_getallcodebytype-responses">Responses</h3>

| Status | Meaning                                                        | Description                    | Schema                                                |
| ------ | -------------------------------------------------------------- | ------------------------------ | ----------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | List and pagination of allcode | [AllcodeApiResponseDto](#schemaallcodeapiresponsedto) |
| 403    | [Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) | Forbidden                      | None                                                  |

<aside class="success">
This operation does not require authentication
</aside>

## AllcodeController_deleteAllcode

<a id="opIdAllcodeController_deleteAllcode"></a>

> Code samples

```javascript
fetch('/all-code/{id}', {
  method: 'DELETE',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`DELETE /all-code/{id}`

<h3 id="allcodecontroller_deleteallcode-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-banners">banners</h1>

## BannerController_createBanner

<a id="opIdBannerController_createBanner"></a>

> Code samples

```javascript
const inputBody = '{
  "description": "string",
  "name": "string",
  "statusId": "string",
  "image": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/banner',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /banner`

_Create new banner_

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "statusId": "string",
  "image": "string"
}
```

<h3 id="bannercontroller_createbanner-parameters">Parameters</h3>

| Name | In   | Type                          | Required | Description |
| ---- | ---- | ----------------------------- | -------- | ----------- |
| body | body | [BannerDto](#schemabannerdto) | true     | none        |

> Example responses

> 201 Response

```json
{
  "message": "string"
}
```

<h3 id="bannercontroller_createbanner-responses">Responses</h3>

| Status | Meaning                                                        | Description | Schema                                        |
| ------ | -------------------------------------------------------------- | ----------- | --------------------------------------------- |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)   | none        | [ResponseCommonDto](#schemaresponsecommondto) |
| 403    | [Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) | none        | None                                          |

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None
</aside>

## BannerController_getAllBanner

<a id="opIdBannerController_getAllBanner"></a>

> Code samples

```javascript
const headers = {
  Accept: 'application/json',
};

fetch('/banner', {
  method: 'GET',

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`GET /banner`

_Get all banner_

<h3 id="bannercontroller_getallbanner-parameters">Parameters</h3>

| Name      | In    | Type   | Required | Description |
| --------- | ----- | ------ | -------- | ----------- |
| statusId  | query | string | false    | none        |
| page      | query | number | false    | none        |
| size      | query | number | false    | none        |
| updatedAt | query | string | false    | none        |

#### Enumerated Values

| Parameter | Value |
| --------- | ----- |
| updatedAt | DESC  |
| updatedAt | ASC   |

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": 0,
      "description": "string",
      "name": "string",
      "statusId": "string",
      "status": {
        "type": "string",
        "value": "string",
        "code": "string",
        "parentCode": "string",
        "hexCode": "string"
      },
      "image": "string",
      "createdAt": "2019-08-24T14:15:22Z",
      "updatedAt": "2019-08-24T14:15:22Z"
    }
  ],
  "meta": {
    "current": 1,
    "size": 10,
    "totalItems": 100
  }
}
```

<h3 id="bannercontroller_getallbanner-responses">Responses</h3>

| Status | Meaning                                                        | Description | Schema                                              |
| ------ | -------------------------------------------------------------- | ----------- | --------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | none        | [BannerApiResponseDto](#schemabannerapiresponsedto) |
| 403    | [Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) | none        | None                                                |

<aside class="success">
This operation does not require authentication
</aside>

## BannerController_updateBanner

<a id="opIdBannerController_updateBanner"></a>

> Code samples

```javascript
const inputBody = '{
  "description": "string",
  "name": "string",
  "statusId": "string",
  "image": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/banner/{id}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`PUT /banner/{id}`

_Update banner by id_

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "statusId": "string",
  "image": "string"
}
```

<h3 id="bannercontroller_updatebanner-parameters">Parameters</h3>

| Name | In   | Type                          | Required | Description |
| ---- | ---- | ----------------------------- | -------- | ----------- |
| id   | path | number                        | true     | none        |
| body | body | [BannerDto](#schemabannerdto) | true     | none        |

> Example responses

> 201 Response

```json
{
  "message": "string"
}
```

<h3 id="bannercontroller_updatebanner-responses">Responses</h3>

| Status | Meaning                                                        | Description | Schema                                        |
| ------ | -------------------------------------------------------------- | ----------- | --------------------------------------------- |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)   | none        | [ResponseCommonDto](#schemaresponsecommondto) |
| 403    | [Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) | none        | None                                          |

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None
</aside>

## BannerController_deleteBanner

<a id="opIdBannerController_deleteBanner"></a>

> Code samples

```javascript
fetch('/banner/{id}', {
  method: 'DELETE',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`DELETE /banner/{id}`

<h3 id="bannercontroller_deletebanner-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-blogs">blogs</h1>

## BlogController_createBlog

<a id="opIdBlogController_createBlog"></a>

> Code samples

```javascript
const inputBody = '{
  "title": "string",
  "shortDescription": "string",
  "subjectId": "string",
  "statusId": "string",
  "images": [
    "string"
  ],
  "contentMarkdown": "string",
  "userId": 0
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/blog',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /blog`

_Create new Blog_

> Body parameter

```json
{
  "title": "string",
  "shortDescription": "string",
  "subjectId": "string",
  "statusId": "string",
  "images": ["string"],
  "contentMarkdown": "string",
  "userId": 0
}
```

<h3 id="blogcontroller_createblog-parameters">Parameters</h3>

| Name | In   | Type                      | Required | Description      |
| ---- | ---- | ------------------------- | -------- | ---------------- |
| body | body | [BlogDto](#schemablogdto) | true     | blog information |

> Example responses

> 201 Response

```json
{
  "message": "string"
}
```

<h3 id="blogcontroller_createblog-responses">Responses</h3>

| Status | Meaning                                                         | Description           | Schema                                        |
| ------ | --------------------------------------------------------------- | --------------------- | --------------------------------------------- |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)    | none                  | [ResponseCommonDto](#schemaresponsecommondto) |
| 401    | [Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1) | Unauthorized!         | None                                          |
| 403    | [Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)  | Somethings went wrong | None                                          |

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None
</aside>

## BlogController_searchBlogs

<a id="opIdBlogController_searchBlogs"></a>

> Code samples

```javascript
const headers = {
  Accept: 'application/json',
};

fetch('/blog', {
  method: 'GET',

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`GET /blog`

_Search blog by query_

<h3 id="blogcontroller_searchblogs-parameters">Parameters</h3>

| Name      | In    | Type    | Required | Description |
| --------- | ----- | ------- | -------- | ----------- |
| page      | query | number  | false    | none        |
| size      | query | number  | false    | none        |
| name      | query | string  | false    | none        |
| statusId  | query | string  | false    | none        |
| subjectId | query | string  | false    | none        |
| notDel    | query | boolean | false    | none        |

> Example responses

> 200 Response

```json
{
  "data": [{}],
  "meta": {
    "current": 1,
    "size": 10,
    "totalItems": {
      "items": 4
    }
  }
}
```

<h3 id="blogcontroller_searchblogs-responses">Responses</h3>

| Status | Meaning                                                        | Description | Schema                                          |
| ------ | -------------------------------------------------------------- | ----------- | ----------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | none        | [BlogApiResponseDto](#schemablogapiresponsedto) |
| 403    | [Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) | none        | None                                            |

<aside class="success">
This operation does not require authentication
</aside>

## BlogController_updateBlog

<a id="opIdBlogController_updateBlog"></a>

> Code samples

```javascript
const inputBody = '{
  "title": "string",
  "shortDescription": "string",
  "subjectId": "string",
  "statusId": "string",
  "images": [
    "string"
  ],
  "contentMarkdown": "string",
  "userId": 0
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/blog/{id}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`PUT /blog/{id}`

_Updateblog_

> Body parameter

```json
{
  "title": "string",
  "shortDescription": "string",
  "subjectId": "string",
  "statusId": "string",
  "images": ["string"],
  "contentMarkdown": "string",
  "userId": 0
}
```

<h3 id="blogcontroller_updateblog-parameters">Parameters</h3>

| Name | In   | Type                      | Required | Description |
| ---- | ---- | ------------------------- | -------- | ----------- |
| body | body | [BlogDto](#schemablogdto) | true     | none        |

<h3 id="blogcontroller_updateblog-responses">Responses</h3>

| Status  | Meaning | Description | Schema |
| ------- | ------- | ----------- | ------ |
| default | Default | none        | None   |

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None
</aside>

## BlogController_getBlogDetail

<a id="opIdBlogController_getBlogDetail"></a>

> Code samples

```javascript
fetch('/blog/{id}', {
  method: 'GET',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`GET /blog/{id}`

<h3 id="blogcontroller_getblogdetail-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

## BlogController_deleteBlog

<a id="opIdBlogController_deleteBlog"></a>

> Code samples

```javascript
fetch('/blog/{id}', {
  method: 'DELETE',
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`DELETE /blog/{id}`

<h3 id="blogcontroller_deleteblog-responses">Responses</h3>

| Status | Meaning                                                 | Description | Schema |
| ------ | ------------------------------------------------------- | ----------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | none        | None   |

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-orders">Orders</h1>

## OrderController_createOrder

<a id="opIdOrderController_createOrder"></a>

> Code samples

```javascript
const inputBody = '{
  "addressUserId": 0,
  "statusId": "string",
  "typeShipId": 0,
  "voucherCode": "string",
  "note": "string",
  "isPaymentOnline": true,
  "type": "PAYMENT"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/order',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`POST /order`

_User create new order _

> Body parameter

```json
{
  "addressUserId": 0,
  "statusId": "string",
  "typeShipId": 0,
  "voucherCode": "string",
  "note": "string",
  "isPaymentOnline": true,
  "type": "PAYMENT"
}
```

<h3 id="ordercontroller_createorder-parameters">Parameters</h3>

| Name | In   | Type                        | Required | Description |
| ---- | ---- | --------------------------- | -------- | ----------- |
| body | body | [OrderDto](#schemaorderdto) | true     | none        |

> Example responses

> 201 Response

```json
{
  "id": 0,
  "addressUser": [{}],
  "addressUserId": 0,
  "statusId": "string",
  "typeShip": {
    "id": 0,
    "typeId": "string",
    "type": {},
    "price": 0,
    "createdAt": "2019-08-24T14:15:22Z",
    "updatedAt": "2019-08-24T14:15:22Z"
  },
  "typeShipId": 0,
  "voucher": {
    "id": 1,
    "fromDate": "30/7/2023",
    "toDate": "30/8/2023",
    "typeVoucher": {},
    "typeVoucherId": 1,
    "amount": 10,
    "addToUserAmount": 2,
    "statusId": "ACTIVE",
    "usedAmount": 2,
    "codeVoucher": "HOLIDAY",
    "createdAt": "2023-08-23T09:00:45.976Z",
    "updatedAt": "2023-08-23T09:00:45.976Z"
  },
  "orderDetails": [{}],
  "voucherId": 0,
  "totalPrice": 0,
  "note": "string",
  "isPaymentOnline": true,
  "createdAt": "2019-08-24T14:15:22Z",
  "updatedAt": "2019-08-24T14:15:22Z"
}
```

<h3 id="ordercontroller_createorder-responses">Responses</h3>

| Status | Meaning                                                         | Description             | Schema                |
| ------ | --------------------------------------------------------------- | ----------------------- | --------------------- |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)    | none                    | [Order](#schemaorder) |
| 401    | [Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1) | Unauthorized            | None                  |
| 403    | [Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)  | Some things wwent wrong | None                  |

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None
</aside>

## OrderController_getAllOrder

<a id="opIdOrderController_getAllOrder"></a>

> Code samples

```javascript
const headers = {
  Accept: 'application/json',
};

fetch('/order', {
  method: 'GET',

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`GET /order`

_User get order_

<h3 id="ordercontroller_getallorder-parameters">Parameters</h3>

| Name           | In    | Type   | Required | Description |
| -------------- | ----- | ------ | -------- | ----------- |
| statusId       | query | string | false    | none        |
| userId         | query | number | false    | none        |
| sortcreatedAt  | query | string | false    | none        |
| sortupdatedAt  | query | string | false    | none        |
| sorttotalPrice | query | string | false    | none        |
| page           | query | number | false    | none        |
| size           | query | number | false    | none        |

#### Enumerated Values

| Parameter | Value                 |
| --------- | --------------------- |
| statusId  | WAIT_FOR_COMFIRMATION |
| statusId  | WAIT_FOR_PAYMENT      |
| statusId  | DELIVERING            |
| statusId  | DELIVERED             |
| statusId  | CANCEL                |

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": 0,
      "addressUser": [{}],
      "addressUserId": 0,
      "statusId": "string",
      "typeShip": {
        "id": 0,
        "typeId": "string",
        "type": {},
        "price": 0,
        "createdAt": "2019-08-24T14:15:22Z",
        "updatedAt": "2019-08-24T14:15:22Z"
      },
      "typeShipId": 0,
      "voucher": {
        "id": 1,
        "fromDate": "30/7/2023",
        "toDate": "30/8/2023",
        "typeVoucher": {},
        "typeVoucherId": 1,
        "amount": 10,
        "addToUserAmount": 2,
        "statusId": "ACTIVE",
        "usedAmount": 2,
        "codeVoucher": "HOLIDAY",
        "createdAt": "2023-08-23T09:00:45.976Z",
        "updatedAt": "2023-08-23T09:00:45.976Z"
      },
      "orderDetails": [{}],
      "voucherId": 0,
      "totalPrice": 0,
      "note": "string",
      "isPaymentOnline": true,
      "createdAt": "2019-08-24T14:15:22Z",
      "updatedAt": "2019-08-24T14:15:22Z"
    }
  ],
  "meta": {
    "current": 1,
    "size": 10,
    "totalItems": 100
  }
}
```

<h3 id="ordercontroller_getallorder-responses">Responses</h3>

| Status | Meaning                                                        | Description             | Schema                                            |
| ------ | -------------------------------------------------------------- | ----------------------- | ------------------------------------------------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | none                    | [OrderApiResponseDto](#schemaorderapiresponsedto) |
| 403    | [Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) | Some things wwent wrong | None                                              |

<aside class="success">
This operation does not require authentication
</aside>

## OrderController_changeorderStatus

<a id="opIdOrderController_changeorderStatus"></a>

> Code samples

```javascript
const inputBody = '{
  "statusId": "WAIT_FOR_COMFIRMATION"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/order/change-status/{id}',
{
  method: 'PATCH',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

`PATCH /order/change-status/{id}`

_Admin change status order_

> Body parameter

```json
{
  "statusId": "WAIT_FOR_COMFIRMATION"
}
```

<h3 id="ordercontroller_changeorderstatus-parameters">Parameters</h3>

| Name | In   | Type                                      | Required | Description |
| ---- | ---- | ----------------------------------------- | -------- | ----------- |
| id   | path | number                                    | true     | none        |
| body | body | [ChangeStatusDto](#schemachangestatusdto) | true     | none        |

> Example responses

> 201 Response

```json
{
  "message": "string"
}
```

<h3 id="ordercontroller_changeorderstatus-responses">Responses</h3>

| Status | Meaning                                                         | Description             | Schema                                        |
| ------ | --------------------------------------------------------------- | ----------------------- | --------------------------------------------- |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)    | none                    | [ResponseCommonDto](#schemaresponsecommondto) |
| 401    | [Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1) | Unauthorized            | None                                          |
| 403    | [Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)  | Some things wwent wrong | None                                          |

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None
</aside>

## OrderController_cancelOrder

<a id="opIdOrderController_cancelOrder"></a>

> Code samples

```javascript
const headers = {
  Accept: 'application/json',
};

fetch('/order/cancel/{id}', {
  method: 'PATCH',

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`PATCH /order/cancel/{id}`

_User cancel order_

<h3 id="ordercontroller_cancelorder-parameters">Parameters</h3>

| Name | In   | Type   | Required | Description |
| ---- | ---- | ------ | -------- | ----------- |
| id   | path | number | true     | none        |

> Example responses

> 201 Response

```json
{
  "message": "string"
}
```

<h3 id="ordercontroller_cancelorder-responses">Responses</h3>

| Status | Meaning                                                         | Description             | Schema                                        |
| ------ | --------------------------------------------------------------- | ----------------------- | --------------------------------------------- |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)    | none                    | [ResponseCommonDto](#schemaresponsecommondto) |
| 401    | [Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1) | Unauthorized            | None                                          |
| 403    | [Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)  | Some things wwent wrong | None                                          |

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None
</aside>

## OrderController_getAllTypeShip

<a id="opIdOrderController_getAllTypeShip"></a>

> Code samples

```javascript
const headers = {
  Accept: 'application/json',
};

fetch('/order/type-ship', {
  method: 'GET',

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`GET /order/type-ship`

_User get all type ship_

> Example responses

> 200 Response

```json
[
  {
    "id": 0,
    "typeId": "string",
    "type": {},
    "price": 0,
    "createdAt": "2019-08-24T14:15:22Z",
    "updatedAt": "2019-08-24T14:15:22Z"
  }
]
```

<h3 id="ordercontroller_getalltypeship-responses">Responses</h3>

| Status | Meaning                                                        | Description           | Schema |
| ------ | -------------------------------------------------------------- | --------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | none                  | Inline |
| 403    | [Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) | Somethings went wrong | None   |

<h3 id="ordercontroller_getalltypeship-responseschema">Response Schema</h3>

Status Code **200**

| Name        | Type                          | Required | Restrictions | Description |
| ----------- | ----------------------------- | -------- | ------------ | ----------- |
| _anonymous_ | [[TypeShip](#schematypeship)] | false    | none         | none        |
| » id        | number                        | true     | none         | none        |
| » typeId    | string                        | true     | none         | none        |
| » type      | [Allcode](#schemaallcode)     | true     | none         | none        |
| » price     | number                        | true     | none         | none        |
| » createdAt | string(date-time)             | true     | none         | none        |
| » updatedAt | string(date-time)             | true     | none         | none        |

<aside class="success">
This operation does not require authentication
</aside>

## OrderController_getOrderById

<a id="opIdOrderController_getOrderById"></a>

> Code samples

```javascript
const headers = {
  Accept: 'application/json',
};

fetch('/order/{id}', {
  method: 'GET',

  headers: headers,
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

`GET /order/{id}`

_Get detail order_

<h3 id="ordercontroller_getorderbyid-parameters">Parameters</h3>

| Name | In   | Type   | Required | Description |
| ---- | ---- | ------ | -------- | ----------- |
| id   | path | number | true     | none        |

> Example responses

> default Response

```json
{
  "id": 0,
  "addressUser": [{}],
  "addressUserId": 0,
  "statusId": "string",
  "typeShip": {
    "id": 0,
    "typeId": "string",
    "type": {},
    "price": 0,
    "createdAt": "2019-08-24T14:15:22Z",
    "updatedAt": "2019-08-24T14:15:22Z"
  },
  "typeShipId": 0,
  "voucher": {
    "id": 1,
    "fromDate": "30/7/2023",
    "toDate": "30/8/2023",
    "typeVoucher": {},
    "typeVoucherId": 1,
    "amount": 10,
    "addToUserAmount": 2,
    "statusId": "ACTIVE",
    "usedAmount": 2,
    "codeVoucher": "HOLIDAY",
    "createdAt": "2023-08-23T09:00:45.976Z",
    "updatedAt": "2023-08-23T09:00:45.976Z"
  },
  "orderDetails": [{}],
  "voucherId": 0,
  "totalPrice": 0,
  "note": "string",
  "isPaymentOnline": true,
  "createdAt": "2019-08-24T14:15:22Z",
  "updatedAt": "2019-08-24T14:15:22Z"
}
```

<h3 id="ordercontroller_getorderbyid-responses">Responses</h3>

| Status  | Meaning                                                        | Description             | Schema                |
| ------- | -------------------------------------------------------------- | ----------------------- | --------------------- |
| 403     | [Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3) | Some things wwent wrong | None                  |
| default | Default                                                        | none                    | [Order](#schemaorder) |

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
  "email": "string",
  "password": "string"
}
```

### Properties

| Name     | Type   | Required | Restrictions | Description |
| -------- | ------ | -------- | ------------ | ----------- |
| email    | string | true     | none         | none        |
| password | string | true     | none         | none        |

<h2 id="tocS_AllcodeDto">AllcodeDto</h2>
<!-- backwards compatibility -->
<a id="schemaallcodedto"></a>
<a id="schema_AllcodeDto"></a>
<a id="tocSallcodedto"></a>
<a id="tocsallcodedto"></a>

```json
{
  "type": "string",
  "value": "string",
  "code": "string",
  "parentCode": "string",
  "hexCode": "string"
}
```

### Properties

| Name       | Type   | Required | Restrictions | Description |
| ---------- | ------ | -------- | ------------ | ----------- |
| type       | string | true     | none         | none        |
| value      | string | true     | none         | none        |
| code       | string | true     | none         | none        |
| parentCode | string | true     | none         | none        |
| hexCode    | string | true     | none         | none        |

<h2 id="tocS_UserAddress">UserAddress</h2>
<!-- backwards compatibility -->
<a id="schemauseraddress"></a>
<a id="schema_UserAddress"></a>
<a id="tocSuseraddress"></a>
<a id="tocsuseraddress"></a>

```json
{}
```

### Properties

_None_

<h2 id="tocS_TypeVoucher">TypeVoucher</h2>
<!-- backwards compatibility -->
<a id="schematypevoucher"></a>
<a id="schema_TypeVoucher"></a>
<a id="tocStypevoucher"></a>
<a id="tocstypevoucher"></a>

```json
{}
```

### Properties

_None_

<h2 id="tocS_Voucher">Voucher</h2>
<!-- backwards compatibility -->
<a id="schemavoucher"></a>
<a id="schema_Voucher"></a>
<a id="tocSvoucher"></a>
<a id="tocsvoucher"></a>

```json
{
  "id": 1,
  "fromDate": "30/7/2023",
  "toDate": "30/8/2023",
  "typeVoucher": {},
  "typeVoucherId": 1,
  "amount": 10,
  "addToUserAmount": 2,
  "statusId": "ACTIVE",
  "usedAmount": 2,
  "codeVoucher": "HOLIDAY",
  "createdAt": "2023-08-23T09:00:45.976Z",
  "updatedAt": "2023-08-23T09:00:45.976Z"
}
```

### Properties

| Name            | Type                              | Required | Restrictions | Description                                       |
| --------------- | --------------------------------- | -------- | ------------ | ------------------------------------------------- |
| id              | number                            | true     | none         | Voucher id                                        |
| fromDate        | string                            | true     | none         | Voucher active from date                          |
| toDate          | string                            | true     | none         | Voucher active to date                            |
| typeVoucher     | [TypeVoucher](#schematypevoucher) | true     | none         | Type of voucher                                   |
| typeVoucherId   | number                            | true     | none         | id of type voucher                                |
| amount          | number                            | true     | none         | Total voucher can be used                         |
| addToUserAmount | number                            | true     | none         | A count of user add voucher to user's voucherList |
| statusId        | string                            | true     | none         | Status Id of voucher                              |
| usedAmount      | number                            | true     | none         | Total numer of vocher which user have to use      |
| codeVoucher     | string                            | true     | none         | Enter this code to use in user's order            |
| createdAt       | string(date-time)                 | true     | none         | Voucher created at the date                       |
| updatedAt       | string(date-time)                 | true     | none         | Voucher updated at the date                       |

#### Enumerated Values

| Property | Value    |
| -------- | -------- |
| statusId | ACTIVE   |
| statusId | INACTIVE |
| statusId | DELETED  |
| statusId | DRAFT    |

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "id": 1,
  "firstName": "Phạm",
  "lastName": "Tới",
  "email": "toi@gmail.com",
  "genderId": "MALE",
  "roleId": "USER",
  "phoneNumber": "02838483",
  "image": "avatar.png",
  "dob": "19/5/2000",
  "statusId": "ON",
  "status": {},
  "token": "2392uehp1901",
  "isActiveEmail": false,
  "address": [{}],
  "voucherList": [{}],
  "createdAt": "2023-08-23T09:00:45.981Z",
  "updatedAt": "2023-08-23T09:00:45.981Z"
}
```

### Properties

| Name          | Type                                | Required | Restrictions | Description              |
| ------------- | ----------------------------------- | -------- | ------------ | ------------------------ |
| id            | number                              | true     | none         | User Id                  |
| firstName     | string                              | true     | none         | User firstname           |
| lastName      | string                              | true     | none         | User lastname            |
| email         | string                              | true     | none         | User email               |
| genderId      | string                              | true     | none         | User genderId            |
| roleId        | string                              | true     | none         | User RoleId              |
| phoneNumber   | string                              | true     | none         | User phone number        |
| image         | string                              | true     | none         | User avatar              |
| dob           | string                              | true     | none         | User date of birth       |
| statusId      | string                              | true     | none         | User statusId            |
| status        | [AllcodeDto](#schemaallcodedto)     | true     | none         | User status              |
| token         | string                              | true     | none         | User token               |
| isActiveEmail | boolean                             | true     | none         | User active email        |
| address       | [[UserAddress](#schemauseraddress)] | true     | none         | User list address        |
| voucherList   | [[Voucher](#schemavoucher)]         | true     | none         | User list vouchers       |
| createdAt     | string(date-time)                   | true     | none         | User created at the date |
| updatedAt     | string(date-time)                   | true     | none         | User updated at the date |

#### Enumerated Values

| Property | Value |
| -------- | ----- |
| statusId | ON    |
| statusId | OFF   |
| statusId | BLOCK |

<h2 id="tocS_ResponseLoginDto">ResponseLoginDto</h2>
<!-- backwards compatibility -->
<a id="schemaresponselogindto"></a>
<a id="schema_ResponseLoginDto"></a>
<a id="tocSresponselogindto"></a>
<a id="tocsresponselogindto"></a>

```json
{
  "accessToken": "string",
  "user": {
    "id": 1,
    "firstName": "Phạm",
    "lastName": "Tới",
    "email": "toi@gmail.com",
    "genderId": "MALE",
    "roleId": "USER",
    "phoneNumber": "02838483",
    "image": "avatar.png",
    "dob": "19/5/2000",
    "statusId": "ON",
    "status": {},
    "token": "2392uehp1901",
    "isActiveEmail": false,
    "address": [{}],
    "voucherList": [{}],
    "createdAt": "2023-08-23T09:00:45.981Z",
    "updatedAt": "2023-08-23T09:00:45.981Z"
  }
}
```

### Properties

| Name        | Type                | Required | Restrictions | Description |
| ----------- | ------------------- | -------- | ------------ | ----------- |
| accessToken | string              | true     | none         | none        |
| user        | [User](#schemauser) | true     | none         | none        |

<h2 id="tocS_ResponseRereshTokenDto">ResponseRereshTokenDto</h2>
<!-- backwards compatibility -->
<a id="schemaresponserereshtokendto"></a>
<a id="schema_ResponseRereshTokenDto"></a>
<a id="tocSresponserereshtokendto"></a>
<a id="tocsresponserereshtokendto"></a>

```json
{
  "accessToken": "string"
}
```

### Properties

| Name        | Type   | Required | Restrictions | Description |
| ----------- | ------ | -------- | ------------ | ----------- |
| accessToken | string | true     | none         | none        |

<h2 id="tocS_UserDto">UserDto</h2>
<!-- backwards compatibility -->
<a id="schemauserdto"></a>
<a id="schema_UserDto"></a>
<a id="tocSuserdto"></a>
<a id="tocsuserdto"></a>

```json
{}
```

### Properties

_None_

<h2 id="tocS_UserAddressDto">UserAddressDto</h2>
<!-- backwards compatibility -->
<a id="schemauseraddressdto"></a>
<a id="schema_UserAddressDto"></a>
<a id="tocSuseraddressdto"></a>
<a id="tocsuseraddressdto"></a>

```json
{
  "userId": 0,
  "shipName": "string",
  "statusId": "string",
  "shipAddress": "string",
  "shipPhoneNumber": "string",
  "shipEmail": "string"
}
```

### Properties

| Name            | Type   | Required | Restrictions | Description |
| --------------- | ------ | -------- | ------------ | ----------- |
| userId          | number | true     | none         | none        |
| shipName        | string | true     | none         | none        |
| statusId        | string | true     | none         | none        |
| shipAddress     | string | true     | none         | none        |
| shipPhoneNumber | string | true     | none         | none        |
| shipEmail       | string | true     | none         | none        |

<h2 id="tocS_UpdateUserDto">UpdateUserDto</h2>
<!-- backwards compatibility -->
<a id="schemaupdateuserdto"></a>
<a id="schema_UpdateUserDto"></a>
<a id="tocSupdateuserdto"></a>
<a id="tocsupdateuserdto"></a>

```json
{}
```

### Properties

_None_

<h2 id="tocS_TypeVoucherDto">TypeVoucherDto</h2>
<!-- backwards compatibility -->
<a id="schematypevoucherdto"></a>
<a id="schema_TypeVoucherDto"></a>
<a id="tocStypevoucherdto"></a>
<a id="tocstypevoucherdto"></a>

```json
{}
```

### Properties

_None_

<h2 id="tocS_ProductDto">ProductDto</h2>
<!-- backwards compatibility -->
<a id="schemaproductdto"></a>
<a id="schema_ProductDto"></a>
<a id="tocSproductdto"></a>
<a id="tocsproductdto"></a>

```json
{}
```

### Properties

_None_

<h2 id="tocS_ProductDetail">ProductDetail</h2>
<!-- backwards compatibility -->
<a id="schemaproductdetail"></a>
<a id="schema_ProductDetail"></a>
<a id="tocSproductdetail"></a>
<a id="tocsproductdetail"></a>

```json
{}
```

### Properties

_None_

<h2 id="tocS_ProductDetailDto">ProductDetailDto</h2>
<!-- backwards compatibility -->
<a id="schemaproductdetaildto"></a>
<a id="schema_ProductDetailDto"></a>
<a id="tocSproductdetaildto"></a>
<a id="tocsproductdetaildto"></a>

```json
{}
```

### Properties

_None_

<h2 id="tocS_AllcodeApiResponseDto">AllcodeApiResponseDto</h2>
<!-- backwards compatibility -->
<a id="schemaallcodeapiresponsedto"></a>
<a id="schema_AllcodeApiResponseDto"></a>
<a id="tocSallcodeapiresponsedto"></a>
<a id="tocsallcodeapiresponsedto"></a>

```json
{
  "data": [
    {
      "type": "string",
      "value": "string",
      "code": "string",
      "parentCode": "string",
      "hexCode": "string"
    }
  ],
  "meta": {
    "current": 1,
    "size": 10,
    "totalItems": 100
  }
}
```

### Properties

| Name | Type                              | Required | Restrictions | Description |
| ---- | --------------------------------- | -------- | ------------ | ----------- |
| data | [[AllcodeDto](#schemaallcodedto)] | true     | none         | none        |
| meta | object                            | true     | none         | none        |

<h2 id="tocS_ResponseWithErrDto">ResponseWithErrDto</h2>
<!-- backwards compatibility -->
<a id="schemaresponsewitherrdto"></a>
<a id="schema_ResponseWithErrDto"></a>
<a id="tocSresponsewitherrdto"></a>
<a id="tocsresponsewitherrdto"></a>

```json
{
  "message": "string",
  "err": true
}
```

### Properties

| Name    | Type    | Required | Restrictions | Description |
| ------- | ------- | -------- | ------------ | ----------- |
| message | string  | true     | none         | none        |
| err     | boolean | true     | none         | none        |

<h2 id="tocS_BannerDto">BannerDto</h2>
<!-- backwards compatibility -->
<a id="schemabannerdto"></a>
<a id="schema_BannerDto"></a>
<a id="tocSbannerdto"></a>
<a id="tocsbannerdto"></a>

```json
{
  "description": "string",
  "name": "string",
  "statusId": "string",
  "image": "string"
}
```

### Properties

| Name        | Type   | Required | Restrictions | Description |
| ----------- | ------ | -------- | ------------ | ----------- |
| description | string | true     | none         | none        |
| name        | string | true     | none         | none        |
| statusId    | string | true     | none         | none        |
| image       | string | true     | none         | none        |

<h2 id="tocS_ResponseCommonDto">ResponseCommonDto</h2>
<!-- backwards compatibility -->
<a id="schemaresponsecommondto"></a>
<a id="schema_ResponseCommonDto"></a>
<a id="tocSresponsecommondto"></a>
<a id="tocsresponsecommondto"></a>

```json
{
  "message": "string"
}
```

### Properties

| Name    | Type   | Required | Restrictions | Description |
| ------- | ------ | -------- | ------------ | ----------- |
| message | string | true     | none         | none        |

<h2 id="tocS_Banner">Banner</h2>
<!-- backwards compatibility -->
<a id="schemabanner"></a>
<a id="schema_Banner"></a>
<a id="tocSbanner"></a>
<a id="tocsbanner"></a>

```json
{
  "id": 0,
  "description": "string",
  "name": "string",
  "statusId": "string",
  "status": {
    "type": "string",
    "value": "string",
    "code": "string",
    "parentCode": "string",
    "hexCode": "string"
  },
  "image": "string",
  "createdAt": "2019-08-24T14:15:22Z",
  "updatedAt": "2019-08-24T14:15:22Z"
}
```

### Properties

| Name        | Type                            | Required | Restrictions | Description |
| ----------- | ------------------------------- | -------- | ------------ | ----------- |
| id          | number                          | true     | none         | none        |
| description | string                          | true     | none         | none        |
| name        | string                          | true     | none         | none        |
| statusId    | string                          | true     | none         | none        |
| status      | [AllcodeDto](#schemaallcodedto) | true     | none         | none        |
| image       | string                          | true     | none         | none        |
| createdAt   | string(date-time)               | true     | none         | none        |
| updatedAt   | string(date-time)               | true     | none         | none        |

<h2 id="tocS_BannerApiResponseDto">BannerApiResponseDto</h2>
<!-- backwards compatibility -->
<a id="schemabannerapiresponsedto"></a>
<a id="schema_BannerApiResponseDto"></a>
<a id="tocSbannerapiresponsedto"></a>
<a id="tocsbannerapiresponsedto"></a>

```json
{
  "data": [
    {
      "id": 0,
      "description": "string",
      "name": "string",
      "statusId": "string",
      "status": {
        "type": "string",
        "value": "string",
        "code": "string",
        "parentCode": "string",
        "hexCode": "string"
      },
      "image": "string",
      "createdAt": "2019-08-24T14:15:22Z",
      "updatedAt": "2019-08-24T14:15:22Z"
    }
  ],
  "meta": {
    "current": 1,
    "size": 10,
    "totalItems": 100
  }
}
```

### Properties

| Name | Type                      | Required | Restrictions | Description |
| ---- | ------------------------- | -------- | ------------ | ----------- |
| data | [[Banner](#schemabanner)] | true     | none         | none        |
| meta | object                    | true     | none         | none        |

<h2 id="tocS_CommentDto">CommentDto</h2>
<!-- backwards compatibility -->
<a id="schemacommentdto"></a>
<a id="schema_CommentDto"></a>
<a id="tocScommentdto"></a>
<a id="tocscommentdto"></a>

```json
{}
```

### Properties

_None_

<h2 id="tocS_BlogDto">BlogDto</h2>
<!-- backwards compatibility -->
<a id="schemablogdto"></a>
<a id="schema_BlogDto"></a>
<a id="tocSblogdto"></a>
<a id="tocsblogdto"></a>

```json
{
  "title": "string",
  "shortDescription": "string",
  "subjectId": "string",
  "statusId": "string",
  "images": ["string"],
  "contentMarkdown": "string",
  "userId": 0
}
```

### Properties

| Name             | Type     | Required | Restrictions | Description |
| ---------------- | -------- | -------- | ------------ | ----------- |
| title            | string   | true     | none         | none        |
| shortDescription | string   | false    | none         | none        |
| subjectId        | string   | false    | none         | none        |
| statusId         | string   | false    | none         | none        |
| images           | [string] | false    | none         | none        |
| contentMarkdown  | string   | false    | none         | none        |
| userId           | number   | false    | none         | none        |

<h2 id="tocS_Blog">Blog</h2>
<!-- backwards compatibility -->
<a id="schemablog"></a>
<a id="schema_Blog"></a>
<a id="tocSblog"></a>
<a id="tocsblog"></a>

```json
{}
```

### Properties

_None_

<h2 id="tocS_BlogApiResponseDto">BlogApiResponseDto</h2>
<!-- backwards compatibility -->
<a id="schemablogapiresponsedto"></a>
<a id="schema_BlogApiResponseDto"></a>
<a id="tocSblogapiresponsedto"></a>
<a id="tocsblogapiresponsedto"></a>

```json
{
  "data": [{}],
  "meta": {
    "current": 1,
    "size": 10,
    "totalItems": {
      "items": 4
    }
  }
}
```

### Properties

| Name | Type                  | Required | Restrictions | Description |
| ---- | --------------------- | -------- | ------------ | ----------- |
| data | [[Blog](#schemablog)] | true     | none         | none        |
| meta | object                | true     | none         | none        |

<h2 id="tocS_OrderDto">OrderDto</h2>
<!-- backwards compatibility -->
<a id="schemaorderdto"></a>
<a id="schema_OrderDto"></a>
<a id="tocSorderdto"></a>
<a id="tocsorderdto"></a>

```json
{
  "addressUserId": 0,
  "statusId": "string",
  "typeShipId": 0,
  "voucherCode": "string",
  "note": "string",
  "isPaymentOnline": true,
  "type": "PAYMENT"
}
```

### Properties

| Name            | Type    | Required | Restrictions | Description |
| --------------- | ------- | -------- | ------------ | ----------- |
| addressUserId   | number  | true     | none         | none        |
| statusId        | string  | true     | none         | none        |
| typeShipId      | number  | true     | none         | none        |
| voucherCode     | string  | true     | none         | none        |
| note            | string  | true     | none         | none        |
| isPaymentOnline | boolean | true     | none         | none        |
| type            | string  | true     | none         | none        |

#### Enumerated Values

| Property | Value   |
| -------- | ------- |
| type     | PAYMENT |
| type     | COD     |

<h2 id="tocS_Allcode">Allcode</h2>
<!-- backwards compatibility -->
<a id="schemaallcode"></a>
<a id="schema_Allcode"></a>
<a id="tocSallcode"></a>
<a id="tocsallcode"></a>

```json
{}
```

### Properties

_None_

<h2 id="tocS_TypeShip">TypeShip</h2>
<!-- backwards compatibility -->
<a id="schematypeship"></a>
<a id="schema_TypeShip"></a>
<a id="tocStypeship"></a>
<a id="tocstypeship"></a>

```json
{
  "id": 0,
  "typeId": "string",
  "type": {},
  "price": 0,
  "createdAt": "2019-08-24T14:15:22Z",
  "updatedAt": "2019-08-24T14:15:22Z"
}
```

### Properties

| Name      | Type                      | Required | Restrictions | Description |
| --------- | ------------------------- | -------- | ------------ | ----------- |
| id        | number                    | true     | none         | none        |
| typeId    | string                    | true     | none         | none        |
| type      | [Allcode](#schemaallcode) | true     | none         | none        |
| price     | number                    | true     | none         | none        |
| createdAt | string(date-time)         | true     | none         | none        |
| updatedAt | string(date-time)         | true     | none         | none        |

<h2 id="tocS_OrderDetail">OrderDetail</h2>
<!-- backwards compatibility -->
<a id="schemaorderdetail"></a>
<a id="schema_OrderDetail"></a>
<a id="tocSorderdetail"></a>
<a id="tocsorderdetail"></a>

```json
{}
```

### Properties

_None_

<h2 id="tocS_Order">Order</h2>
<!-- backwards compatibility -->
<a id="schemaorder"></a>
<a id="schema_Order"></a>
<a id="tocSorder"></a>
<a id="tocsorder"></a>

```json
{
  "id": 0,
  "addressUser": [{}],
  "addressUserId": 0,
  "statusId": "string",
  "typeShip": {
    "id": 0,
    "typeId": "string",
    "type": {},
    "price": 0,
    "createdAt": "2019-08-24T14:15:22Z",
    "updatedAt": "2019-08-24T14:15:22Z"
  },
  "typeShipId": 0,
  "voucher": {
    "id": 1,
    "fromDate": "30/7/2023",
    "toDate": "30/8/2023",
    "typeVoucher": {},
    "typeVoucherId": 1,
    "amount": 10,
    "addToUserAmount": 2,
    "statusId": "ACTIVE",
    "usedAmount": 2,
    "codeVoucher": "HOLIDAY",
    "createdAt": "2023-08-23T09:00:45.976Z",
    "updatedAt": "2023-08-23T09:00:45.976Z"
  },
  "orderDetails": [{}],
  "voucherId": 0,
  "totalPrice": 0,
  "note": "string",
  "isPaymentOnline": true,
  "createdAt": "2019-08-24T14:15:22Z",
  "updatedAt": "2019-08-24T14:15:22Z"
}
```

### Properties

| Name            | Type                                | Required | Restrictions | Description |
| --------------- | ----------------------------------- | -------- | ------------ | ----------- |
| id              | number                              | true     | none         | none        |
| addressUser     | [[UserAddress](#schemauseraddress)] | true     | none         | none        |
| addressUserId   | number                              | true     | none         | none        |
| statusId        | string                              | true     | none         | none        |
| typeShip        | [TypeShip](#schematypeship)         | true     | none         | none        |
| typeShipId      | number                              | true     | none         | none        |
| voucher         | [Voucher](#schemavoucher)           | true     | none         | none        |
| orderDetails    | [[OrderDetail](#schemaorderdetail)] | true     | none         | none        |
| voucherId       | number                              | true     | none         | none        |
| totalPrice      | number                              | true     | none         | none        |
| note            | string                              | true     | none         | none        |
| isPaymentOnline | boolean                             | true     | none         | none        |
| createdAt       | string(date-time)                   | true     | none         | none        |
| updatedAt       | string(date-time)                   | true     | none         | none        |

<h2 id="tocS_ChangeStatusDto">ChangeStatusDto</h2>
<!-- backwards compatibility -->
<a id="schemachangestatusdto"></a>
<a id="schema_ChangeStatusDto"></a>
<a id="tocSchangestatusdto"></a>
<a id="tocschangestatusdto"></a>

```json
{
  "statusId": "WAIT_FOR_COMFIRMATION"
}
```

### Properties

| Name     | Type   | Required | Restrictions | Description |
| -------- | ------ | -------- | ------------ | ----------- |
| statusId | string | true     | none         | none        |

#### Enumerated Values

| Property | Value                 |
| -------- | --------------------- |
| statusId | WAIT_FOR_COMFIRMATION |
| statusId | WAIT_FOR_PAYMENT      |
| statusId | DELIVERING            |
| statusId | DELIVERED             |
| statusId | CANCEL                |

<h2 id="tocS_OrderApiResponseDto">OrderApiResponseDto</h2>
<!-- backwards compatibility -->
<a id="schemaorderapiresponsedto"></a>
<a id="schema_OrderApiResponseDto"></a>
<a id="tocSorderapiresponsedto"></a>
<a id="tocsorderapiresponsedto"></a>

```json
{
  "data": [
    {
      "id": 0,
      "addressUser": [{}],
      "addressUserId": 0,
      "statusId": "string",
      "typeShip": {
        "id": 0,
        "typeId": "string",
        "type": {},
        "price": 0,
        "createdAt": "2019-08-24T14:15:22Z",
        "updatedAt": "2019-08-24T14:15:22Z"
      },
      "typeShipId": 0,
      "voucher": {
        "id": 1,
        "fromDate": "30/7/2023",
        "toDate": "30/8/2023",
        "typeVoucher": {},
        "typeVoucherId": 1,
        "amount": 10,
        "addToUserAmount": 2,
        "statusId": "ACTIVE",
        "usedAmount": 2,
        "codeVoucher": "HOLIDAY",
        "createdAt": "2023-08-23T09:00:45.976Z",
        "updatedAt": "2023-08-23T09:00:45.976Z"
      },
      "orderDetails": [{}],
      "voucherId": 0,
      "totalPrice": 0,
      "note": "string",
      "isPaymentOnline": true,
      "createdAt": "2019-08-24T14:15:22Z",
      "updatedAt": "2019-08-24T14:15:22Z"
    }
  ],
  "meta": {
    "current": 1,
    "size": 10,
    "totalItems": 100
  }
}
```

### Properties

| Name | Type                    | Required | Restrictions | Description |
| ---- | ----------------------- | -------- | ------------ | ----------- |
| data | [[Order](#schemaorder)] | true     | none         | none        |
| meta | object                  | true     | none         | none        |

<h2 id="tocS_CartDetailDto">CartDetailDto</h2>
<!-- backwards compatibility -->
<a id="schemacartdetaildto"></a>
<a id="schema_CartDetailDto"></a>
<a id="tocScartdetaildto"></a>
<a id="tocscartdetaildto"></a>

```json
{}
```

### Properties

_None_

<h2 id="tocS_ReceiptDto">ReceiptDto</h2>
<!-- backwards compatibility -->
<a id="schemareceiptdto"></a>
<a id="schema_ReceiptDto"></a>
<a id="tocSreceiptdto"></a>
<a id="tocsreceiptdto"></a>

```json
{}
```

### Properties

_None_

<h2 id="tocS_ReceiptDetailDto">ReceiptDetailDto</h2>
<!-- backwards compatibility -->
<a id="schemareceiptdetaildto"></a>
<a id="schema_ReceiptDetailDto"></a>
<a id="tocSreceiptdetaildto"></a>
<a id="tocsreceiptdetaildto"></a>

```json
{}
```

### Properties

_None_

<h2 id="tocS_SupplierDto">SupplierDto</h2>
<!-- backwards compatibility -->
<a id="schemasupplierdto"></a>
<a id="schema_SupplierDto"></a>
<a id="tocSsupplierdto"></a>
<a id="tocssupplierdto"></a>

```json
{}
```

### Properties

_None_
