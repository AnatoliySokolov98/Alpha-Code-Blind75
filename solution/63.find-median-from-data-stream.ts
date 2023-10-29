import { MinPriorityQueue, MaxPriorityQueue } from '@datastructures-js/priority-queue';


export class MedianFinder {
    minQ: MinPriorityQueue<number>;
    maxQ: MaxPriorityQueue<number>;
    constructor() {
      this.minQ = new MinPriorityQueue<number>();
      this.maxQ = new MaxPriorityQueue<number>();
    }

    addNum(num: number): void {
      if (this.maxQ.size() === 0 || num < this.maxQ.front()) {
        this.maxQ.enqueue(num);
      } else {
        this.minQ.enqueue(num);
      }

      if (this.maxQ.size() - this.minQ.size() === 2) {
        this.minQ.enqueue(this.maxQ.dequeue());
      } else if (this.minQ.size() > this.maxQ.size()) {
        this.maxQ.enqueue(this.minQ.dequeue());
      }
    }

    findMedian(): number {
      if (this.minQ.size() === this.maxQ.size()) {
        return (this.minQ.front() + this.maxQ.front()) / 2;
      }

      return this.maxQ.front();
    }
}


