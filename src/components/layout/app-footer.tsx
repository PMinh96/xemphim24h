import Logo from './logo.svg';

export const AppFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mx-auto max-w-[1440px] px-4 py-4 bg-gray-800">
      <div className="flex items-center justify-center border-t border-b border-gray-700 py-3 sm:px-6 lg:px-8">
        {/* CENTER: FOOTER LINKS */}
        <nav className="flex flex-wrap items-center gap-2 text-sm font-extrabold text-gray-300">
          <a href="/gioi-thieu" className="hover:text-white">
            Giới thiệu
          </a>
          <span className="opacity-50">|</span>

          <a href="/dieu-khoan" className="hover:text-white">
            Điều khoản
          </a>
          <span className="opacity-50">|</span>

          <a href="/dmca" className="hover:text-white">
            DMCA
          </a>
          <span className="opacity-50">|</span>

          <a href="/lien-he" className="hover:text-white">
            Liên hệ
          </a>
        </nav>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-2 text-center text-xs text-gray-400">
        © {currentYear} ArcanicGroup. All rights reserved.
      </div>
    </footer>
  );
};

export default AppFooter;
