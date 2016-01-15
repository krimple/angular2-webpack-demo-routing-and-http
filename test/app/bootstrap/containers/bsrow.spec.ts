import {
  describe, expect, it, injectAsync,
  TestComponentBuilder, beforeEachProviders,
  beforeEach, inject
} from 'angular2/testing';

import { AsyncTestFn } from 'angular2/testing';

import { BootstrapRow } from '../../../../src/app/bootstrap/containers/bsrow';

import { provide } from 'angular2/core';



describe('BootstrapRow', () => {

  it('should display menu content', injectAsync([TestComponentBuilder], (tcb) => {
  var html = '<bs-row>This is the body content</bs-row>';
  return new Promise((resolve, reject) => {
    tcb.overrideTemplate(BootstrapRow, html)
    .createAsync(BootstrapRow)
    .then(
        (fixture) => {
           fixture.detectChanges();
           expect(fixture.debugElement.nativeElement).toHaveText("This is the body content");
           resolve();
         });
    });
  }));
});
