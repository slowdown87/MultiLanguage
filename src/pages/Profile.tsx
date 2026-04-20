import { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Book, Clock, Award, Settings, Edit, Save, LogOut, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { supabase } from '../lib/supabase'

const Profile = () => {
  const [activeTab, setActiveTab] = useState<'info' | 'stats' | 'settings'>('info')
  const [userInfo, setUserInfo] = useState({
    name: '张三',
    email: 'zhangsan@example.com',
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=friendly%20asian%20person%20profile%20picture&image_size=square',
    bio: '语言学习爱好者，正在学习英语和日语',
  })
  const [isEditing, setIsEditing] = useState(false)

  // 模拟学习数据
  const learningData = [
    { name: '周一', 学习时间: 30 },
    { name: '周二', 学习时间: 45 },
    { name: '周三', 学习时间: 20 },
    { name: '周四', 学习时间: 60 },
    { name: '周五', 学习时间: 35 },
    { name: '周六', 学习时间: 90 },
    { name: '周日', 学习时间: 40 },
  ]

  const learningStats = {
    totalCourses: 5,
    completedCourses: 2,
    totalModules: 15,
    completedModules: 8,
    totalStudyTime: 1200, // 分钟
    averageScore: 85,
    streak: 7, // 连续学习天数
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-6">个人中心</h1>

          {/* 用户信息卡片 */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-4 md:mb-0 md:mr-6">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-100">
                  <img
                    src={userInfo.avatar}
                    alt={userInfo.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-bold mb-2">{userInfo.name}</h2>
                <p className="text-gray-600 mb-2">{userInfo.email}</p>
                <p className="text-gray-500 mb-4">{userInfo.bio}</p>
                <div className="flex justify-center md:justify-start space-x-2">
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center"
                  >
                    {isEditing ? (
                      <>
                        <Save size={16} className="mr-1" />
                        保存
                      </>
                    ) : (
                      <>
                        <Edit size={16} className="mr-1" />
                        编辑资料
                      </>
                    )}
                  </button>
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors flex items-center"
                  >
                    <LogOut size={16} className="mr-1" />
                    退出登录
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 标签切换 */}
          <div className="flex mb-8">
            <button
              onClick={() => setActiveTab('info')}
              className={`px-6 py-3 rounded-t-lg font-medium ${
                activeTab === 'info'
                  ? 'bg-white text-blue-600 border-b-2 border-blue-600'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              个人信息
            </button>
            <button
              onClick={() => setActiveTab('stats')}
              className={`px-6 py-3 rounded-t-lg font-medium ${
                activeTab === 'stats'
                  ? 'bg-white text-blue-600 border-b-2 border-blue-600'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              学习数据
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`px-6 py-3 rounded-t-lg font-medium ${
                activeTab === 'settings'
                  ? 'bg-white text-blue-600 border-b-2 border-blue-600'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              账户设置
            </button>
          </div>

          {/* 内容区域 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            {activeTab === 'info' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-xl font-semibold mb-4">个人信息</h2>
                {isEditing ? (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">姓名</label>
                      <input
                        type="text"
                        value={userInfo.name}
                        onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">邮箱</label>
                      <input
                        type="email"
                        value={userInfo.email}
                        onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">个人简介</label>
                      <textarea
                        value={userInfo.bio}
                        onChange={(e) => setUserInfo({ ...userInfo, bio: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={3}
                      ></textarea>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-24 text-gray-600">姓名</div>
                      <div>{userInfo.name}</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-24 text-gray-600">邮箱</div>
                      <div>{userInfo.email}</div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-24 text-gray-600">个人简介</div>
                      <div>{userInfo.bio}</div>
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {activeTab === 'stats' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-xl font-semibold mb-4">学习数据</h2>
                
                {/* 学习统计卡片 */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{learningStats.totalCourses}</div>
                    <div className="text-sm text-gray-600">总课程数</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{learningStats.completedCourses}</div>
                    <div className="text-sm text-gray-600">完成课程</div>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-600">{learningStats.totalStudyTime}</div>
                    <div className="text-sm text-gray-600">学习分钟</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">{learningStats.streak}</div>
                    <div className="text-sm text-gray-600">连续天数</div>
                  </div>
                </div>

                {/* 学习时间图表 */}
                <div className="mb-6">
                  <h3 className="font-medium mb-4">本周学习时间</h3>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={learningData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="学习时间" fill="#3B82F6" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* 学习进度 */}
                <div>
                  <h3 className="font-medium mb-4">课程学习进度</h3>
                  <div className="space-y-4">
                    {['英语基础入门', '日语五十音图', '韩语基础入门'].map((course, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span>{course}</span>
                          <span>{Math.floor(Math.random() * 100)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${Math.floor(Math.random() * 100)}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'settings' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-xl font-semibold mb-4">账户设置</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-3">密码设置</h3>
                    <div className="space-y-2">
                      <button className="w-full text-left p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors flex justify-between items-center">
                        <span>修改密码</span>
                        <ChevronDown size={16} />
                      </button>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-3">通知设置</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                        <span>学习提醒</span>
                        <input type="checkbox" checked className="w-4 h-4" />
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                        <span>社区消息</span>
                        <input type="checkbox" checked className="w-4 h-4" />
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                        <span>课程更新</span>
                        <input type="checkbox" className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-3">隐私设置</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                        <span>公开学习进度</span>
                        <input type="checkbox" checked className="w-4 h-4" />
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                        <span>接收其他用户消息</span>
                        <input type="checkbox" className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Profile
