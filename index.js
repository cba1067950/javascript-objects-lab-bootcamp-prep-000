var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  //var newObj = Object.assign({}, object, {[key]: value});
  //delete object.key;
  object[key] = value;
  return object;
}