export function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const prereqs: Record<number, number[]> = {};
  const indegrees = new Array(numCourses).fill(0);
  for(let req = 0; req < prerequisites.length; req++) {
      const [child, parent] = prerequisites[req];
      prereqs[parent] = prereqs[parent] ?? [];
      prereqs[parent].push(child);
      indegrees[child]++;
  }

  const stack: number[] = [];
  for (let degree = 0; degree < indegrees.length; degree++) {
      if (!indegrees[degree])
          stack.push(degree);
  }

  while (stack.length) {
      const parent = stack.pop() as number;
      numCourses--;
      if(!prereqs[parent])
          continue;
      for(let child = 0; child < prereqs[parent].length; child++) {
          const child_index = prereqs[parent][child];
          indegrees[child_index]--;
          if (!indegrees[child_index])
              stack.push(child_index);
      }
  }

  return numCourses === 0;

};