import test, { expect } from "@playwright/test";

let sysId : any;

test(`Create Change Request in ServiceNow`, async ({request}) => {
    const reponse = await request.post(`https://dev267889.service-now.com/api/now/table/change_request`,{
        headers : {
            'content-type' : 'application/json',
            'Authorization' : 'Basic YWRtaW46JWVCelUka3c1VkM4'
    },
    data : {
        "short_description" : "Change Request created in ServiceNow through Playwright API"
    }
    })

    const responseBody = await reponse.json();
    console.log(responseBody);

    sysId = responseBody.result.sys_id;
    // console.log(responseBody.result.sys_id);
    console.log(`sysId: ${sysId}`);

    expect(reponse.status()).toBe(201);
})

test(`Edit Change Request in ServiceNow`, async ({request})=> {
   const response = await request.put(`https://dev267889.service-now.com/api/now/table/change_request/${sysId}`,{
        headers : {
            'content-type' : 'application/json',
            'Authorization' : 'Basic YWRtaW46JWVCelUka3c1VkM4'
    },
    data : {
        "short_description" : "Change Request updated in ServiceNow through Playwright API"
    }
        
    })

    const responseBody = await response.json();
    console.log(responseBody);

    expect(response.status()).toBe(200);
})

test(`Get Change Request from ServiceNow`, async ({request})=> {
   const response = await request.get(`https://dev267889.service-now.com/api/now/table/change_request/${sysId}`,{
        headers : {
            'content-type' : 'application/json',
            'Authorization' : 'Basic YWRtaW46JWVCelUka3c1VkM4'
    }
        
    })

    const responseBody = await response.json();
    console.log(responseBody);

    expect(responseBody.result.short_description).toBe("Change Request updated in ServiceNow through Playwright API");

    expect(response.status()).toBe(200);
})

test(`Delete Change Request from ServiceNow`, async ({request})=> {
   const response = await request.delete(`https://dev267889.service-now.com/api/now/table/change_request/${sysId}`,{
        headers : {
            'content-type' : 'application/json',
            'Authorization' : 'Basic YWRtaW46JWVCelUka3c1VkM4'  
    }
    })
    
    expect(response.status()).toBe(204);
})