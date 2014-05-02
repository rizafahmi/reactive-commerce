Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() {
    return Meteor.subscribe('products');
  }
});

Router.map(function() {
  this.route('productsList', {path: '/'});
});
