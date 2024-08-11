import { useRef, forwardRef, useImperativeHandle } from "react";

const ResultModal = forwardRef(function ResultModal({result, targetTime}, ref) {
  const dialog = useRef();
  
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      }
    }
  });
  
  return ( 
    <dialog ref={dialog}>
      <h2>You {result}</h2>
      <p>The target time was <strong>{targetTime}</strong></p>
      <p>You stopped the timer with <strong>X seconds left</strong></p>
      <form action="">
        <button>Close</button>
      </form>
    </dialog>
  )
});

export default ResultModal;