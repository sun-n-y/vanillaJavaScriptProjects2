const url = 'https://randomuser.me/api/';

const fetchUser = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const person = data.results[0];
  const { email, phone } = person;
  const { first, last } = person.name;
  const { age } = person.dob;
  const {
    street: { name: street, number },
  } = person.location;
  const { password } = person.login;
  const { large: image } = person.picture;
  return {
    email,
    phone,
    name: `${first} ${last}`,
    age,
    street: `${number} ${street}`,
    password,
    image,
  };
};

export default fetchUser;
