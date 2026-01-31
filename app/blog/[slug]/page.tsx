'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FooterSection } from '@/components/footer-section';
import { useParams } from 'next/navigation';
import { getPinnedPosts, getFeaturedPosts } from '@/lib/blog-posts';

const truncateDescription = (text: string, maxLength: number = 80): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + "...";
};

export default function BlogDetailPage() {
  const params = useParams();
  const currentSlug = params?.slug as string;
  
  const pinnedPosts = getPinnedPosts(currentSlug).slice(0, 2);
  const featuredPosts = getFeaturedPosts(currentSlug).filter(post => !post.pinned).slice(0, 2);
  return (
    <div className="pt-20 bg-gradient-to-b from-[#0E1116] via-[#1a1d24] to-[#0E1116]">
      <style jsx global>{`
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif;
          color: #F5F5F5;
          line-height: 1.6;
          background: #0E1116;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative h-[30vh] min-h-[200px] bg-cover bg-center flex items-center justify-center mb-[60px]" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1600)' }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 w-full text-center">
          <div className="text-white/90 text-sm mb-3">Newest Blog • 3 Min</div>
          <h1 className="text-white text-[36px] md:text-[52px] font-bold leading-tight mb-5 font-playfair-display">The Art of Home Transformation</h1>
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-[#C9A24D]/20 px-2 py-2 pl-2">
            <Image
              src="https://i.pravatar.cc/150?img=9"
              alt="Author"
              width={36}
              height={36}
              className="rounded-full"
            />
            <div className="text-left">
              <div className="text-white/70 text-[11px]">Written by</div>
              <div className="font-semibold text-white">Ariel van Houten</div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Container */}
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-[300px_1fr] gap-[60px] mb-[100px]">
        {/* Sidebar */}
        <aside className="flex flex-col gap-8 md:sticky md:top-[100px] h-fit">
          {/* Pinned Posts */}
          {pinnedPosts.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-4">Pinned Posts</h3>
              <div className="space-y-4">
                {pinnedPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="block bg-white/5 backdrop-blur-sm border border-[#C9A24D]/10 overflow-hidden cursor-pointer group hover:border-[#C9A24D]/30 transition-all duration-300"
                  >
                    <div className="relative w-full h-[120px] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-400"
                        sizes="300px"
                      />
                      <span className="absolute top-2 left-2 bg-[#C9A24D] text-white py-1 px-2 text-[10px] font-semibold font-instrument-sans">
                        {post.readTime}
                      </span>
                    </div>
                    <div className="p-3">
                      <h4 className="text-sm font-semibold text-white/90 mb-2 leading-tight line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-xs text-white/60 leading-relaxed line-clamp-2">
                        {truncateDescription(post.description, 60)}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-4">Featured Posts</h3>
              <div className="space-y-4">
                {featuredPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="block bg-white/5 backdrop-blur-sm border border-[#C9A24D]/10 overflow-hidden cursor-pointer group hover:border-[#C9A24D]/30 transition-all duration-300"
                  >
                    <div className="relative w-full h-[120px] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-400"
                        sizes="300px"
                      />
                      <span className="absolute top-2 left-2 bg-[#C9A24D] text-white py-1 px-2 text-[10px] font-semibold font-instrument-sans">
                        {post.readTime}
                      </span>
                    </div>
                    <div className="p-3">
                      <h4 className="text-sm font-semibold text-white/90 mb-2 leading-tight line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-xs text-white/60 leading-relaxed line-clamp-2">
                        {truncateDescription(post.description, 60)}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </aside>

        {/* Article Content */}
        <article className="relative bg-gradient-to-b from-[#0E1116] via-[#1a1d24] to-[#0E1116] p-5 md:p-[50px] border border-[#C9A24D]/10">
          {/* Section Separator - Top Gold Line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent"></div>
          
          <p className="text-lg leading-[1.8] mb-10 font-medium text-white/80">
            In the fast-evolving world of home decor, embracing the art of transformation is the key to keeping your living spaces fresh, vibrant, and in tune with the latest trends. At StuffUs, we believe that your home is a canvas waiting to be adorned with innovation and style.
          </p>

          <h2 className="luxury-heading text-[32px] font-bold my-[50px] first:mt-0 font-playfair-display">
            <span className="text-[#F5F5F5]">Introduction</span>
          </h2>
          
          <p className="text-base leading-[1.8] text-white/70 mb-6">
            Software as a Service (SaaS) has transformed the way businesses operate, providing access to a wide range of applications and services over the internet. Rather than installing software on individual computers or servers, SaaS solutions are hosted in the cloud and accessible through a web browser or mobile app.
          </p>

          <p className="text-base leading-[1.8] text-white/70 mb-6">
            One of the biggest benefits of using a SaaS solution is that it eliminates the need for businesses to invest in expensive hardware or infrastructure. This means that small and medium-sized businesses can access the same tools and applications as larger enterprises, without the upfront costs or ongoing maintenance expenses.
          </p>

          <div className="w-full my-10">
            <Image
              src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=1200&h=600&fit=crop"
              alt="Content"
              width={1200}
              height={600}
              className="w-full"
            />
          </div>

          <h3 className="text-2xl font-bold my-10 text-[#C9A24D] font-playfair-display">1. Increased Efficiency and Productivity</h3>
          
          <p className="text-base leading-[1.8] text-white/70 mb-6">
            Macrunds offers a range of features that can help your team work more efficiently and productively. With its advanced project management tools, you can automate repetitive tasks, freeing up time for more important tasks.
          </p>

          <h3 className="text-2xl font-bold my-10 text-[#C9A24D] font-playfair-display">2. Improved Customer Satisfaction</h3>
          
          <p className="text-base leading-[1.8] text-white/70 mb-6">
            With Macrunds, you can provide your customers with a seamless and personalized experience. The customer management tools enable you to keep track of customer interactions.
          </p>

          <h3 className="text-2xl font-bold my-10 text-[#C9A24D] font-playfair-display">3. Enhanced Data Analysis</h3>
          
          <p className="text-base leading-[1.8] text-white/70 mb-6">
            Data is a critical component of any business, and SaaS product offers advanced data analytics tools that can help you make better business decisions.
          </p>

          <h3 className="text-2xl font-bold my-10 text-[#C9A24D] font-playfair-display">4. Streamlined Billing and Payments</h3>
          
          <p className="text-base leading-[1.8] text-white/70 mb-6">
            Billing can be a time-consuming and error-prone process. However, with SaaS product, you can streamline your billing and payment processes.
          </p>

          <h3 className="text-2xl font-bold my-10 text-[#C9A24D] font-playfair-display">5. Scalability and Flexibility</h3>
          
          <p className="text-base leading-[1.8] text-white/70 mb-6">
            Macrunds is highly scalable and can be easily customized to meet the unique needs of your business.
          </p>
        </article>
      </div>

      {/* Latest Blog Section */}
      <section className="relative max-w-[1280px] mx-auto px-5 md:px-10 pb-[100px]">
        {/* Section Separator - Top Gold Line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent"></div>
        <div className="flex justify-between items-center mb-10 mt-8">
          <h2 className="luxury-heading text-[36px] font-bold font-playfair-display">
            <span className="text-[#F5F5F5]">Latest </span>
            <span className="text-[#C9A24D] italic">Blog</span>
          </h2>
          <div className="flex gap-3">
            <button className="w-10 h-10 border-2 border-[#C9A24D]/30 bg-[#0E1116] hover:bg-[#C9A24D]/20 hover:border-[#C9A24D] flex items-center justify-center transition-all duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A24D" strokeWidth="2">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button className="w-10 h-10 border-2 border-[#C9A24D]/30 bg-[#0E1116] hover:bg-[#C9A24D]/20 hover:border-[#C9A24D] flex items-center justify-center transition-all duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A24D" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          <div className="bg-white/5 backdrop-blur-sm border border-[#C9A24D]/10 overflow-hidden cursor-pointer hover:border-[#C9A24D]/30 transition-all duration-300">
            <div className="relative w-full h-[200px]">
              <Image
                src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=400&fit=crop"
                alt="Blog"
                fill
                className="object-cover"
              />
              <span className="absolute top-3 left-3 bg-[#C9A24D] text-white py-1.5 px-3 text-xs font-semibold">5 Min</span>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-3 leading-tight text-white/90">Eco-Friendly Living: Sustainable Choices for a Greener Home</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-5">Dive into the world of eco-friendly living. Explore sustainable products and lifestyle choices.</p>
              <div className="flex items-center gap-2.5">
                <Image
                  src="https://i.pravatar.cc/150?img=12"
                  alt="Author"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <div className="text-xs">
                  <div className="text-white/60">Written by</div>
                  <div className="font-semibold text-white/90">Darrell Steward</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-[#C9A24D]/10 overflow-hidden cursor-pointer hover:border-[#C9A24D]/30 transition-all duration-300">
            <div className="relative w-full h-[200px]">
              <Image
                src="https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&h=400&fit=crop"
                alt="Blog"
                fill
                className="object-cover"
              />
              <span className="absolute top-3 left-3 bg-[#C9A24D] text-white py-1.5 px-3 text-xs font-semibold">5 Min</span>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-3 leading-tight text-white/90">The Comfort Zone: Choosing the Perfect Furniture for Your Home</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-5">From cozy couches to stylish tables, dive into the world of furniture.</p>
              <div className="flex items-center gap-2.5">
                <Image
                  src="https://i.pravatar.cc/150?img=33"
                  alt="Author"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <div className="text-xs">
                  <div className="text-white/60">Written by</div>
                  <div className="font-semibold text-white/90">Devon Lane</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-[#C9A24D]/10 overflow-hidden cursor-pointer hover:border-[#C9A24D]/30 transition-all duration-300">
            <div className="relative w-full h-[200px]">
              <Image
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=400&fit=crop"
                alt="Blog"
                fill
                className="object-cover"
              />
              <span className="absolute top-3 left-3 bg-[#C9A24D] text-white py-1.5 px-3 text-xs font-semibold">5 Min</span>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-3 leading-tight text-white/90">Bedroom Bliss: Creating a Relaxing Sanctuary</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-5">Transform your bedroom into a peaceful retreat with our expert recommendations.</p>
              <div className="flex items-center gap-2.5">
                <Image
                  src="https://i.pravatar.cc/150?img=28"
                  alt="Author"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <div className="text-xs">
                  <div className="text-white/60">Written by</div>
                  <div className="font-semibold text-white/90">Savannah Nguyen</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-[#C9A24D]/10 overflow-hidden cursor-pointer hover:border-[#C9A24D]/30 transition-all duration-300">
            <div className="relative w-full h-[200px]">
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop"
                alt="Blog"
                fill
                className="object-cover"
              />
              <span className="absolute top-3 left-3 bg-[#C9A24D] text-white py-1.5 px-3 text-xs font-semibold">5 Min</span>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-3 leading-tight text-white/90">Garden Elegance: Bringing Nature to Your Home</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-5">Bring the beauty of nature inside with our guide to indoor plants and garden decor.</p>
              <div className="flex items-center gap-2.5">
                <Image
                  src="https://i.pravatar.cc/150?img=45"
                  alt="Author"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <div className="text-xs">
                  <div className="text-white/60">Written by</div>
                  <div className="font-semibold text-white/90">Jane Cooper</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
