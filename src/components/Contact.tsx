
import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { Github, Linkedin, Mail, Twitter, Link as LinkIcon, Send, CheckCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface SocialLinkProps {
  platform: string;
  url: string;
  icon: React.ReactNode;
}

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  const socialLinks: SocialLinkProps[] = [
    {
      platform: "GitHub",
      url: "https://github.com/harsh822v",
      icon: <Github />
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/harsh-shukla-3230a4325/",
      icon: <Linkedin />
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/harsh",
      icon: <Twitter />
    },
    {
      platform: "Email",
      url: "mailto:harsh206090307117@gmail.com",
      icon: <Mail />
    },
    {
      platform: "Website",
      url: "https://harshshukla.com",
      icon: <LinkIcon />
    }
  ];

  return (
    <AnimatedSection id="contact" animation="fade-in">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="mt-8 max-w-2xl mx-auto text-center">
          <p className="text-lg text-muted-foreground mb-8">
            Feel free to reach out to me through any of these platforms. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link, index) => (
              <SocialLink key={link.platform} {...link} index={index} />
            ))}
          </div>
          
          <div className="mt-12 glass rounded-xl p-8 transition-all duration-500 hover:shadow-2xl">
            <h3 className="text-xl font-medium mb-4">Send me a message</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="Subject"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                  placeholder="Your message"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="group px-6 py-3 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-all font-medium w-full md:w-auto flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

const SocialLink: React.FC<SocialLinkProps & { index: number }> = ({ platform, url, icon, index }) => {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-5 py-3 rounded-md bg-secondary hover:bg-secondary/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-md animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <span className="text-primary">{icon}</span>
      <span className="font-medium">{platform}</span>
    </a>
  );
};

export default Contact;
