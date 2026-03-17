import axios from "axios";
import dotenv from "dotenv";

dotenv.config({ path: "./data/jira.env" });

console.log("Email:", process.env.JIRA_EMAIL!);
console.log("Token exists:", process.env.JIRA_TOKEN!);

const endpoint="https://samdavidlazarus.atlassian.net/rest/api/2/issue"

async function createIssue(summary: string, description: string) {

    const response = await axios.post(endpoint,
        {
            "fields": {
                "project": {
                    "key": "PJ"
                },
                "summary": summary,
                "description":description,
                "issuetype": {
                    "name": "Bug"
                }
            }
        },{
            headers:{
                "Content-Type":"application/json"
            },
            auth:{
                "username":process.env.JIRA_EMAIL as string,
                "password":process.env.JIRA_TOKEN as string
            }
        })

console.log(response);

}

createIssue("Bug created through PW API", "Creating bug using JIRA REST API")