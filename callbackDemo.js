/**
 * Created by namita on 27/12/14.
 */
var orderNumber=0;//this is the first order of restaurant
function takeOrder(waiter, table, orderPlaced, callback) { //defining takeOrder function
    var order = function () { //defining order function
        orderNumber++; //incrementing orderNumber with each order
        console.log("I am " + waiter + ",customer at table number " + table + " has ordered " + orderPlaced + "!" + " This order number is " + orderNumber + ".");
    };
    callback(order);//passing order as a callback function
}
takeOrder("Bill","2","Chicken Sandwich",function(printMessage){ //calling takeOrder() function
    console.log(printMessage());
});
takeOrder("Jill","8","Tomato Soup",function(printMessage){
    console.log(printMessage());
});