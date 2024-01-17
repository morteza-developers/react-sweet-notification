import { IDialogListener } from "../../types";
import Modal from "components/Modal";
import "./dialog.css";
function Dialog({ title = "", content, id, close }: IDialogListener) {
  const handleClose = () => {
    close();
  };
  console.log("operee", content);
  return (
    <Modal title={title} open={true} onClose={handleClose}>
      {content && (
        <div className="confirm-content">
          {content({ onClose: handleClose })}
        </div>
      )}
    </Modal>
  );
}

export default Dialog;
