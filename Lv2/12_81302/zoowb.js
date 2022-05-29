function solution(places) {
  let answer = [];
  let count = 0;
  for (let i = 0; i < places.length; i++) {
    for (let j = 0; j < places[i].length; j++) {
      if (places[i][j].includes("PO")) {
        let res = places[i][j].indexOf("PO");
        if (
          j < 4 &&
          (places[i][j + 1].indexOf("OP") === res ||
            places[i][j + 1].indexOf("XP") === res)
        ) {
          count++;
        }
      }
      if (places[i][j].includes("PX")) {
        let res = places[i][j].indexOf("PX");
        if (j < 4 && places[i][j + 1].indexOf("OP") === res) {
          count++;
        }
      }
      if (places[i][j].includes("OP")) {
        let res = places[i][j].indexOf("OP");
        if (
          j < 4 &&
          (places[i][j + 1].indexOf("PO") === res ||
            places[i][j + 1].indexOf("PX") === res)
        ) {
          count++;
        }
      }
      if (places[i][j].includes("XP")) {
        let res = places[i][j].indexOf("XP");
        if (j < 4 && places[i][j + 1].indexOf("PO") === res) {
          count++;
        }
      }
      if (places[i][j].includes("PP") || places[i][j].includes("POP")) {
        count++;
      }
      for (let k = 0; k < 3; k++) {
        if (
          places[i][k][j] === "P" &&
          places[i][k + 1][j] === "O" &&
          places[i][k + 2][j] === "P"
        ) {
          count++;
        }
      }
      for (let k = 0; k < 4; k++) {
        if (places[i][k][j] === "P" && places[i][k + 1][j] === "P") {
          count++;
        }
      }
    }
    if (count === 0) {
      answer.push(1);
    } else answer.push(0);
    count = 0;
  }

  return answer;
}
