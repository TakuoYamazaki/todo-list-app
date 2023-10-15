import React, {useState} from 'react';
import axios from 'axios';
import 'tailwindcss/tailwind.css';

function CreateTask() {
  const [task_name, setTaskName] = useState('');
  const [response, setResponse] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;

  const addTodo = async () => {
    try {
      const response = await axios.post(`${apiUrl}`, { task_name });
      setTaskName(''); // フォームをクリア
      setResponse(response.data); // レスポンスを受け取る
      window.location.reload();
    } catch (error) {
      console.error('Todoの追加エラー:', error);
    }
  };

  return (
    
    <div>
      <input
        className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-4 pl-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        placeholder="洗濯物をする..." 
        name="task_name"
        type="text"
        value={task_name}
        onChange={(e) => setTaskName(e.target.value)}
        />
      <button onClick={addTodo} type="button" className="mt-8 p-4 bg-slate-800 text-white w-full max-w-xs hover:bg-slate-900 transition-colors">
                        追加する
      </button>
    </div>
  );
}

export default CreateTask;