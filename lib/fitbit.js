Fitbit = function(options) {
  this._url = "https://api.fitbit.com";
  this._version = "1";
  if (options) _.extend(this, options);
};

Fitbit.prototype._getUrl = function(url){
  return [this._url, this._version, url].join('/');
};

Fitbit.prototype.get = function(url,params){
  return this.call('GET',url,params);
};

Fitbit.prototype.post = function(url, params){
  return this.call('POST',url,params);
};

Fitbit.prototype.call = function(method, url, params){
  //this.unblock();

  oauthBinding = this.getOauthBindingForCurrentUser();

  result = oauthBinding.call(method,
    this._getUrl(url),
    params
  );

  return result;
};

Fitbit.prototype.getOauthBinding = function() {
  var config = Accounts.loginServiceConfiguration.findOne({service: 'fitbit'});
  var urls = Accounts.fitbit._urls;
  return new OAuth1Binding(config.consumerKey, config.secret, urls);
};

Fitbit.prototype.getOauthBindingForCurrentUser = function(){
  var oauthBinding = this.getOauthBinding();

  var user = Meteor.user();
  oauthBinding.accessToken = user.services.fitbit.accessToken;
  oauthBinding.accessTokenSecret = user.services.fitbit.accessTokenSecret;

  return oauthBinding;
};

Fitbit.prototype.userProfile = function() {
  return this.get('user/-/profile.json');
};

Fitbit.prototype.getSteps = function() {
 	return this.get('user/-/activities/steps/date/today/7d.json');
};

