import {
  describe, expect, it, injectAsync,
  TestComponentBuilder, beforeEachProviders,
  beforeEach, inject
} from 'angular2/testing';

import { AsyncTestFn } from 'angular2/testing';

import { BootstrapCol } from '../../../../src/app/bootstrap/containers/bscol';

import { provide } from 'angular2/core';

describe('Bootstrap Column', () => {

  it('should display column content as a div of type col', injectAsync([TestComponentBuilder], (tcb) => {
    var html = '<bs-col>This is the body content</bs-col>';
    return new Promise((resolve, reject) => {
      tcb.overrideTemplate(BootstrapCol, html)
        .createAsync(BootstrapCol)
        .then(
          (fixture) => {
            fixture.detectChanges();
            expect(fixture.debugElement.nativeElement).toHaveText("This is the body content");
            resolve();
          });
    });
  }));
});
