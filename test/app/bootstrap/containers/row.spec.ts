import {
  describe, expect, it, injectAsync, TestComponentBuilder, beforeEachProviders, beforeEach, inject
} from 'angular2/testing';

import { AsyncTestFn } from 'angular2/testing';

import { BootstrapRow } from ../../../../../src/app/bootstrap/containers/row';

import { provide } from 'angular2/core';

describe('BootstrapRow', () => {

  it('should display menu content', injectAsync([TestComponentBuilder], (tcb) => {
  var html = '<row>This is the body content</row>';
  debugger;
  return new Promise((resolve, reject) => {
    tcb.overrideTemplate(Row, html)
    .createAsync(Row)
    .then(
        (fixture) => {
           fixture.detectChanges();
           expect(fixture.debugElement.nativeElement).toHaveText("This is the body content");
           resolve();
         });
    });
  }));

});
