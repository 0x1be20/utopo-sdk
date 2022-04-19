# Utopo JS SDK

使用Utopo JS SDK,快速接入Utopo生态。

## install

```javascript
npm install utopo-sdk
```

## Usage

#### 初始化

```
import {Utopo} from 'utopo-sdk'

let sdk = Utopo.SDK({
    appid:'xxxxxx',
    callback:'http://xxxx'
})
```

#### web授权
```
sdk.webAuthorize()
```

