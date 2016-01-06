import {Injectable} from 'angular2/core';
import {AlertMessage} from '../bootstrap/components/alert/alert-message';
@Injectable()
export class MessageService {

    messages: AlertMessage[];

    constructor() {
        this.messages = [];
    }

    add(message: string) {
        this.messages.push(new AlertMessage(message));
    }
}
