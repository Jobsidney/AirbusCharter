'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FooterSection } from '@/components/footer-section';
import { blogPosts, getFeaturedPosts, getRegularPosts } from '@/lib/blog-posts';

const POSTS_PER_PAGE = 6;

export default function BlogListingPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsSectionRef = useRef<HTMLDivElement>(null);

  const featuredPost = blogPosts.find(post => post.featured) || blogPosts[0];
  const regularPosts = getRegularPosts();

  const totalPages = Math.ceil(regularPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = regularPosts.slice(startIndex, endIndex);

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Scroll to blog posts section when page changes
  useEffect(() => {
    if (postsSectionRef.current && currentPage > 1) {
      postsSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [currentPage]);

  const truncateDescription = (text: string, maxLength: number = 120): string => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "...";
  };

  return (
    <div className="pt-20 bg-gradient-to-b from-[#0E1116] via-[#1a1d24] to-[#0E1116]">
      <style jsx global>{`
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif;
          color: #1A1A1A;
          line-height: 1.6;
          background: #F0F0F0;
        }
      `}</style>

      {/* Hero Banner Section */}
      <section className="relative h-[300px] md:h-[350px] bg-cover bg-center flex items-center justify-center mb-[60px]" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1600)' }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 w-full text-center">
          <h1 className="text-white text-[36px] md:text-[48px] font-bold leading-tight mb-5">ACJ Insights & Articles</h1>
          <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto">
            Your comprehensive resource for Airbus Corporate Jet insights, technical specifications, and industry analysis.
          </p>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-5 md:px-10 pb-[100px]">
        {/* Featured Post */}
        <div className="mb-16">
          <Link href={`/blog/${featuredPost.slug}`} className="block bg-white/5 backdrop-blur-sm border border-[#C9A24D]/10 overflow-hidden cursor-pointer group hover:border-[#C9A24D]/30 transition-all duration-300 rounded-none">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-none">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-400 rounded-none"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="text-sm text-[#6B6B6B] mb-3 uppercase tracking-wider">Featured Article</div>
                <h2 className="luxury-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 font-playfair-display text-[#F5F5F5]">
                  {featuredPost.title}
                </h2>
                <p className="text-lg text-[#4A4A4A] mb-6 leading-relaxed">
                  {truncateDescription(featuredPost.description, 200)}
                </p>
                <div className="flex items-center gap-3">
                  <Image
                    src={featuredPost.author.avatar}
                    alt={featuredPost.author.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <div className="text-xs text-[#6B6B6B]">Written by</div>
                    <div className="font-semibold text-[#F5F5F5]">{featuredPost.author.name}</div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Blog Posts Grid */}
        <div className="mb-12" ref={postsSectionRef}>
          <h2 className="luxury-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-10 font-playfair-display text-[#F5F5F5]">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {currentPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="bg-white/5 backdrop-blur-sm border border-[#C9A24D]/10 overflow-hidden cursor-pointer group hover:border-[#C9A24D]/30 transition-all duration-300 rounded-none"
              >
                <div className="relative w-full h-[200px] overflow-hidden rounded-none">
                  <Image
                    src={post.image}
                    alt={post.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-400 rounded-none"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[#F5F5F5] mb-3 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#6B6B6B] leading-relaxed mb-5">
                    {truncateDescription(post.description, 120)}
                  </p>
                  <div className="flex items-center gap-2.5">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <div className="text-xs">
                      <div className="text-[#6B6B6B]">Written by</div>
                      <div className="font-semibold text-[#F5F5F5]">{post.author.name}</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mt-12">
            <button
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="w-10 h-10 border-2 border-[#E0E0E0] bg-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:border-gray-400 transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 border-2 flex items-center justify-center font-semibold transition-colors ${
                    currentPage === page
                      ? 'bg-[#C9A24D] text-white border-[#C9A24D]'
                      : 'bg-white text-[#F5F5F5] border-[#E0E0E0] hover:border-gray-400'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="w-10 h-10 border-2 border-[#E0E0E0] bg-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:border-gray-400 transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        )}
      </div>

    </div>
  );
}
