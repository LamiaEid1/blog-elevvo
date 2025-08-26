import Image from 'next/image';
import Link from 'next/link';

interface BlogPostCardProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  date: string;
  href: string;
  className?: string;
}

export const BlogPostCard: React.FC<BlogPostCardProps> = ({
  imageUrl,
  imageAlt,
  title,
  description,
  date,
  href,
  className = ''
}) => {
  // Format date to be more readable
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <Link href={href} className="block group">
      <article className={`bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg hover:transform hover:scale-[1.02] ${className}`}>
        {/* Image Container */}
        <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/5" />
        </div>
        
        {/* Content Container */}
        <div className="p-6">
          {/* Date */}
          <time 
            className="text-sm text-gray-500 font-medium mb-3 block"
            dateTime={date}
          >
            {formatDate(date)}
          </time>
          
          {/* Title */}
          <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight group-hover:text-gray-700 transition-colors duration-200 line-clamp-2">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
          
          {/* Read More Link */}
          <div className="mt-4 pt-2">
            <span className="text-sm font-medium text-neutral-700 group-hover:text-neutral-900 transition-colors duration-200 inline-flex items-center gap-1">
              Read More
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

// Updated Home component with blog posts section
export default function Home() {
  const blogPosts = [
    {
      id: 1,
      imageUrl: "/images/image1.jpg",
      imageAlt: "Modern living room with neutral tones and natural light",
      title: "5 Simple Ways to Create a Cozy Living Room on Any Budget",
      description: "Transform your living space into a warm and inviting retreat with these budget-friendly decorating tips. From lighting to textiles, discover how small changes can make a big impact.",
      date: "2024-08-20",
      href: "/blog/cozy-living-room-budget-tips"
    },
    {
      id: 2,
      imageUrl: "/images/image2.jpg",
      imageAlt: "Minimalist kitchen with white cabinets and marble countertops",
      title: "The Art of Minimalist Design: Less is More in Home Decor",
      description: "Explore the principles of minimalist interior design and learn how to create serene, clutter-free spaces that promote peace and functionality in your daily life.",
      date: "2024-08-15",
      href: "/blog/minimalist-design-principles"
    },
    {
      id: 3,
      imageUrl: "/images/image3.jpg",
      imageAlt: "Bedroom with plants and natural materials",
      title: "Bringing Nature Indoors: A Guide to Biophilic Design",
      description: "Discover how incorporating natural elements into your home can improve your wellbeing. From houseplants to natural materials, create a connection with nature indoors.",
      date: "2024-08-10",
      href: "/blog/biophilic-design-guide"
    }
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      {/* Blog Posts Grid */}
      <div className="w-full max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post) => (
            <BlogPostCard
              key={post.id}
              imageUrl={post.imageUrl}
              imageAlt={post.imageAlt}
              title={post.title}
              description={post.description}
              date={post.date}
              href={post.href}
              className="h-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
}