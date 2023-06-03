import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import styles from "./ModalWindow.module.sass";

type PropTypes = {
  children: any;
  closeModal?: () => {
    payload: boolean;
    type: string;
  };
};

export const ModalWindow = ({
  children,
  closeModal,
}: PropTypes) => {
  const root: HTMLElement | null =
    document.getElementById("root");
  const rootElementRef = useRef(
    document.createElement("div")
  );
  const current = rootElementRef.current;

  useEffect(() => {
    root?.appendChild(current);
    document.body.style.overflow = "hidden";

    return () => {
      root?.removeChild(current);
      document.body.style.overflow = "auto";
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <div
        className={styles["background"]}
        onClick={closeModal}
      />
      <dialog className={styles["modal"]}>
        {children}
      </dialog>
    </>,
    rootElementRef.current
  );
};
