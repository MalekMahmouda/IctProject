export interface User {
  id: string;
  username: string;
  password: string;
  name: string;
  role: 'student' | 'teacher';
  avatar: string;
}

export const users: User[] = [
  { 
    id: '1', 
    username: 'malek', 
    password: '7G', 
    name: 'Malek', 
    role: 'teacher',
    avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150&h=150&fit=crop'
  },
  { 
    id: '2', 
    username: 'khaled', 
    password: '7G', 
    name: 'Khaled', 
    role: 'student',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop'
  },
  { 
    id: '3', 
    username: 'anas', 
    password: '7G', 
    name: 'Anas', 
    role: 'student',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
  },
  { 
    id: '4', 
    username: 'yassin', 
    password: '7G', 
    name: 'Yassin Mahmoud Mohammed', 
    role: 'student',
    avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150&h=150&fit=crop'
  },
  { 
    id: '5', 
    username: 'mazen', 
    password: '7G', 
    name: 'Mazen', 
    role: 'student',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop'
  }
];