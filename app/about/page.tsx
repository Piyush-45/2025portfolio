'use client'

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { 
  Code, 
  Codepen, 
  Youtube, 
  Briefcase, 
  Users, 
  Database, 
  Laptop, 
  Layout, 
  Server, 
  Zap, 
  Cpu, 
  Award, 
  Sun, 
  Moon,
  ArrowLeft,
  Star,
  Quote
} from 'lucide-react';
import { useEffect, useState } from 'react';

export default function About() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  // For staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  // For skill tags
  const skillCategories = [
    {
      name: "Frontend",
      icon: <Layout className="w-5 h-5" />,
      skills: ["React", "React Native", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Framer Motion"]
    },
    {
      name: "Backend",
      icon: <Server className="w-5 h-5" />,
      skills: ["Node.js", "Express", "GraphQL", "REST API", "AWS", "Firebase", "Serverless"]
    },
    {
      name: "Database",
      icon: <Database className="w-5 h-5" />,
      skills: ["MongoDB", "PostgreSQL", "Redis", "Prisma", "Mongoose", "SQL"]
    },
    {
      name: "Tools & Others",
      icon: <Cpu className="w-5 h-5" />,
      skills: ["Git", "Docker", "CI/CD", "Jest", "Webpack", "Performance Optimization", "SEO"]
    }
  ];

  // Testimonial data
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager at TechVision",
      image: "/api/placeholder/100/100", // Replace with actual image path
      quote: "Working with this developer transformed our product. They delivered a solution that exceeded our expectations and truly understood our business goals beyond just the technical requirements.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Startup Founder",
      image: "/api/placeholder/100/100", // Replace with actual image path
      quote: "Exceptional problem-solver who built our MVP in record time. The code quality and architecture decisions made scaling our product seamless as we grew. Would hire again in a heartbeat.",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      role: "Digital Marketing Director",
      image: "/api/placeholder/100/100", // Replace with actual image path
      quote: "The e-commerce site they built for us increased our conversion rate by 32%. Their attention to performance optimization and user experience details made all the difference.",
      rating: 5
    },
    {
      name: "David Park",
      role: "CTO at FinTech Innovate",
      image: "/api/placeholder/100/100", // Replace with actual image path
      quote: "Not just a developer, but a technical partner. They challenged our assumptions, suggested better approaches, and delivered a robust platform that handles our complex requirements flawlessly.",
      rating: 5
    }
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-white dark:bg-black px-6 md:px-12 py-20 overflow-hidden">
      {/* Animated Gradient Background - same as hero but more subtle */}
      <div
        className="absolute inset-0 z-0 opacity-10 dark:opacity-5 blur-xl"
        style={{
          backgroundImage:
            'linear-gradient(115deg, #3b0764, #9333ea, #2563eb, #059669, #84cc16)',
          backgroundSize: '400% 400%',
          animation: 'gradientShift 25s ease infinite', 
        }}
      />
      
      {/* Navigation Elements */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-20">
        {/* Back Button */}
        <Link href="/">
          <motion.div 
            whileHover={{ x: -4 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 py-2 px-4 rounded-full bg-white/80 dark:bg-black/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200 font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-900"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </motion.div>
        </Link>
        
        {/* Theme Toggle - same as hero */}
        {mounted && (
          <motion.button
            whileTap={{ rotate: 360 }}
            whileHover={{ scale: 1.2 }}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-black/50 backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-yellow-400 transition-transform duration-300" />
            ) : (
              <Moon className="w-5 h-5 text-purple-600 transition-transform duration-300" />
            )}
          </motion.button>
        )}
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl mx-auto w-full pt-12"
      >
        <motion.h2 
          className="text-5xl sm:text-6xl md:text-7xl font-black mb-16 md:mb-24 tracking-tight text-gray-900 dark:text-gray-100"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          about<span className="text-green-600 dark:text-green-400">.</span>
        </motion.h2>
        
        {/* Main intro - Recruiter/Client focused */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div variants={fadeInUp} className="flex items-center space-x-3 mb-4">
              <div className="p-2 rounded-md bg-violet-100 dark:bg-violet-900/30">
                <Briefcase className="w-5 h-5 text-violet-600 dark:text-violet-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">For clients & recruiters</h3>
            </motion.div>
            
            <motion.p variants={fadeInUp} className="text-lg text-gray-800 dark:text-gray-200">
              I'm a solution-driven full-stack JavaScript engineer with a proven track record of delivering high-performance web and mobile applications that drive business results.
            </motion.p>
            
            <motion.p variants={fadeInUp} className="text-lg text-gray-800 dark:text-gray-200">
              My expertise in the MERN stack and React Native allows me to build scalable digital experiences that balance technical excellence with user-centered design. I bring a unique combination of technical depth and clear communication that translates complex requirements into elegant solutions.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="pt-4">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">What I bring to your project:</h4>
              <ul className="space-y-2">
                {[
                  "End-to-end implementation from concept to deployment",
                  "Performance-optimized code with scalability in mind",
                  "Clean, maintainable architecture that grows with your needs",
                  "Responsive designs that work flawlessly across devices",
                  "Strategic problem-solving with business goals in focus"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-600 dark:text-green-400 mr-2">→</span> 
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div variants={fadeInUp} className="flex items-center space-x-3 mb-4">
              <div className="p-2 rounded-md bg-violet-100 dark:bg-violet-900/30">
                <Code className="w-5 h-5 text-violet-600 dark:text-violet-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">My approach</h3>
            </motion.div>
            
            <motion.p variants={fadeInUp} className="text-lg text-gray-800 dark:text-gray-200">
              I combine technical expertise with creative problem-solving, continuously expanding my skills through self-directed learning and hands-on experimentation. My self-taught background has given me a unique ability to adapt quickly and find innovative solutions to complex challenges.
            </motion.p>
            
            <motion.p variants={fadeInUp} className="text-lg text-gray-800 dark:text-gray-200">
              When I'm not building products for clients, I challenge myself with new technologies, compose music, and solve complex algorithms to stay at the cutting edge of development practices.
            </motion.p>
            
            {/* YouTube Teaching Highlight */}
            <motion.div variants={fadeInUp} className="bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/10 p-4 rounded-lg border border-red-100 dark:border-red-800/30 mt-6">
              <div className="flex items-center space-x-3 mb-2">
                <Youtube className="w-5 h-5 text-red-600 dark:text-red-400" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Educator & Content Creator</h4>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                I share my expertise through tutorial videos and coding challenges on YouTube, helping aspiring developers master modern web technologies and best practices. My teaching approach focuses on practical, real-world applications that build true understanding.
              </p>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Skills Section - Creative Alternative to Bars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-20 md:mt-32"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Technical Expertise</h3>
          
          <div className="space-y-8">
            {skillCategories.map((category, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (i * 0.1), duration: 0.5 }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 rounded-md bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400">
                    {category.icon}
                  </div>
                  <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">{category.name}</h4>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, j) => (
                    <motion.div
                      key={j}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.6 + (i * 0.1) + (j * 0.05), duration: 0.4 }}
                      whileHover={{ y: -3, x: 0 }}
                      className="px-4 py-2 rounded-full bg-gradient-to-r from-violet-50 to-emerald-50 dark:from-violet-900/20 dark:to-emerald-900/20 border border-violet-100 dark:border-violet-800/30 text-gray-800 dark:text-gray-200 font-medium text-sm"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Work Approach */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 md:mt-32 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: <Zap className="w-6 h-6 text-amber-500 dark:text-amber-400" />,
              title: "Efficient Execution",
              description: "I deliver high-quality code on time and within scope, optimizing performance at every stage of development."
            },
            {
              icon: <Users className="w-6 h-6 text-blue-500 dark:text-blue-400" />,
              title: "Clear Communication",
              description: "I translate technical concepts for non-technical stakeholders and ensure alignment throughout the project lifecycle."
            },
            {
              icon: <Award className="w-6 h-6 text-green-500 dark:text-green-400" />,
              title: "Continuous Growth",
              description: "I constantly evolve my skills through teaching, experimentation, and staying ahead of emerging technologies."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + (i * 0.1), duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md dark:shadow-gray-900/20 transition-all"
            >
              <div className="mb-4">{item.icon}</div>
              <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{item.title}</h4>
              <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Quote/Philosophy Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-20 md:mt-32 text-center max-w-3xl mx-auto"
        >
          <p className="text-xl md:text-2xl italic text-gray-700 dark:text-gray-300">
            "I believe great code should be as invisible as it is powerful — working flawlessly behind the scenes while creating meaningful experiences for users."
          </p>
        </motion.div>
        
        {/* Testimonials Section - UPDATED FOR MINIMALIST DESIGN */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-20 md:mt-32"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-10 text-gray-900 dark:text-gray-100 text-center">
            Client Testimonials
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + (index * 0.1), duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="relative bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md dark:shadow-gray-900/20 transition-all group overflow-hidden"
                style={{
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease"
                }}
              >
                {/* Decorative quote icon */}
                <div className="absolute -right-2 -top-2 text-gray-200 dark:text-gray-800 opacity-30 transform rotate-12">
                  <Quote className="w-16 h-16" />
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <p className="text-gray-700 dark:text-gray-300 italic mb-6">"{testimonial.quote}"</p>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-gray-800">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-gray-100">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Subtle border highlight on hover - MINIMALIST VERSION */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div 
                    className="absolute inset-0 rounded-xl -m-0.5"
                    style={{
                      background: theme === 'dark' 
                        ? "linear-gradient(to right, rgba(75, 85, 99, 0.3), rgba(75, 85, 99, 0.2))" 
                        : "linear-gradient(to right, rgba(209, 213, 219, 0.5), rgba(229, 231, 235, 0.5))",
                      backgroundSize: "200% 200%",
                      animation: "subtleGradientPosition 3s ease infinite"
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Call to Action Button - UPDATED FOR MINIMALIST DESIGN */}
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.5 }}
          >
            <motion.a
              href="/contact" // Update with your contact page URL
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 font-medium shadow-sm hover:shadow-md transition-all duration-300"
            >
              Let's Build Something Amazing
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Add inline styles for animations */}
      <style jsx global>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
          100% { background-position: 0% 50% }
        }
        
        @keyframes subtleGradientPosition {
          0% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
          100% { background-position: 0% 50% }
        }
      `}</style>
    </section>
  );
}