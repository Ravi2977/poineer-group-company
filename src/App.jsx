import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { Menu, X, Phone, Mail, MapPin, Smartphone, Store, Home, Users, Target, Eye, Briefcase, Send } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Toaster } from '@/components/ui/toaster';
import { ThemeToggle } from '@/components/theme-toggle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const navLinks = [
  { to: "about", label: "About" },
  { to: "services", label: "Services" },
  { to: "mission", label: "Mission" },
  { to: "vision", label: "Vision" },
  { to: "opportunity", label: "Opportunity" },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { toast } = useToast();

  const handleContactSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚀 Message Sent!",
      description: "Thanks for reaching out! We'll get back to you soon.",
    });
    e.target.reset();
  };

  const Section = ({ id, children, className }) => (
    <motion.section
      id={id}
      className={`container mx-auto px-6 py-20 sm:py-24 ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.section>
  );

  return (
    <>
      <Helmet>
        <title>Pioneer Group of Company - Leading Innovation & Excellence</title>
        <meta name="description" content="Pioneer Group of Company - Driving innovation and excellence across multiple industries with our vision, mission, and commitment to creating opportunities." />
      </Helmet>
      
      <div className="bg-background text-foreground min-h-screen">
        <motion.header 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
        >
          <nav className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <ScrollLink to="hero" smooth={true} duration={500} className="cursor-pointer">
                <motion.div 
                  className="flex items-center space-x-3"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">P</span>
                  </div>
                  <div>
                    <h1 className="text-xl font-bold text-foreground">Pioneer Group</h1>
                    <p className="text-sm text-purple-400">of Company</p>
                  </div>
                </motion.div>
              </ScrollLink>
              <div className="hidden md:flex items-center space-x-6">
                {navLinks.map(link => (
                  <ScrollLink
                    key={link.to}
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-foreground/80 hover:text-foreground transition-colors duration-300 font-medium cursor-pointer"
                    activeClass="text-purple-400"
                  >
                    {link.label}
                  </ScrollLink>
                ))}
                <ScrollLink to="contact" smooth={true} duration={500} offset={-70}>
                  <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                    Contact Us
                  </Button>
                </ScrollLink>
                <ThemeToggle />
              </div>

              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-foreground p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
            {isMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="md:hidden mt-4 pt-4 border-t border-border"
              >
                <div className="flex flex-col space-y-4 items-center">
                  {navLinks.map(link => (
                    <ScrollLink key={link.to} to={link.to} spy={true} smooth={true} offset={-70} duration={500} onClick={() => setIsMenuOpen(false)} className="text-foreground/80 hover:text-foreground transition-colors duration-300 font-medium cursor-pointer" activeClass="text-purple-400">{link.label}</ScrollLink>
                  ))}
                  <ScrollLink to="contact" smooth={true} duration={500} offset={-70} onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white">Contact Us</Button>
                  </ScrollLink>
                  <div className="pt-4">
                    <ThemeToggle />
                  </div>
                </div>
              </motion.div>
            )}
          </nav>
        </motion.header>

        <main>
          <div id="hero" className="relative text-center py-32 sm:py-48 px-6 bg-gradient-to-b from-background to-transparent">
             <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="max-w-4xl mx-auto relative">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Pioneering <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Excellence</span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground/70 mb-8 leading-relaxed">
                Leading innovation across industries with unwavering commitment to quality, integrity, and sustainable growth.
              </p>
              <ScrollLink to="about" smooth={true} duration={500} offset={-70}>
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300">Discover Our Story</Button>
              </ScrollLink>
            </motion.div>
          </div>
          
          <Section id="about">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-4">About Pioneer Group</h2>
                <p className="text-lg text-foreground/70 mb-4">Founded on the principles of innovation and integrity, Pioneer Group has grown into a diversified conglomerate, making significant strides in multiple sectors. Our journey is one of relentless pursuit of excellence and a deep-seated commitment to our clients and communities.</p>
                <p className="text-lg text-foreground/70">We believe in building a future where technology and human ingenuity create limitless opportunities for everyone.</p>
              </div>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <img  className="rounded-2xl shadow-2xl object-cover w-full h-80" alt="Team of professionals collaborating in a modern office" src="https://images.unsplash.com/photo-1637622124152-33adfabcc923" />
              </motion.div>
            </div>
          </Section>

          <Section id="services" className="bg-secondary/30">
             <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Our Services</h2>
                <p className="text-lg text-foreground/70 max-w-2xl mx-auto">Exploring new frontiers and delivering exceptional value across a wide range of industries.</p>
            </div>
            <Tabs defaultValue="recharge" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="recharge">Recharge</TabsTrigger>
                <TabsTrigger value="ecommerce">E-commerce</TabsTrigger>
                <TabsTrigger value="realestate">Real Estate</TabsTrigger>
                <TabsTrigger value="directselling">Direct Selling</TabsTrigger>
              </TabsList>
              <TabsContent value="recharge">
                <Card className="bg-background/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-4"><Smartphone className="text-purple-400" /> Digital Recharges</CardTitle>
                  </CardHeader>
                  <CardContent><p className="text-foreground/70">Instant and secure mobile, DTH, and utility bill payments at your fingertips. Stay connected effortlessly with our seamless digital recharge platform.</p></CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="ecommerce">
                <Card className="bg-background/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-4"><Store className="text-purple-400" /> E-commerce Solutions</CardTitle>
                  </CardHeader>
                  <CardContent><p className="text-foreground/70">Comprehensive e-commerce platforms designed to elevate your business. From storefronts to payment gateways, we build online experiences that sell.</p></CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="realestate">
                <Card className="bg-background/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-4"><Home className="text-purple-400" /> Real Estate Ventures</CardTitle>
                  </CardHeader>
                  <CardContent><p className="text-foreground/70">Developing iconic residential and commercial properties that define modern living and working. We build spaces that inspire and stand the test of time.</p></CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="directselling">
                <Card className="bg-background/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-4"><Users className="text-purple-400" /> Direct Selling Network</CardTitle>
                  </CardHeader>
                  <CardContent><p className="text-foreground/70">Empowering entrepreneurs through a robust direct selling model. Join our network and build your own successful business with our premium products.</p></CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </Section>

          <Section id="mission">
            <div className="grid md:grid-cols-2 gap-12 items-center">
               <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <img  className="rounded-2xl shadow-2xl object-cover w-full h-80" alt="Mountain peak representing a mission or goal" src="https://images.unsplash.com/photo-1697064369444-777efd0e291b" />
              </motion.div>
              <div className="text-right">
                <h2 className="text-4xl font-bold mb-4 flex items-center justify-end gap-4">Our Mission <Target className="text-purple-400"/></h2>
                <p className="text-lg text-foreground/70">Our mission is to empower progress by delivering innovative and sustainable solutions across all our ventures. We strive to exceed expectations, foster growth for our partners, and create lasting value for our customers and society.</p>
              </div>
            </div>
          </Section>

          <Section id="vision">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-4 flex items-center gap-4"><Eye className="text-purple-400"/> Our Vision</h2>
                <p className="text-lg text-foreground/70">Our vision is to be a global leader and a trailblazer of positive change, recognized for our unwavering commitment to quality, integrity, and pioneering spirit. We aim to build a future that is more connected, prosperous, and sustainable for all.</p>
              </div>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <img  className="rounded-2xl shadow-2xl object-cover w-full h-80" alt="Telescope pointing at a starry night sky, representing vision" src="https://images.unsplash.com/photo-1683624723687-49af02247d81" />
              </motion.div>
            </div>
          </Section>
          
          <Section id="opportunity" className="bg-secondary/30">
            <div className="text-center max-w-3xl mx-auto">
              <Briefcase className="w-16 h-16 text-purple-400 mx-auto mb-6"/>
              <h2 className="text-4xl font-bold mb-4">Explore Opportunities</h2>
              <p className="text-lg text-foreground/70 mb-8">We are always looking for passionate, talented individuals and innovative partners to join us on our journey. Discover a career or partnership that will challenge and inspire you.</p>
              <Button size="lg" onClick={() => toast({ title: "🚧 This feature isn't implemented yet!" })}>View Careers</Button>
            </div>
          </Section>

          <Section id="contact">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
                <p className="text-lg text-foreground/70 mb-8">Have a question or a proposal? We'd love to hear from you. Fill out the form or use our contact details to reach us.</p>
                 <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-foreground/80">
                    <Phone size={18} className="text-purple-400" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3 text-foreground/80">
                    <Mail size={18} className="text-purple-400" />
                    <span>info@pioneergroupcompany.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-foreground/80">
                    <MapPin size={18} className="text-purple-400" />
                    <span>123 Business District, Innovation City, IC 12345</span>
                  </div>
                </div>
              </div>
               <Card className="p-8 shadow-lg">
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Your message..." required />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white gap-2">Send Message <Send size={16}/></Button>
                </form>
               </Card>
            </div>
          </Section>

        </main>

        <motion.footer 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-secondary/30 border-t border-border"
        >
          <div className="container mx-auto px-6 py-8 text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-base">P</span>
              </div>
              <span className="font-bold text-foreground">Pioneer Group of Company</span>
            </div>
            <p className="text-foreground/60 text-sm">
              © {new Date().getFullYear()} Pioneer Group of Company. All rights reserved.
            </p>
          </div>
        </motion.footer>

        <Toaster />
      </div>
    </>
  );
}

export default App;
