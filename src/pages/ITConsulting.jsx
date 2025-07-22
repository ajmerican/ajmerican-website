import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, TrendingUp, Shield, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import heroImage from '../assets/hero-consulting.jpg';

const ITConsulting = () => {
  const benefits = [
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      title: 'Strategic Planning',
      description: 'Develop comprehensive IT strategies aligned with your business objectives and growth plans.'
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: 'Risk Management',
      description: 'Identify and mitigate technology risks while ensuring compliance with industry standards.'
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: 'Performance Optimization',
      description: 'Enhance system performance and efficiency to maximize your technology investments.'
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: 'Team Development',
      description: 'Build internal IT capabilities through training and knowledge transfer programs.'
    }
  ];

  const services = [
    'IT Strategy Development',
    'Technology Assessment & Audit',
    'Digital Transformation Planning',
    'Infrastructure Design & Planning',
    'Cybersecurity Consulting',
    'Cloud Migration Strategy',
    'IT Budget Planning & Optimization',
    'Vendor Selection & Management',
    'Project Management & Implementation',
    'Change Management & Training'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="IT Consulting professionals in meeting"
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
                  <span className="text-white">IT Consulting</span>
                </li>
              </ol>
            </nav>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              IT Consulting Services
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Strategic technology guidance that transforms your business operations, 
              optimizes performance, and drives sustainable growth through innovative IT solutions.
            </p>
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link to="/contact">
                Get Expert Consultation
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
                Transform Your Business with Strategic IT Consulting
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                In today's rapidly evolving digital landscape, having the right IT strategy 
                is crucial for business success. Our expert IT consulting services help you 
                navigate complex technology decisions, optimize your infrastructure, and 
                align your IT investments with your business goals.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We work closely with your team to understand your unique challenges and 
                opportunities, providing tailored recommendations that drive efficiency, 
                reduce costs, and position your organization for future growth.
              </p>
              <div className="flex items-center space-x-4 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="font-medium">Certified Consultants</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="font-medium">Proven Methodologies</span>
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
              Comprehensive IT Consulting Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From strategic planning to implementation, we provide end-to-end 
              consulting services that address every aspect of your IT needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium text-foreground">{service}</span>
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
              Our Consulting Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A structured approach that ensures we deliver maximum value 
              and measurable results for your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Assessment',
                description: 'Comprehensive evaluation of your current IT infrastructure, processes, and business requirements.'
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'Development of customized IT strategy aligned with your business objectives and growth plans.'
              },
              {
                step: '03',
                title: 'Planning',
                description: 'Detailed implementation roadmap with timelines, resources, and success metrics.'
              },
              {
                step: '04',
                title: 'Execution',
                description: 'Guided implementation with ongoing support and optimization throughout the process.'
              }
            ].map((phase, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {phase.title}
                </h3>
                <p className="text-muted-foreground">
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
              Ready to Optimize Your IT Strategy?
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Let our experienced consultants help you develop and implement 
              an IT strategy that drives business success and competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Link to="/contact">
                  Schedule Consultation
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

export default ITConsulting;

