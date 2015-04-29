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

  Template.Nav.helpers({
    loggedIn: function() {
      return Meteor.user();
    },
    activePage: function(path) {
      return Router.current().route.path() == path ? 'active' : '';
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
  layoutTemplate: 'Main',
  // Send to the intro page if not logged in
  onBeforeAction: function() {
    // while (Meteor.loggingIn());
    if (!Meteor.user()) {
      this.render('Intro');
    } else {
      this.next();
    }
  }
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
