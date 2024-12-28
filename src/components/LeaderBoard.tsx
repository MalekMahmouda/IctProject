import React from 'react';
import { Trophy } from 'lucide-react';
import { users } from '../data/users';

const studentScores = [
  { username: 'khaled', score: 95 },
  { username: 'anas', score: 95 },
  { username: 'yassin', score: 95 },
  { username: 'mazen', score: 95 }
];

export function LeaderBoard() {
  const sortedStudents = studentScores
    .map(score => ({
      ...score,
      user: users.find(u => u.username === score.username)
    }))
    .sort((a, b) => b.score - a.score);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-indigo-100">
      <div className="flex items-center mb-6">
        <Trophy className="w-8 h-8 text-yellow-500 mr-3" />
        <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Class Leaderboard
        </h2>
      </div>
      <div className="space-y-4">
        {sortedStudents.map((student, index) => (
          <div
            key={student.username}
            className="flex items-center justify-between p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl hover:from-indigo-100 hover:to-purple-100 transition-colors"
          >
            <div className="flex items-center space-x-4">
              <span className={`
                w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg
                ${index === 0 ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-white' : 
                  index === 1 ? 'bg-gradient-to-r from-gray-300 to-gray-400 text-white' :
                  index === 2 ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white' :
                  'bg-gradient-to-r from-indigo-200 to-purple-200 text-gray-700'}
                shadow-md
              `}>
                {index + 1}
              </span>
              <img 
                src={student.user?.avatar}
                alt={student.user?.name}
                className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-md"
              />
              <span className="font-medium text-gray-800">{student.user?.name}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-lg bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {student.score}
              </span>
              <span className="text-sm text-gray-500">points</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}