Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() {
    return Meteor.subscribe('products');
  }
});

Router.map(function() {
  this.route('productsList', {path: '/'});
  this.route('productPage', {
    path: '/products/:_id',
    data: function() {
      return Products.findOne(this.params._id);
    }
  });
});
