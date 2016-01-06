import {Component} from 'angular2/core';
@Component({
    selector: 'row',
    template: `
        <div class="row">
            <ng-content></ng-content>
        </div>
    `
})
export class Row {

}
