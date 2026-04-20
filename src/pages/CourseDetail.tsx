import { useState } from 'react'
import { motion } from 'framer-motion'
import { Book, Clock, Award, ArrowRight, Play, Pause, CheckCircle } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>()
  const [activeModule, setActiveModule] = useState<number>(0)

  // 模拟数据
  const course = {
    id: 1,
    title: '英语基础入门',
    language: '英语',
    level: '初级',
    description: '适合零基础学习者，学习基本的英语词汇和语法。本课程包含4个模块，涵盖日常生活中最常用的英语表达。',
    duration: 60,
    modules: 4,
    progress: 30,
    objectives: [
      '掌握基础英语词汇',
      '学习基本语法结构',
      '能够进行简单的英语对话',
      '理解基础英语听力材料',
    ],
  }

  const courseModules = [
    {
      id: 1,
      title: '单词记忆',
      type: 'vocabulary',
      description: '学习日常生活中最常用的英语单词',
      duration: 15,
      completed: true,
    },
    {
      id: 2,
      title: '语法练习',
      type: 'grammar',
      description: '学习基本的英语语法结构',
      duration: 20,
      completed: true,
    },
    {
      id: 3,
      title: '口语跟读',
      type: 'speaking',
      description: '练习英语发音和口语表达',
      duration: 15,
      completed: false,
    },
    {
      id: 4,
      title: '听力训练',
      type: 'listening',
      description: '提高英语听力理解能力',
      duration: 10,
      completed: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 课程信息 */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center mb-6">
              <div className="mb-4 md:mb-0 md:mr-6">
                <div className="w-32 h-32 bg-blue-100 rounded-lg flex items-center justify-center text-4xl font-bold text-blue-600">
                  {course.language.charAt(0)}
                </div>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm mr-2">
                    {course.language}
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    {course.level}
                  </span>
                </div>
                <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex items-center space-x-4 text-gray-600">
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    <span>{course.duration} 分钟</span>
                  </div>
                  <div className="flex items-center">
                    <Book size={16} className="mr-1" />
                    <span>{course.modules} 个模块</span>
                  </div>
                  <div className="flex items-center">
                    <Award size={16} className="mr-1" />
                    <span>学习进度: {course.progress}%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 学习目标 */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">学习目标</h2>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                {course.objectives.map((objective, index) => (
                  <li key={index}>{objective}</li>
                ))}
              </ul>
            </div>

            {/* 操作按钮 */}
            <div className="flex space-x-4">
              <Link
                to={`/learn/${course.id}`}
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center"
              >
                <Play size={16} className="mr-1" />
                开始学习
              </Link>
              <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-300 transition-colors flex items-center">
                <Pause size={16} className="mr-1" />
                暂停学习
              </button>
            </div>
          </div>

          {/* 课程模块 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">课程模块</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {courseModules.map((module, index) => (
                <motion.div
                  key={module.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`rounded-lg p-4 ${activeModule === index ? 'bg-blue-50 border border-blue-200' : 'bg-gray-50 hover:bg-gray-100'}`}
                  onClick={() => setActiveModule(index)}
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                        {module.completed ? <CheckCircle size={16} /> : index + 1}
                      </div>
                      <h3 className="font-medium">{module.title}</h3>
                    </div>
                    <span className="text-sm text-gray-500">{module.duration} 分钟</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{module.description}</p>
                  <Link
                    to={`/learn/${course.id}/${module.id}`}
                    className="text-blue-600 font-medium hover:text-blue-800 flex items-center text-sm"
                  >
                    开始学习
                    <ArrowRight size={14} className="ml-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CourseDetail
