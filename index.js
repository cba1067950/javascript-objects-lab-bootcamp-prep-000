var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  //Object.assign(object, {[key]: value});
  object["prop2"] = value;
  return object;
}