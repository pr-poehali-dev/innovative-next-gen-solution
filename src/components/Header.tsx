interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-wide">ГлассПро</div>
        <nav className="flex gap-6 items-center">
          <a
            href="#services"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Услуги
          </a>
          <a
            href="tel:+79047143020"
            className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm font-medium"
          >
            +7 (904) 714-30-20
          </a>
        </nav>
      </div>
    </header>
  );
}