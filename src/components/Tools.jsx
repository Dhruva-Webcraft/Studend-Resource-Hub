import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, Calendar, Wrench, ArrowRight, Zap, Clock, Award, Users } from 'lucide-react';

const Tools = () => {
  const tools = [
    {
      icon: Calculator,
      title: 'GPA Calculator',
      description: 'Calculate your GPA instantly with our easy-to-use calculator. Track your academic performance.',
      features: ['Multiple Subjects', 'Grade Points', 'Credit Hours'],
      color: 'from-blue-500 to-indigo-600',
      href: '#gpa-calculator',
      badge: 'Popular'
    },
    {
      icon: Calendar,
      title: 'Timetable Planner',
      description: 'Organize your study schedule and manage your time effectively with our planner tool.',
      features: ['Weekly View', 'Task Management', 'Reminders'],
      color: 'from-purple-500 to-pink-600',
      href: '#timetable-planner',
      badge: 'New'
    },
    {
      icon: Wrench,
      title: 'Academic Utilities',
      description: 'Collection of useful academic tools including citation generator and reference manager.',
      features: ['Citation Generator', 'Reference Manager', 'Plagiarism Checker'],
      color: 'from-green-500 to-teal-600',
      href: '#academic-utilities',
      badge: 'Pro'
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

  return (
    <section id="useful-tools" className="section-gray-alt py-20 section-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Useful <span className="text-gradient">Tools</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful tools designed to help you study smarter, not harder.
          </p>
        </motion.div>

        {/* Tool Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="h-full p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden">
                {/* Badge */}
                {tool.badge && (
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 text-xs font-semibold text-white rounded-full ${
                      tool.badge === 'Popular' ? 'bg-red-500' :
                      tool.badge === 'New' ? 'bg-green-500' : 'bg-purple-500'
                    }`}>
                      {tool.badge}
                    </span>
                  </div>
                )}

                {/* Icon and Header */}
                <div className="flex items-center mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${tool.color} mr-4`}>
                    <tool.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gradient transition-colors">
                      {tool.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {tool.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {tool.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                        <Zap className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-sm text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Usage Stats */}
                <div className="flex items-center gap-4 mb-6 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">Save 2 hrs/day</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">95% accuracy</span>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.a
                  href={tool.href}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-xl bg-gradient-to-r ${tool.color} text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300`}
                >
                  Open Tool
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 p-8 bg-gradient-to-r from-navy-ultra-light to-blue-50 rounded-2xl border border-navy-light">
            <div className="text-center">
              <div className="w-12 h-12 bg-navy-ultra-light rounded-xl flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-navy-primary" />
              </div>
              <p className="text-sm text-gray-600 mb-1">Total Tools</p>
              <p className="text-2xl font-bold text-navy-primary">15+</p>
            </div>
            <div className="w-px h-12 bg-navy-light" />
            <div className="text-center">
              <div className="w-12 h-12 bg-navy-ultra-light rounded-xl flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-navy-primary" />
              </div>
              <p className="text-sm text-gray-600 mb-1">Active Users</p>
              <p className="text-2xl font-bold text-navy-primary">50K+</p>
            </div>
            <div className="w-px h-12 bg-navy-light" />
            <div className="text-center">
              <div className="w-12 h-12 bg-navy-ultra-light rounded-xl flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6 text-navy-primary" />
              </div>
              <p className="text-sm text-gray-600 mb-1">Satisfaction Rate</p>
              <p className="text-2xl font-bold text-navy-primary">98%</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tools;
