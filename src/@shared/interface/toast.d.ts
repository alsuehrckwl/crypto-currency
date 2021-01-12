interface IToast {
  id: number;
  text: string;
}

interface IToastStore {
  toasts: IToast[];
  setToast(isBookmark: boolean): void;
}
