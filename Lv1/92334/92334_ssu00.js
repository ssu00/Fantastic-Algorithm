function solution(id_list, report, k) {
  const users = [];
  const makeUser = (name) => {
    return { name: name, report: [], reported: 0 };
  };

  const addReport = (name, report) => {
    const selectedUser = users.filter((user) => user.name == name)[0];
    if (selectedUser) {
      selectedUser.report = [...new Set(selectedUser.report.concat(report))];
    }
  };

  const changeUserStatus = (name) => {
    const selectedUser = users.filter((user) => user.name == name)[0];
    selectedUser && selectedUser.reported++;
  };

  const initializeUser = () => {
    id_list.forEach((userName) => {
      users.push(makeUser(userName));
    });
    const reportUser = [];
    for (let j = 0; j < report.length; j++) {
      const splitReport = report[j].split(" ");
      addReport(splitReport[0], splitReport[1]);
    }
  };

  const answer = new Array(id_list.length).fill(0);
  initializeUser();
  users.forEach((user) => {
    user.report.forEach((report) => changeUserStatus(report));
  });

  const bannedUserName = users
    .filter((usr) => usr.reported >= k)
    .map((i) => i.name);
  users.forEach((user, i) => {
    answer[i] = user.report.filter((name) =>
      bannedUserName.includes(name)
    ).length;
  });

  return answer;
}
