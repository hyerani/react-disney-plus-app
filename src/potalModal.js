import React from "react";
import ReactDOM from "react-dom";

const modalStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#fff",
  padding: 50,
  zIndex: 1000,
};

// 배경 검은색 처리
const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  zIndex: 1000,
};

const Modal = ({ open, onClose, children }) => {
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div style={overlayStyle} />
      <div style={modalStyle}>
        <button onClick={onClose}>모달 닫기</button>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
