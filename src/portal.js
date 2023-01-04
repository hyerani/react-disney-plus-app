import { useState } from "react";
import Modal from "./potalModal";

// zIndex 를 사용하려면 포지션이 필요함
const modalWrapperStyle = {
  position: "relative",
  zIndex: 1,
};

const higherIndexWrapperStyle = {
  position: "relative",
  zIndex: 2,
  backgroundColor: "blue",
  padding: "10px",
};

//포탈을 사용할때 이벤트 버블링이 발생할 수 있음
//포탈은 뒤의 배경 스타일이 방해가 될때 유용하게 사용할 수 있음
// 버블링 중단하려면 stop
const portal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div style={modalWrapperStyle}>
        <button onClick={() => setIsModalOpen(true)}>모달 열기</button>
        <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
          모달내용
        </Modal>
      </div>
      <div style={higherIndexWrapperStyle}>z-index 2</div>
    </>
  );
};

export default portal;
