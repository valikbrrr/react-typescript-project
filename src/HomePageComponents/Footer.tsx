interface IFooterProps {
  setIsChatOpen: React.Dispatch<React.SetStateAction<boolean>>;
  IsChatOpen: boolean;
}

const Footer = (
  { setIsChatOpen }: IFooterProps,
  { IsChatOpen }: IFooterProps
) => {
  return (
    <div className="bg-black pt-10 w-[100%] max-w-[1440px]">
      <div className="h-32 mb-10 border-t-2 border-white opacity-20">
        <div className="w-[100%] text-center pt-8">
          <a
            href="https://yandex.ru/legal/yandex_plus_conditions/"
            className="text-white text-[0.8rem] opacity-70 hover:opacity-90"
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
          {IsChatOpen && (
            <button
              className="text-white opacity-80 hover:opacity-90 cursor-pointer"
              onClick={() => setIsChatOpen(false)}
            >
              Задать вопрос
            </button>
          )}
          <button
            className="text-white opacity-70 hover:opacity-100 cursor-pointer"
            onClick={() => setIsChatOpen(true)}
          >
            Задать вопрос
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
