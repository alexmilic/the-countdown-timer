import { useRef, forwardRef, useImperativeHandle } from "react";

const ResultModal = forwardRef(function ResultModal({ targetTime, remainingTime, onReset  }, ref) {
  const dialog = useRef();
  const userLost = remainingTime <= 0;
  const formatedRemainingTime = (remainingTime / 1000).toFixed(2);


  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      }
    }
  });
  
  return ( 
    <dialog ref={dialog}>
      {userLost && <h2>You </h2>}
      <p>The target time was <strong>{targetTime}</strong></p>
      <p>You stopped the timer with <strong>{formatedRemainingTime}</strong></p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  )
});

export default ResultModal;