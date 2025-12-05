import { useState } from 'react';
import { Fish, Trophy, RotateCcw, Star } from 'lucide-react';

type Question = {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
};

const quizQuestions: Question[] = [
  {
    id: 1,
    question: "What percentage of Earth's surface is covered by oceans?",
    options: ["50%", "61%", "71%", "81%"],
    correct: 2,
    explanation: "Oceans cover approximately 71% of Earth's surface, making them the planet's largest ecosystem."
  },
  {
    id: 2,
    question: "Which ocean is the largest and deepest?",
    options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
    correct: 2,
    explanation: "The Pacific Ocean is both the largest and deepest ocean, covering more than 63 million square miles."
  },
  {
    id: 3,
    question: "What is the deepest point in the ocean called?",
    options: ["Mariana Trench", "Java Trench", "Puerto Rico Trench", "Tonga Trench"],
    correct: 0,
    explanation: "The Mariana Trench reaches a maximum depth of about 36,070 feet (10,994 meters) below sea level."
  },
  {
    id: 4,
    question: "Which marine animal is known as the 'largest animal on Earth'?",
    options: ["Great White Shark", "Giant Squid", "Blue Whale", "Whale Shark"],
    correct: 2,
    explanation: "The Blue Whale can grow up to 100 feet long and weigh up to 200 tons, making it the largest animal ever known."
  },
  {
    id: 5,
    question: "What creates ocean tides?",
    options: ["Wind", "Earth's rotation", "Moon's gravitational pull", "Ocean currents"],
    correct: 2,
    explanation: "Tides are primarily caused by the gravitational pull of the Moon, with the Sun also playing a smaller role."
  },
  {
    id: 6,
    question: "Which sea creature is known for its ability to regenerate lost limbs?",
    options: ["Octopus", "Starfish", "Jellyfish", "Sea Cucumber"],
    correct: 1,
    explanation: "Starfish can regenerate lost arms and, in some cases, an entire new starfish can grow from a single arm."
  },
  {
    id: 7,
    question: "What is a group of fish called?",
    options: ["Flock", "School", "Pack", "Herd"],
    correct: 1,
    explanation: "A group of fish swimming together is called a 'school' or 'shoal' of fish."
  },
  {
    id: 8,
    question: "Which ocean borders Vietnam?",
    options: ["Pacific Ocean", "Indian Ocean", "South China Sea", "Bay of Bengal"],
    correct: 2,
    explanation: "Vietnam's eastern coastline borders the South China Sea, part of the Pacific Ocean."
  }
];

export default function Game() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    if (showExplanation) return;

    setSelectedAnswer(answerIndex);
    setShowExplanation(true);

    if (answerIndex === quizQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setGameComplete(true);
    }
  };

  const restartGame = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setGameComplete(false);
  };

  const getScoreMessage = () => {
    const percentage = (score / quizQuestions.length) * 100;
    if (percentage === 100) return "Perfect! You're an ocean expert! 🏆";
    if (percentage >= 80) return "Excellent! You know your oceans well! 🌟";
    if (percentage >= 60) return "Good job! Keep learning about our oceans! 🐠";
    return "Nice try! Explore more to learn about ocean wonders! 🌊";
  };

  if (gameComplete) {
    return (
      <section id="game" className="py-20 bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
            <Trophy className="h-20 w-20 text-yellow-500 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Quiz Complete!</h2>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 mb-6">
              <p className="text-6xl font-bold text-blue-600 mb-2">{score}/{quizQuestions.length}</p>
              <p className="text-xl text-gray-700">{getScoreMessage()}</p>
            </div>
            <p className="text-gray-600 mb-8 text-lg">
              Thank you for testing your ocean knowledge! Every question answered helps spread awareness about marine conservation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={restartGame}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <RotateCcw className="h-5 w-5" />
                Play Again
              </button>
              <button
                onClick={() => document.querySelector('#tours')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all"
              >
                Explore Tours
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const question = quizQuestions[currentQuestion];

  return (
    <section id="game" className="py-20 bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white bg-opacity-20 text-white rounded-full px-6 py-3 mb-6">
            <Fish className="h-6 w-6" />
            <span className="font-semibold">Ocean Knowledge Quiz</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Test Your Ocean IQ</h2>
          <p className="text-xl text-blue-50">
            Challenge yourself with ocean trivia and learn fascinating facts about marine life
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6">
            <div className="flex justify-between items-center text-white">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                <span className="font-semibold">Score: {score}/{quizQuestions.length}</span>
              </div>
              <span className="font-semibold">Question {currentQuestion + 1} of {quizQuestions.length}</span>
            </div>
            <div className="mt-4 bg-white bg-opacity-30 rounded-full h-2">
              <div
                className="bg-white h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              {question.question}
            </h3>

            <div className="space-y-4 mb-8">
              {question.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = index === question.correct;
                const showResult = showExplanation;

                let buttonClass = "w-full text-left p-4 rounded-xl border-2 transition-all font-semibold text-lg ";

                if (!showResult) {
                  buttonClass += isSelected
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-blue-300 hover:bg-blue-50";
                } else {
                  if (isCorrect) {
                    buttonClass += "border-green-500 bg-green-50 text-green-900";
                  } else if (isSelected && !isCorrect) {
                    buttonClass += "border-red-500 bg-red-50 text-red-900";
                  } else {
                    buttonClass += "border-gray-200 opacity-50";
                  }
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={showExplanation}
                    className={buttonClass}
                  >
                    <span className="flex items-center justify-between">
                      <span>{option}</span>
                      {showResult && isCorrect && (
                        <span className="text-green-600">✓</span>
                      )}
                      {showResult && isSelected && !isCorrect && (
                        <span className="text-red-600">✗</span>
                      )}
                    </span>
                  </button>
                );
              })}
            </div>

            {showExplanation && (
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                <p className="font-semibold text-blue-900 mb-2">Did you know?</p>
                <p className="text-blue-800">{question.explanation}</p>
              </div>
            )}

            {showExplanation && (
              <button
                onClick={nextQuestion}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                {currentQuestion < quizQuestions.length - 1 ? "Next Question" : "See Results"}
              </button>
            )}
          </div>
        </div>

        <div className="text-center mt-8 text-white">
          <p className="text-sm opacity-90">
            Learn more about ocean conservation and book your next adventure with Marina Travel
          </p>
        </div>
      </div>
    </section>
  );
}