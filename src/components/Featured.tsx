export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/5edda67a-2cc4-411d-be84-465c49432047/files/15b87a08-9471-4bf9-8a14-dd2e414e780b.jpg"
          alt="Тонировка окон зданий"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600" id="services">Наши услуги</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Тонировка снижает нагрев помещения до 60%, а бронирующая плёнка защищает стекло от ударов и несанкционированного доступа — надёжно и незаметно.
        </p>
        <div className="flex flex-col gap-3 mb-8 text-neutral-700 text-base">
          <span>— Солнцезащитная тонировка фасадов</span>
          <span>— Декоративные и приватные плёнки</span>
          <span>— Бронирование стёкол (4–8 слоёв)</span>
          <span>— Замер и монтаж под ключ</span>
        </div>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Заказать замер
        </button>
      </div>
    </div>
  );
}