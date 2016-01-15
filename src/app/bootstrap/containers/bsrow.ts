import {Component} from 'angular2/core';
@Component({
    selector: 'bs-row',
    template: `
        <div class="row">
            <ng-content></ng-content>
        </div>
    `
})
export class BootstrapRow {

}
