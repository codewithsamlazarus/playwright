import { test, expect } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config({ path: "./data/jira.env" });

console.log("Email:", process.env.JIRA_EMAIL);
console.log("Token exists:", !!process.env.JIRA_TOKEN);

test("Validate Jira API token after password change", async ({ request }) => {
  const response = await request.get(
    "https://samdavidlazarus.atlassian.net/rest/api/3/myself",
    {
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(`${process.env.JIRA_EMAIL}:${process.env.JIRA_TOKEN}`).toString("base64"),
          Accept: "application/json",
      },
    }
  );
 
  expect(response.status()).toBe(200);
  
  if (response.status() == 200) 
    console.log(`API is hitting the JIRA correctly`);
  
});