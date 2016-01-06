import {Component} from 'angular2/core';
import {AlertMessage} from './alert-message';
@Component({
    selector: 'alert',
    properties: ['message'],
    template: `
        <div class="alert alert-info alert-dismissable"
             data-dismiss="alert">
            <button type="button" class="close"
                 data-dismiss="alert"
                 aria-label="Close">
                 <span aria-hidden="true">&times;</span>
            </button>
            {{ message.text }}
        </div>
    `
})
export class Alert {
}
