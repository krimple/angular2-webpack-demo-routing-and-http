var alert_message_1 = require("../../src/app/bootstrap/components/alert/alert-message");
var message_service_1 = require("../../src/app/services/message-service");
var app_shell_1 = require("../../src/app/app-shell/app-shell");
var testing_1 = require('angular2/testing');
describe('Application Shell', function () {
    var shell;
    testing_1.it('Can be created', function () {
        var messages = [
            new alert_message_1.AlertMessage("That should hurt"),
            new alert_message_1.AlertMessage("What was that about?")
        ];
        var messageService = new message_service_1.MessageService();
        messageService.add("That should hurt");
        messageService.add("What was that about?");
        shell = new app_shell_1.AppShell(messageService);
        expect(shell).toBeDefined();
        expect(shell.messages[0].text).toContain("That should hurt");
        expect(shell.messages[1].text).toContain("What was that about?");
    });
});
//# sourceMappingURL=app-shell.spec.js.map