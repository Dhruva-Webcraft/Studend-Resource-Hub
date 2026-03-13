import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, FileText, GraduationCap, ArrowRight, Star, Users, Download, TrendingUp, Award } from 'lucide-react';

const StudyResources = () => {
  const resources = [
    {
      icon: BookOpen,
      title: 'Study Materials',
      description: 'Comprehensive collection of textbooks, reference materials, and study guides across various subjects.',
      features: ['PDF Downloads', 'Interactive Content', 'Subject-wise Organization', 'Expert Curated'],
      color: 'from-navy-primary to-navy-secondary',
      stats: { items: '500+', users: '10K+', rating: '4.9' },
      badge: 'Popular'
    },
    {
      icon: FileText,
      title: 'Notes',
      description: 'Well-organized class notes, lecture summaries, and quick reference materials created by top students.',
      features: ['Handwritten Notes', 'Digital Notes', 'Exam Preparation', 'Visual Learning'],
      color: 'from-navy-secondary to-navy-accent',
      stats: { items: '1000+', users: '15K+', rating: '4.8' },
      badge: 'New'
    },
    {
      icon: GraduationCap,
      title: 'Academic Resources',
      description: 'Past papers, sample questions, and academic tools to help you excel in your studies.',
      features: ['Past Papers', 'Practice Tests', 'Study Tips', 'Career Guidance'],
      color: 'from-navy-accent to-accent-indigo',
      stats: { items: '300+', users: '8K+', rating: '4.7' },
      badge: 'Premium'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
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

  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'Popular': return 'status-success';
      case 'New': return 'status-info';
      case 'Premium': return 'status-warning';
      default: return 'status-info';
    }
  };

  return (
    <section id="study-resources" className="section-light py-20 section-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy-ultra-light rounded-full mb-4">
            <BookOpen className="w-4 h-4 text-navy-primary" />
            <span className="text-navy-primary text-sm font-semibold">Premium Resources</span>
          </div>
          <h2 className="heading-secondary mb-4">
            Study <span className="text-gradient">Resources</span>
          </h2>
          <p className="text-large text-gray-600 max-w-3xl mx-auto">
            Everything you need to succeed in your academic journey, organized and easily accessible.
          </p>
        </motion.div>

        {/* Resource Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="card-elevated h-full p-8 relative overflow-hidden">
                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <span className={getBadgeColor(resource.badge)}>
                    {resource.badge}
                  </span>
                </div>

                {/* Icon and Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${resource.color}`}>
                    <resource.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium text-gray-600">{resource.stats.rating}</span>
                  </div>
                </div>

                {/* Title and Description */}
                <h3 className="heading-tertiary mb-3 group-hover:text-gradient transition-colors">
                  {resource.title}
                </h3>
                <p className="text-body mb-6">
                  {resource.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {resource.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-navy-ultra-light rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-3 h-3 text-navy-primary" />
                      </div>
                      <span className="text-sm text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-6 p-4 bg-navy-ultra-light rounded-xl">
                  <div className="flex items-center gap-2">
                    <Download className="w-4 h-4 text-navy-primary" />
                    <span className="text-sm font-semibold text-navy-primary">{resource.stats.items}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-navy-primary" />
                    <span className="text-sm font-semibold text-navy-primary">{resource.stats.users}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-xl bg-gradient-to-r ${resource.color} text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300`}
                >
                  View Resources
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-navy-ultra-light rounded-2xl border border-navy-light">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-navy-primary font-semibold">New resources added weekly</span>
            <Award className="w-4 h-4 text-navy-primary" />
          </div>
        </motion.div>

        {/* Additional Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="card p-6 text-center">
            <div className="w-12 h-12 bg-navy-ultra-light rounded-xl flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-6 h-6 text-navy-primary" />
            </div>
            <h4 className="font-semibold text-navy-primary mb-2">Expert Curated</h4>
            <p className="text-sm text-gray-600">All resources are reviewed and approved by academic experts</p>
          </div>
          <div className="card p-6 text-center">
            <div className="w-12 h-12 bg-navy-ultra-light rounded-xl flex items-center justify-center mx-auto mb-4">
              <Download className="w-6 h-6 text-navy-primary" />
            </div>
            <h4 className="font-semibold text-navy-primary mb-2">Unlimited Downloads</h4>
            <p className="text-sm text-gray-600">Download as many resources as you need, anytime</p>
          </div>
          <div className="card p-6 text-center">
            <div className="w-12 h-12 bg-navy-ultra-light rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-navy-primary" />
            </div>
            <h4 className="font-semibold text-navy-primary mb-2">Community Driven</h4>
            <p className="text-sm text-gray-600">Contributed by students and educators worldwide</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StudyResources;
