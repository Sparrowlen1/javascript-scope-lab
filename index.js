let milkshakeMenu = ["vanilla","chocolate"];
let burgerMenu = ["cheeseburger","veggie burger"];

function addMilkshake(item){
    let newMilkshake = item;
    milkshakeMenu.push(newMilkshake);
    return milkshakeMenu;
}

function addBurger(item){
    let newBurger = item;
    burgerMenu.push(newBurger);
    return burgerMenu;
}
function showMenu(){
    let fullMenu = [];
    for (let i = 0; i < milkshakeMenu.length; i++) {
    fullMenu.push(milkshakeMenu[i] + " + " + burgerMenu[i % burgerMenu.length]);
  } 
  return fullMenu;
}
console.log(addMilkshake("Strawberry"));
console.log(addBurger("Bacon Burger"));
console.log(showMenu());