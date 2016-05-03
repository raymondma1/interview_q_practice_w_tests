import chai, { expect } from 'chai';
import findPivotedWord from '../src/findPivot';

describe('Find Pivot', () => {
  var testCases =[{
    inputs: ['cat','dog','eagle','falcon','goat','apple','bear'],
    expected: 4
  }, {
    inputs: ['dog','eagle','falcon','goat','hope','apple','bear','cat'],
    expected: 4
  }, {
    inputs: ['dog','eagle','falcon','goat','hope'],
    expected: null
  }, {
    inputs: ['indigo','dog','eagle','falcon','goat','hope'],
    expected: 0
  }, {
    inputs: ['dog','eagle','falcon','apple','bear','cat'],
    expected: 2
  }];
  it("Given 'dog','eagle','falcon','goat','hope' it should return null", ()=> {
    var returnVal = findPivotedWord(testCases[2].inputs)
    expect(returnVal).to.eql(testCases[2].expected)
  })
  it("Given 'cat','dog','eagle','falcon','goat','apple','bear' it should return 4", ()=> {
    var returnVal = findPivotedWord(testCases[0].inputs)
    expect(returnVal).to.eql(testCases[0].expected)
  })
  it("Given 'dog','eagle','falcon','goat','hope','apple','bear','cat' it should return 4", ()=> {
    var returnVal = findPivotedWord(testCases[1].inputs)
    expect(returnVal).to.eql(testCases[1].expected)
  })
  it("Given 'indigo','dog','eagle','falcon','goat','hope' it should return 4", ()=> {
    var returnVal = findPivotedWord(testCases[3].inputs)
    expect(returnVal).to.eql(testCases[3].expected)
  })
  it("Given 'dog','eagle','falcon','apple','bear','cat' it should return 2", ()=> {
    var returnVal = findPivotedWord(testCases[4].inputs)
    expect(returnVal).to.eql(testCases[4].expected)
  })
  
})

