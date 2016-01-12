import {Component} from 'angular2/core';
@Component({
    selector: 'bootstrap-container',
    template: `
    <div class="container">
      <ng-content></ng-content>
    </div>
    `
})
export class BootstrapContainer {

}

