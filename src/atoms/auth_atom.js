import { atom } from 'recoil';

console.log(localStorage.getItem('auth'));

const authAtom = atom({
  key: 'auth',
  // get initial state from local storage to enable user to stay logged in
  default:
    localStorage.getItem('auth') === undefined
      ? null
      : JSON.parse(localStorage.getItem('auth')),
});

export { authAtom };
