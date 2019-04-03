var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  Object.assign(object)
  object.key = value;
  return object;
}