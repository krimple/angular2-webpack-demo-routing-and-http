import {MessageService} from '../../../src/app/services/message-service';
import {AlertMessage} from '../../../src/app/bootstrap/components/alert/alert-message';

import {
  it, inject, describe, beforeEach, beforeEachProviders, expect
} from 'angular2/testing';

describe('Message service', () => {
  beforeEachProviders(() => {
    return [
     MessageService
    ];
  });

  it('Should start with zero messages', inject([MessageService], (messageService) => {
    expect(messageService.messages.length).toBe(0);
  }));

  it('Should add messages', inject([MessageService], (messageService) => {
    messageService.add(new AlertMessage('This is an alert'));
    expect(messageService.messages.length).toBe(1);
  }));

});
