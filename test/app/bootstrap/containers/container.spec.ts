import {
  describe, expect, it, injectAsync, TestComponentBuilder, beforeEachProviders, beforeEach, inject
} from 'angular2/testing';

import { AsyncTestFn } from 'angular2/testing';

import { provide } from 'angular2/core';
import {BootstrapContainer} from '../../../../src/app/bootstrap/containers/container';

describe('Container', () => {

  it('should display menu content', injectAsync([TestComponentBuilder], (tcb) => {
  var html = '<bs-container>This is the body content</bs-container>';
  return new Promise((resolve, reject) => {
    tcb.overrideTemplate(BootstrapContainer, html)
    .createAsync(BootstrapContainer)
    .then(
        (fixture) => {
           fixture.detectChanges();
           expect(fixture.debugElement.nativeElement).toHaveText("This is the body content");
           resolve();
         });
    });
  }));

});
