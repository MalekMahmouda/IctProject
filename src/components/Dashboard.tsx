import React, { useState } from 'react';
import { LogOut, Book, Calendar, Users, Bell, ArrowLeft } from 'lucide-react';
import { users } from '../data/users';
import { LeaderBoard } from './LeaderBoard';
import { JoinClass } from './JoinClass';

interface DashboardProps {
  username: string;
  onLogout: () => void;
}

export function Dashboard({ username, onLogout }: DashboardProps) {
  const [showJoinClass, setShowJoinClass] = useState(false);
  const [showMainDashboard, setShowMainDashboard] = useState(true);
  const user = users.find((u) => u.username === username);

  const toggleView = () => {
    setShowMainDashboard(!showMainDashboard);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-4">
              {!showMainDashboard && (
                <button
                  onClick={toggleView}
                  className="flex items-center space-x-2 hover:bg-white/10 px-3 py-2 rounded-md transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>Back</span>
                </button>
              )}
              <div className="flex items-center">
                <Book className="w-8 h-8 mr-2" />
                <span className="text-xl font-bold">School Portal</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <img 
                  src={user?.avatar} 
                  alt={user?.name}
                  className="w-8 h-8 rounded-full object-cover border-2 border-white"
                />
                <span>Welcome, {user?.name}</span>
              </div>
              <button
                onClick={onLogout}
                className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-white/10 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {showMainDashboard ? (
          <div className="px-4 py-6 sm:px-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white overflow-hidden shadow-lg rounded-xl border border-indigo-100">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Calendar className="h-6 w-6 text-indigo-500" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Schedule
                        </dt>
                        <dd className="text-lg font-medium text-gray-900">
                          {user?.role === 'student' ? '6 Classes Today' : '4 Classes to Teach'}
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>

              <div 
                className="bg-white overflow-hidden shadow-lg rounded-xl border border-indigo-100 cursor-pointer hover:shadow-xl transition-all transform hover:-translate-y-1"
                onClick={toggleView}
              >
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Users className="h-6 w-6 text-purple-500" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          View Leaderboard
                        </dt>
                        <dd className="text-lg font-medium text-gray-900">
                          See Class Rankings
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow-lg rounded-xl border border-indigo-100">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Bell className="h-6 w-6 text-indigo-500" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Notifications
                        </dt>
                        <dd className="text-lg font-medium text-gray-900">
                          3 New Messages
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white shadow-lg rounded-xl border border-indigo-100">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {user?.role === 'student' ? 'Recent Assignments' : 'Class Schedule'}
                  </h3>
                  {user?.role === 'student' && (
                    <button
                      onClick={() => setShowJoinClass(true)}
                      className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-colors shadow-md"
                    >
                      Join Class
                    </button>
                  )}
                </div>
                <div className="mt-4">
                  <div className="border-t border-gray-200">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="py-4 flex items-center justify-between">
                        <div className="flex items-center">
                          <Book className="h-5 w-5 text-indigo-500 mr-3" />
                          <span className="text-gray-600">
                            {user?.role === 'student'
                              ? `Assignment ${item} - Due in ${item} days`
                              : `Class ${item} - Room ${100 + item}`}
                          </span>
                        </div>
                        <span className="text-indigo-600 hover:text-indigo-800 cursor-pointer">
                          View Details
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="px-4 py-6 sm:px-0">
            <LeaderBoard />
          </div>
        )}
      </main>

      {showJoinClass && <JoinClass onClose={() => setShowJoinClass(false)} />}
    </div>
  );
}