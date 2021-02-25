const generalTools = {};



generalTools.generateRandomNumber = (length) => {
    return Math.floor(Math.random() * (10 ** (length) - 10** (length - 1)) + 1000);
};


generalTools.deleteObjectValues = (object, elements) => {
    
    let result = {};
    for (const key in object) {
        (elements.includes(key))? null : result[key] = object[key];
    };
    return result;
};



generalTools.objectValuesHolder = (object, elements) => {
    
    let result = {};
    for (const key in object) {
        (elements.includes(key))? result[key] = object[key] : null;
    };
    return result;
};


module.exports = generalTools;