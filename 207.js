
//https://leetcode.com/problems/course-schedule/
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  let prereqsTo = {};
  let prereqs = {};
  let taken = [];

  for (let i = 0; i < prerequisites.length; i++) {
    let pair = prerequisites[i];

    if (prereqs[pair[0]] === undefined) {
      prereqs[pair[0]].push(pair[1]);
    }
    prereqsTo[pair[1]].push(pair[0]);
  }



  return taken.length === numCourses;
};