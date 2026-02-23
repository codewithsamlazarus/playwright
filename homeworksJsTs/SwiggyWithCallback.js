
function orderFood(callback){
    console.log(`Order is placed`);
    callback();
}

function prepareFood(callback){
    console.log(`Preparing food...`);
    
    setTimeout(()=>{
        console.log(`Food is prepared`);
        callback();
    }, 2000);
}

function deliverFood(callback){
    console.log(`Delivering food...`);

    setTimeout(() => {
        console.log(`Food is delivered`);
        callback();
    }, 2000);
    
}

function notifyCustomer(){
    console.log(`Customer notified: Enjoy your meal`);
}

orderFood(()=>{
    prepareFood(()=>{
        deliverFood(()=>{
            notifyCustomer();
        });
    });
});