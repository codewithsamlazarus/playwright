
// Type Alias - Type Union
type paymentMethod = "UPI" | "credit_card" | "PayPal";

function makePayment(paymentGateway: paymentMethod) {
    if (paymentGateway == 'UPI') {
        console.log("Payment made using UPI");
    } else if (paymentGateway == 'credit_card') {
        console.log("Payment made using Credit Card");
    } else if (paymentGateway == 'PayPal') {
        console.log("Payment made using PayPal");
    } 
}

makePayment("UPI");

// Type Alias - Type Intersection
