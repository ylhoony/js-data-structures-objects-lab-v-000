// Write your solution in this file!

const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  const newDriver = { ...driver };
  newDriver[key] = value;
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}


//
// describe('deleteFromDriverByKey(driver, key)', function () {
//   it('deletes `key` from a clone of driver and returns the new driver (it is non-destructive)', function () {
//     let newdriver = deleteFromDriverByKey(driver, 'name');
//
//     expect(newdriver['name']).to.equal(undefined);
//   });
//
//   it('does not modify the original driver (it is non-destructive)', function () {
//     deleteFromDriverByKey(driver, 'name');
//
//     expect(driver['name']).to.equal('Sam');
//   });
// });
//
// describe('destructivelyDeleteFromdriverByKey(driver, key)', function () {
//   it('returns driver without the delete key/value pair', function () {
//     let newdriver = destructivelyDeleteFromDriverByKey(driver, 'name');
//
//     expect(newdriver['name']).to.equal(undefined);
//   });
//
//   it('modifies the original driver', function () {
//     let newdriver = destructivelyDeleteFromDriverByKey(driver, 'name');
//
//     expect(driver['name']).to.equal(undefined);
//   });
// });
