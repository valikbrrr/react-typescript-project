import { useRef } from "react";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

interface IMenuChatProps {
  setIsOpenNavMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavHelpMenu = ({ setIsOpenNavMenu }: IMenuChatProps) => {
  const SecMenuRef = useRef<HTMLDivElement | null>(null);

  const outsideClickHandler = (event: MouseEvent) => setIsOpenNavMenu(false);

  useOnClickOutside(SecMenuRef, outsideClickHandler);

  return (
    <div
      ref={SecMenuRef}
      className="absolute mx-16 mt-[84px] flex flex-col max-h-96 w-44 bg-white px-2 py-2 drop-shadow-2xl"
    >
      <div className="">Поиск</div>
      <div className="">Информация о чате</div>
      <div className="">Включить уведомления</div>
      <div className="">Пожаловаться</div>
      <div className="">Очистить историю</div>
    </div>
  );
};

export default NavHelpMenu;

/* <ul className="list-group shadow-md px-2 py-2">
<li className="list-group-item">An item</li>
<li className="list-group-item">A second item</li>
<li className="list-group-item">A third item</li>
<li className="list-group-item">A fourth item</li>
<li className="list-group-item">And a fifth one</li>
</ul> */
