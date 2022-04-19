import { ServerURL } from './constants';

export namespace Utopo{
    interface Config{
        appid:string;
        callback:string;
    }

    export class SDK{
        appid:string;
        callback:string;
        code:string;
        constructor(config:Config){
            this.appid = config.appid;
            this.callback = config.callback;
        }

        /**
         * 跳转到utopo进行授权，授权完成后带上code跳转至callback
         */
        webAuthorize():void{
            window.location.href=ServerURL+`/authorize?appid=${this.appid}&scope=userinfo&callback=${encodeURIComponent(this.callback)}`
        }

        /**
         * 使用钱包授权，授权完成后，返回一个code
         */
        // async walletAuthorize():Promise<string>{
            
        //     return "";
        // }

    }
}