const deeplyObjectCopy = (obj) => {
    const newObj = {};
    for(const key in obj){
        if(Array.isArray(obj[key])){
            newObj[key] = deeplyArrayCopy(obj[key]);
        }
        else if(typeof obj[key] === "object"){
            newObj[key] = deeplyObjectCopy(obj[key]);
        }
        else{
            newObj[key] = obj[key];
        }
    }
    return newObj;
}
const deeplyArrayCopy = (arr) => {
    const newArr = [];
    for(const a of arr){
        if(Array.isArray(a)){
            newArr.push(deeplyArrayCopy(a));
        }
        else if(typeof a === "object"){
            newArr.push(deeplyObjectCopy(a));
        }
        else{
            newArr.push(a);
        }
    }
    return newArr;
}

module.exports = {deeplyArrayCopy, deeplyObjectCopy};