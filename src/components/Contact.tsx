
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Github, Linkedin, Mail, Twitter, ExternalLink } from 'lucide-react';

interface SocialLinkProps {
  platform: string;
  url: string;
  icon: React.ReactNode;
}

const Contact: React.FC = () => {
  const socialLinks: SocialLinkProps[] = [
    {
      platform: "GitHub",
      url: "https://github.com/johndoe",
      icon: <Github className="h-5 w-5" />
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/johndoe",
      icon: <Linkedin className="h-5 w-5" />
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/johndoe",
      icon: <Twitter className="h-5 w-5" />
    },
    {
      platform: "Email",
      url: "mailto:hello@johndoe.com",
      icon: <Mail className="h-5 w-5" />
    },
    {
      platform: "Website",
      url: "https://johndoe.com",
      icon: <ExternalLink className="h-5 w-5" />
    }
  ];

  return (
    <AnimatedSection id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="mt-8 max-w-2xl mx-auto text-center">
          <p className="text-lg text-muted-foreground mb-8">
            Feel free to reach out to me through any of these platforms. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link) => (
              <SocialLink key={link.platform} {...link} />
            ))}
          </div>
          
          <div className="mt-12 glass rounded-xl p-8">
            <h3 className="text-xl font-medium mb-4">Send me a message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                  placeholder="Your message"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-all font-medium w-full md:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

const SocialLink: React.FC<SocialLinkProps> = ({ platform, url, icon }) => {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-5 py-3 rounded-md bg-secondary hover:bg-secondary/80 transition-colors"
    >
      <span className="text-primary">{icon}</span>
      <span className="font-medium">{platform}</span>
    </a>
  );
};

export default Contact;
