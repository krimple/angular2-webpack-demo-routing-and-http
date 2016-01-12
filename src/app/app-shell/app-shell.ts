import {BootstrapContainer} from '../bootstrap/containers/container';
import {MessageService} from '../services/message-service';
import {MenuBar} from '../bootstrap/components/menubar/menubar';
import {Alert} from '../bootstrap/components/alert/alert';
import {AlertMessage} from '../bootstrap/components/alert/alert-message';
import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {BlogRoll} from '../blog-roll/blog-roll';
import {BlogEditor} from '../blog-editor/blog-editor';
import {
  RouterLink,
  ROUTER_DIRECTIVES,
  RouteConfig,
  Route,
  RouterOutlet,
  Location,
  RouteParams
} from 'angular2/router';


@Component({
  selector: 'app-shell',
  template: `
    <bootstrap-container>
        <menubar>
            <li class="pure-menu-item"><a [routerLink]="['BlogRoll']">Blog Roll</a></li>
            <li class="pure-menu-item"><a [routerLink]="['BlogEditor']">Blog Editor</a></li>
       </menubar>

       <!-- messages, if any -->
       <row *ngFor="#message of messages">
            <alert [message]="message"></alert>
       </row>

       <router-outlet></router-outlet>
    </bootstrap-container>
    `,
  directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES, BootstrapContainer, MenuBar, Alert],
  bindings: [MessageService]
})
@RouteConfig([
  new Route({path: '/blogroll', component: BlogRoll, name: 'BlogRoll', useAsDefault: true}),
  new Route({path: '/blogeditor', component: BlogEditor, name: 'BlogEditor'}),
  new Route({path: '/blogeditor/:id', component: BlogEditor, name: 'BlogEditorById'})
])
export class AppShell {

  messages: AlertMessage[];

  constructor(private messageService: MessageService) {
    this.messages = messageService.messages;
    messageService.add('this is on fire!');
  }

}
