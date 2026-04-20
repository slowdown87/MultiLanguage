import { useState } from 'react'
import { motion } from 'framer-motion'
import { Book, Clock, Award, ArrowRight, Play, Pause, CheckCircle, BookOpen, Headphones, Mic, Code } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'

const Learn = () => {
  const { id, moduleId } = useParams<{ id: string; moduleId: string }>()
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0)
  const [showAnswer, setShowAnswer] = useState<boolean>(false)

  // 模拟数据
  const words = [
    { word: 'apple', meaning: '苹果', example: 'I like to eat apples.' },
    { word: 'banana', meaning: '香蕉', example: 'Bananas are yellow.' },
    { word: 'cat', meaning: '猫', example: 'The cat is sleeping.' },
    { word: 'dog', meaning: '狗', example: 'Dogs are loyal animals.' },
    { word: 'house', meaning: '房子', example: 'I live in a big house.' },
  ]

  const learningProgress = {
    totalCourses: 5,
    completedCourses: 2,
    totalModules: 15,
    completedModules: 8,
    totalStudyTime: 120, // 分钟
    weeklyGoal: 60, // 分钟
    weeklyStudyTime: 45, // 分钟
  }

  const personalizedPath = [
    { id: 1, title: '英语基础入门', progress: 30, recommended: true },
    { id: 2, title: '英语日常会话', progress: 0, recommended: true },
    { id: 3, title: '英语语法进阶', progress: 0, recommended: false },
    { id: 4, title: '英语听力训练', progress: 0, recommended: false },
  ]

  const handleNextWord = () => {
    setCurrentWordIndex((prev) => (prev + 1) % words.length)
    setShowAnswer(false)
  }

  const handlePrevWord = () => {
    setCurrentWordIndex((prev) => (prev - 1 + words.length) % words.length)
    setShowAnswer(false)
  }

  if (moduleId) {
    // 学习模块页面
    return (
      <div className="min-h-screen bg-gray-50 pt-16">
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-6">
              <Link to={`/learn/${id}`} className="text-blue-600 hover:text-blue-800 mr-4">
                <ArrowRight size={20} className="transform rotate-180" />
              </Link>
              <h1 className="text-2xl font-bold">单词记忆模块</h1>
            </div>

            {/* 单词卡片 */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <h2 className="text-3xl font-bold mb-6">{words[currentWordIndex].word}</h2>
                {showAnswer ? (
                  <div className="mb-6">
                    <p className="text-xl text-gray-700 mb-2">{words[currentWordIndex].meaning}</p>
                    <p className="text-gray-600 italic">{words[currentWordIndex].example}</p>
                  </div>
                ) : (
                  <button
                    onClick={() => setShowAnswer(true)}
                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors mb-6"
                  >
                    显示答案
                  </button>
                )}
                <div className="flex justify-between">
                  <button
                    onClick={handlePrevWord}
                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
                  >
                    上一个
                  </button>
                  <button
                    onClick={handleNextWord}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    下一个
                  </button>
                </div>
              </motion.div>
            </div>

            {/* 学习统计 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">学习统计</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{currentWordIndex + 1}/{words.length}</div>
                  <div className="text-sm text-gray-600">当前进度</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">85%</div>
                  <div className="text-sm text-gray-600">正确率</div>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600">15</div>
                  <div className="text-sm text-gray-600">学习分钟</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">5</div>
                  <div className="text-sm text-gray-600">掌握单词</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  // 学习中心首页
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-6">学习中心</h1>

          {/* 学习进度概览 */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">学习进度概览</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">{learningProgress.completedCourses}/{learningProgress.totalCourses}</div>
                <div className="text-sm text-gray-600">完成课程</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-600">{learningProgress.completedModules}/{learningProgress.totalModules}</div>
                <div className="text-sm text-gray-600">完成模块</div>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-yellow-600">{learningProgress.totalStudyTime}</div>
                <div className="text-sm text-gray-600">学习分钟</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">{Math.round((learningProgress.weeklyStudyTime / learningProgress.weeklyGoal) * 100)}%</div>
                <div className="text-sm text-gray-600">周目标完成</div>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-blue-600 h-4 rounded-full"
                style={{ width: `${(learningProgress.weeklyStudyTime / learningProgress.weeklyGoal) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* 个性化学习路径 */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">个性化学习路径</h2>
            <div className="space-y-4">
              {personalizedPath.map((course) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center p-4 rounded-lg hover:bg-gray-50"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-4">
                    <BookOpen size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center">
                      <h3 className="font-medium mr-2">{course.title}</h3>
                      {course.recommended && (
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                          推荐
                        </span>
                      )}
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <Link
                    to={`/courses/${course.id}`}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <ArrowRight size={20} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 学习模块入口 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">学习模块</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="bg-blue-50 p-6 rounded-lg text-center hover:bg-blue-100 transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4">
                  <Book size={24} />
                </div>
                <h3 className="font-medium mb-2">单词记忆</h3>
                <p className="text-sm text-gray-600 mb-4">学习和记忆新单词</p>
                <Link
                  to="/learn/1/1"
                  className="text-blue-600 font-medium hover:text-blue-800 text-sm"
                >
                  开始学习
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="bg-green-50 p-6 rounded-lg text-center hover:bg-green-100 transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
                  <Code size={24} />
                </div>
                <h3 className="font-medium mb-2">语法练习</h3>
                <p className="text-sm text-gray-600 mb-4">练习语法规则</p>
                <Link
                  to="/learn/1/2"
                  className="text-green-600 font-medium hover:text-green-800 text-sm"
                >
                  开始学习
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="bg-yellow-50 p-6 rounded-lg text-center hover:bg-yellow-100 transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center mx-auto mb-4">
                  <Mic size={24} />
                </div>
                <h3 className="font-medium mb-2">口语跟读</h3>
                <p className="text-sm text-gray-600 mb-4">练习口语发音</p>
                <Link
                  to="/learn/1/3"
                  className="text-yellow-600 font-medium hover:text-yellow-800 text-sm"
                >
                  开始学习
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="bg-purple-50 p-6 rounded-lg text-center hover:bg-purple-100 transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mx-auto mb-4">
                  <Headphones size={24} />
                </div>
                <h3 className="font-medium mb-2">听力训练</h3>
                <p className="text-sm text-gray-600 mb-4">提高听力理解</p>
                <Link
                  to="/learn/1/4"
                  className="text-purple-600 font-medium hover:text-purple-800 text-sm"
                >
                  开始学习
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Learn
