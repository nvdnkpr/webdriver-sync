/*!
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
var addFinalProp          = require('../utils').addFinalProp;
var Keyboard              = require('./Keyboard');
var Mouse                 = require('./Mouse');

module.exports = HasInputDevices;

function HasInputDevices(instance){
   addFinalProp(this, "_instance", instance);
}
HasInputDevices.prototype.getKeyboard=function(){
   return new Keyboard(this._instance.getKeyboardSync());
};
HasInputDevices.prototype.getMouse=function(){
   return new Mouse(this._instance.getMouseSync());
};