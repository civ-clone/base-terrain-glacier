import Glacier from '../Glacier';
import { Land } from '@civ-clone/core-terrain/Types';
import RuleRegistry from '@civ-clone/core-rule/RuleRegistry';
import Terrain from '@civ-clone/core-terrain/Terrain';
import { expect } from 'chai';

describe('Glacier', (): void => {
  it('should be a land terrain', (): void => {
    const glacier = new Glacier(new RuleRegistry());

    expect(glacier).to.be.instanceOf(Land);
    expect(glacier).to.be.instanceOf(Terrain);
    expect(glacier.clone()).to.be.instanceOf(Glacier);
  });
});
