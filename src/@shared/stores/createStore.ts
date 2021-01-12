import { CoinDetailStore } from "./coinDetail.store";
import { CryptoStore } from "./crypto.store";
import { ToastStore } from "./toast.store";

export const createStore = () => {
  const toast: IToastStore = new ToastStore();

  const store = {
    get crypto() {
      return new CryptoStore(toast);
    },
    get coinDetail() {
      return new CoinDetailStore(toast);
    },
    get toast() {
      return toast;
    }
  };

  return store;
};

export type TStore = ReturnType<typeof createStore>;
