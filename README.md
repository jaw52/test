# 动漫类网站

## JWT
#### 关于JWT

JWT 全称 JSON Web Token，是代替传统 session 认证的解决方案。其原理是服务端生成一个包含用户唯一标识的 JSON 对象，颁发给客户端。客户端请求需要权限的接口时，只要把这个 JSON 再原样发回给服务端，服务器通过解析就可识别用户。

如下

eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJuaW5naGFvLm5ldCIsImV4cCI6IjE0Mzg5NTU0NDUiLCJuYW1lIjoid2FuZ2hhbyIsImFkbWluIjp0cnVlfQ.SwyHTEx_RQppr97g4J5lKXtabJecpejuef8AqKYMAJc

#### 结构

 包含了请求头（加密算法）、负载信息（如 userId、过期时间），还有通过服务端密钥生成的签名来保证不被篡改 

```javascript
let payload = { nickname: result[0].nickname }//Token数据
//生成token
// jwt.sign是异步操作
//默认情况Token必须以'Bearer '开头，有空格
token = 'Bearer ' + jwt.sign(
 payload,
 'secret', {//'secret'为秘钥,采用对称加密
 expiresIn: 1000 * 60 * 60*24//token过期时间
})
```

#### 配置
```javascript
let expressJwt = require('express-jwt');
let jwt = require('jsonwebtoken');

app.use(expressJwt({
	secret: 'secret' //对称加密,publicKey
}).unless({
	path: ['/login','register']//免检测页面
}))
```

#### 获取解析内容

 当收到带 Token 的请求，如果解析成功，就可以在路由回调里通过 req.user 来访问 

```javascript
app.get('/protected', function (req, res) {
  if (!req.user.admin)
    return res.sendStatus(401)
  res.sendStatus(200)
})
```
