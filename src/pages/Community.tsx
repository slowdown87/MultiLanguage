import { useState } from 'react'
import { motion } from 'framer-motion'
import { Users, Award, MessageSquare, Heart, Share2, ArrowRight, Send } from 'lucide-react'
import { Link } from 'react-router-dom'

const Community = () => {
  const [activeTab, setActiveTab] = useState<'posts' | 'achievements'>('posts')
  const [newPost, setNewPost] = useState('')

  // 模拟数据
  const communityPosts = [
    {
      id: 1,
      title: '分享我的英语学习心得',
      content: '我通过每天坚持学习30分钟，三个月内从零基础达到了日常交流的水平。主要是通过单词记忆和口语练习相结合的方式...',
      author: '小明',
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=friendly%20asian%20male%20profile%20picture&image_size=square',
      language: '英语',
      likes: 24,
      comments: 8,
      createdAt: '2026-04-15',
    },
    {
      id: 2,
      title: '日语N1备考经验',
      content: '备考日语N1需要制定合理的学习计划，重点关注语法和听力部分。我使用了多种学习资源，包括教材、APP和模拟题...',
      author: '小红',
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=friendly%20asian%20female%20profile%20picture&image_size=square',
      language: '日语',
      likes: 18,
      comments: 12,
      createdAt: '2026-04-10',
    },
    {
      id: 3,
      title: '韩语TOPIK考试技巧',
      content: 'TOPIK考试的听力部分需要大量练习，阅读部分则需要提高速度。我建议使用真题进行模拟考试，熟悉考试节奏...',
      author: '小李',
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=friendly%20asian%20young%20man%20profile%20picture&image_size=square',
      language: '韩语',
      likes: 32,
      comments: 15,
      createdAt: '2026-04-05',
    },
  ]

  const achievements = [
    {
      id: 1,
      title: '初学者',
      description: '完成第一个课程',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beginner%20badge%20icon&image_size=square',
      users: 1250,
    },
    {
      id: 2,
      title: '坚持不懈',
      description: '连续学习7天',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=persistent%20badge%20icon&image_size=square',
      users: 890,
    },
    {
      id: 3,
      title: '词汇大师',
      description: '掌握1000个单词',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=vocabulary%20master%20badge%20icon&image_size=square',
      users: 450,
    },
    {
      id: 4,
      title: '语法专家',
      description: '完成所有语法练习',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=grammar%20expert%20badge%20icon&image_size=square',
      users: 320,
    },
    {
      id: 5,
      title: '口语达人',
      description: '完成100次口语练习',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=speaking%20master%20badge%20icon&image_size=square',
      users: 280,
    },
    {
      id: 6,
      title: '听力高手',
      description: '完成所有听力训练',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=listening%20master%20badge%20icon&image_size=square',
      users: 210,
    },
  ]

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newPost.trim()) {
      // 这里可以添加发布帖子的逻辑
      setNewPost('')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-6">社区</h1>

          {/* 标签切换 */}
          <div className="flex mb-8">
            <button
              onClick={() => setActiveTab('posts')}
              className={`px-6 py-3 rounded-t-lg font-medium ${
                activeTab === 'posts'
                  ? 'bg-white text-blue-600 border-b-2 border-blue-600'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              学习分享
            </button>
            <button
              onClick={() => setActiveTab('achievements')}
              className={`px-6 py-3 rounded-t-lg font-medium ${
                activeTab === 'achievements'
                  ? 'bg-white text-blue-600 border-b-2 border-blue-600'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              成就展示
            </button>
          </div>

          {activeTab === 'posts' ? (
            <div>
              {/* 发布帖子 */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-semibold mb-4">分享你的学习心得</h2>
                <form onSubmit={handlePostSubmit}>
                  <textarea
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    placeholder="写下你的学习经验、心得或问题..."
                    className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
                    rows={4}
                  ></textarea>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      {['英语', '日语', '韩语'].map((lang) => (
                        <button
                          key={lang}
                          type="button"
                          className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm hover:bg-gray-300"
                        >
                          {lang}
                        </button>
                      ))}
                    </div>
                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center"
                    >
                      发布
                      <Send size={16} className="ml-1" />
                    </button>
                  </div>
                </form>
              </div>

              {/* 帖子列表 */}
              <div className="space-y-6">
                {communityPosts.map((post) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-lg shadow-md p-6"
                  >
                    <div className="flex items-center mb-4">
                      <img
                        src={post.avatar}
                        alt={post.author}
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <h3 className="font-medium">{post.author}</h3>
                        <div className="flex items-center text-sm text-gray-500">
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs mr-2">
                            {post.language}
                          </span>
                          <span>{post.createdAt}</span>
                        </div>
                      </div>
                    </div>
                    <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                    <p className="text-gray-600 mb-4">{post.content}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-4">
                        <button className="flex items-center text-gray-500 hover:text-red-500">
                          <Heart size={18} className="mr-1" />
                          <span>{post.likes}</span>
                        </button>
                        <button className="flex items-center text-gray-500 hover:text-blue-500">
                          <MessageSquare size={18} className="mr-1" />
                          <span>{post.comments}</span>
                        </button>
                        <button className="flex items-center text-gray-500 hover:text-green-500">
                          <Share2 size={18} className="mr-1" />
                          <span>分享</span>
                        </button>
                      </div>
                      <Link
                        to="#"
                        className="text-blue-600 font-medium hover:text-blue-800 flex items-center"
                      >
                        查看详情
                        <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ) : (
            <div>
              {/* 成就展示 */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-semibold mb-4">学习成就</h2>
                <p className="text-gray-600 mb-6">
                  通过完成学习任务和达到学习目标，你可以获得各种成就徽章。
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {achievements.map((achievement) => (
                    <motion.div
                      key={achievement.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: achievement.id * 0.1 }}
                      className="bg-gray-50 rounded-lg p-4 flex items-center hover:bg-gray-100 transition-colors"
                    >
                      <div className="w-16 h-16 mr-4">
                        <img
                          src={achievement.image}
                          alt={achievement.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium mb-1">{achievement.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">{achievement.description}</p>
                        <p className="text-xs text-gray-500">{achievement.users} 人已获得</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* 排行榜 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">学习排行榜</h2>
                <div className="space-y-4">
                  {['小明', '小红', '小李', '小张', '小王'].map((name, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50">
                      <div className="flex items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                          index === 0
                            ? 'bg-yellow-100 text-yellow-600'
                            : index === 1
                            ? 'bg-gray-200 text-gray-600'
                            : index === 2
                            ? 'bg-orange-100 text-orange-600'
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {index + 1}
                        </div>
                        <span className="font-medium">{name}</span>
                      </div>
                      <div className="text-gray-600">
                        {Math.floor(Math.random() * 1000) + 100} 学习分钟
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Community
