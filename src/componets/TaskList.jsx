import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'tailwindcss/tailwind.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // バックエンドからタスクデータを取得
    axios.get('http://localhost:8000/api/tasks')
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error('エラー:', error);
      });
  }, []);

  return (
    <div>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;