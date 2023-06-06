// import { setOpenModal } from "@.landing/toolkitRedux";
import { ModalWindow } from "@/lib/ui/ModalWindow/ModalWindow";
// import { useDispatch } from "react-redux";

import errorPopupImg from "/libs/img/errorPopup.png";
import Image from "next/image";
import { Button } from "@/lib/ui/Button/Button";
import { Typography } from "@/lib/ui/Typography/Typography";

export const PopupError = () => {
  // const dispatch = useDispatch();

  return (
    <ModalWindow
      children={
        <>
          <Typography
            fontWeight={700}
            marginTop={"40px"}
          >
            {"errorInformation"}
          </Typography>
          <Image
            width={327}
            height={233}
            src={errorPopupImg}
            alt=""
          />
          <div
            style={{
              width: "300px",
              lineHeight: "25px",
              fontSize: "18px",
              display: "flex",
              justifyContent: "center",
              margin: "20px auto",
            }}
          >
            {"errorHint"}
          </div>
          <Button
            // onClick={() =>
            //   dispatch(setOpenModal(false))
            // }
            width={"374px"}
            marginTop={"45px"}
          >
            {"errorConfirm"}
          </Button>
        </>
      }
      // closeModal={() =>
      //   dispatch(setOpenModal(false))
      // }
    />
  );
};
