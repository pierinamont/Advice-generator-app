import { get } from 'axios';

get('https://api.adviceslip.com/advice')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle errorx
    console.log(error);
  })