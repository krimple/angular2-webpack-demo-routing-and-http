import {
  it,
  xit,
  describe,
  xdescribe,
  inject,
  injectAsync,
  beforeEachProviders,
  TestComponentBuilder
} from 'angular2/testing';

// TODO - hating this multiple subdir thing - need a root dir
import { AlertMessage }
from '../../../../../src/app/bootstrap/components/alert/alert-message';

describe('Alert Message', () => {

  it('can be created with a message text property', () => {
    let message:AlertMessage = new AlertMessage('bamboo!');

    expect(message.text).toBe('bamboo!');
  });

});

