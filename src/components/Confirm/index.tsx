import "./styles.css";
import { IConfirmListener } from "../../types";
import { useState } from "react";
import Modal from "../Modal";
import ButtonConfirm from "../Button";

function Confirm({
  okText,
  cancelText,
  showOkButton = true,
  showCancelButton = true,
  onClose = () => null,
  onOk = () => null,
  title = "",
  okIcon = "",
  content,
  id,
  status,
  close,
  closeAfterAccept = true,
  preConfirm,
}: IConfirmListener) {
  const [loading, setLoading] = useState<boolean>(false);
  const handleClose = () => {
    if (loading) return;
    onClose({
      okText,
      cancelText,
      showOkButton,
      showCancelButton,
      title,
      okIcon,
      content,
      id,
      status,
    });
    close();
  };
  const handleAccept = async () => {
    if (preConfirm) {
      try {
        setLoading(true);
        await preConfirm();
        setLoading(false);
        closeAfterAccept && close();

        onOk({
          okText,
          cancelText,
          showOkButton,
          showCancelButton,
          close,
          title,
          okIcon,
          content,
          id,
          status,
        });
      } catch {
        setLoading(false);
      }
    } else {
      closeAfterAccept && close();
      onOk({
        okText,
        cancelText,
        showOkButton,
        showCancelButton,
        close,
        title,
        okIcon,
        content,
        id,
        status,
      });
    }
  };
  return (
    <Modal
      actions={
        <div className="confirm-action">
          {showOkButton && (
            <ButtonConfirm
              loading={loading}
              color="primary"
              onClick={handleAccept}
            >
              {okIcon || null}
              {okText || "Yes"}
            </ButtonConfirm>
          )}

          {showCancelButton && (
            <ButtonConfirm
              disabled={loading}
              color="error"
              onClick={handleClose}
            >
              {cancelText || "No"}
            </ButtonConfirm>
          )}
        </div>
      }
      title={title}
      open
      onClose={handleClose}
    >
      {content && <div className="confirm-content">{content({ onClose: handleClose })}</div>}
    </Modal>
  );
}

export default Confirm;
