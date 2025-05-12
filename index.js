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
console.log(categories);