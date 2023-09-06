const removeFromArray = function (list, ...itemsToRemove) {
    list = list.filter(o => !itemsToRemove.includes(o));
    return list;
};

// Do not edit below this line
module.exports = removeFromArray;
