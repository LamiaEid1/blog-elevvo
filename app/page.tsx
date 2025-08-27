"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState, useMemo } from 'react';

interface BlogPostCardProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  date: string;
  href: string;
  category: string;
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

export default function Home() {
  // State for filters and search
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [postsPerPage, setPostsPerPage] = useState<number | 'Auto'>('Auto');

  const blogPosts = [
    {
      id: 1,
      imageUrl: "/images/image1.jpg",
      imageAlt: "Modern living room with neutral tones and natural light",
      title: "5 Simple Ways to Create a Cozy Living Room on Any Budget",
      description: "Transform your living space into a warm and inviting retreat with these budget-friendly decorating tips. From lighting to textiles, discover how small changes can make a big impact.",
      date: "2024-08-20",
      href: "/blog/cozy-living-room-budget-tips",
      category: "Home"
    },
    {
      id: 2,
      imageUrl: "/images/image2.jpg",
      imageAlt: "Minimalist kitchen with white cabinets and marble countertops",
      title: "The Art of Minimalist Design: Less is More in Home Decor",
      description: "Explore the principles of minimalist interior design and learn how to create serene, clutter-free spaces that promote peace and functionality in your daily life.",
      date: "2024-08-15",
      href: "/blog/minimalist-design-principles",
      category: "Design"
    },
    {
      id: 3,
      imageUrl: "/images/image3.jpg",
      imageAlt: "Bedroom with plants and natural materials",
      title: "Bringing Nature Indoors: A Guide to Biophilic Design",
      description: "Discover how incorporating natural elements into your home can improve your wellbeing. From houseplants to natural materials, create a connection with nature indoors.",
      date: "2024-08-10",
      href: "/blog/biophilic-design-guide",
      category: "Design"
    },
    {
      id: 4,
      imageUrl: "/images/image4.jpg",
      imageAlt: "Modern tech workspace setup",
      title: "Best Productivity Apps for Remote Work in 2024",
      description: "Discover the top productivity tools and apps that can help you stay organized and efficient while working from home. Compare features, pricing, and user experiences.",
      date: "2024-08-18",
      href: "/blog/productivity-apps-remote-work",
      category: "Tech"
    },
    {
      id: 5,
      imageUrl: "/images/image5.jpg",
      imageAlt: "Mountain landscape from hiking trail",
      title: "Hidden Gems: 10 Lesser-Known Hiking Trails in Colorado",
      description: "Escape the crowds and explore Colorado's stunning but lesser-known hiking destinations. Complete with difficulty ratings, best visiting times, and what to bring.",
      date: "2024-08-12",
      href: "/blog/colorado-hidden-hiking-trails",
      category: "Travel"
    },
    {
      id: 6,
      imageUrl: "/images/image6.jpg",
      imageAlt: "Homemade pasta with fresh ingredients",
      title: "Mastering Homemade Pasta: A Beginner's Complete Guide",
      description: "Learn the art of making fresh pasta from scratch. This comprehensive guide covers everything from choosing the right flour to achieving the perfect texture.",
      date: "2024-08-08",
      href: "/blog/homemade-pasta-guide",
      category: "Food"
    },
    {
      id: 7,
      imageUrl: "/images/image7.jpg",
      imageAlt: "Craft cocktails with garnishes",
      title: "Craft Cocktails at Home: 5 Professional Techniques",
      description: "Elevate your home bartending skills with these professional techniques. Learn proper muddling, shaking, and garnishing methods to create restaurant-quality drinks.",
      date: "2024-08-05",
      href: "/blog/craft-cocktails-home-techniques",
      category: "Drinks"
    }
  ];

  const categories = ['All', 'Tech', 'Travel', 'Food', 'Drinks', 'Home', 'Design'];

  // Filter and search logic
  const filteredPosts = useMemo(() => {
    let filtered = blogPosts;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    // Filter by search term (searches in title and description)
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase().trim();
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchLower) ||
        post.description.toLowerCase().includes(searchLower)
      );
    }

    // Apply posts per page limit
    if (postsPerPage !== 'Auto' && typeof postsPerPage === 'number') {
      filtered = filtered.slice(0, postsPerPage);
    }

    return filtered;
  }, [selectedCategory, searchTerm, postsPerPage, blogPosts]);

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      {/* Filter/Search Bar */}
      <div className="w-full max-w-7xl px-4 mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={
                `px-5 py-2 rounded-full border border-gray-200 text-sm font-medium transition-colors duration-200 ` +
                (cat === selectedCategory ? 'bg-gray-900 text-white' : 'bg-white text-gray-700 hover:bg-gray-100')
              }
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 w-full md:w-64"
          />
          <label className="text-sm text-gray-700 font-medium flex items-center gap-2 whitespace-nowrap">
            Per page:
            <select 
              value={postsPerPage} 
              onChange={(e) => setPostsPerPage(e.target.value === 'Auto' ? 'Auto' : parseInt(e.target.value))}
              className="border border-gray-200 rounded-lg px-2 py-1 text-sm focus:outline-none"
            >
              <option value="Auto">Auto</option>
              <option value={3}>3</option>
              <option value={6}>6</option>
              <option value={9}>9</option>
            </select>
          </label>
        </div>
      </div>

      {/* Results count and status */}
      <div className="w-full max-w-7xl px-4 mb-4">
        <p className="text-sm text-gray-600">
          {filteredPosts.length === 0 ? (
            searchTerm || selectedCategory !== 'All' ? 
            "No posts found matching your criteria." :
            "No posts available."
          ) : (
            `Showing ${filteredPosts.length} ${filteredPosts.length === 1 ? 'post' : 'posts'}${
              selectedCategory !== 'All' ? ` in ${selectedCategory}` : ''
            }${searchTerm ? ` matching "${searchTerm}"` : ''}`
          )}
        </p>
      </div>

      {/* Blog Posts Grid */}
      <div className="w-full max-w-7xl px-4">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33M15 17H9v-2.76A7.968 7.968 0 0112 15c.695 0 1.366-.092 2-.27V17z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No posts found</h3>
            <p className="text-gray-600 mb-4">
              {searchTerm ? `Try a different search term or` : ''} Try selecting a different category.
            </p>
            {(searchTerm || selectedCategory !== 'All') && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                Clear all filters
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredPosts.map((post) => (
              <BlogPostCard
                key={post.id}
                imageUrl={post.imageUrl}
                imageAlt={post.imageAlt}
                title={post.title}
                description={post.description}
                date={post.date}
                href={post.href}
                category={post.category}
                className="h-full"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}