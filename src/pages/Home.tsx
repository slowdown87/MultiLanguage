import { motion } from 'framer-motion'
import { Book, Clock, Award, Users, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Home = () => {
  // 模拟数据
  const languages = [
    { id: 1, name: '英语', flag: '🇺🇸', level: '初级到高级', courses: 24 },
    { id: 2, name: '日语', flag: '🇯🇵', level: '初级到高级', courses: 18 },
    { id: 3, name: '韩语', flag: '🇰🇷', level: '初级到高级', courses: 15 },
  ]

  const recommendedCourses = [
    { id: 1, title: '英语基础入门', language: '英语', level: '初级', duration: 60, progress: 30 },
    { id: 2, title: '日语五十音图', language: '日语', level: '初级', duration: 45, progress: 70 },
    { id: 3, title: '韩语日常会话', language: '韩语', level: '初级', duration: 50, progress: 0 },
  ]

  const communityPosts = [
    { id: 1, title: '分享我的英语学习心得', author: '小明', likes: 24, comments: 8 },
    { id: 2, title: '日语N1备考经验', author: '小红', likes: 18, comments: 12 },
    { id: 3, title: '韩语TOPIK考试技巧', author: '小李', likes: 32, comments: 15 },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-4">开启您的语言学习之旅</h1>
            <p className="text-xl mb-8">沉浸式多语种学习平台，支持英语、日语、韩语等主流语言</p>
            <Link
              to="/courses"
              className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              开始学习
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Language Selection */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10">选择您要学习的语言</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {languages.map((lang) => (
              <motion.div
                key={lang.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: lang.id * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{lang.flag}</div>
                <h3 className="text-xl font-bold mb-2">{lang.name}</h3>
                <p className="text-gray-600 mb-4">{lang.level}</p>
                <p className="text-gray-500 mb-6">{lang.courses} 门课程</p>
                <Link
                  to={`/courses?language=${lang.name}`}
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
                >
                  浏览课程
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Courses */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10">推荐课程</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendedCourses.map((course) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: course.id * 0.1 }}
                className="bg-gray-50 rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {course.language}
                    </span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      {course.level}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Clock size={16} className="mr-1" />
                    <span>{course.duration} 分钟</span>
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
                  <Link
                    to={`/courses/${course.id}`}
                    className="block w-full bg-blue-600 text-white text-center py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    继续学习
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Posts */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10">社区动态</h2>
          <div className="space-y-4">
            {communityPosts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: post.id * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <Users size={16} className="mr-1" />
                  <span>作者: {post.author}</span>
                </div>
                <div className="flex items-center justify-between text-gray-500">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <Award size={16} className="mr-1" />
                      {post.likes} 赞
                    </span>
                    <span className="flex items-center">
                      <Users size={16} className="mr-1" />
                      {post.comments} 评论
                    </span>
                  </div>
                  <Link
                    to="/community"
                    className="text-blue-600 font-medium hover:text-blue-800"
                  >
                    查看详情
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">准备好开始您的语言学习之旅了吗？</h2>
            <p className="text-xl mb-8">加入我们的社区，与全球学习者一起进步</p>
            <Link
              to="/auth/register"
              className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              立即注册
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
