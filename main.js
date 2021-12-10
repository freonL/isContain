const isContains = require('./isContains');

const sampleObject = {
    data :{
        rfq: {
            tender: {
                trade_confirmation: {
                    location_1:{
                        id: 44,
                        name: 'makmur'
                    },
                    location_2: {
                        id: 21,
                        name: 'abadi'
                    }
                }
            }
        }
    }
}

// result expectation
isContains(sampleObject, 44); // true
isContains(sampleObject, "abadi"); // true
isContains(sampleObject, "jaya"); // false

// result expectation - with 3rd argument
isContains(sampleObject, "abadi", "name"); // true
isContains(sampleObject, "abadi", "id"); // false