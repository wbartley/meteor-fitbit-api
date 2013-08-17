Package.describe({
  summary: "Fitbit API wrapper using OAuth1Binding of Meteor Fitbit Service"
});

Package.on_use(function (api, where) {


  api.add_files(['lib/fitbit.js'], 'server');
});

Package.on_test(function (api) {
});