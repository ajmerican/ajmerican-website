import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Share2, TrendingUp, Users, Target, BarChart3, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import heroImage from '../assets/hero-social.webp';

const SocialMediaMarketing = () => {
  const benefits = [
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: 'Brand Awareness',
      description: 'Increase brand visibility and reach new audiences across multiple social media platforms.'
    },
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: 'Targeted Engagement',
      description: 'Connect with your ideal customers through precise targeting and personalized content.'
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      title: 'Lead Generation',
      description: 'Convert social media followers into qualified leads and paying customers.'
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-primary" />,
      title: 'Measurable ROI',
      description: 'Track performance with detailed analytics and optimize campaigns for maximum return.'
    }
  ];

  const services = [
    'Social Media Strategy Development',
    'Content Creation & Curation',
    'Community Management',
    'Paid Social Media Advertising',
    'Influencer Marketing Campaigns',
    'Social Media Analytics & Reporting',
    'Brand Reputation Management',
    'Social Commerce Integration',
    'Video Content Production',
    'Social Media Training & Consulting',
    'Crisis Communication Management',
    'Cross-Platform Campaign Management'
  ];

  const platforms = [
    { name: 'Facebook', description: 'Build communities and drive engagement with targeted content and advertising.' },
    { name: 'Instagram', description: 'Showcase your brand visually with stunning photos, stories, and reels.' },
    { name: 'LinkedIn', description: 'Connect with professionals and establish thought leadership in your industry.' },
    { name: 'Twitter', description: 'Engage in real-time conversations and share timely updates with your audience.' },
    { name: 'YouTube', description: 'Create compelling video content that educates, entertains, and converts.' },
    { name: 'TikTok', description: 'Reach younger audiences with creative, trending video content.' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Social media marketing team collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="flex mb-8" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-white/80">
                <li>
                  <Link to="/" className="hover:text-white transition-colors">Home</Link>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 mx-2" />
                  <span className="text-white">Social Media Marketing</span>
                </li>
              </ol>
            </nav>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Social Media Marketing
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Comprehensive social media strategies that build brand awareness, drive customer 
              engagement, and generate measurable results across all major platforms.
            </p>
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link to="/contact">
                Boost Your Social Presence
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Amplify Your Brand's Social Impact
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                In today's digital landscape, social media is not just an option—it's essential 
                for business success. Our comprehensive social media marketing services help you 
                build meaningful connections with your audience, increase brand visibility, and 
                drive real business results across all major social platforms.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From strategy development to content creation and community management, we provide 
                end-to-end social media solutions that align with your business objectives and 
                deliver measurable ROI. Our data-driven approach ensures every campaign is 
                optimized for maximum engagement and conversion.
              </p>
              <div className="flex items-center space-x-4 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="font-medium">Certified Specialists</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="font-medium">Data-Driven Results</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6 space-y-3">
                    <div className="bg-primary/10 p-3 rounded-full w-fit">
                      {benefit.icon}
                    </div>
                    <h3 className="font-semibold text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Complete Social Media Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From strategy to execution, we provide comprehensive social media solutions 
              that drive engagement, build communities, and generate leads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <Share2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium text-foreground">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Multi-Platform Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We leverage the unique strengths of each social media platform 
              to maximize your brand's reach and engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MessageCircle className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {platform.name}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    {platform.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Our Social Media Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A strategic approach that ensures consistent brand messaging 
              and measurable results across all platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                step: '01',
                title: 'Strategy',
                description: 'Develop comprehensive social media strategy aligned with business goals.'
              },
              {
                step: '02',
                title: 'Content',
                description: 'Create engaging, platform-specific content that resonates with your audience.'
              },
              {
                step: '03',
                title: 'Publishing',
                description: 'Schedule and publish content at optimal times for maximum engagement.'
              },
              {
                step: '04',
                title: 'Engagement',
                description: 'Monitor and respond to comments, messages, and community interactions.'
              },
              {
                step: '05',
                title: 'Analytics',
                description: 'Track performance metrics and optimize campaigns for better results.'
              }
            ].map((phase, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                  {phase.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {phase.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Dominate Social Media?
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Let's create a social media strategy that builds your brand, 
              engages your audience, and drives real business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Link to="/contact">
                  Start Your Campaign
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/">
                  Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialMediaMarketing;

