import {Component} from 'angular2/core';
@Component({
  selector: 'bs-col',
  template: `
        <div class="col">
            <ng-content></ng-content>
        </div>
    `
})
export class BootstrapCol {

}
