import path from 'path';
import fs from 'fs';
import twowaypart from '../src/twowaypart';

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFixture = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

describe('Two-way number partitioning tool tests', () => {
  test('Set 1: 5 numbers', () => {
    const setDataFile = readFixture('test1_set.json');
    const setData = JSON.parse(setDataFile);
    const expectedResultFile = readFixture('test1_result.json');
    const expectedResult = JSON.parse(expectedResultFile);
    const recievedResult = twowaypart(setData);
    expect(recievedResult).toEqual(expectedResult);
  });

  test('Set 2: 2 numbers', () => {
    const setDataFile = readFixture('test2_set.json');
    const setData = JSON.parse(setDataFile);
    const expectedResultFile = readFixture('test2_result.json');
    const expectedResult = JSON.parse(expectedResultFile);
    const recievedResult = twowaypart(setData);
    expect(recievedResult).toEqual(expectedResult);
  });

  test('Set 3: 1 number', () => {
    const setDataFile = readFixture('test3_set.json');
    const setData = JSON.parse(setDataFile);
    const expectedResultFile = readFixture('test3_result.json');
    const expectedResult = JSON.parse(expectedResultFile);
    const recievedResult = twowaypart(setData);
    expect(recievedResult).toEqual(expectedResult);
  });

  test('Set 4: 0 numbers', () => {
    const setDataFile = readFixture('test4_set.json');
    const setData = JSON.parse(setDataFile);
    const expectedResultFile = readFixture('test4_result.json');
    const expectedResult = JSON.parse(expectedResultFile);
    const recievedResult = twowaypart(setData);
    expect(recievedResult).toEqual(expectedResult);
  });

  test('Should throw the error of incorrect input format', () => {
    const setDataFile = readFixture('test5_wrong.json');
    const setData = JSON.parse(setDataFile);
    const errorMessage = 'Incorrect input format (set must be defined)';
    expect(() => twowaypart(setData)).toThrow(errorMessage);
  });
});
