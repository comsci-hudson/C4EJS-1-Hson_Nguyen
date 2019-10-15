const inventory = [
{
    name: 'HP Envy 13aq',
    price: 21000,
    brand: 'HP',
    quantity: 5,
},
{
    name: 'Dell XPS 9370',
    price: 30000,
    brand: 'Dell',
    quantity: 1,
},
{
    name: 'Dell Inspiron 3567',
    price: 9300,
    brand: 'Dell',
    quantity: 12,
},
{
    name: 'Dell Latitude E5450',
    price: 8600,
    brand: 'Dell',
    quantity: 2,
},
{
    name: 'Asus Zenbook',
    brand: 'Asus',
    price: 20000,
    quantity: 4,
},
{
    name: 'HP Pavilion',
    brand: 'HP',
    price: 14000,
    quantity: 7,
}]
let arr_HP = [];
let arr_Dell = [];
let arr_Asus = [];
let inventoryByBrand = { hp: arr_HP , dell: arr_Dell, asus: arr_Asus };
for (let i = 0; i< inventory.length; i++) {
    if (inventory[i].brand === 'HP') {
 arr_HP.push(inventory[i]);
} else if (inventory[i].brand === 'Dell') {
    arr_Dell.push(inventory[i]);
} else {
    arr_Asus.push(inventory[i]);
}
}
console.log(inventoryByBrand);

let Ques= prompt('Which brand?');

if (Ques.toLowerCase() === 'dell') {
    let result_Dell = '';
    let price_Dell = 0 ;
    for (let j = 0; j< arr_Dell.length; j ++){
        result_Dell += `\n${arr_Dell[j].name}`;
        price_Dell += (arr_Dell[j].price)*(arr_Dell[j].quantity);
    } 
    alert(`There are ${arr_Dell.length} generations of ${Ques.toUpperCase()} in inventory ` + result_Dell + `\nWith total value: ${price_Dell}000VND`  );
} else if (Ques.toLowerCase() === 'asus') {  
    let result_Asus = ''; 
    let price_Asus = 0;
    for (let k = 0; k< arr_Asus.length; k ++){
        result_Asus += `\n${arr_Asus[k].name}`;
        price_Asus += (arr_Asus[k].price)*(arr_Asus[k].quantity);
    } 
  alert(`There are ${arr_Asus.length} generations of ${Ques.toUpperCase()} in inventory` + result_Asus+ `\nWith total value: ${price_Asus}000VND` );
} else if (Ques.toLowerCase() === 'hp') {
    let result_Hp = '';
    let price_Hp = 0;
    for (let l = 0; l< arr_HP.length; l ++){
        result_Hp += `\n${arr_HP[l].name}`;
        price_Hp += (arr_HP[l].price)*(arr_HP[l].quantity);
    } 
    alert(`There are ${arr_HP.length} generations of ${Ques.toUpperCase()} in inventory`+ result_Hp + `\nWith total value: ${price_Hp}000VND`);
} else {
    alert(`There are no generations of ${Ques.toUpperCase()} in inventory`);
}


