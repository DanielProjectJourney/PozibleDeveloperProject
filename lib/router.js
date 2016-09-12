Router.configure({
  layoutTemplate: 'layout',
  //loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('allPosts'); }
});


//Home Page
Router.route('/', {name: 'targetsList'} );

//Display All Users (Not Finsh)
Router.route('/users/', {name: 'users'})

//Targets Detail Page Dynamic
Router.route('/targets/:_id', {
  name: 'targetPage',
  data: function() { return Targets.findOne(this.params._id);}
});




Router.onBeforeAction('dataNotFound', {only: 'targetPage'});
