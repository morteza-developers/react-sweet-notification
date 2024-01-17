import { IDialogListener } from "../../types";
import Modal from "components/Modal";

function Dialog({ title = "", content, id, close }: IDialogListener) {
  const handleClose = () => {
    close();
  };

  return (
    <Modal title={title} open onClose={handleClose}>
      {content && (
        <div className="confirm-content">
          {content({ onClose: handleClose })}
        </div>
      )}
    </Modal>
  );
}

export default Dialog;
