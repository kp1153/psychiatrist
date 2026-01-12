import { client, urlFor } from '@/lib/sanity'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { notFound } from 'next/navigation'
import { Edit } from 'lucide-react'

async function getBlog(slug) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    mainImage,
    body,
    publishedAt,
    youtubeUrl,
    "pdfUrl": pdfFile.asset->url
  }`
  
  const blog = await client.fetch(query, { slug })
  return blog
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params
  const blog = await getBlog(resolvedParams.slug)
  
  if (!blog) {
    return {
      title: 'ब्लॉग नहीं मिला',
    }
  }

  const imageUrl = blog.mainImage 
    ? urlFor(blog.mainImage).width(1200).height(630).url()
    : '/default-og-image.jpg'

  return {
    title: blog.title,
    description: blog.title,
    openGraph: {
      title: blog.title,
      description: blog.title,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
      type: 'article',
      publishedTime: blog.publishedAt,
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.title,
      images: [imageUrl],
    },
  }
}

const portableTextComponents = {
  types: {
    image: ({value}) => (
      <div className="my-8">
        <Image
          src={urlFor(value).width(800).url()}
          alt={value.alt || 'ब्लॉग इमेज'}
          width={800}
          height={500}
          className="rounded-lg"
        />
      </div>
    ),
  },
  block: {
    h1: ({children}) => <h1 className="text-4xl font-bold my-6">{children}</h1>,
    h2: ({children}) => <h2 className="text-3xl font-bold my-5">{children}</h2>,
    h3: ({children}) => <h3 className="text-2xl font-bold my-4">{children}</h3>,
    h4: ({children}) => <h4 className="text-xl font-bold my-3">{children}</h4>,
    normal: ({children}) => <p className="my-4 leading-relaxed">{children}</p>,
    blockquote: ({children}) => (
      <blockquote className="border-l-4 border-teal-600 pl-4 my-6 italic">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({children}) => <strong className="font-bold">{children}</strong>,
    em: ({children}) => <em className="italic">{children}</em>,
    link: ({value, children}) => (
      <a 
        href={value.href} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-teal-600 hover:underline"
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({children}) => <ul className="list-disc ml-6 my-4">{children}</ul>,
  },
}

export default async function BlogPost({ params }) {
  const resolvedParams = await params
  const blog = await getBlog(resolvedParams.slug)
  
  if (!blog) {
    notFound()
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <a 
        href={`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/studio/structure/post;${blog._id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-3 rounded-lg shadow-lg hover:bg-blue-700 flex items-center gap-2 z-50 transition-colors"
      >
        <Edit size={18} />
        एडिट करें
      </a>

      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
        {blog.title}
      </h1>
      
      <p className="text-gray-600 mb-8">
        {new Date(blog.publishedAt).toLocaleDateString('hi-IN', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })} • डॉ. आर.के. कुशवाहा
      </p>

      {blog.mainImage && (
        <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
          <Image
            src={urlFor(blog.mainImage).width(1200).url()}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {blog.youtubeUrl && (
        <div className="my-8">
          <div className="aspect-video">
            <iframe
              src={blog.youtubeUrl.replace('watch?v=', 'embed/')}
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      <div className="prose prose-lg max-w-none">
        <PortableText 
          value={blog.body} 
          components={portableTextComponents}
        />
      </div>

      {blog.pdfUrl && (
        <div className="mt-8 p-6 bg-teal-50 rounded-lg">
          <h3 className="text-xl font-bold mb-3">📄 पीडीएफ डाउनलोड करें</h3>
          <a
            href={blog.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
          >
            डाउनलोड करें
          </a>
        </div>
      )}
    </article>
  )
}