import { test } from "@playwright/test";
import dotenv from "dotenv";


let filename= process.env.envfile || 'qa'  //$env:envfile="qa" - 


dotenv.config({path:`Data/${filename}.env`}) // setting the environment for testing purpose



console.log(process.env.BaseURL);
console.log(process.env.LF_Username);
console.log(process.env.LF_Password);





//console.log(process.env.USERNAME); // System environment

