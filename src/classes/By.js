/*
 * Copyright 2013 Joseph Spencer.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Class                 = require('../imports').By;
var addFinalProp          = require('../utils').addFinalProp;

module.exports=By;

function By(instance){
   addFinalProp(this, "_instance", instance);
}

By.className=By.prototype.className=function(name){
   return new By(Class.classNameSync(name));
};

By.cssSelector=By.prototype.cssSelector=function(selector){
   return new By(Class.cssSelectorSync(selector));
};

By.id=By.prototype.id=function(id){
   return new By(Class.idSync(id));
};

By.linkText=By.prototype.linkText=function(linkText){
   return new By(Class.linkTextSync(linkText));
};

By.name=By.prototype.name=function(name){
   return new By(Class.nameSync(name));
};

By.partialLink=By.prototype.partialLink=function(partialLink){
   return new By(Class.partialLinkSync(partialLink));
};

By.tagName=By.prototype.tagName=function(tagName){
   return new By(Class.tagNameSync(tagName));
};

By.xpath=By.prototype.xpath=function(xpath){
   return new By(Class.xpathSync(xpath));
};