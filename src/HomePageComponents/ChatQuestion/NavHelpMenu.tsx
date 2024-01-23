// import { useRef } from "react";
// import { useOnClickOutside } from "../../hooks/useOnClickOutside";
// import { toggleisOpenNavMenu } from "../../store/Slices";
// import { useAppDispatch } from "../../hooksRedux";

// interface IMenuChatProps {
//   setIsOpenNavMenu: React.Dispatch<React.SetStateAction<boolean>>;
// }

const NavHelpMenu = () => {
  // const dispatch = useAppDispatch();
  // const SecMenuRef = useRef<HTMLDivElement | null>(null);

  // const outsideClickHandler = (event: MouseEvent) =>
  //   dispatch(toggleisOpenNavMenu());

  // useOnClickOutside(SecMenuRef, outsideClickHandler);

  return (
    <div
      // ref={SecMenuRef}
      className="absolute mx-16 mt-[84px] max-h-96 w-44 bg-white drop-shadow-2xl border-2 border-neutral-300 shadow-xl text-sm"
    >
      <div className="hover:bg-slate-300 px-2 pt-1">
        <button className="">Поиск</button>
      </div>
      <div className="hover:bg-slate-300">
        <button className="px-2">Информация о чате</button>
      </div>
      <div className="hover:bg-slate-300">
        <button className="px-2">Включить уведомления</button>
      </div>
      <div className="hover:bg-slate-300">
        <button className="px-2">Пожаловаться</button>
      </div>
      <div className="hover:bg-slate-300">
        <button className="px-2 pb-1">Очистить историю</button>
      </div>
    </div>
  );
};

export default NavHelpMenu;
