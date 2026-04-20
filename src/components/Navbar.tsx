import { Link, useLocation } from 'react-router-dom'
import { Home, Book, GraduationCap, Users, User, LogIn } from 'lucide-react'
import { supabase } from '../lib/supabase'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const location = useLocation()
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser()
      setUser(data.user)
    }
    checkUser()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setUser(null)
  }

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-600">LinguaLearn</span>
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-4">
                <NavLink to="/" icon={<Home size={20} />} label="首页" />
                <NavLink to="/courses" icon={<Book size={20} />} label="课程中心" />
                <NavLink to="/learn" icon={<GraduationCap size={20} />} label="学习中心" />
                <NavLink to="/community" icon={<Users size={20} />} label="社区" />
              </div>
            </div>
          </div>
          <div className="flex items-center">
            {user ? (
              <div className="flex items-center space-x-4">
                <Link to="/profile" className="flex items-center text-gray-700 hover:text-blue-600">
                  <User size={20} className="mr-1" />
                  <span>{user.email?.split('@')[0]}</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                >
                  退出
                </button>
              </div>
            ) : (
              <Link
                to="/auth/login"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center"
              >
                <LogIn size={20} className="mr-1" />
                登录
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

const NavLink = ({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) => {
  const location = useLocation()
  const isActive = location.pathname === to

  return (
    <Link
      to={to}
      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
        isActive
          ? 'bg-blue-100 text-blue-700'
          : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      {icon}
      <span className="ml-2">{label}</span>
    </Link>
  )
}

export default Navbar
