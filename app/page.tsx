'use client'

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  Sun,
  Moon,
} from 'lucide-react';
import { useEffect, useState } from 'react';


export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [showSocialIcons, setShowSocialIcons] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Animation for staggered icon entrance
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1 // Each icon appears with a delay
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren"
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 10, scale: 0.8 },
    show: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -10, scale: 0.8, transition: { duration: 0.2 } }
  };

  // Toggle social icons visibility
  const toggleSocialIcons = () => {
    setShowSocialIcons(!showSocialIcons);
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center bg-white dark:bg-black px-6 md:px-8 overflow-hidden">
      {/* Animated Gradient Background */}
      <div
        className="absolute inset-0 z-0 opacity-10 dark:opacity-5 blur-xl"
        style={{
          backgroundImage:
            'linear-gradient(115deg, #3b0764, #9333ea, #2563eb, #059669, #84cc16)',
          backgroundSize: '400% 400%',
          animation: 'gradientShift 15s ease infinite',
        }}
      />

      <style jsx global>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>

      <div className="absolute top-4 right-4 z-20">
        {mounted && (
          <motion.button
            whileTap={{ rotate: 360 }}
            whileHover={{ scale: 1.2 }}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full border border-border dark:border-gray-700 hover:bg-muted dark:hover:bg-muted/20 transition-colors"
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

      <div className="relative z-10 max-w-2xl w-full space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-zinc-700 via-slate-500 to-stone-600 bg-clip-text text-transparent tracking-tight leading-tight"
        >
          Piyush Tyagi<span className="text-sm align-super">*</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-700 dark:text-gray-300 space-y-4"
        >
          <p>Full-stack JavaScript engineer shaping the web and mobile worlds with React & React Native.</p>
          <p>
            I create interfaces that feel natural and perform like magic — from smooth mobile flows to bold web experiences.
          </p>
          <p>
            I care deeply about visual rhythm, maintainable code, and building tools that scale beautifully.
          </p>
          <p>
            Dive into recent{' '}
            <Link
              href="#work"
              className="bg-green-100 dark:bg-green-800 px-1 rounded hover:underline text-black dark:text-white"
            >
              work
            </Link>
            , get to know me better in the{' '}
            <Link
              href="/about"
              className="underline hover:text-green-600 dark:hover:text-green-400"
            >
              about
            </Link>{' '}
            section or just{' '}
            <button
              onClick={toggleSocialIcons}
              className="underline font-medium hover:text-green-600 dark:hover:text-green-400 hover:underline hover:decoration-2 cursor-pointer"
            >
              say hello
            </button>
            .
          </p>
        </motion.div>

        {/* Fixed height container to prevent layout shift */}
        <div className="h-10 relative">
          <AnimatePresence>
            {showSocialIcons && (
              <motion.div 
                className="flex space-x-4 absolute left-0 top-0"
                variants={container}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                <motion.div variants={item}>
                  <Link href="https://github.com" target="_blank">
                    <motion.div
                      whileHover={{ y: -4, scale: 1.2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Github className="w-5 h-5 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white" />
                    </motion.div>
                  </Link>
                </motion.div>
                
                <motion.div variants={item}>
                  <Link href="https://twitter.com" target="_blank">
                    <motion.div
                      whileHover={{ y: -4, scale: 1.2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Twitter className="w-5 h-5 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" />
                    </motion.div>
                  </Link>
                </motion.div>
                
                <motion.div variants={item}>
                  <Link href="https://linkedin.com" target="_blank">
                    <motion.div
                      whileHover={{ y: -4, scale: 1.2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-500" />
                    </motion.div>
                  </Link>
                </motion.div>
                
                <motion.div variants={item}>
                  <Link href="mailto:gmail@example.com">
                    <motion.div
                      whileHover={{ y: -4, scale: 1.2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Mail className="w-5 h-5 text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400" />
                    </motion.div>
                  </Link>
                </motion.div>
                
                <motion.div variants={item}>
                  <Link href="https://wa.me/1234567890" target="_blank">
                    <motion.div
                      whileHover={{ y: -4, scale: 1.2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Phone className="w-5 h-5 text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400" />
                    </motion.div>
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* <AboutPage/> */}
    </main>
  );
}