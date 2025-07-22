import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Clock, Tag } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Cloud Computing: Trends to Watch in 2025',
      excerpt: 'Explore the latest trends in cloud computing that are shaping the future of business technology, from edge computing to AI integration.',
      author: 'Saurin Ajmeri',
      date: '2025-01-15',
      readTime: '8 min read',
      category: 'Cloud Computing',
      image: '/api/placeholder/600/300',
      featured: true
    },
    {
      id: 2,
      title: 'Why Your Business Needs a Digital Transformation Strategy',
      excerpt: 'Learn how digital transformation can revolutionize your business operations and drive sustainable growth in the modern marketplace.',
      author: 'Saurin Ajmeri',
      date: '2025-01-10',
      readTime: '6 min read',
      category: 'IT Consulting',
      image: '/api/placeholder/600/300'
    },
    {
      id: 3,
      title: 'VoIP vs Traditional Phone Systems: Making the Right Choice',
      excerpt: 'Compare the benefits and costs of VoIP systems versus traditional phone systems to make an informed decision for your business.',
      author: 'Saurin Ajmeri',
      date: '2025-01-05',
      readTime: '7 min read',
      category: 'VoIP Solutions',
      image: '/api/placeholder/600/300'
    },
    {
      id: 4,
      title: 'Social Media Marketing ROI: How to Measure Success',
      excerpt: 'Discover the key metrics and strategies to measure and improve your social media marketing return on investment.',
      author: 'Saurin Ajmeri',
      date: '2024-12-28',
      readTime: '5 min read',
      category: 'Social Media',
      image: '/api/placeholder/600/300'
    },
    {
      id: 5,
      title: 'Building a Strong Brand Identity in the Digital Age',
      excerpt: 'Essential strategies for creating and maintaining a compelling brand identity that resonates with your target audience.',
      author: 'Saurin Ajmeri',
      date: '2024-12-20',
      readTime: '9 min read',
      category: 'Branding',
      image: '/api/placeholder/600/300'
    },
    {
      id: 6,
      title: 'Digital Signage Best Practices for Maximum Impact',
      excerpt: 'Learn how to create effective digital signage content that captures attention and drives customer engagement.',
      author: 'Saurin Ajmeri',
      date: '2024-12-15',
      readTime: '6 min read',
      category: 'Digital Signage',
      image: '/api/placeholder/600/300'
    }
  ];

  const categories = [
    'All Posts',
    'IT Consulting',
    'Cloud Computing',
    'VoIP Solutions',
    'Social Media',
    'Branding',
    'Digital Signage'
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <nav className="flex justify-center mb-8" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-muted-foreground">
                <li>
                  <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 mx-2" />
                  <span className="text-foreground">Blog</span>
                </li>
              </ol>
            </nav>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
              Technology Insights & Updates
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay informed with the latest trends, best practices, and insights 
              in technology, digital transformation, and business innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Featured Article</h2>
            </div>
            
            <Card className="overflow-hidden border-0 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                        <Tag className="h-8 w-8 text-primary" />
                      </div>
                      <p className="text-muted-foreground">Featured Image</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                        {featuredPost.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground leading-tight">
                      {featuredPost.title}
                    </h3>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium text-foreground">
                          {featuredPost.author}
                        </span>
                      </div>
                      
                      <Button asChild>
                        <Link to={`/blog/${featuredPost.id}`}>
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">All Articles</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                      <Tag className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">Article Image</p>
                  </div>
                </div>
                
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground leading-tight line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <Button asChild variant="ghost" size="sm">
                      <Link to={`/blog/${post.id}`}>
                        Read More
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Stay Updated with Technology Trends
            </h2>
            <p className="text-xl opacity-90">
              Subscribe to our newsletter and get the latest insights, tips, and 
              updates delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-foreground bg-white border-0 focus:outline-none focus:ring-2 focus:ring-primary-foreground"
              />
              <Button variant="secondary" size="lg" className="px-8">
                Subscribe
              </Button>
            </div>
            <p className="text-sm opacity-75">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

