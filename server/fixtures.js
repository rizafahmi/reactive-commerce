if(Products.find().count() === 0){
  Products.insert({
    name: "Tribal Patterned Skirt",
    price: 500000,
    dateCreated: new Date(),
    publishStatus: 'published',
    thumb: '1.jpg'
  });
  Products.insert({
    name: "Abstract Patterned Whitecollar Dress",
    price: 154000,
    dateCreated: new Date(),
    publishStatus: 'published',
    thumb: '2.jpg'
  });
  Products.insert({
    name: "Dzine Clothing Zombie Pac Man",
    price: 454000,
    dateCreated: new Date(),
    publishStatus: 'published',
    thumb: '3.jpg'
  });
  Products.insert({
    name: "Dzine Clothing I Swallow",
    price: 954000,
    dateCreated: new Date(),
    publishStatus: 'published',
    thumb: '4.jpg'
  });
}
