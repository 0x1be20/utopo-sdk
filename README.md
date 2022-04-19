# Utopo JS SDK

使用Utopo JS SDK,快速接入Utopo生态。

## install

```javascript
npm install utopo-sdk
```

## Usage

#### 初始化

```
import utopo from 'utopo-sdk'

let sdk = utopo({
    appid:'xxxxxx',
    callback:'http://xxxx'
})
```

#### web授权
```
sdk.webAuthorize()
```

