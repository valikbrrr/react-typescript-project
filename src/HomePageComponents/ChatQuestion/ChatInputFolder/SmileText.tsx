import { useRef } from "react";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";
import { toggleSmileCollection } from "../../../store/SliceChat";
import { useAppDispatch } from "../../../hooksRedux";

const SmileText = () => {
  const dispatch = useAppDispatch();
  const SmileRef = useRef<HTMLDivElement | null>(null);
  const outsideClickHandler = (event: MouseEvent) =>
    dispatch(toggleSmileCollection());

  useOnClickOutside(SmileRef, outsideClickHandler);

  return (
    <div
      ref={SmileRef}
      className="absolute ml-32 mr-4 mt-[545px] bg-black max-h-16 max-w-40 text-white text-sm px-1 py-1"
    >
      Использование смайликов невозможно
    </div>
  );
};

export default SmileText;
