import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Plus, Trash2, Clock, CheckCircle, AlertCircle, TrendingUp, Award, Target } from 'lucide-react';

const TimetablePlanner = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Math Study', day: 'Monday', time: '10:00 AM', duration: '2 hours', priority: 'high' },
    { id: 2, title: 'Physics Lab', day: 'Wednesday', time: '2:00 PM', duration: '3 hours', priority: 'medium' },
  ]);
  const [newTask, setNewTask] = useState({
    title: '',
    day: 'Monday',
    time: '',
    duration: '',
    priority: 'medium'
  });

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const priorities = ['high', 'medium', 'low'];

  const addTask = () => {
    if (!newTask.title || !newTask.time || !newTask.duration) {
      alert('Please fill in all required fields');
      return;
    }

    const task = {
      id: Date.now(),
      ...newTask
    };

    setTasks([...tasks, task]);
    setNewTask({
      title: '',
      day: 'Monday',
      time: '',
      duration: '',
      priority: 'medium'
    });
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-700 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-700 border-green-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'high': return <AlertCircle className="w-4 h-4" />;
      case 'medium': return <Clock className="w-4 h-4" />;
      case 'low': return <CheckCircle className="w-4 h-4" />;
      default: return null;
    }
  };

  const groupedTasks = days.reduce((acc, day) => {
    acc[day] = tasks.filter(task => task.day === day);
    return acc;
  }, {});

  return (
    <section id="timetable-planner" className="section-light-alt py-20 section-divider">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy-ultra-light rounded-full mb-4">
            <Calendar className="w-4 h-4 text-navy-primary" />
            <span className="text-navy-primary text-sm font-semibold">Time Management Tool</span>
          </div>
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-gradient-to-r from-navy-primary to-navy-secondary rounded-2xl">
              <Calendar className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="heading-secondary mb-4">
            Timetable <span className="text-gradient">Planner</span>
          </h2>
          <p className="text-large text-gray-600">
            Organize your study schedule and manage your time effectively with our smart planner
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Add Task Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="card-elevated p-8 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-navy-ultra-light to-transparent rounded-full -mr-16 -mt-16 opacity-50" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-navy-primary to-navy-secondary rounded-xl flex items-center justify-center">
                    <Plus className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="heading-tertiary mb-1">Add New Task</h3>
                    <p className="text-sm text-gray-500">Schedule your study time</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="group">
                    <label className="block text-sm font-bold text-navy-primary mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-navy-primary rounded-full" />
                      Task Title *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={newTask.title}
                        onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                        placeholder="e.g., Advanced Mathematics"
                        className="form-input pl-12"
                      />
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <Target className="w-5 h-5 text-navy-primary" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="group">
                      <label className="block text-sm font-bold text-navy-primary mb-3 flex items-center gap-2">
                        <div className="w-2 h-2 bg-navy-primary rounded-full" />
                        Day
                      </label>
                      <div className="relative">
                        <select
                          value={newTask.day}
                          onChange={(e) => setNewTask({ ...newTask, day: e.target.value })}
                          className="form-input pl-12 appearance-none"
                        >
                          {days.map(day => (
                            <option key={day} value={day}>{day}</option>
                          ))}
                        </select>
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                          <Calendar className="w-5 h-5 text-navy-primary" />
                        </div>
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                          <Clock className="w-4 h-4 text-navy-primary" />
                        </div>
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-sm font-bold text-navy-primary mb-3 flex items-center gap-2">
                        <div className="w-2 h-2 bg-navy-primary rounded-full" />
                        Time *
                      </label>
                      <div className="relative">
                        <input
                          type="time"
                          value={newTask.time}
                          onChange={(e) => setNewTask({ ...newTask, time: e.target.value })}
                          className="form-input pl-12"
                        />
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                          <Clock className="w-5 h-5 text-navy-primary" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-bold text-navy-primary mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-navy-primary rounded-full" />
                      Duration *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={newTask.duration}
                        onChange={(e) => setNewTask({ ...newTask, duration: e.target.value })}
                        placeholder="e.g., 2 hours"
                        className="form-input pl-12"
                      />
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <Clock className="w-5 h-5 text-navy-primary" />
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-bold text-navy-primary mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-navy-primary rounded-full" />
                      Priority Level
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {priorities.map((priority) => (
                        <motion.button
                          key={priority}
                          type="button"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setNewTask({ ...newTask, priority })}
                          className={`px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                            newTask.priority === priority
                              ? priority === 'high' 
                                ? 'bg-red-500 text-white shadow-lg'
                                : priority === 'medium'
                                ? 'bg-yellow-500 text-white shadow-lg'
                                : 'bg-green-500 text-white shadow-lg'
                              : 'bg-navy-ultra-light text-navy-primary hover:bg-navy-light border border-navy-light'
                          }`}
                        >
                          {priority.charAt(0).toUpperCase() + priority.slice(1)}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  <motion.div className="pt-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={addTask}
                      className="btn-primary w-full py-4 px-6 flex items-center justify-center gap-3 text-lg font-bold"
                    >
                      <Plus className="w-6 h-6" />
                      Add Task to Schedule
                    </motion.button>
                    
                    <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span>Quick add • Auto-saves • Real-time sync</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tasks Display */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="card-elevated p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="heading-tertiary">Weekly Schedule</h3>
                <div className="flex items-center gap-2 px-3 py-1 bg-navy-ultra-light rounded-full">
                  <Target className="w-4 h-4 text-navy-primary" />
                  <span className="text-sm font-semibold text-navy-primary">{tasks.length} tasks</span>
                </div>
              </div>

              <div className="space-y-4 max-h-96 overflow-y-auto">
                {days.map(day => (
                  <div key={day} className="border-b border-navy-light pb-4 last:border-0">
                    <h4 className="font-semibold text-navy-primary mb-3 flex items-center gap-2">
                      <div className="w-3 h-3 bg-gradient-to-r from-navy-primary to-navy-secondary rounded-full" />
                      {day}
                      <span className="text-sm text-gray-500">
                        ({groupedTasks[day]?.length || 0} tasks)
                      </span>
                    </h4>

                    <AnimatePresence>
                      {groupedTasks[day]?.length > 0 ? (
                        groupedTasks[day].map((task, index) => (
                          <motion.div
                            key={task.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-3 p-3 bg-navy-ultra-light rounded-xl mb-2 hover:bg-navy-light transition-colors"
                          >
                            <div className={`px-3 py-1 rounded-full border flex items-center gap-1 ${getPriorityColor(task.priority)}`}>
                              {getPriorityIcon(task.priority)}
                              <span className="text-xs font-medium">
                                {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                              </span>
                            </div>

                            <div className="flex-1">
                              <p className="font-semibold text-navy-primary">{task.title}</p>
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Clock className="w-3 h-3" />
                                <span>{task.time}</span>
                                <span>•</span>
                                <span>{task.duration}</span>
                              </div>
                            </div>

                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => removeTask(task.id)}
                              className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </motion.button>
                          </motion.div>
                        ))
                      ) : (
                        <div className="text-center py-4">
                          <Calendar className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                          <p className="text-gray-500 text-sm">No tasks scheduled</p>
                        </div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {tasks.length === 0 && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-navy-ultra-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-navy-primary" />
                  </div>
                  <h4 className="font-semibold text-navy-primary mb-2">No tasks yet</h4>
                  <p className="text-gray-500">Add your first task to get started!</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="card p-6 text-center">
            <div className="w-12 h-12 bg-navy-ultra-light rounded-xl flex items-center justify-center mx-auto mb-4">
              <Target className="w-6 h-6 text-navy-primary" />
            </div>
            <p className="text-3xl font-bold text-navy-primary">{tasks.length}</p>
            <p className="text-gray-600 font-medium">Total Tasks</p>
          </div>
          <div className="card p-6 text-center">
            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-6 h-6 text-red-500" />
            </div>
            <p className="text-3xl font-bold text-red-500">
              {tasks.filter(t => t.priority === 'high').length}
            </p>
            <p className="text-gray-600 font-medium">High Priority</p>
          </div>
          <div className="card p-6 text-center">
            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-green-500" />
            </div>
            <p className="text-3xl font-bold text-green-500">
              {Object.keys(groupedTasks).filter(day => groupedTasks[day].length > 0).length}
            </p>
            <p className="text-gray-600 font-medium">Active Days</p>
          </div>
        </motion.div>

        {/* Productivity Tips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 p-6 bg-gradient-to-r from-navy-ultra-light to-blue-50 rounded-2xl border border-navy-light"
        >
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-6 h-6 text-navy-primary" />
            <h4 className="font-semibold text-navy-primary">Productivity Tips</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-navy-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-xs font-bold">1</span>
              </div>
              <div>
                <p className="font-medium text-navy-primary text-sm">Prioritize Tasks</p>
                <p className="text-gray-600 text-xs">Start with high-priority items</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-navy-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-xs font-bold">2</span>
              </div>
              <div>
                <p className="font-medium text-navy-primary text-sm">Time Blocking</p>
                <p className="text-gray-600 text-xs">Allocate specific time slots</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-navy-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-xs font-bold">3</span>
              </div>
              <div>
                <p className="font-medium text-navy-primary text-sm">Take Breaks</p>
                <p className="text-gray-600 text-xs">Schedule regular study breaks</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TimetablePlanner;
