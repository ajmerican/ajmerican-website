import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Cloud, Database, Lock, Zap, DollarSign, Globe } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import heroImage from '../assets/hero-cloud.jpg';

const CloudComputing = () => {
  const benefits = [
    {
      icon: <DollarSign className="h-6 w-6 text-primary" />,
      title: 'Cost Efficiency',
      description: 'Reduce infrastructure costs with pay-as-you-use cloud services and eliminate hardware maintenance.'
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: 'Scalability',
      description: 'Scale resources up or down instantly based on demand without infrastructure limitations.'
    },
    {
      icon: <Lock className="h-6 w-6 text-primary" />,
      title: 'Enhanced Security',
      description: 'Enterprise-grade security with advanced encryption, monitoring, and compliance features.'
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: 'Global Accessibility',
      description: 'Access your applications and data from anywhere in the world with reliable connectivity.'
    }
  ];

  const services = [
    'Cloud Strategy & Planning',
    'Cloud Migration Services',
    'Infrastructure as a Service (IaaS)',
    'Platform as a Service (PaaS)',
    'Software as a Service (SaaS)',
    'Hybrid Cloud Solutions',
    'Multi-Cloud Management',
    'Cloud Security & Compliance',
    'Disaster Recovery & Backup',
    'Cloud Cost Optimization',
    'DevOps & Automation',
    '24/7 Cloud Monitoring & Support'
  ];

  const cloudProviders = [
    { name: 'Amazon Web Services (AWS)', expertise: 'Advanced Partner' },
    { name: 'Microsoft Azure', expertise: 'Gold Partner' },
    { name: 'Google Cloud Platform', expertise: 'Premier Partner' },
    { name: 'IBM Cloud', expertise: 'Business Partner' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Cloud computing data center"
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
                  <span className="text-white">Cloud Computing</span>
                </li>
              </ol>
            </nav>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Cloud Computing Solutions
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Scalable, secure, and cost-effective cloud solutions that enhance flexibility, 
              improve performance, and accelerate your digital transformation journey.
            </p>
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link to="/contact">
                Start Your Cloud Journey
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
                Unlock the Power of Cloud Computing
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cloud computing has revolutionized how businesses operate, offering unprecedented 
                flexibility, scalability, and cost savings. Our comprehensive cloud solutions 
                help you harness this power to drive innovation, improve efficiency, and 
                accelerate your business growth.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're looking to migrate existing applications, build new cloud-native 
                solutions, or optimize your current cloud infrastructure, our expert team 
                provides end-to-end support throughout your cloud transformation journey.
              </p>
              <div className="flex items-center space-x-4 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="font-medium">99.9% Uptime SLA</span>
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
              Comprehensive Cloud Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From strategy to implementation, we provide complete cloud solutions 
              tailored to your specific business needs and objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <Cloud className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium text-foreground">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Providers Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Certified Cloud Partners
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We maintain strategic partnerships with leading cloud providers 
              to deliver best-in-class solutions and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cloudProviders.map((provider, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                    <Database className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">
                    {provider.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {provider.expertise}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Cloud Migration Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven methodology ensures smooth, secure, and efficient 
              migration to the cloud with minimal business disruption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                step: '01',
                title: 'Assessment',
                description: 'Evaluate current infrastructure and identify migration opportunities.'
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Develop comprehensive migration strategy and timeline.'
              },
              {
                step: '03',
                title: 'Design',
                description: 'Architect cloud solution optimized for performance and cost.'
              },
              {
                step: '04',
                title: 'Migration',
                description: 'Execute migration with minimal downtime and risk.'
              },
              {
                step: '05',
                title: 'Optimization',
                description: 'Fine-tune performance and optimize costs post-migration.'
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
              Ready to Move to the Cloud?
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Transform your business with scalable, secure, and cost-effective 
              cloud solutions. Let's discuss your cloud strategy today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Link to="/contact">
                  Get Cloud Assessment
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

export default CloudComputing;

