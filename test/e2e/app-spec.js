'use strict';

describe('my app', function() {

  beforeEach(function () {
    browser.get('index.html');
  });

  it('should automatically redirect to / when location hash is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/");
  });

  it('should consist of appname as heading', function() {
    element(by.css('.navbar-brand')).getText().then(function(name) {
	  expect(name).toBe('01Protactor');
	});
  });

  it('should consist of 3 menu items', function() {
    var list = element.all(by.css('.nav li'));
	expect(list.count()).toBe(3);
  });

});
