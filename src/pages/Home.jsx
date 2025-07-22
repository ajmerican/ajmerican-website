import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Award, Clock, Shield } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import heroConsulting from '../assets/hero-consulting.jpg';

const Home = () => {
  const services = [
    {
      title: 'IT Consulting',
      description: 'Strategic technology guidance to optimize your business operations and drive digital transformation.',
      href: '/it-consulting',
      icon: '💻'
    },
    {
      title: 'Cloud Computing',
      description: 'Scalable cloud solutions that enhance flexibility, security, and cost-effectiveness for your business.',
      href: '/cloud-computing',
      icon: '☁️'
    },
    {
      title: 'VOIP Design & Implementation',
      description: 'Modern communication systems that streamline your business communications and reduce costs.',
      href: '/voip-design',
      icon: '📞'
    },
    {
      title: 'Social Media Marketing',
      description: 'Comprehensive social media strategies that build brand awareness and drive customer engagement.',
      href: '/social-media-marketing',
      icon: '📱'
    },
    {
      title: 'Branding',
      description: 'Professional brand development that creates lasting impressions and builds customer loyalty.',
      href: '/branding',
      icon: '🎨'
    },
    {
      title: 'Digital Signage',
      description: 'Dynamic digital display solutions that capture attention and communicate your message effectively.',
      href: '/digital-signage',
      icon: '📺'
    }
  ];

  const features = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: 'Expert Team',
      description: 'Experienced professionals dedicated to your success'
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: 'Quality Service',
      description: 'Premium solutions tailored to your business needs'
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: '24/7 Support',
      description: 'Round-the-clock assistance when you need it most'
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: 'Secure Solutions',
      description: 'Enterprise-grade security for all our services'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-background py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Total IT Solution
                  <span className="text-gradient block">Provider</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Empowering businesses with comprehensive technology solutions. 
                  From IT consulting to digital transformation, we deliver excellence 
                  that drives your success forward.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8 py-6">
                  <Link to="/contact">
                    Get Started Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                  <Link to="/blog">
                    Learn More
                  </Link>
                </Button>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Trusted by 500+ Clients</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">10+ Years Experience</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={heroConsulting}
                  alt="Professional IT consulting team"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Excellence Award</p>
                    <p className="text-sm text-muted-foreground">IT Service Provider 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive technology solutions designed to transform your business 
              and drive sustainable growth in the digital era.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="service-card group cursor-pointer border-0 shadow-lg">
                <CardContent className="p-8 space-y-4">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    to={service.href}
                    className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              Why Choose Ajmerican Informatics?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver 
              solutions that not only work but drive real business value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="bg-primary/10 p-4 rounded-full">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
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
            <h2 className="text-3xl lg:text-5xl font-bold">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Let's discuss how our comprehensive IT solutions can help you achieve 
              your business goals and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Link to="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/blog">
                  View Our Work
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

