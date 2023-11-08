const Footer = () => {
  return (
    <div className="bg-black mt-16">
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
      </div>
    </div>
  );
};

export default Footer;
