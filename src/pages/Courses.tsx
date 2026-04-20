import { useState } from 'react'
import { motion } from 'framer-motion'
import { Book, Clock, Award, ArrowRight, Filter } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'

const Courses = () => {
  const [searchParams] = useSearchParams()
  const [activeLevel, setActiveLevel] = useState('all')
  const selectedLanguage = searchParams.get('language') || '全部'

  // 模拟数据
  const courses = [
    {
      id: 1,
      title: '英语基础入门',
      language: '英语',
      level: 'beginner',
      levelText: '初级',
      description: '适合零基础学习者，学习基本的英语词汇和语法',
      duration: 60,
      modules: 4,
      progress: 30,
    },
    {
      id: 2,
      title: '英语日常会话',
      language: '英语',
      level: 'intermediate',
      levelText: '中级',
      description: '学习日常生活中的英语对话，提高口语能力',
      duration: 90,
      modules: 6,
      progress: 0,
    },
    {
      id: 3,
      title: '英语商务交流',
      language: '英语',
      level: 'advanced',
      levelText: '高级',
      description: '学习商务英语，掌握职场沟通技巧',
      duration: 120,
      modules: 8,
      progress: 0,
    },
    {
      id: 4,
      title: '日语五十音图',
      language: '日语',
      level: 'beginner',
      levelText: '初级',
      description: '学习日语基础五十音图，掌握发音',
      duration: 45,
      modules: 3,
      progress: 70,
    },
    {
      id: 5,
      title: '日语日常会话',
      language: '日语',
      level: 'intermediate',
      levelText: '中级',
      description: '学习日语日常交流用语，提高口语能力',
      duration: 80,
      modules: 5,
      progress: 0,
    },
    {
      id: 6,
      title: '韩语基础入门',
      language: '韩语',
      level: 'beginner',
      levelText: '初级',
      description: '学习韩语基础字母和基本词汇',
      duration: 50,
      modules: 4,
      progress: 0,
    },
  ]

  // 过滤课程
  const filteredCourses = courses.filter((course) => {
    const languageMatch = selectedLanguage === '全部' || course.language === selectedLanguage
    const levelMatch = activeLevel === 'all' || course.level === activeLevel
    return languageMatch && levelMatch
  })

  const levels = [
    { value: 'all', label: '全部级别' },
    { value: 'beginner', label: '初级' },
    { value: 'intermediate', label: '中级' },
    { value: 'advanced', label: '高级' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-6">课程中心</h1>
          
          {/* 语言筛选 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">选择语言: {selectedLanguage}</h2>
            <div className="flex space-x-4">
              {['全部', '英语', '日语', '韩语'].map((lang) => (
                <Link
                  key={lang}
                  to={`/courses?language=${lang}`}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    selectedLanguage === lang
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {lang}
                </Link>
              ))}
            </div>
          </div>

          {/* 级别筛选 */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">课程级别</h2>
              <div className="flex items-center text-gray-500">
                <Filter size={16} className="mr-1" />
                <span>筛选</span>
              </div>
            </div>
            <div className="flex space-x-4">
              {levels.map((level) => (
                <button
                  key={level.value}
                  onClick={() => setActiveLevel(level.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    activeLevel === level.value
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {level.label}
                </button>
              ))}
            </div>
          </div>

          {/* 课程列表 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {course.language}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        course.level === 'beginner'
                          ? 'bg-green-100 text-green-800'
                          : course.level === 'intermediate'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {course.levelText}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Clock size={16} className="mr-1" />
                    <span>{course.duration} 分钟</span>
                    <span className="mx-2">•</span>
                    <Book size={16} className="mr-1" />
                    <span>{course.modules} 个模块</span>
                  </div>
                  {course.progress > 0 && (
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>学习进度</span>
                        <span>{course.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                  <div className="flex space-x-2">
                    <Link
                      to={`/courses/${course.id}`}
                      className="flex-1 bg-blue-600 text-white text-center py-2 rounded-md hover:bg-blue-700 transition-colors"
                    >
                      查看详情
                    </Link>
                    <Link
                      to={`/learn/${course.id}`}
                      className="flex-1 bg-green-600 text-white text-center py-2 rounded-md hover:bg-green-700 transition-colors"
                    >
                      开始学习
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">暂无符合条件的课程</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Courses
