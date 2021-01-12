import { observer } from "mobx-react-lite";
import * as React from "react";
import { useStore } from "../../hooks/useStore/useStore";
import { ToastItem, ToastWrapper } from "./Toast.styled";

export const Toast = observer(() => {
  const store = useStore("toast");

  return (
    <ToastWrapper>
      {store.toasts.map((item: IToast) => {
        return (
          <ToastItem key={item.id}>
            <span>{item.text}</span>
          </ToastItem>
        );
      })}
    </ToastWrapper>
  );
});
