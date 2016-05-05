import chai, { expect } from 'chai';
import permuteSums from '../src/sum_permutations';

describe('Sum Permutations', () => {
  it('given a target and a list where no permutations exist return empty array', ()=>{
    var returnVal = permuteSums([6,7,8],5)
    expect(returnVal).to.eql([])
  })
})