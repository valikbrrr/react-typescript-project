import { useAppDispatch } from "../hooksRedux";
import { toggleIsChatOpen } from "../store/Slices";

const Footer = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="pt-10 w-[100%] max-w-[1440px]">
      <div className="h-32 mb-16 border-t-2 border-white opacity-20">
        <div className="w-[100%] text-center pt-8">
          <a
            href="https://yandex.ru/legal/yandex_plus_conditions/"
            className="text-white text-[0.8rem] opacity-70 hover:opacity- 90"
          >
            Условия подписки Яндекс Плюс.
          </a>
        </div>
        <div className="w-[100%] text-center">
          <a
            href="https://yandex.ru/legal/yandex_plus_conditions/"
            className="text-white text-[0.8rem] opacity-70 hover:opacity-90"
          >
            Условия просмотра платного контента на сервисе Кинопоиск.
          </a>
        </div>
        <div className="w-[100%] text-center pt-8">
          <button
            className="text-white opacity-70 hover:opacity-100 cursor-pointer chat-trigger"
            onClick={() => dispatch(toggleIsChatOpen())}
          >
            Задать вопрос
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
