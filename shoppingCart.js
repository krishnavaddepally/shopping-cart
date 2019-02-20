// your code, here
let item1={
  itemName  : 'donuts',
  quantity  : '12',
}
let item2={
  itemName : 'coffee packet',
  quantity : '1',
}
let item3={
  itemName : 'water bottles',
  quantity : '32',
}

shoppingCart=[item1, item2, item3]
shoppingCart.forEach((item)=> {
  console.log(item.quantity+ " " + item.itemName)
})
