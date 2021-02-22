/* eslint-disable camelcase */

export default (set) => {
  set.sort((a, b) => b - a);
  let isZeroDiffFound = false;
  let bestSets = {
    s1: [],
    s2: [],
    s1s2Diff: Infinity,
  };
  const buildNode = (s, sSum, s1, s1Sum, s2, s2Sum) => {
    const s1s2Diff = Math.abs(s1Sum - s2Sum);

    if (s.length === 0) {
      if (s1s2Diff < bestSets.s1s2Diff) {
        bestSets = { s1, s2, s1s2Diff };
      }
      return;
    }

    if (s1s2Diff === sSum) {
      bestSets = s1Sum > s2Sum
        ? { s1, s2: [...s2, ...s], s1s2Diff: 0 }
        : { s1: [...s1, ...s], s2, s1s2Diff: 0 };
      isZeroDiffFound = true;
      return;
    }

    if (s1s2Diff - sSum >= bestSets.s1s2Diff) {
      return;
    }

    const [maxSNum, ...newS] = s;
    const newSSum = sSum - maxSNum;
    const newS2 = [...s2, maxSNum];
    const newS2Sum = s2Sum + maxSNum;
    buildNode(newS, newSSum, s1, s1Sum, newS2, newS2Sum);

    if (!isZeroDiffFound) {
      const newS1 = [...s1, maxSNum];
      const newS1Sum = s1Sum + maxSNum;
      buildNode(newS, newSSum, newS1, newS1Sum, s2, s2Sum);
    }
  };

  const [maxSetNum, ...initSet] = set;
  const initSetSum = initSet.reduce((a, b) => a + b, 0);
  buildNode(initSet, initSetSum, [maxSetNum], maxSetNum, [], 0, maxSetNum);

  const set_1 = bestSets.s1.reverse();
  const set_2 = bestSets.s2.reverse();
  return { set_1, set_2 };
};
