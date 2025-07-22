import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Palette, Eye, Heart, Zap, Target, Award } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import heroImage from '../assets/hero-branding.jpg';

const Branding = () => {
  const benefits = [
    {
      icon: <Eye className="h-6 w-6 text-primary" />,
      title: 'Brand Recognition',
      description: 'Create memorable visual identity that makes your brand instantly recognizable in the market.'
    },
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      title: 'Customer Loyalty',
      description: 'Build emotional connections that turn customers into brand advocates and repeat buyers.'
    },
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: 'Market Positioning',
      description: 'Establish clear differentiation and competitive advantage in your industry.'
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: 'Business Growth',
      description: 'Drive revenue growth through stronger brand equity and premium pricing power.'
    }
  ];

  const services = [
    'Brand Strategy Development',
    'Logo Design & Visual Identity',
    'Brand Guidelines & Standards',
    'Corporate Identity Systems',
    'Brand Messaging & Voice',
    'Marketing Collateral Design',
    'Website & Digital Branding',
    'Packaging & Product Design',
    'Brand Refresh & Rebranding',
    'Brand Audit & Research',
    'Trademark & Legal Support',
    'Brand Implementation Support'
  ];

  const brandElements = [
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: 'Visual Identity',
      description: 'Logo, color palette, typography, and visual elements that represent your brand consistently across all touchpoints.'
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: 'Brand Positioning',
      description: 'Strategic positioning that differentiates your brand and communicates your unique value proposition effectively.'
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: 'Brand Experience',
      description: 'Cohesive customer experience that reinforces your brand values at every interaction point.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Professional branding design agency workspace"
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
                  <span className="text-white">Branding</span>
                </li>
              </ol>
            </nav>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Professional Branding Services
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Professional brand development that creates lasting impressions, builds customer 
              loyalty, and establishes your unique position in the marketplace.
            </p>
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link to="/contact">
                Build Your Brand
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
                Create a Brand That Resonates
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Your brand is more than just a logo—it's the complete experience your customers 
                have with your business. Our comprehensive branding services help you create a 
                cohesive, memorable brand identity that communicates your values, differentiates 
                you from competitors, and builds lasting emotional connections with your audience.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From startups launching their first brand to established companies looking to 
                refresh their image, we provide strategic branding solutions that drive recognition, 
                loyalty, and business growth. Our process combines creative excellence with 
                strategic thinking to deliver brands that truly make an impact.
              </p>
              <div className="flex items-center space-x-4 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="font-medium">Award-Winning Design</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="font-medium">Strategic Approach</span>
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
              Comprehensive Branding Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From strategy to implementation, we provide complete branding solutions 
              that establish your unique identity and drive business success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <Palette className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium text-foreground">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Elements Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Essential Brand Elements
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We develop all the key components that make your brand cohesive, 
              memorable, and effective across all customer touchpoints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brandElements.map((element, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="p-8 space-y-4">
                  <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto">
                    {element.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {element.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {element.description}
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
              Our Branding Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A strategic, collaborative approach that ensures your brand 
              authentically represents your business and resonates with your audience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'Deep dive into your business, values, and target audience.'
              },
              {
                step: '02',
                title: 'Research',
                description: 'Market analysis and competitive landscape assessment.'
              },
              {
                step: '03',
                title: 'Strategy',
                description: 'Brand positioning and messaging framework development.'
              },
              {
                step: '04',
                title: 'Design',
                description: 'Visual identity creation and brand element design.'
              },
              {
                step: '05',
                title: 'Guidelines',
                description: 'Comprehensive brand standards and usage guidelines.'
              },
              {
                step: '06',
                title: 'Launch',
                description: 'Brand implementation and rollout support.'
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

      {/* Why Branding Matters Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Why Professional Branding Matters
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center space-y-4">
                <div className="text-4xl font-bold text-primary">73%</div>
                <p className="text-lg font-semibold text-foreground">of consumers</p>
                <p className="text-muted-foreground">are willing to pay more for products from brands they trust</p>
              </div>
              <div className="text-center space-y-4">
                <div className="text-4xl font-bold text-primary">3.5x</div>
                <p className="text-lg font-semibold text-foreground">more likely</p>
                <p className="text-muted-foreground">to be remembered with consistent brand presentation</p>
              </div>
              <div className="text-center space-y-4">
                <div className="text-4xl font-bold text-primary">23%</div>
                <p className="text-lg font-semibold text-foreground">revenue increase</p>
                <p className="text-muted-foreground">on average for businesses with strong branding</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Build a Powerful Brand?
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Let's create a brand identity that captures your essence, 
              connects with your audience, and drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Link to="/contact">
                  Start Your Brand Journey
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

export default Branding;

