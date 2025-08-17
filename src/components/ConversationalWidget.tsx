import React, { useState } from 'react';
import { ChevronRight, MapPin, Book, Heart, Users, Calendar, Mail, CheckCircle } from 'lucide-react';

interface Step {
  id: number;
  question: string;
  type: 'text' | 'options' | 'email' | 'summary';
  options?: Array<{ label: string; icon?: React.ReactNode; value: string }>;
}

const steps: Step[] = [
  {
    id: 1,
    question: 'Which destination would you like to travel to?',
    type: 'options',
    options: [
      { label: 'Paris', icon: <MapPin className="w-5 h-5" />, value: 'paris' },
      { label: 'London', icon: <MapPin className="w-5 h-5" />, value: 'london' },
      { label: 'New York', icon: <MapPin className="w-5 h-5" />, value: 'newyork' },
      { label: 'Spain', icon: <MapPin className="w-5 h-5" />, value: 'spain' },
      { label: 'New Zealand', icon: <MapPin className="w-5 h-5" />, value: 'newzealand' },
      { label: 'Scotland', icon: <MapPin className="w-5 h-5" />, value: 'scotland' }
    ]
  },
  {
    id: 2,
    question: 'Which story would you like to live on this trip?',
    type: 'options',
    options: [
      { label: 'Harry Potter', icon: <Book className="w-5 h-5" />, value: 'harrypotter' },
      { label: 'Don Quixote', icon: <Book className="w-5 h-5" />, value: 'donquijote' },
      { label: 'Emily in Paris', icon: <Book className="w-5 h-5" />, value: 'emilyinparis' },
      { label: 'The Lord of the Rings', icon: <Book className="w-5 h-5" />, value: 'lotr' },
      { label: 'Gossip Girl', icon: <Book className="w-5 h-5" />, value: 'gossipgirl' },
      { label: 'Outlander', icon: <Book className="w-5 h-5" />, value: 'outlander' }
    ]
  },
  {
    id: 3,
    question: 'What type of activities interest you?',
    type: 'options',
    options: [
      { label: 'Gastronomy', icon: <Heart className="w-5 h-5" />, value: 'food' },
      { label: 'Art', icon: <Heart className="w-5 h-5" />, value: 'art' },
      { label: 'Culture', icon: <Heart className="w-5 h-5" />, value: 'culture' },
      { label: 'Shopping', icon: <Heart className="w-5 h-5" />, value: 'shopping' },
      { label: 'Adventure', icon: <Heart className="w-5 h-5" />, value: 'adventure' },
      { label: 'Relax', icon: <Heart className="w-5 h-5" />, value: 'relax' }
    ]
  },
  {
    id: 4,
    question: 'Who are you traveling with?',
    type: 'options',
    options: [
      { label: 'Solo', icon: <Users className="w-5 h-5" />, value: 'solo' },
      { label: 'Couple', icon: <Users className="w-5 h-5" />, value: 'couple' },
      { label: 'Family', icon: <Users className="w-5 h-5" />, value: 'family' },
      { label: 'Friends', icon: <Users className="w-5 h-5" />, value: 'friends' }
    ]
  },
  {
    id: 5,
    question: 'How many days does your trip last?',
    type: 'options',
    options: [
      { label: '1-3 days', icon: <Calendar className="w-5 h-5" />, value: '1-3' },
      { label: '4-7 days', icon: <Calendar className="w-5 h-5" />, value: '4-7' },
      { label: '1-2 weeks', icon: <Calendar className="w-5 h-5" />, value: '1-2weeks' },
      { label: 'More than 2 weeks', icon: <Calendar className="w-5 h-5" />, value: '2weeks+' }
    ]
  },
  {
    id: 6,
    question: 'Enter your email to receive your personalized guide',
    type: 'email'
  },
  {
    id: 7,
    question: 'Your personalized itinerary',
    type: 'summary'
  }
];

const recommendedPlaces = [
  'Eiffel Tower - Romantic scenes',
  'Louvre - Art and culture',
  'Montmartre - Parisian cafés',
  'Champs-Élysées - Luxury shopping',
  'Seine - Boat ride',
  'Versailles - History and gardens'
];

export const ConversationalWidget: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [email, setEmail] = useState('');
  const [isStarted, setIsStarted] = useState(false);

  const handleStart = () => {
    setIsStarted(true);
  };

  const handleAnswer = (value: string) => {
    setAnswers(prev => ({ ...prev, [steps[currentStep].id]: value }));
    
    if (currentStep < steps.length - 1) {
      setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 300);
    }
  };

  const handleEmailSubmit = () => {
    if (email) {
      setAnswers(prev => ({ ...prev, [steps[currentStep].id]: email }));
      setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 300);
    }
  };

  if (!isStarted) {
    return (
      <div className="bg-white rounded-3xl shadow-2xl p-8 h-full flex flex-col justify-center items-center text-center">
        <button
          onClick={handleStart}
          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mt-8"
        >
          Start your journey
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    );
  }

  const currentStepData = steps[currentStep];

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 h-full flex flex-col">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-500">Step {currentStep + 1} of {steps.length}</span>
          <span className="text-sm text-gray-500">{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          {currentStepData.question}
        </h3>

        {currentStepData.type === 'options' && (
          <div className="grid grid-cols-2 gap-4">
            {currentStepData.options?.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.value)}
                className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-xl hover:border-purple-400 hover:bg-purple-50 transition-all duration-300 text-left group"
              >
                <div className="text-purple-600 group-hover:text-purple-700">
                  {option.icon}
                </div>
                <span className="font-medium text-gray-700 group-hover:text-gray-800">
                  {option.label}
                </span>
              </button>
            ))}
          </div>
        )}

        {currentStepData.type === 'email' && (
          <div className="max-w-md mx-auto w-full">
            <div className="flex items-center gap-2 mb-4">
              <Mail className="w-5 h-5 text-purple-600" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className="flex-1 p-4 border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:outline-none transition-colors"
              />
            </div>
            <button
              onClick={handleEmailSubmit}
              disabled={!email}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Get my personalized guide
            </button>
          </div>
        )}

        {currentStepData.type === 'summary' && (
          <div className="text-center">
            <div className="mb-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-gray-800 mb-4">
                Your guide is ready!
              </h4>
              <p className="text-gray-600 mb-6">
                We'll send your personalized guide to your email and to our team to help you live this experience.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h5 className="font-bold text-gray-800 mb-4">Recommended places in your guide:</h5>
              <div className="space-y-2">
                {recommendedPlaces.map((place, index) => (
                  <div key={index} className="flex items-center gap-2 text-left">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{place}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};