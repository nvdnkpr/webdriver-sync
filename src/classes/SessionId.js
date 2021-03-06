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
var addFinalProp             = require('../utils').addFinalProp;
var Class                    = require('../imports').SessionId;
var Instance              = require('./Instance');

module.exports=SessionId;
function SessionId(opaqueKey){
   if(assert(opaqueKey).isInstanceof(Instance).isValid){
      addFinalProp(this, "_instance", opaqueKey._instance);
      return this;
   }
   addFinalProp(this, "_instance", new Class(opaqueKey));
}
SessionId.prototype.equals=function(obj){
   if(obj instanceof SessionId){
      return this._instance.equalsSync(obj._instance);
   }
   return false;
};
SessionId.prototype.toString=function(){
   return this._instance.toStringSync();
};