Package.describe({
  summary: "Fitbit API wrapper using OAuth1Binding of Meteor Fitbit Service"
});

Package.on_use(function (api, where) {
	
	api.use('oauth1', ['client', 'server']);
 	api.add_files(['lib/fitbit.js'], 'server');
 	api.export && api.export('Fitbit', 'server');
});

Package.on_test(function (api) {
});