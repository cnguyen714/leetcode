
//https://leetcode.com/problems/course-schedule/
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  if (prerequisites.length === 0) return true;

  let prereqsTo = {};
  let prereqs = {};
  let taken = new Set();
  let seen = new Set();
  let seenRequirePre = new Set();

  for (let i = 0; i < prerequisites.length; i++) {
    let pair = prerequisites[i];

    if (prereqs[pair[0]] === undefined) {
      prereqs[pair[0]] = new Set([pair[1]]);
    } else {
      prereqs[pair[0]].add(pair[1]);
    }

    if (prereqsTo[pair[1]] === undefined) {
      prereqsTo[pair[1]] = new Set([pair[0]]);
    } else {
      prereqsTo[pair[1]].add(pair[0]);
    }

    seen.add(pair[0]);
    seenRequirePre.add(pair[1]);    
  }

  let difference = new Set([...seenRequirePre].filter(x => !seen.has(x)));
  let classesToTake = [...difference];

  while(classesToTake.length !== 0) {
    let el = classesToTake.pop();

    taken.add(el);
    if (prereqsTo[el] !== undefined) {
      for (let item of prereqsTo[el]) {
        prereqs[item].delete(el);
        if (prereqs[item].size === 0) classesToTake.push(item);
      }
    }
  }

  return taken.size === seen.size + difference.size;
};

console.log(canFinish(3, [[1,0]]));
console.log(canFinish(2, [[1,0],[0,1]]));
console.log(canFinish(2, []));