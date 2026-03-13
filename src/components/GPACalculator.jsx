import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Plus, Trash2, Award, TrendingUp } from 'lucide-react';

const GPACalculator = () => {
  const [subjects, setSubjects] = useState([
    { id: 1, name: '', grade: 'A', credits: 3 }
  ]);
  const [gpa, setGpa] = useState(null);
  const [totalCredits, setTotalCredits] = useState(0);

  const gradePoints = {
    'A+': 4.0,
    'A': 4.0,
    'A-': 3.7,
    'B+': 3.3,
    'B': 3.0,
    'B-': 2.7,
    'C+': 2.3,
    'C': 2.0,
    'C-': 1.7,
    'D+': 1.3,
    'D': 1.0,
    'D-': 0.7,
    'F': 0.0
  };

  const addSubject = () => {
    const newSubject = {
      id: Date.now(),
      name: '',
      grade: 'A',
      credits: 3
    };
    setSubjects([...subjects, newSubject]);
  };

  const removeSubject = (id) => {
    setSubjects(subjects.filter(subject => subject.id !== id));
    setGpa(null);
  };

  const updateSubject = (id, field, value) => {
    setSubjects(subjects.map(subject => 
      subject.id === id ? { ...subject, [field]: value } : subject
    ));
    setGpa(null);
  };

  const calculateGPA = () => {
    const validSubjects = subjects.filter(subject => subject.name && subject.grade && subject.credits);
    
    if (validSubjects.length === 0) {
      alert('Please add at least one subject with valid details');
      return;
    }

    let totalGradePoints = 0;
    let totalCreditsSum = 0;

    validSubjects.forEach(subject => {
      const gradePoint = gradePoints[subject.grade] || 0;
      totalGradePoints += gradePoint * subject.credits;
      totalCreditsSum += parseFloat(subject.credits);
    });

    const calculatedGPA = totalGradePoints / totalCreditsSum;
    setGpa(calculatedGPA.toFixed(2));
    setTotalCredits(totalCreditsSum);
  };

  const getGPACategory = (gpa) => {
    if (gpa >= 3.7) return { text: 'Excellent', color: 'text-green-600', bg: 'bg-green-100' };
    if (gpa >= 3.3) return { text: 'Very Good', color: 'text-blue-600', bg: 'bg-blue-100' };
    if (gpa >= 3.0) return { text: 'Good', color: 'text-yellow-600', bg: 'bg-yellow-100' };
    if (gpa >= 2.0) return { text: 'Average', color: 'text-orange-600', bg: 'bg-orange-100' };
    return { text: 'Needs Improvement', color: 'text-red-600', bg: 'bg-red-100' };
  };

  return (
    <section id="gpa-calculator" className="section-light py-20 section-divider">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl">
              <Calculator className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            GPA <span className="text-gradient">Calculator</span>
          </h2>
          <p className="text-xl text-gray-600">
            Calculate your GPA quickly and accurately
          </p>
        </motion.div>

        {/* Calculator Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
        >
          {/* Subjects List */}
          <div className="space-y-4 mb-6">
            <AnimatePresence>
              {subjects.map((subject, index) => (
                <motion.div
                  key={subject.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 items-center p-4 bg-gray-50 rounded-xl"
                >
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Subject name"
                      value={subject.name}
                      onChange={(e) => updateSubject(subject.id, 'name', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div className="w-32">
                    <select
                      value={subject.grade}
                      onChange={(e) => updateSubject(subject.id, 'grade', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {Object.keys(gradePoints).map(grade => (
                        <option key={grade} value={grade}>{grade}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="w-24">
                    <input
                      type="number"
                      placeholder="Credits"
                      value={subject.credits}
                      onChange={(e) => updateSubject(subject.id, 'credits', e.target.value)}
                      min="1"
                      max="6"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  {subjects.length > 1 && (
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => removeSubject(subject.id)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </motion.button>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Add Subject Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={addSubject}
            className="w-full py-3 px-6 mb-6 border-2 border-dashed border-gray-300 rounded-xl text-gray-600 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Add Subject
          </motion.button>

          {/* Calculate Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={calculateGPA}
            className="w-full py-4 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Calculator className="w-5 h-5" />
            Calculate GPA
          </motion.button>

          {/* Result */}
          <AnimatePresence>
            {gpa && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200"
              >
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <Award className="w-12 h-12 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Your GPA</h3>
                  <div className="text-5xl font-bold text-gradient mb-4">{gpa}</div>
                  <div className={`inline-flex items-center px-4 py-2 rounded-full ${getGPACategory(gpa).bg}`}>
                    <TrendingUp className="w-4 h-4 mr-2" />
                    <span className={`font-semibold ${getGPACategory(gpa).color}`}>
                      {getGPACategory(gpa).text}
                    </span>
                  </div>
                  <p className="text-gray-600 mt-4">
                    Based on {totalCredits} total credits
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default GPACalculator;
