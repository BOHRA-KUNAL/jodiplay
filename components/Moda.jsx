import React, { useEffect, useState } from "react";

const ModalComponent = ({ title, children, setShow, show }) => {
  const [showModal, setShowModal] = useState(show);

  const handleClose = () => {
    setShow && setShow(false);
    setShowModal(false);
  };

  useEffect(() => {
    setShowModal(show);
  }, [show]);

  return (
    <>
      {showModal && (
        <div
          className="modal fade show d-flex align-items-center mx-auto"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block" }}
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-scrollable mx-auto" style={{ maxWidth: "95dvw" }}>
            <div className="modal-content">
              <div className="modal-header">
                {title ? (
                  <h5 className="modal-title" id="staticBackdropLabel">
                    Modal title
                  </h5>
                ) : (
                  <></>
                )}
                <button
                  type="button"
                  className="btn-close text-white"
                  onClick={handleClose}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">{children}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalComponent;
