import { onMessageCreate } from '@conflict/beta/events';
import Welcome from "../views/welcome.js?n=16736940211695084";
onMessageCreate(message => {
  if (message.content === "hello") message.channel.send(":wave: Hey there!");
  if (message.content === "welcome") message.channel.view(Welcome());
});