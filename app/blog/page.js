import { client, urlFor } from '@/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'

async function getBlogs() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    "categories": categories[]->title
  }`
  
  const blogs = await client.fetch(query)
  return blogs
}

export default async function BlogPage() {
  const blogs = await getBlogs()

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-teal-700">
        हमारे ब्लॉग
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <Link 
            key={blog._id} 
            href={`/blog/${blog.slug.current}`}
            className="group"
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              {blog.mainImage && (
                <div className="relative h-48 w-full">
                  <Image
                    src={urlFor(blog.mainImage).width(600).url()}
                    alt={blog.mainImage.alt || blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-teal-600">
                  {blog.title}
                </h2>
                
                {blog.categories && blog.categories.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {blog.categories.map((category, idx) => (
                      <span 
                        key={idx}
                        className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                )}
                
                <p className="text-sm text-gray-500">
                  {new Date(blog.publishedAt).toLocaleDateString('hi-IN', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}