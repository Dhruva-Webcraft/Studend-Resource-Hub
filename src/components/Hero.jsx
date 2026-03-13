import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Target, Star, Zap, Award } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const floatingIcons = [
    { icon: BookOpen, delay: 0, x: -100, y: -50 },
    { icon: Users, delay: 0.5, x: 100, y: -80 },
    { icon: Target, delay: 1, x: -50, y: -100 },
  ];

  const stats = [
    { number: '10K+', label: 'Active Students', icon: Users },
    { number: '500+', label: 'Resources', icon: BookOpen },
    { number: '15+', label: 'Tools', icon: Zap },
    { number: '98%', label: 'Satisfaction', icon: Award },
  ];

  return (
    <section className="section-gradient relative min-h-screen flex items-center justify-center overflow-hidden section-with-border">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute opacity-10"
            initial={{ scale: 0, rotate: 0 }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              x: [item.x, item.x + 50, item.x],
              y: [item.y, item.y - 30, item.y],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              delay: item.delay,
              ease: 'easeInOut',
            }}
            style={{
              left: '50%',
              top: '50%',
            }}
          >
            <item.icon className="w-24 h-24 text-white" />
          </motion.div>
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full mb-6"
        >
          <Star className="w-4 h-4 text-yellow-300" />
          <span className="text-white text-sm font-medium">Trusted by 10,000+ Students</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={itemVariants}
          className="heading-primary text-white mb-6 text-center"
        >
          <span className="block mb-2">Student Resource</span>
          <span className="text-gradient-hero">Portal</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-large text-blue-100 mb-8 max-w-3xl mx-auto text-center"
        >
          Access premium study materials, comprehensive notes, academic resources, and powerful student tools - all in one place.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 w-full"
        >
          <motion.a
            href="#study-resources"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white glass-card-navy hover:shadow-2xl"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Resources
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
              initial={false}
            />
          </motion.a>

          <motion.a
            href="#useful-tools"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
          >
            View Tools
          </motion.a>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5 + index * 0.1 }}
              className="glass-card-navy p-4 rounded-xl text-center"
            >
              <stat.icon className="w-6 h-6 text-blue-300 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{stat.number}</div>
              <div className="text-sm text-blue-200">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
