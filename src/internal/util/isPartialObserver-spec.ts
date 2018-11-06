import { expect } from 'chai';
import { isPartialObserver } from './isPartialObserver';
import { Subject } from '../Subject';

describe('isPartialObserver', () => {
  it('should pass for an object with next', () => {
    expect(isPartialObserver({ next() { } })).to.be.true;
  });

  it('should pass for an object with error', () => {
    expect(isPartialObserver({ error() { } })).to.be.true;
  });

  it('should pass for an object with complete', () => {
    expect(isPartialObserver({ complete() { } })).to.be.true;
  });

  it('should pass for a Subject', () => {
    expect(isPartialObserver(new Subject())).to.be.true;
  });

  it('should fail for a function', () => {
    expect(isPartialObserver(() => {})).to.be.false;
  });

  it('should pass for a plain object', () => {
    expect(isPartialObserver({})).to.be.true;
  });
})