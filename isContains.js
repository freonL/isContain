// isContains.js file

const isContains = (obj, val , key) => {
    // checking mandatory arguments
    if(typeof obj === "undefined"){
        throw new Error("Missing mandatory arguments");
    }

    if(typeof val === "undefined"){
        throw new Error("Missing Mandatory arguments");
    }

    // interate to all entries
    for (const [k, v] of Object.entries(obj) ) {
        
        if(typeof key !== "undefined") {
            if (v === val && k === key ) {
                return true;
            }
        } else {
            if (v === val) {
                return true;
            }
        }
        
        // if the value is an object, try to find the value with resurve function
        // otherwise goto to the next entries
        if (typeof v === 'object'){
            if(typeof key !== "undefined") {
                var deep = isContains(v,val,key);
            } else {
                var deep = isContains(v,val);
            }
            if (deep == true){
                return true
            }
        }
    }

    // value not in object
    return false;
}

module.exports = isContains;