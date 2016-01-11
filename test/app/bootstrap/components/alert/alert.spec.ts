import {
  describe, expect, it, injectAsync, TestComponentBuilder, beforeEachProviders, beforeEach, inject
} from 'angular2/testing';

import { Alert } from '../../../../../src/app/bootstrap/components/alert/alert';

import { provide } from 'angular2/core';

describe('Alert Component', () => {

  it('should display message', injectAsync([TestComponentBuilder], (tcb) => {
    return tcb.createAsync(Alert).then((fixture) => {
      debugger;
      fixture.debugElement.componentInstance.message = { text: "boo!"};
      fixture.detectChanges();
      var compiled = fixture.debugElement.nativeElement;
      expect(compiled.innerHTML).toContain("boo!");
      });
  }));

  it('should run', () =>  {
    expect(1).toBe(1);
  });

});
