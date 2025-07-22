import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Phone, Headphones, Settings, Users, DollarSign, Shield } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import heroImage from '../assets/hero-voip.jpg';

const VOIPDesign = () => {
  const benefits = [
    {
      icon: <DollarSign className="h-6 w-6 text-primary" />,
      title: 'Cost Savings',
      description: 'Reduce communication costs by up to 70% with efficient VoIP technology and unified systems.'
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: 'Enhanced Collaboration',
      description: 'Improve team productivity with integrated voice, video, and messaging capabilities.'
    },
    {
      icon: <Settings className="h-6 w-6 text-primary" />,
      title: 'Scalability',
      description: 'Easily add or remove users and features as your business grows and evolves.'
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: 'Reliability',
      description: 'Enterprise-grade reliability with redundancy and failover protection for critical communications.'
    }
  ];

  const services = [
    'VoIP System Design & Architecture',
    'IP Phone System Installation',
    'Unified Communications (UC)',
    'SIP Trunking Services',
    'Call Center Solutions',
    'Video Conferencing Integration',
    'Mobile VoIP Applications',
    'Network Assessment & Optimization',
    'Quality of Service (QoS) Configuration',
    'VoIP Security Implementation',
    'System Migration & Upgrades',
    '24/7 Monitoring & Support'
  ];

  const features = [
    {
      icon: <Phone className="h-8 w-8 text-primary" />,
      title: 'Advanced Call Features',
      description: 'Auto-attendant, call forwarding, voicemail-to-email, call recording, and conference calling.'
    },
    {
      icon: <Headphones className="h-8 w-8 text-primary" />,
      title: 'Contact Center',
      description: 'Comprehensive call center solutions with queue management, reporting, and CRM integration.'
    },
    {
      icon: <Settings className="h-8 w-8 text-primary" />,
      title: 'System Integration',
      description: 'Seamless integration with existing business applications and communication tools.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="VoIP office communication system"
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
                  <span className="text-white">VOIP Design & Implementation</span>
                </li>
              </ol>
            </nav>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              VOIP Design & Implementation
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Modern communication systems that streamline your business communications, 
              reduce costs, and enhance collaboration across your organization.
            </p>
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link to="/contact">
                Upgrade Your Communications
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
                Transform Your Business Communications
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Voice over Internet Protocol (VoIP) technology has revolutionized business 
                communications, offering superior flexibility, cost savings, and advanced 
                features that traditional phone systems simply cannot match. Our expert 
                VoIP design and implementation services help you harness this technology 
                to create a communication infrastructure that grows with your business.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From small businesses to large enterprises, we design and implement 
                customized VoIP solutions that integrate seamlessly with your existing 
                infrastructure while providing the scalability and reliability your 
                business demands.
              </p>
              <div className="flex items-center space-x-4 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="font-medium">99.9% Uptime</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="font-medium">24/7 Support</span>
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
              Comprehensive VoIP Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From initial design to ongoing support, we provide complete VoIP solutions 
              that meet your specific communication needs and business objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium text-foreground">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Advanced VoIP Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our VoIP solutions come packed with enterprise-grade features 
              designed to enhance productivity and streamline communications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="p-8 space-y-4">
                  <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Implementation Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our structured approach ensures smooth deployment with minimal 
              disruption to your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {[
              {
                step: '01',
                title: 'Assessment',
                description: 'Evaluate current communication needs and infrastructure.'
              },
              {
                step: '02',
                title: 'Design',
                description: 'Create customized VoIP architecture and solution design.'
              },
              {
                step: '03',
                title: 'Planning',
                description: 'Develop detailed implementation timeline and resources.'
              },
              {
                step: '04',
                title: 'Installation',
                description: 'Deploy hardware, software, and network configurations.'
              },
              {
                step: '05',
                title: 'Testing',
                description: 'Comprehensive testing and quality assurance validation.'
              },
              {
                step: '06',
                title: 'Training',
                description: 'User training and ongoing support implementation.'
              }
            ].map((phase, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold mx-auto">
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
              Ready to Upgrade Your Communication System?
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Discover how our VoIP solutions can reduce costs, improve productivity, 
              and provide the flexibility your business needs to succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Link to="/contact">
                  Get VoIP Assessment
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

export default VOIPDesign;

