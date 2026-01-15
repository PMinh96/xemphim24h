import Logo from './logo.svg';
import { Link } from 'react-router-dom';

export default function AppHeader() {
    return (
        <header className="sticky top-0 z-50 w-full bg-white/95 shadow-md shadow-black/10 backdrop-blur-md">
            {/* CONTAINER */}
            <div className="relative mx-auto flex h-16 items-center px-4">

                {/* LOGO */}
                <div className="flex items-center gap-2 text-2xl font-extrabold">
                    <Link to="/" className="block">
                        <img
                            src={Logo}
                            alt="doctruyenmoi24h"
                            className="h-14 w-auto cursor-pointer"
                        />
                    </Link>
                </div>

                {/* MENU CENTER */}
                <nav className="absolute left-1/2 -translate-x-1/2 flex gap-6 text-lg font-medium text-[#300a5a]">
                    <a href="/app/odds" className="hover:text-[#5c2f9b] transition-colors duration-200">
                        Truyện Lẻ
                    </a>

                    <a href="/app/practice" className="hover:text-[#5c2f9b] transition-colors duration-200">
                        Truyện Bộ
                    </a>

                    {/* THỂ LOẠI */}
                    <div className="group relative">
                        <span className="cursor-pointer hover:text-[#5c2f9b] transition-colors duration-200">
                            Thể Loại Truyện
                        </span>

                        <div className="invisible absolute left-0 top-full z-50 mt-2 w-48 rounded-md bg-white shadow-lg opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                            <a href="/the-loai/truyen-hanh-dong" className="block rounded px-3 py-2 hover:bg-[#f0e6ff]">Hành Động</a>
                            <a href="/the-loai/truyen-tinh-cam" className="block rounded px-3 py-2 hover:bg-[#f0e6ff]">Tình Cảm</a>
                            <a href="/the-loai/truyen-hai-huoc" className="block rounded px-3 py-2 hover:bg-[#f0e6ff]">Hài Hước</a>
                            <a href="/the-loai/truyen-kinh-di" className="block rounded px-3 py-2 hover:bg-[#f0e6ff]">Kinh Dị</a>
                            <a href="/the-loai/truyen-co-tich" className="block rounded px-3 py-2 hover:bg-[#f0e6ff]">Cổ Tích</a>
                        </div>
                    </div>

                    {/* QUỐC GIA */}
                    <div className="group relative">
                        <span className="flex cursor-pointer items-center gap-1 hover:text-[#5c2f9b] transition-colors duration-200">
                            Quốc Gia
                            <svg
                                className="h-3 w-3 transition-transform duration-200 group-hover:rotate-180"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>

                        <div className="invisible absolute left-0 top-full z-50 mt-2 w-40 rounded-md bg-white shadow-lg opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                            <a href="/quoc-gia/viet-nam" className="block rounded px-3 py-2 hover:bg-[#f0e6ff]">Việt Nam</a>
                            <a href="/quoc-gia/han-quoc" className="block rounded px-3 py-2 hover:bg-[#f0e6ff]">Hàn Quốc</a>
                            <a href="/quoc-gia/trung-quoc" className="block rounded px-3 py-2 hover:bg-[#f0e6ff]">Trung Quốc</a>
                            <a href="/quoc-gia/my" className="block rounded px-3 py-2 hover:bg-[#f0e6ff]">Âu Mỹ</a>
                            <a href="/quoc-gia/nhat-ban" className="block rounded px-3 py-2 hover:bg-[#f0e6ff]">Nhật Bản</a>
                        </div>
                    </div>
                </nav>

                {/* RIGHT */}
                <div className="ml-auto flex items-center gap-3">
                    <input
                        type="text"
                        placeholder="Tìm phim..."
                        className="h-9 w-44 rounded-md border border-[#300a5a]/30 bg-white px-2 text-sm text-[#300a5a] placeholder:text-[#aaa] outline-none focus:ring-1 focus:ring-[#5c2f9b]"
                    />
                    <Link 
                        to="/app/login"
                        className="h-9 rounded-md bg-[#300a5a] px-4 text-white font-medium hover:bg-[#5c2f9b] transition-colors duration-200 flex items-center justify-center"
                    >
                        Đang nhập
                    </Link>
                </div>
            </div>
        </header>
    );
}