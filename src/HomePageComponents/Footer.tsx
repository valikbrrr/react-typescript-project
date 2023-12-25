interface IFooterProps {
  setIsChatOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Footer = ({ setIsChatOpen }: IFooterProps) => {
  return (
    <div className="bg-black pt-10 w-[100% max-w-[1440px]]">
      <div className="h-64 mx-6 px-16 border-t-2 border-white opacity-30">
        <div className="w-[100%] text-center pt-8">
          <a
            href="https://yandex.ru/legal/yandex_plus_conditions/"
            className="text-white text-[0.8rem] opacity-50 hover:opacity-90"
          >
            Условия подписки Яндекс Плюс.
          </a>
        </div>
        <div className="w-[100%] text-center">
          <a
            href="https://yandex.ru/legal/yandex_plus_conditions/"
            className="text-white text-[0.8rem] opacity-50 hover:opacity-90"
          >
            Условия просмотра платного контента на сервисе Кинопоиск.
          </a>
        </div>
        <div className="w-[100%] text-center pt-8">
          <p
            className="text-white opacity-50 hover:opacity-90 cursor-pointer"
            onClick={() => setIsChatOpen((prev) => !prev)}
          >
            Задать вопрос
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
