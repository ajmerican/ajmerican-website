import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';
import logo from '../assets/ajmericannewlogo.png';

const Footer = () => {
  const services = [
    { name: 'IT Consulting', href: '/it-consulting' },
    { name: 'Cloud Computing', href: '/cloud-computing' },
    { name: 'VOIP Design & Implementation', href: '/voip-design' },
    { name: 'Social Media Marketing', href: '/social-media-marketing' },
    { name: 'Branding', href: '/branding' },
    { name: 'Digital Signage', href: '/digital-signage' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img src={logo} alt="Ajmerican Informatics" className="h-16 w-auto" />
            <p className="text-gray-300 text-sm">
              Total IT Solution Provider delivering comprehensive technology services 
              to help businesses thrive in the digital age.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.ajmerican.com" className="text-gray-300 hover:text-white transition-colors">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  1496 33 A Street NW<br />
                  Edmonton-T6T 0V3
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-300 text-sm">780 803 8076</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-300 text-sm">ajmerican.com@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-300 text-sm">www.ajmerican.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Ajmerican Informatics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

