import { CronJob } from "cron";
import https from "https";

const job = new CronJob("*/14 * * * *", function () {
  // Support skipping ping in development
  if (process.env.NODE_ENV === "development") {
    return;
  }

  if (!process.env.BACKEND_URL) {
    console.error("BACKEND_URL is not defined in environment variables");
    return;
  }

  https
    .get(process.env.BACKEND_URL, (res) => {
      if (res.statusCode === 200) console.log("Keep-alive ping successful");
      else console.log("Keep-alive ping returned status:", res.statusCode);
    })
    .on("error", (e) => {
      // Log as a warning instead of a full error to reduce noise in dev
      if (e.code === 'ETIMEDOUT') {
        console.warn("Keep-alive ping timed out (expected in some local environments)");
      } else {
        console.error("Error while sending keep-alive request:", e.message);
      }
    });
});

export default job;

// CRON JOB EXPLANATION:
// Cron jobs are scheduled tasks that run periodically at fixed intervals
// we want to send 1 GET request for every 14 minutes

// How to define a "Schedule"?
// You define a schedule using a cron expression, which consists of 5 fields representing:

//! MINUTE, HOUR, DAY OF THE MONTH, MONTH, DAY OF THE WEEK

//? EXAMPLES && EXPLANATION:
//* */14 * * * * - Every 14 minutes (at minute 0, 14, 28, 42, 56)
//* 0 0 * * 0 - At midnight on every Sunday
//* 30 3 15 * * - At 3:30 AM, on the 15th of every month
//* 0 0 1 1 * - At midnight, on January 1st
//* 0 * * * * - Every hour