const url = 'https://randomuser.me/api/';

const getUser = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const person = data.results[0];
  const { phone, email } = person;
  const { large: image } = person.picture;
  const { password } = person.login;
  const { first, last } = person.name;
  const { age } = person.dob;
  const {
    street: { number, name },
  } = person.location;
  return {
    phone,
    email,
    image,
    password,
    name: `${first} ${last}`,
    age,
    street: `${number} ${name}`,
  };
};

export default getUser;
