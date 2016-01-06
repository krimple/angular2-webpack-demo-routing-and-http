require('es6-shim');
require('es6-promise');
require('zone.js/lib/browser/zone-microtask');
if ('production' !== process.env.ENV) {
    require('es7-reflect-metadata/dist/browser');
    Error['stackTraceLimit'] = Infinity;
    Zone['longStackTraceZone'] = require('zone.js/lib/zones/long-stack-trace.js');
}
if ('production' === process.env.ENV) {
    var ngCore = require('angular2/core');
    ngCore.enableProdMode();
}
require('angular2/platform/browser');
require('angular2/platform/common_dom');
require('angular2/router');
require('angular2/http');
require('angular2/core');
require('rxjs');
require('jquery');
require('bootstrap/dist/css/bootstrap.css');
//# sourceMappingURL=vendor.js.map