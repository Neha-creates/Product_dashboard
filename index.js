const transactions = [
  { id: 1, category: "Groceries", amount: 1200 },
  { id: 2, category: "Electronics", amount: 4500 },
  { id: 3, category: "Groceries", amount: 800 },
  { id: 4, category: "Clothing", amount: 2000 },
  { id: 5, category: "Electronics", amount: 3000 }
];
let categories = transactions.map((product)=>{
    return {category: product.category, amount: product. amount}
})
//console.log(categories);
let cat1 = categories.filter((pro)=>pro.category=="Groceries");
let cat2 = categories.filter((pro)=>pro.category=="Electronics");
let cat3 = categories.filter((pro)=>pro.category=="Clothing");
//console.log(cat1, cat2, cat3)
let arr1 = [];
for(let product of cat1){
  arr1.push(product.amount)
}
arr1 = arr1.reduce((a,c)=>a+c,0);
cat1 = {category:"Groceries", total: arr1};
arr1 = [];
for(let product of cat2){
  arr1.push(product.amount)
}
arr1 = arr1.reduce((a,c)=>a+c,0);
cat2 = {category:"Electronics", total: arr1};
arr1 = [];
for(let product of cat3){
  arr1.push(product.amount)
}
arr1 = arr1.reduce((a,c)=>a+c,0);
cat3 = {category:"Clothing", total: arr1};
let res = [];
res.push(cat1, cat2, cat3)
console.log(res)
