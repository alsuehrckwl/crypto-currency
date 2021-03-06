import autobind from "autobind-decorator";
import { action, observable, runInAction } from "mobx";

@autobind
export class ToastStore {
  @observable
  toasts: IToast[] = [];

  /************************************************
   *
   * action
   *
   ************************************************/
  @action
  setToast(isBookmark: boolean) {
    const id = performance.now();
    const item = {
      id,
      text: `북마크를 ${isBookmark ? "해제" : "등록"} 하였습니다.`,
    };

    this.toasts.push(item);

    setTimeout(() => {
      runInAction(() => {
        const filter = this.toasts.filter((item) => item.id !== id);

        this.toasts = filter;
      });
    }, 2000);
  }
}
