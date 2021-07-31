import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({ key: "react-pos" });
const cartState = atom({
  key: "cart",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export { cartState };
