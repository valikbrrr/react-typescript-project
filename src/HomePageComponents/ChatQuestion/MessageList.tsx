import ListItem from "./ChatInputFolder/ListItem";
import { useSelector } from "react-redux";

export interface List {
  id: string;
  text: string;
  completed: boolean;
}

export interface State {
  listObj: {
    listArr: List[];
  };
}

const MessageList: React.FC = () => {
  const messages: List[] = useSelector((state: State) => state.listObj.listArr);

  return (
    <div className="flex-1 overflow-y-scroll px-2 py-5">
      <div className="flex mb-4">
        <div className="mr-2 py-3 px-4 bg-gray-200 rounded-bl-xl rounded-br-xl rounded-tr-xl text-sm text-black ">
          Привет! На связи поддержка Кинопоиска 👀
          <br />
          <br /> Собрали для вас ответы на самые частые вопросы в Яндекс
          Справке. Проверьте, нет ли там подходящего решения:
          <br />
          <br /> — Вопросы о Кинопоиске
          <br /> — О приложении для iOSО
          <br /> — О приложении для Android
          <br />
          <br /> Если возникают трудности при просмотре, не забудьте отключить
          VPN, прокси и похожие программы. Они могут влиять на стабильную работу
          сервиса и набор доступных фильмов и сериалов. Не нашли ответа на ваш
          вопрос? Нажмите на кнопку ниже 👇️
        </div>
        <ul className="grid grid-cols-6">
          {messages.map(() => (
            <ListItem />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MessageList;

// map(
//   arg0: (mes: string) => import("react/jsx-runtime").JSX.Element
// ): import("react").ReactNode;
// сделать список сообщений ul
