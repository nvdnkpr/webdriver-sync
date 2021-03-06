webdriver-sync
==============

`webdriver-sync` is a complete wrapper around all the classes found in the java API.
This allows you to write your selenium tests in the same synchronous fasion that
you normally would without all the ceremony involved in asynchronous testing.

View the source code to see the classes that have been ported over.  It's organized and is optimized for performance.

Please report any issues that you may encounter.

Example
=============
````javascript
/*
Following are the drivers that will become available in future releases:

AndroidDriver
InternetExplorerDriver
IpadDriver
IphoneDriver
PhantomJSDriver
*/
var title;
var link;
var webdriverSync = require('webdriver-sync');
var By            = webdriverSync.By;
var ChromeDriver  = webdriverSync.ChromeDriver;
var driver        = new ChromeDriver;

driver.get("http://foo.html");
title=driver.getTitle();
link=findElement(By.id('i am a link'));
link.click();

assert(driver.getCurrentUrl().indexOf('foo title 2') > -1);
assert(title.indexOf('foo title') > -1);
driver.quit();
````

Installation
==============
Brief:

`npm install webdriver-sync`

Details:

Ulike most other implementations, `webdriver-sync` directly calls the java API
provided by the Selenium organization.  The module relies on the `java` module 
to accomplish this.

Installing the `java` module can be a bit tricky, but here are a few items to take into consideration:
* Install JDK on your system and set `JAVA_HOME` in your environment to point to the JDK location
* If you're on windows, you'll need to find where the `jvm.dll` binary is and place it's directory in your `PATH`.
* If you're on mac, you'll need xcode installed and `make` must be available from the command line.
* If you're on linux, make must be installed.

I recommend installing the `java` module somewhere on your system before installing
`webdriver-sync` to isolate any potential issues.  You'll then need
to place the `selenium-standalone-server.jar` (renamed without the version), and
the `chromedriver` binary within the following directory `~/.webdriver-sync`.

If you're still running into issues installing the module, the problem is likely with the `java`
module.  In addition to filing a bug here, please see https://github.com/nearinfinity/node-java
for additional help.

Testing the Install
=============
Once you've installed the module, you can easily test it by navigating to the
module root and running `npm test`.

Why Sync?
==============
Prior to node, most of my testing was done in Java and JUnit.  I found the sync
API to be much easier to follow and maintain, and I wasn't happy with all the
async ceremony out there with the node API[s] (similar to the following):

``````javascript
browser.get("http://foo.html", function() {
   browser.title(function(err, title) {
   assert.ok(~title.indexOf('foo title'), 'Wrong title!');
   browser.elementById('i am a link', function(err, el) {
      browser.clickElement(el, function() {
         browser.eval("window.location.href", function(err, href) {
         assert.ok(~href.indexOf('foo title 2'));
         browser.quit();
         });
      });
   });
   });
});
``````

I much prefer this:

``````javascript
var title;
var link;
var driver = new require('webdriver-sync').ChromeDriver;
driver.get("http://foo.html");
title=driver.getTitle();
link=findElement(By.id('i am a link'));
link.click();
assert(driver.getCurrentUrl().indexOf('foo title 2') > -1);
assert(title.indexOf('foo title') > -1);
driver.quit();
``````

And that's exactly what `webdriver-sync` aims to achieve.  It should look just
like the java API provided by the Selenium organization.


LICENSE
=============
webdriver-sync is licensed under the Apache 2.0 license.

``````
Copyright 2013 Joseph Spencer

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
``````

CREDIT when it is due!
============
Special thanks to the developers of `node-java`!!!
