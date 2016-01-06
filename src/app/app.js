var app_shell_1 = require('./app-shell/app-shell');
var browser_1 = require("angular2/platform/browser");
var http_1 = require("angular2/http");
var router_1 = require('angular2/router');
browser_1.bootstrap(app_shell_1.AppShell, [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS]);
//# sourceMappingURL=app.js.map