import Command from '@conflict/beta/commands';
import { Embed } from '@conflict/beta/components';
export default new Command({
  name: 'hello-vercel',
  description: 'Hello there Vercel!',
  options: [],
  execute: async (command, options, utils) => {
    const view = global.__ConflictViewParser("message", null, global.__ConflictViewParser(Embed, {
      color: "#ff3333",
      image: {
        url: "https://conflict.js.org/favicon.png"
      }
    }, global.__ConflictViewParser("title", null, "Hello, Vercel!"), global.__ConflictViewParser("description", null, "Welcome to **Conflict**.")));

    console.log({
      view
    });
    command.respond(view);
  }
});

const view = global.__ConflictViewParser("message", null, global.__ConflictViewParser(Embed, {
  color: "#ff3333",
  image: {
    url: "https://conflict.js.org/favicon.png"
  }
}, global.__ConflictViewParser("title", null, "Hello, Vercel!"), global.__ConflictViewParser("description", null, "Welcome to **Conflict**.")));

console.log({
  view
});