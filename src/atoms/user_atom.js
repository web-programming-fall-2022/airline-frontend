import { atom } from "recoil";

const userAtom = atom({
  key: "user",
  //   default: null,
  default: {
    id: 1,
    name: "John Doe",
    email: "john@gmail.com",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
});

export { userAtom };
