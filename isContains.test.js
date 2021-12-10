//isContains.test.js file.
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

test('isContain has mandatory arguments', () => {
    expect(() => isContains()).toThrow(Error);
    expect(() => isContains(sampleObject)).toThrow(Error);
  });

test('checking with 2 arguments', () => {
    expect(isContains(sampleObject, 44)).toBe(true);
    expect(isContains(sampleObject, 'abadi')).toBe(true);
    expect(isContains(sampleObject, 'jaya')).toBe(false);
});

test('checking with 3 arguments', () => {
    expect(isContains(sampleObject, 'abadi', 'name')).toBe(true);;
    expect(isContains(sampleObject, 'abadi', 'id')).toBe(false);
});