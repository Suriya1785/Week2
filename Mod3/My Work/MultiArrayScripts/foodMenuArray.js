/* Script to exercise multi dimensional arrays - Foodmenu arrays
 * Author: HartCode programmer
 * Date: 07/31/2019
 */
"Use Strict";
let foodMenu = [
    [{ item: "Sausage and Egg Biscuit", price: 3.49 }, { item: "Sandwich", price: 2.5 }, { item: "Halva", price: 9.5 }],
    [{ item: "Biscuits and Water", price: 5.49 }, { item: "Vegetable Sandwich", price: 4.5 }, { item: "Dosa-2Nos", price: 3.5 }, { item: "Idli-2Nos", price: 2.5 }],
    [{ item: "Chicken Sandwich", price: 7.49 }, { item: "Coke", price: 1.5 }, { item: "Paniyaram-2Nos", price: 3.2 }, { item: "Vada", price: 2.8 }, { item: "Lemonade", price: 1.9 }]
];

// //Run through meal array and display the list of Menus under each meal option
// mealArray = [0, 1, 2];
// for (let k = 0; k < mealArray.length; k++) {
//     if (mealArray[k] == 0) {
//         console.log("Breakfast Menu");
//         displayFoodMenu(foodMenu, mealArray[k]);
//     } else if (mealArray[k] == 1) {
//         console.log("Lunch Menu");
//         displayFoodMenu(foodMenu, mealArray[k]);
//     } else {
//         console.log("Dinner Menu");
//         displayFoodMenu(foodMenu, mealArray[k]);
//     }
// }

//Display based on particular meal option
meal = 1;
if (meal == 0) {
    console.log("Breakfast Menu");
} else if (meal == 1) {
    console.log("Lunch Menu");
} else {
    console.log("Dinner Menu");
}
displayFoodMenu(foodMenu, meal);

/*Function is to display the Menu items based on list of menus and meal option
 * @param foodMenu (multi-dimensional array objects) - list of food menu items
 * @ param meal (array item) - meal option
 */
function displayFoodMenu(foodMenu, meal) {
    let numOfMenu = foodMenu.length;
    for (let i = 0; i < numOfMenu; i++) {
        let numOfMenuItem = foodMenu[i].length;
        if (i == meal) {
            for (let j = 0; j < numOfMenuItem; j++) {
                console.log(foodMenu[i][j].item + " " + "$" + foodMenu[i][j].price.toFixed(2));
            }
        }
    }
}