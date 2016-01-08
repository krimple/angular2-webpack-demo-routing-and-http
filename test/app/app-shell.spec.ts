import {AlertMessage} from "../../src/app/bootstrap/components/alert/alert-message";
import {MessageService} from "../../src/app/services/message-service";
import {AppShell} from "../../src/app/app-shell/app-shell";
import {
  it,
  inject,
  injectAsync,

  beforeEachProviders,
  TestComponentBuilder
} from 'angular2/testing';

describe('Application Shell', () => {
  var shell: AppShell;
  it('Can be created', () => {
    var messages:AlertMessage[] = [
      new AlertMessage("That should hurt"),
      new AlertMessage("What was that about?")
    ];
    var messageService:MessageService = new MessageService();
    messageService.add("That should hurt");
    messageService.add("What was that about?");
    shell = new AppShell(messageService);
    expect(shell).toBeDefined();
    expect(shell.messages[0].text).toContain("That should hurt");
    expect(shell.messages[1].text).toContain("What was that about?");
  });
});
