import axios from 'axios';

export async function createUser(userData) {
    axios.post('/users', {
    name: userData.name,
    email: userData.email
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}