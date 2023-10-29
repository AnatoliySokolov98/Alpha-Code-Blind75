import MedianFinder from '../blind75/63.find-median-from-data-stream';

describe('MedianFinder', () => {
  it('should return the correct median for a sequence of numbers', () => {
    const medianFinder = new MedianFinder();
    medianFinder.addNum(1);
    medianFinder.addNum(2);
    medianFinder.addNum(3);
    expect(medianFinder.findMedian()).toBe(2);
  });

  it('should return the correct median for a sequence of numbers with duplicates', () => {
    const medianFinder = new MedianFinder();
    medianFinder.addNum(1);
    medianFinder.addNum(2);
    medianFinder.addNum(2);
    expect(medianFinder.findMedian()).toBe(2);
  });

  it('should return the correct median for a sequence of numbers with odd length', () => {
    const medianFinder = new MedianFinder();
    medianFinder.addNum(3);
    medianFinder.addNum(1);
    medianFinder.addNum(5);
    expect(medianFinder.findMedian()).toBe(3);
  });

  it('should return the correct median for a sequence of numbers with even length', () => {
    const medianFinder = new MedianFinder();
    medianFinder.addNum(4);
    medianFinder.addNum(1);
    medianFinder.addNum(2);
    medianFinder.addNum(3);
    expect(medianFinder.findMedian()).toBe(2.5);
  });

  it('should handle adding numbers in any order', () => {
    const medianFinder = new MedianFinder();
    medianFinder.addNum(5);
    medianFinder.addNum(1);
    medianFinder.addNum(3);
    medianFinder.addNum(2);
    expect(medianFinder.findMedian()).toBe(2.5);
  });
});
