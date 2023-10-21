"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedianFinder = void 0;
const priority_queue_1 = require("@datastructures-js/priority-queue");
class MedianFinder {
    minQ;
    maxQ;
    constructor() {
        this.minQ = new priority_queue_1.MinPriorityQueue();
        this.maxQ = new priority_queue_1.MaxPriorityQueue();
    }
    addNum(num) {
        if (this.maxQ.size() === 0 || num < this.maxQ.front()) {
            this.maxQ.enqueue(num);
        }
        else {
            this.minQ.enqueue(num);
        }
        if (this.maxQ.size() - this.minQ.size() === 2) {
            this.minQ.enqueue(this.maxQ.dequeue());
        }
        else if (this.minQ.size() > this.maxQ.size()) {
            this.maxQ.enqueue(this.minQ.dequeue());
        }
    }
    findMedian() {
        if (this.minQ.size() === this.maxQ.size()) {
            return (this.minQ.front() + this.maxQ.front()) / 2;
        }
        return this.maxQ.front();
    }
}
exports.MedianFinder = MedianFinder;
