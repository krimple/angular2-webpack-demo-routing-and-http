var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var MenuBar = (function () {
    function MenuBar() {
    }
    MenuBar = __decorate([
        core_1.Component({
            selector: 'menubar',
            template: "\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container\">\n\n   <ul class=\"nav navbar-nav navbar-right\">\n     <ng-content></ng-content>\n   </ul>\n   </div>\n   </nav>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], MenuBar);
    return MenuBar;
})();
exports.MenuBar = MenuBar;
//# sourceMappingURL=menubar.js.map