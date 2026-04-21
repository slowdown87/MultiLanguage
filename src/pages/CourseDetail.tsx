import { useState } from 'react'
import { motion } from 'framer-motion'
import { Book, Clock, Award, ArrowRight, Play, Pause, CheckCircle } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>()
  const [activeModule, setActiveModule] = useState<number>(0)

  // 模拟数据 - 根据课程ID获取对应课程
  const getCourseData = (courseId: string) => {
    switch(courseId) {
      case '1':
        return {
          course: {
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
          },
          modules: [
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
          ],
        }
      case '4':
        return {
          course: {
            id: 4,
            title: '日语五十音图',
            language: '日语',
            level: '初级',
            description: '适合零基础学习者，掌握日语假名的发音和书写。本课程包含3个模块，帮助你快速入门日语。',
            duration: 45,
            modules: 3,
            progress: 70,
            objectives: [
              '掌握五十音图的所有假名',
              '学习假名的正确发音',
              '能够读写平假名和片假名',
              '理解日语的基本发音规则',
            ],
          },
          modules: [
            {
              id: 1,
              title: '平假名入门',
              type: 'vocabulary',
              description: '学习平假名的发音和书写',
              duration: 15,
              completed: true,
            },
            {
              id: 2,
              title: '片假名入门',
              type: 'vocabulary',
              description: '学习片假名的发音和书写',
              duration: 15,
              completed: true,
            },
            {
              id: 3,
              title: '发音练习',
              type: 'speaking',
              description: '练习日语的基本发音和音调',
              duration: 15,
              completed: false,
            },
          ],
        }
      case '5':
        return {
          course: {
            id: 5,
            title: '日语日常会话',
            language: '日语',
            level: '中级',
            description: '适合有一定基础的学习者，学习日常生活中最常用的日语表达。本课程包含5个模块，涵盖日常交流场景。',
            duration: 80,
            modules: 5,
            progress: 0,
            objectives: [
              '掌握日常日语对话',
              '学习实用日语词汇',
              '能够进行基本的日语交流',
              '理解日语的表达方式',
            ],
          },
          modules: [
            {
              id: 1,
              title: '问候与自我介绍',
              type: 'vocabulary',
              description: '学习日语中的问候语和自我介绍',
              duration: 16,
              completed: false,
            },
            {
              id: 2,
              title: '购物与数字',
              type: 'vocabulary',
              description: '学习日语中的数字和购物用语',
              duration: 16,
              completed: false,
            },
            {
              id: 3,
              title: '交通与出行',
              type: 'vocabulary',
              description: '学习日语中的交通和出行用语',
              duration: 16,
              completed: false,
            },
            {
              id: 4,
              title: '餐饮与点餐',
              type: 'vocabulary',
              description: '学习日语中的餐饮和点餐用语',
              duration: 16,
              completed: false,
            },
            {
              id: 5,
              title: '日常交流',
              type: 'vocabulary',
              description: '学习日语中的日常交流用语',
              duration: 16,
              completed: false,
            },
          ],
        }
      case '6':
        return {
          course: {
            id: 6,
            title: '韩语基础入门',
            language: '韩语',
            level: '初级',
            description: '适合零基础学习者，学习韩语的基本字母和发音。本课程包含4个模块，帮助你快速入门韩语。',
            duration: 50,
            modules: 4,
            progress: 0,
            objectives: [
              '掌握韩文字母的发音和书写',
              '学习基础韩语词汇',
              '能够进行简单的韩语对话',
              '理解韩语的基本语法结构',
            ],
          },
          modules: [
            {
              id: 1,
              title: '韩文字母入门',
              type: 'vocabulary',
              description: '学习韩文字母的发音和书写',
              duration: 12.5,
              completed: false,
            },
            {
              id: 2,
              title: '基础韩语词汇',
              type: 'vocabulary',
              description: '学习日常生活中最常用的韩语单词',
              duration: 12.5,
              completed: false,
            },
            {
              id: 3,
              title: '韩语发音练习',
              type: 'speaking',
              description: '练习韩语的发音和口语表达',
              duration: 12.5,
              completed: false,
            },
            {
              id: 4,
              title: '简单韩语对话',
              type: 'listening',
              description: '提高韩语听力和对话理解能力',
              duration: 12.5,
              completed: false,
            },
          ],
        }
      case '7':
        return {
          course: {
            id: 7,
            title: '法语基础入门',
            language: '法语',
            level: '初级',
            description: '适合零基础学习者，学习法语的基本字母和发音。本课程包含4个模块，帮助你快速入门法语。',
            duration: 55,
            modules: 4,
            progress: 0,
            objectives: [
              '掌握法文字母的发音和书写',
              '学习基础法语词汇',
              '能够进行简单的法语对话',
              '理解法语的基本语法结构',
            ],
          },
          modules: [
            {
              id: 1,
              title: '法文字母入门',
              type: 'vocabulary',
              description: '学习法文字母的发音和书写',
              duration: 13.75,
              completed: false,
            },
            {
              id: 2,
              title: '基础法语词汇',
              type: 'vocabulary',
              description: '学习日常生活中最常用的法语单词',
              duration: 13.75,
              completed: false,
            },
            {
              id: 3,
              title: '法语发音练习',
              type: 'speaking',
              description: '练习法语的发音和口语表达',
              duration: 13.75,
              completed: false,
            },
            {
              id: 4,
              title: '简单法语对话',
              type: 'listening',
              description: '提高法语听力和对话理解能力',
              duration: 13.75,
              completed: false,
            },
          ],
        }
      default:
        return {
          course: {
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
          },
          modules: [
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
          ],
        }
    }
  }

  // 获取当前课程数据
  const courseData = getCourseData(id || '1')
  const course = courseData.course
  const courseModules = courseData.modules

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
