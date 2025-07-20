import { motion } from "framer-motion"
import { Calendar, Clock, Eye, Heart, Share2, ArrowLeft, Facebook, Twitter, Linkedin, Copy, Tag } from "lucide-react"
import { useState, useEffect } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import blog from "../../data/blog"

const BlogDetails = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [selectedBlog, setSelectedBlog] = useState(null)
  const [isLiked, setIsLiked] = useState(false)
  const [showShareMenu, setShowShareMenu] = useState(false)
  const [copySuccess, setCopySuccess] = useState(false)

  useEffect(() => {
    const foundBlog = blog.find((post) => post.slug === slug)
    if (foundBlog) {
      setSelectedBlog(foundBlog)
    } else {
      navigate("/blog")
    }
  }, [slug, navigate])

  if (!selectedBlog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading article...</p>
        </div>
      </div>
    )
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const handleLike = () => {
    setIsLiked(!isLiked)
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopySuccess(true)
    setTimeout(() => setCopySuccess(false), 2000)
  }

  const relatedPosts = blog
    .filter((post) => post.id !== selectedBlog.id && post.category === selectedBlog.category)
    .slice(0, 3)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <motion.div className="bg-white min-h-screen" variants={containerVariants} initial="hidden" animate="visible">
      {/* Back Button */}
      <motion.div className="py-6 px-4 bg-gray-50 border-b" variants={itemVariants}>
        <div className="max-w-4xl mx-auto">
          <Link to="/blog">
            <motion.button
              className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
              whileHover={{ x: -5 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Blog
            </motion.button>
          </Link>
        </div>
      </motion.div>

      {/* Hero Image */}
      <motion.div className="relative h-96 overflow-hidden" variants={itemVariants}>
        <img
          src={selectedBlog.image || "/placeholder.svg"}
          alt={selectedBlog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
        {selectedBlog.featured && (
          <div className="absolute top-6 left-6">
            <span className="bg-blue-600 text-white px-4 py-2 text-sm font-semibold rounded-full">Featured</span>
          </div>
        )}
      </motion.div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Article Header */}
        <motion.header className="mb-8" variants={itemVariants}>
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
              {selectedBlog.category}
            </span>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {formatDate(selectedBlog.publishedDate)}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {selectedBlog.readTime}
            </div>
            <div className="flex items-center">
              <Eye className="w-4 h-4 mr-1" />
              {selectedBlog.views} views
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {selectedBlog.title}
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed mb-8">{selectedBlog.excerpt}</p>

          {/* Author Info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={selectedBlog.author.avatar || "/placeholder.svg"}
                alt={selectedBlog.author.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-semibold text-gray-900">{selectedBlog.author.name}</p>
                <p className="text-gray-600">{selectedBlog.author.role}</p>
              </div>
            </div>

            {/* Social Actions */}
            <div className="flex items-center gap-4">
              <motion.button
                onClick={handleLike}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  isLiked ? "bg-red-100 text-red-600" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
                {selectedBlog.likes + (isLiked ? 1 : 0)}
              </motion.button>

              <div className="relative">
                <motion.button
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Share2 className="w-5 h-5" />
                  Share
                </motion.button>

                {showShareMenu && (
                  <motion.div
                    className="absolute right-0 top-12 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-10"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <div className="flex gap-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                        <Facebook className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-blue-400 hover:bg-blue-50 rounded-lg">
                        <Twitter className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-blue-700 hover:bg-blue-50 rounded-lg">
                        <Linkedin className="w-5 h-5" />
                      </button>
                      <button onClick={handleCopyLink} className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                        <Copy className="w-5 h-5" />
                      </button>
                    </div>
                    {copySuccess && <p className="text-xs text-green-600 mt-2">Link copied!</p>}
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </motion.header>

        {/* Article Content */}
        <motion.div
          className="prose prose-lg max-w-none mb-12"
          variants={itemVariants}
          dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
        />

        {/* Tags */}
        <motion.div className="mb-12" variants={itemVariants}>
          <div className="flex items-center gap-2 flex-wrap">
            <Tag className="w-5 h-5 text-gray-400" />
            {selectedBlog.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <motion.section className="border-t pt-12" variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((post) => (
                <Link key={post.id} to={`/blog/${post.slug}`}>
                  <motion.article
                    className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                    whileHover={{ y: -5 }}
                  >
                    <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-32 object-cover" />
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">{post.title}</h4>
                      <p className="text-sm text-gray-600 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center mt-3 text-xs text-gray-500">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                  </motion.article>
                </Link>
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </motion.div>
  )
}

export default BlogDetails
