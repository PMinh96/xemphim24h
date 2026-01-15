import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '@/src/components/layout/logo.svg';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Thêm logic đăng ký ở đây
    if (formData.password !== formData.confirmPassword) {
      alert('Mật khẩu xác nhận không khớp!');
      return;
    }
    console.log('Register:', formData);
    // Sau khi đăng ký thành công, có thể redirect
    // navigate('/app/home');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/app/home" className="inline-block">
            <img
              src={Logo}
              alt="doctruyenmoi24h"
              className="h-16 w-auto mx-auto mb-4"
            />
          </Link>
          <h1 className="text-3xl font-bold text-[#300a5a]">Đăng ký</h1>
          <p className="text-gray-600 mt-2">Tạo tài khoản mới của bạn</p>
        </div>

        {/* Register Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username Input */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                Tên đăng nhập
              </label>
              <input
                id="username"
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                placeholder="Nhập tên đăng nhập"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5c2f9b] focus:border-transparent"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Nhập email của bạn"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5c2f9b] focus:border-transparent"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Mật khẩu
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Nhập mật khẩu"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5c2f9b] focus:border-transparent"
                required
              />
            </div>

            {/* Confirm Password Input */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                Xác nhận mật khẩu
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Nhập lại mật khẩu"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5c2f9b] focus:border-transparent"
                required
              />
            </div>

            {/* Terms & Conditions */}
            <div>
              <label className="flex items-start">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-[#5c2f9b] border-gray-300 rounded focus:ring-[#5c2f9b] mt-1"
                  required
                />
                <span className="ml-2 text-sm text-gray-600">
                  Tôi đồng ý với{' '}
                  <a href="#" className="text-[#5c2f9b] hover:underline">
                    Điều khoản sử dụng
                  </a>{' '}
                  và{' '}
                  <a href="#" className="text-[#5c2f9b] hover:underline">
                    Chính sách bảo mật
                  </a>
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#300a5a] text-white py-3 rounded-lg font-medium hover:bg-[#5c2f9b] transition-colors duration-200"
            >
              Đăng ký
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Đã có tài khoản?{' '}
              <Link to="/app/login" className="text-[#5c2f9b] font-medium hover:underline">
                Đăng nhập ngay
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
