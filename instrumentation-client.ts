import { initBotId } from "botid/client/core";

// Must match the routes that call checkBotId() on the server.
initBotId({
  protect: [{ path: "/api/contact", method: "POST" }],
});
