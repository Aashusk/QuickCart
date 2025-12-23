import { serve } from "inngest/next";
import {
  inngest,
  syncUserCreation,
  syncUserUpdation,
  syncUserDeletion,
} from "@/config/inngest";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserUpdation,
    syncUserDeletion,
  ],
});




// import { serve } from "inngest/next";
// import { inngest, syncUserCreation } from "@/config/inngest";
// import { inngest, syncUserUpdation } from "@/config/inngest";

// // import { helloWorld } from "../../../inngest/functions";

// export const { GET, POST, PUT } = serve({
//   client: inngest,
//   functions: [
//     syncUserCreation,
//     syncUserUpdation,
//     syncUserDeletion
//   ],
// });