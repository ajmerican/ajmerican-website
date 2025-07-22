import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Monitor, Zap, Users, BarChart3, Settings, Wifi } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import heroImage from '../assets/hero-signage.jpg';

const DigitalSignage = () => {
  const benefits = [
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: 'Enhanced Engagement',
      description: 'Capture attention with dynamic, interactive content that engages customers and visitors.'
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: 'Real-Time Updates',
      description: 'Update content instantly across all displays from a centralized management system.'
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-primary" />,
      title: 'Measurable Impact',
      description: 'Track viewer engagement and content performance with detailed analytics and reporting.'
    },
    {
      icon: <Settings className="h-6 w-6 text-primary" />,
      title: 'Easy Management',
      description: 'Intuitive content management system that makes updating displays simple and efficient.'
    }
  ];

  const services = [
    'Digital Signage Strategy & Planning',
    'Hardware Selection & Installation',
    'Content Management Systems',
    'Interactive Display Solutions',
    'Video Wall Design & Setup',
    'Wayfinding & Directory Systems',
    'Menu Board Solutions',
    'Outdoor Digital Displays',
    'Touch Screen Kiosks',
    'Remote Monitoring & Support',
    'Content Creation & Design',
    'System Integration & Training'
  ];

  const applications = [
    {
      icon: <Monitor className="h-8 w-8 text-primary" />,
      title: 'Retail & Shopping',
      description: 'Promote products, display pricing, and enhance the shopping experience with dynamic content.'
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: 'Corporate Communications',
      description: 'Share company news, announcements, and important information throughout your organization.'
    },
    {
      icon: <Wifi className="h-8 w-8 text-primary" />,
      title: 'Hospitality & Events',
      description: 'Welcome guests, provide information, and create memorable experiences with digital displays.'
    }
  ];

  const features = [
    'Cloud-based content management',
    'Multi-zone display layouts',
    'Scheduled content playback',
    'Real-time data integration',
    'Mobile device compatibility',
    'Social media feed integration',
    'Weather and news widgets',
    'Emergency alert capabilities',
    'Multi-language support',
    'Remote system monitoring',
    'Automated content updates',
    'Analytics and reporting'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Digital signage display in business environment"
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
                  <span className="text-white">Digital Signage</span>
                </li>
              </ol>
            </nav>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Digital Signage Solutions
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Dynamic digital display solutions that capture attention, communicate your message 
              effectively, and create engaging experiences for your customers and visitors.
            </p>
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link to="/contact">
                Transform Your Displays
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
                Revolutionize Your Visual Communications
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Digital signage has transformed how businesses communicate with their audiences. 
                Our comprehensive digital signage solutions help you replace static displays 
                with dynamic, engaging content that captures attention, delivers information 
                effectively, and creates memorable experiences for your customers.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From retail environments to corporate offices, restaurants to healthcare 
                facilities, we design and implement digital signage systems that enhance 
                communication, improve customer experience, and drive business results. 
                Our solutions are scalable, easy to manage, and built for reliability.
              </p>
              <div className="flex items-center space-x-4 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="font-medium">Professional Installation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="font-medium">Ongoing Support</span>
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
              Complete Digital Signage Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From planning to installation and ongoing support, we provide end-to-end 
              digital signage solutions tailored to your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <Monitor className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium text-foreground">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Digital Signage Applications
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our digital signage solutions serve diverse industries and applications, 
              each tailored to specific communication needs and objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {applications.map((application, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="p-8 space-y-4">
                  <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto">
                    {application.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {application.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {application.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Advanced Features & Capabilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our digital signage systems come equipped with powerful features 
              that make content management simple and effective.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Implementation Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our systematic approach ensures successful deployment and 
              optimal performance of your digital signage system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'Assess your needs and develop a customized digital signage strategy.'
              },
              {
                step: '02',
                title: 'Design',
                description: 'Create system architecture and select appropriate hardware solutions.'
              },
              {
                step: '03',
                title: 'Installation',
                description: 'Professional installation and system configuration by certified technicians.'
              },
              {
                step: '04',
                title: 'Training',
                description: 'Comprehensive training on content management and system operation.'
              },
              {
                step: '05',
                title: 'Support',
                description: 'Ongoing maintenance, monitoring, and technical support services.'
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
              Ready to Go Digital?
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Transform your static displays into dynamic, engaging digital experiences 
              that capture attention and communicate your message effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Link to="/contact">
                  Get Digital Signage Quote
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

export default DigitalSignage;

