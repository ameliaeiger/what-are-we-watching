import React from 'react';
import renderer from 'react-test-renderer';

function sum(a, b) {
  return a + b;
}

// describe('JEST SUM TEST', () => {
//UNIT TEST
  // it('has 1 child', () => {
  //   const tree = renderer.create(<App />).toJSON();
  //   expect(true).toBe(true);
  // });
//SNAPSHOT TEST
  // it('renders correctly', () => {
  //   const tree = renderer.create(<App />).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });

//   test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3);
//   });

// });


describe("JEST SUM TEST", () => {
    test('adds 1 + 2 to equal 3', () => {
      expect(sum(1, 2)).toBe(3);
    });
  });