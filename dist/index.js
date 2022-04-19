"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
var Utopo;
(function (Utopo) {
    var SDK = /** @class */ (function () {
        function SDK(config) {
            this.appid = config.appid;
            this.callback = config.callback;
        }
        /**
         * 跳转到utopo进行授权，授权完成后带上code跳转至callback
         */
        SDK.prototype.webAuthorize = function () {
            window.location.href = constants_1.ServerURL + "/authorize?appid=".concat(this.appid, "&scope=userinfo&callback=").concat(encodeURIComponent(this.callback));
        };
        return SDK;
    }());
})(Utopo || (Utopo = {}));
//# sourceMappingURL=index.js.map