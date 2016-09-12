Meteor.publish('allPosts', function(){
  return Targets.find();
});
