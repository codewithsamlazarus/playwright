

class APIClient {

    sendRequest(endPoint : string, requestBody? : string, requestStatus? : string) : void {
        if (endPoint) {
            console.log(`Sending request to endpoint: ${endPoint}`);
        } else if (requestBody) {
            console.log(`Sending request to endpoint with request body: ${requestBody}`);
        } else if (requestStatus) {
            console.log(`Sending request to endpoint with request status as assert: ${requestStatus}`);
        } else {
            console.log(`Invalid request`);
        }
    }
}

let apiClient = new APIClient();

apiClient.sendRequest("https://reqres.in/api/users");
apiClient.sendRequest("{name: 'Sam', job: 'Test Automation Engineer'}");
apiClient.sendRequest("200 OK");