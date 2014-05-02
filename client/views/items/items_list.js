var itemsData = [
{
  name: "Tribal Patterned Skirt",
  price: 500000,
  dateCreated: new Date(),
  publishStatus: 'published',
  thumb: '1.jpg'
},
{
  name: "Abstract Patterned Whitecollar Dress",
  price: 154000,
  dateCreated: new Date(),
  publishStatus: 'published',
  thumb: '2.jpg'
}
];

Template.itemsList.helpers({
  items: itemsData
});
