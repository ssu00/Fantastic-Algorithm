function solution(numbers, hand) {
  let pos = { left: 10, right: 12 };

  const sameLine = (pos, number) => {
    return parseInt(Math.abs(pos - number) / 3);
  };

  const diffLine = (pos, number) => {
    return parseInt(Math.abs(pos - number) / 3) + (Math.abs(pos - number) % 3);
  };

  const lIsCloser = (data) => {
    pos.left = data;
    return "L";
  };

  const rIsCloser = (data) => {
    pos.right = data;
    return "R";
  };

  const converted = numbers.map((data) => {
    return data == 0 ? 11 : data;
  });

  const handArray = converted.map((data, i) => {
    if (data == 1 || data == 4 || data == 7) {
      return lIsCloser(data);
    } else if (data == 3 || data == 6 || data == 9) {
      return rIsCloser(data);
    } else {
      let lDist, rDist;
      lDist =
        pos.left % 3 == data % 3
          ? sameLine(pos.left, data)
          : diffLine(pos.left, data);
      rDist =
        pos.right % 3 == data % 3
          ? sameLine(pos.right, data)
          : diffLine(pos.right, data);
      if (lDist > rDist) {
        return rIsCloser(data);
      } else if (lDist < rDist) {
        return lIsCloser(data);
      } else {
        return hand == "right" ? rIsCloser(data) : lIsCloser(data);
      }
    }
  });

  var answer = handArray.join("");
  return answer;
}
