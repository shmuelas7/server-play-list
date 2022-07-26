const userController = require("../DL/controller/userController");
const jwtFn = require("../middleware/jwt");

async function login(loginData) {
  const password = loginData.password;
  const email = loginData.email;
  console.log(password + " " + email);
  const user = await userController.readOne({ email: email }, "+password");
  console.log("🚀 ~ file: userLogic.js ~ line 8 ~ login ~ user", user);
  if (!user) throw { code: 401, message: "משתמש לא קיים" };
  if (user.password !== password)
    throw { code: 401, message: " שם משתמש או סיסמה לא נכונים" }; //bcrypt.compare
  const token = jwtFn.createToken(user._id);
  return token;
}

async function register(data) {
  const { email, password, firstName, lastName, phone } = data;

  if (!email || !password || !firstName || !lastName || !phone)
    throw { code: 400, message: "missing data" };

  const existUser = await userController.readOne({ email });
  console.log(existUser);
  if (existUser) throw { code: 405, message: "משתמש קיים כבר" };

  const user = await userController.create(data);
  const token = jwtFn.createToken(user._id);
  return token;
}

async function get(id) {
  if (id) {
    const result = await userController.readOne({ _id: id });
    return result;
  }

  if (!result) throw { code: 404, message: "not found" };

  return result;
}

async function update(id, newData) {
  const updatedUser = await userController.update({ _id: id }, newData);
  return updatedUser;
}

async function del(id) {
  const deletedUser = await userController.del({ _id: id });
  return deletedUser;
}

module.exports = { register, get, update, del, login };
