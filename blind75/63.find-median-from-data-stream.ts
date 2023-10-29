import {
  MinPriorityQueue,
  MaxPriorityQueue,
} from '@datastructures-js/priority-queue';

export default class MedianFinder {
  minQ: MinPriorityQueue<number>;
  maxQ: MaxPriorityQueue<number>;
  constructor() {
    this.minQ = new MinPriorityQueue<number>();
    this.maxQ = new MaxPriorityQueue<number>();
  }

  addNum(num: number): void {}

  findMedian(): number {}
}
