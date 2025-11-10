// Updated data model
/*
{
  "name": "Adventures in Tokyo - 5 Day Tour",
  "info": "Discover the vibrant mix of tradition and modernity in Tokyo. Visit ancient temples like Senso-ji, explore futuristic districts such as Shibuya and Akihabara, and enjoy authentic Japanese cuisine from sushi to ramen. Guided tours will take you through bustling markets, serene gardens, and hidden alleyways filled with local charm.",
  "image": "https://tx00-web-en.github.io/resources/img/tours/tour-2.jpeg",
  "price": "1,450",
  "duration": "5 days",
  "groupSize": "Max 12 people",
  "rating": 4.8,
  "availability": true
}
*/

let userArray = [];
let nextId = 1;

const getAll = () => {
  return userArray;
};

const addOne = (name, email, password, phone_number, gender, date_of_birth, membership_status, account_verified,country) => {
  if (!name || !email || !password || !phone_number || !gender || !date_of_birth || membership_status === undefined || account_verified === undefined||!country) {
    return false;
  }
  const newUser = {
    id: nextId++,
    name: name,
      email: email,
      password: password,
      phone_number: phone_number,
      gender: gender,
      date_of_birth: date_of_birth,
      membership_status: membership_status,
      account_verified: account_verified,
      country: country
  };
    userArray.push(newUser);
  return newUser;
};

const findById = (id) => {
  const user = userArray.find((user) => user.id === Number(id));
  return user || false;
};

const updateOneById = (id, updatedData) => {
  const user = findById(id);
  if (user) {
    if (updatedData.name) user.name = updatedData.name;
    if (updatedData.email) user.info = updatedData.email;
    if (updatedData.password) user.image = updatedData.password;
    if (updatedData.phone_number) user.price = updatedData.phone_number;
    if (updatedData.gender) user.duration = updatedData.gender;
    if (updatedData.date_of_birth) user.groupSize = updatedData.date_of_birth;
    if (updatedData.membership_status !== undefined) user.rating = updatedData.membership_status;
    if (updatedData.account_verified !== undefined) user.availability = updatedData.account_verified;
      if (updatedData.country !== undefined) user.availability = updatedData.country;
    return user;
  }
  return false;
};

const deleteOneById = (id) => {
  const user = findById(id);
  if (user) {
    const initialLength = userArray.length;
      userArray = userArray.filter((user) => user.id !== Number(id));
    return userArray.length < initialLength;
  }
  return false;
};

if (require.main === module) {
  let result = addOne(
    "Matti Seppänen",
    "matti@example.com",
    "M@45mtg$",
      "+358401234567",
    "Male",
    "2000-01-15",
    "Active",
    true,
    "Finland"
  );
  console.log(result);
  console.log("getAll called:", getAll());
  console.log("findById called:", findById(1));
}

module.exports = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById,
};
