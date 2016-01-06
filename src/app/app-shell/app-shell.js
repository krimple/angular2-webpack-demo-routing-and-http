var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var container_1 = require('../bootstrap/containers/container');
var message_service_1 = require('../services/message-service');
var menubar_1 = require('../bootstrap/components/menubar/menubar');
var alert_1 = require('../bootstrap/components/alert/alert');
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var blog_roll_1 = require('../blog-roll/blog-roll');
var blog_editor_1 = require('../blog-editor/blog-editor');
var router_1 = require('angular2/router');
var AppShell = (function () {
    function AppShell(messageService) {
        this.messageService = messageService;
        this.messages = messageService.messages;
        messageService.add('this is on fire!');
    }
    AppShell = __decorate([
        core_1.Component({
            selector: 'app-shell',
            template: "\n    <bsContainer>\n        <menubar>\n            <li class=\"pure-menu-item\"><a [routerLink]=\"['BlogRoll']\">Blog Roll</a></li>\n            <li class=\"pure-menu-item\"><a [routerLink]=\"['BlogEditor']\">Blog Editor</a></li>\n       </menubar>\n\n       <!-- messages, if any -->\n       <row *ngFor=\"#message of messages\">\n            <alert [message]=\"message\"></alert>\n       </row>\n\n       <router-outlet></router-outlet>\n    </bsContainer>\n    ",
            directives: [common_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES, container_1.BootstrapContainer, menubar_1.MenuBar, alert_1.Alert],
            bindings: [message_service_1.MessageService]
        }),
        router_1.RouteConfig([
            new router_1.Route({ path: '/blogroll', component: blog_roll_1.BlogRoll, name: 'BlogRoll', useAsDefault: true }),
            new router_1.Route({ path: '/blogeditor', component: blog_editor_1.BlogEditor, name: 'BlogEditor' }),
            new router_1.Route({ path: '/blogeditor/:id', component: blog_editor_1.BlogEditor, name: 'BlogEditorById' })
        ]), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], AppShell);
    return AppShell;
})();
exports.AppShell = AppShell;
//# sourceMappingURL=app-shell.js.map