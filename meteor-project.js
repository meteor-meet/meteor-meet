if (Meteor.isClient) {
  
  // AN EXAMPLE
  
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

// Define your routes (The different pages)

Router.configure({
  layoutTemplate: 'Main'
});

Router.route('/', function () {
  this.render('Home', {data: {title: 'My Title'}});
});

Router.route('/one', function () {
  this.render('One');
});

Router.route('/two', function () {
  this.render('Two');
});
