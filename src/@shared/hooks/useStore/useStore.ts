import React from "react";
import { Context } from "../../stores/provider";

export const useStore = (type: string) => {
  const value: { [key: string]: any } | null = React.useContext(Context);

  if (!value) {
    throw new Error();
  }

  return value[type];
};
