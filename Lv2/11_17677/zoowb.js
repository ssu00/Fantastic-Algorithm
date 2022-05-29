function solution(str1, str2) {
  var answer = 0;

  const twoset = (str) => {
    let result = [];

    str = str.toLowerCase();

    for (let i = 1; i < str.length; i++) {
      let tmp = str.slice(i - 1, i + 1);
      if (tmp.match(/[a-z]{2}/)) result.push(tmp);
    }

    return result;
  };

  const arr1 = twoset(str1);
  const arr2 = twoset(str2);

  let u1 = 0,
    u2 = 0;
  const totalSet = new Set([...arr1, ...arr2]);

  totalSet.forEach((val) => {
    const h1 = arr1.filter((v) => v === val).length;
    const h2 = arr2.filter((v) => v === val).length;

    u1 += Math.max(h1, h2);
    u2 += Math.min(h1, h2);
  });

  if (u1 === 0 && u2 === 0) answer = 65536;
  else answer = parseInt((u2 / u1) * 65536);
  return answer;
}
