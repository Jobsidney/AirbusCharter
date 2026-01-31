"use client";

import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-posts";

const truncateDescription = (text: string, maxLength: number = 150): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + "...";
};

export function InsightsSection() {
  return (
    <section className="relative px-4 sm:px-6 md:px-8 lg:px-16 py-24 bg-gradient-to-b from-[#0E1116] via-[#1a1d24] to-[#0E1116] overflow-x-hidden">
      {/* Section Separator - Top Gold Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent"></div>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[#C9A24D] mb-6 font-instrument-sans">
            Industry Insights
          </span>
          <h2 className="luxury-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 font-playfair-display">
            <span className="text-[#F5F5F5]">BBJ Insights, News & </span>
            <span className="text-[#C9A24D] italic">Technical Guides</span>
          </h2>
          <p className="text-2xl sm:text-3xl md:text-4xl font-libre-baskerville font-light text-white/70 mt-2 mb-6">
            Your Comprehensive Resource
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent mx-auto mb-8"></div>
          <p className="text-base sm:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed font-libre-baskerville">
            Stay informed about Boeing Business Jet insights, technical specifications, 
            operational guides, and industry analysis. Your trusted source for the latest developments 
            in business aviation and BBJ fleet management.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-12">
          {blogPosts.slice(0, 3).map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden cursor-pointer group border border-[#C9A24D]/10 hover:border-[#C9A24D]/30 transition-all duration-300"
            >
              {/* Image Wrapper */}
              <div className="relative w-full h-[200px] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-400"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <span className="absolute top-3 left-3 bg-[#C9A24D] text-white py-1.5 px-3 rounded-md text-xs font-semibold font-instrument-sans">
                  {post.readTime}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#F5F5F5] mb-3 leading-tight font-playfair-display">
                  {post.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed mb-5 font-libre-baskerville">
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
                  <div className="text-xs font-libre-baskerville">
                    <div className="text-white/50">Written by</div>
                    <div className="font-semibold text-[#F5F5F5]">{post.author.name}</div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-left">
          <Link
            href="/blog"
            className="inline-block px-7 py-3 text-[#F5F5F5] font-semibold border border-[#C9A24D] bg-gradient-to-br from-[#0E1116] to-[#1a1d24] hover:bg-gradient-to-br hover:from-[#C9A24D] hover:to-[#a8863d] hover:text-[#0E1116] transition-all duration-300 hover:-translate-y-0.5 font-instrument-sans"
            style={{
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)"
            }}
          >
            Read All Articles →
          </Link>
        </div>
      </div>
    </section>
  );
}

