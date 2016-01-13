import {
  describe, expect, it, injectAsync, TestComponentBuilder, beforeEachProviders, beforeEach, inject
} from 'angular2/testing';

import { AsyncTestFn } from 'angular2/testing';

import { MenuBar } from '../../../../../src/app/bootstrap/components/menubar/menubar';

import { provide } from 'angular2/core';

describe('MenuBar', () => {

  it('should display menu content', injectAsync([TestComponentBuilder], (tcb) => {
  var html = '<menubar>This is the body content</menubar>';
  return new Promise((resolve, reject) => {
    tcb.overrideTemplate(MenuBar, html)
    .createAsync(MenuBar)
    .then(
        (fixture) => {
           fixture.detectChanges();
           expect(fixture.debugElement.nativeElement).toHaveText("This is the body content");
           resolve();
         });
    });
  }));

});
