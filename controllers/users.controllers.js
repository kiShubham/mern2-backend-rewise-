const userData = require("../users.json");

const getAllUsersData = (req, res) => {
  // console.log("data send");
  res.json(userData);
};

const getUserById = (req, res) => {
  const id = req.params.uuid;
  const user = userData.data.filter((e) => e.login.uuid === id);
  if (user) {
    res.json(user);
  } else {
    res.sendStatus(404);
  }
};

const searchUserData = (req, res) => {
  const { gender, age } = req.query;
  if (gender && age) {
    res.json(
      userData.data.find(
        (e) =>
          e.gender === gender.toLowerCase() && Number(e.dob.age) === Number(age)
      )
    );
  } else if (gender) {
    res.json(userData.data.filter((e) => e.gender === gender.toLowerCase()));
  } else if (age) {
    res.json(userData.data.filter((e) => Number(e.dob.age) === Number(age)));
  } else {
    res.sendStatus(404);
  }
};

module.exports = { getAllUsersData, getUserById, searchUserData };
