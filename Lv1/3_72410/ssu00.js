function solution(new_id) {
  let a = new_id
    .toLowerCase()
    .replace(/[^a-z0-9-._]/gi, "")
    .replace(/[.]{2,}/gi, ".")
    .replace(/^[.]/, "")
    .replace(/[.]$/, "")
    .replace(/^$/, "a")
    .substring(0, 15)
    .replace(/[.]$/, "");

  if (a.length <= 2) {
    let last = a[a.length - 1];
    let originLength = a.length;
    for (let i = 0; originLength + i < 3; i++) {
      a = a.concat(last);
    }
  }
  return a;
}
