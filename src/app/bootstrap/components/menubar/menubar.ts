import {Component} from 'angular2/core';
@Component({
    selector: 'menubar',
    template: `
  <nav class="navbar navbar-default navbar-fixed-top">
  <div class="container">

   <ul class="nav navbar-nav navbar-right">
     <ng-content></ng-content>
   </ul>
   </div>
   </nav>
    `
})
export class MenuBar {

}
