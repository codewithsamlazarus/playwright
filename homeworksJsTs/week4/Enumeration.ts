import { run } from "node:test";

// Step 1 - Create an Enum name Environment
enum Environment {
    'Local' = 'local',
    'Development' = 'dev',
    'Staging' = 'stage',
    'Production' = 'prod'
}

// Step 2 - Write a function named 'runTests' that accepts enum as a parameter
// Step 3 - runTests doesn't return anything
function runTests(testEnv: Environment) :void {
    console.log(`This test is running in the ${testEnv} environment`);
}

// Step 4 - Example calls of function runTests
runTests(Environment.Production);