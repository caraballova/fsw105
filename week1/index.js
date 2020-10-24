var groceryList = {
    storeName: "Jangles",
    dairy: ["eggs", "milk", "yogurt"],
    meats: ["chicken", "bacon", "pork", "steak"],
    eggs: 1,
    milk: 2,
    wasThereTomatoes: true,
    location: "New Jersey",
    
    displayInfo: function() {
        console.log(`${groceryList.storeName} in ${groceryList.location}`);
    }

}
groceryList.displayInfo();
console.log(groceryList.dairy);