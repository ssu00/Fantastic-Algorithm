function solution(n, arr1, arr2) {
  var answer = [];
  let temp1 = arr1.map((i) => {
    i = i.toString(2);
    while (i.length != n) {
      i = "0" + i;
    }
    return i.split("");
  });

  let temp2 = arr2.map((i) => {
    i = i.toString(2);
    while (i.length != n) {
      i = "0" + i;
    }
    return i.split("");
  });

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (temp1[i][j] === "1" || temp2[i][j] === "1") {
        if (answer[i] === undefined) {
          answer[i] = "#";
        } else {
          answer[i] += "#";
        }
      } else {
        if (answer[i] === undefined) {
          answer[i] = " ";
        } else {
          answer[i] += " ";
        }
      }
    }
  }
  return answer;
}
