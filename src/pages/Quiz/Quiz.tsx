import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Button } from '@/components/atoms/Button';
import { useLearningStore, useUserStore, useUIStore } from '@/store';
import { quizzes } from '@/data/quizData';
import confetti from 'canvas-confetti';

const QUIZ_TIMER_SECONDS = 120; // 2 minutes per quiz

const Quiz: React.FC = () => {
  const { moduleId } = useParams<{ moduleId: string }>();
  const navigate = useNavigate();
  const { activeQuiz, startQuiz, setQuizAnswer, nextQuestion, finishQuiz, resetQuiz } = useLearningStore();
  const { addPoints } = useUserStore();
  const { addToast } = useUIStore();

  const [timeLeft, setTimeLeft] = useState(QUIZ_TIMER_SECONDS);
  const quizData = moduleId ? quizzes[moduleId] : null;

  const handleFinish = useCallback(() => {
    if (!activeQuiz || !quizData) return;

    let correctCount = 0;
    quizData.questions.forEach((q, index) => {
      if (activeQuiz.answers[index] === q.correctAnswer) {
        correctCount++;
      }
    });

    const score = Math.round((correctCount / quizData.questions.length) * 100);
    const pointsEarned = correctCount * 10; // 10 points per correct answer

    finishQuiz(score);

    if (score >= 70) {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#10b981', '#3b82f6', '#f59e0b']
      });
    }

    if (pointsEarned > 0) {
      addPoints(pointsEarned);
      addToast(`Quiz completed! You earned ${pointsEarned} eco-points!`, 'success');
    } else {
      addToast(`Quiz completed! Your score: ${score}%`, 'info');
    }
  }, [activeQuiz, quizData, finishQuiz, addPoints, addToast]);

  // Initialize quiz
  useEffect(() => {
    if (moduleId && (!activeQuiz || activeQuiz.currentModuleId !== moduleId)) {
      startQuiz(moduleId);
      setTimeLeft(QUIZ_TIMER_SECONDS);
    }
  }, [moduleId, startQuiz, activeQuiz]);

  // Timer logic
  useEffect(() => {
    if (!activeQuiz || activeQuiz.isFinished) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleFinish();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [activeQuiz, handleFinish]);

  if (!quizData || !activeQuiz) {
    return (
      <div className="flex justify-center p-12">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  const currentQuestion = quizData.questions[activeQuiz.currentQuestionIndex];
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (activeQuiz.isFinished) {
    return (
      <div className="card bg-base-100 shadow-xl border border-base-300 max-w-2xl mx-auto">
        <div className="card-body text-center">
          <h2 className="card-title text-3xl font-heading justify-center mb-4 text-primary">Quiz Completed!</h2>
          <div className="py-8">
            <div className="text-6xl font-black mb-2">{activeQuiz.score}%</div>
            <p className="text-base-content/60">Final Score</p>
          </div>
          <div className="flex flex-col gap-3 mt-4">
            <Button variant="primary" onClick={() => navigate('/dashboard')}>Go to Dashboard</Button>
            <Button variant="ghost" onClick={() => {
              resetQuiz();
              navigate('/modules');
            }}>Back to Modules</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card bg-base-100 shadow-xl border border-base-300 max-w-2xl mx-auto">
      <div className="card-body">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-sans font-bold uppercase tracking-widest text-primary">
            Question {activeQuiz.currentQuestionIndex + 1} of {quizData.questions.length}
          </span>
          <span className={`badge ${timeLeft < 30 ? 'badge-error' : 'badge-secondary'} font-mono`}>
            Timer: {formatTime(timeLeft)}
          </span>
        </div>
        
        <div className="w-full bg-base-200 h-2 rounded-full mb-8">
          <div 
            className="bg-primary h-2 rounded-full transition-all duration-300" 
            style={{ width: `${((activeQuiz.currentQuestionIndex + 1) / quizData.questions.length) * 100}%` }}
          />
        </div>

        <h2 className="card-title text-2xl font-heading mb-6">
          {currentQuestion.question}
        </h2>
        
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => {
            const isSelected = activeQuiz.answers[activeQuiz.currentQuestionIndex] === index;
            return (
              <Button 
                key={index}
                variant="ghost" 
                className={`w-full justify-start border-base-300 ${isSelected ? 'border-primary ring-1 ring-primary bg-primary/5' : ''}`}
                onClick={() => setQuizAnswer(activeQuiz.currentQuestionIndex, index)}
              >
                <span className="w-8 h-8 rounded-full border border-current flex items-center justify-center mr-3 text-sm">
                  {String.fromCharCode(65 + index)}
                </span>
                {option}
              </Button>
            );
          })}
        </div>
        
        <div className="card-actions justify-end mt-8">
          {activeQuiz.currentQuestionIndex < quizData.questions.length - 1 ? (
            <Button 
              variant="primary" 
              onClick={nextQuestion}
              disabled={activeQuiz.answers[activeQuiz.currentQuestionIndex] === undefined}
            >
              Next Question
            </Button>
          ) : (
            <Button 
              variant="success" 
              onClick={handleFinish}
              disabled={activeQuiz.answers[activeQuiz.currentQuestionIndex] === undefined}
            >
              Finish Quiz
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;