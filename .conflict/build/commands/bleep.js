import Command from '@conflict/beta/commands';
import { Button, StatelessButton, ActionRow, Embed, SelectMenu, SelectOption, TextInput, Modal } from '@conflict/beta/components';
import View from '@conflict/beta/View';
export default new Command({
  name: 'bleep',
  description: 'Get help',
  options: [],
  execute: async (command, options, utils) => {
    const buttonView = global.__ConflictViewParser("message", null, global.__ConflictViewParser(Embed, {
      color: "#ff3333",
      image: {
        url: "https://conflict.js.org/favicon.png"
      }
    }, global.__ConflictViewParser("title", null, "Hello, world!"), global.__ConflictViewParser("description", null, "Welcome to **Conflict**.")), global.__ConflictViewParser(ActionRow, null, global.__ConflictViewParser(StatelessButton, {
      onclick: event => {
        event.respond({
          content: 'You clicked me!',
          ephemeral: true
        });
      },
      variant: "green"
    }, "Green Button"), global.__ConflictViewParser(StatelessButton, {
      onclick: event => {
        event.respond({
          content: 'You clicked me!',
          ephemeral: true
        });
      },
      variant: "green"
    }, "Green Button")), global.__ConflictViewParser(ActionRow, null, global.__ConflictViewParser(Button, {
      onclick: event => {
        event.modal( // Open up a popup modal with this JSX
        global.__ConflictViewParser(Modal, {
          title: "Modal Title",
          onSubmit: form => {
            form.respond('Submitted ' + JSON.stringify(form.values)); // Run this when it's submitted
          }
        }, global.__ConflictViewParser(ActionRow, null, " ", global.__ConflictViewParser(TextInput, {
          label: "Label",
          placeholder: "Placeholder",
          variant: "input",
          name: "name"
        }))));
      },
      variant: "cta"
    }, "Open Modal")), global.__ConflictViewParser(ActionRow, null, global.__ConflictViewParser(SelectMenu, {
      onclick: event => {
        event.respond({
          content: `You selected ${JSON.stringify(event.values)}`,
          ephemeral: true
        });
      }
    }, global.__ConflictViewParser(SelectOption, {
      value: "option_1"
    }, "This the first option."), global.__ConflictViewParser(SelectOption, {
      value: "option_2"
    }, "This is the second option."))));

    command.respond(buttonView);
  }
}).localize({
  'es-ES': {
    name: 'ayuda',
    description: 'Obtener ayuda'
  }
});