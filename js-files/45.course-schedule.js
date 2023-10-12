"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.canFinish = void 0;
function canFinish(numCourses, prerequisites) {
    const prereqs = {};
    const indegrees = new Array(numCourses).fill(0);
    for (let req = 0; req < prerequisites.length; req++) {
        const [child, parent] = prerequisites[req];
        prereqs[parent] = prereqs[parent] ?? [];
        prereqs[parent].push(child);
        indegrees[child]++;
    }
    const stack = [];
    for (let degree = 0; degree < indegrees.length; degree++) {
        if (!indegrees[degree])
            stack.push(degree);
    }
    while (stack.length) {
        const parent = stack.pop();
        numCourses--;
        if (!prereqs[parent])
            continue;
        for (let child = 0; child < prereqs[parent].length; child++) {
            const child_index = prereqs[parent][child];
            indegrees[child_index]--;
            if (!indegrees[child_index])
                stack.push(child_index);
        }
    }
    return numCourses === 0;
}
exports.canFinish = canFinish;
;
