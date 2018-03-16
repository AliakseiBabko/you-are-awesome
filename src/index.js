// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = () => {};
const createNotEnumerableProperty = () => {};
const createProtoMagicObject = () => {};
const incrementor = () => {};
const asyncIncrementor = () => {};
const createIncrementer = () => {let inc; return inc++;};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {setTimeout(param, 900);};
const getDeepPropertiesCount = (obj) => { return Object.keys(obj).length; };
const createSerializedObject = () => {object = { valueOf(){let a = 'object'; return a;}}; return object;};
const toBuffer = () => {};
const sortByProto = (arr) => { return arr.sort(); };

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;