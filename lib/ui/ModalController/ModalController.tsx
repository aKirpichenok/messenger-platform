import { PopupError } from "@/lib/layout/Modals/PopupError/PopupError";
type PropTypes = {
  modalType?: string;
};

export const ModalController = ({
  modalType,
}: PropTypes): JSX.Element | null => {
  switch (modalType) {
    case "error":
      return <PopupError />;
    default:
      return null;
  }
};
