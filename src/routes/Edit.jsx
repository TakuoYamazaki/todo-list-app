import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import 'tailwindcss/tailwind.css';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const Edit = () => {

    const [taskName, setTaskName] = useState('');
    const [response, setResponse] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();
    const apiUrl = process.env.REACT_APP_API_URL;

    const updateTask = async () => {

        try{
            //axiosを使用してPUTリクエストを送信
            const response = await axios.put(`${apiUrl}/${id}`, { task_name: taskName, });
            // レスポンスを受け取る
            setResponse(response.data); 
            navigate('/');
        } catch (error) {
            console.error('データ更新エラー', error);
        }
    };

  return (
    <div className="flex flex-col min-h-[100vh]">
        <main className="grow grid place-items-center">
            <div className="w-full mx-auto px-4 sm:px-6">
                <div className="py-[100px]">
                    <form action="" method="post" className="mt-10">

                        <div className="flex flex-col items-center">
                            <label className="w-full max-w-3xl mx-auto">
                                <input
                                    className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-4 pl-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                                    type="text"
                                    name="task_name"
                                    value={taskName}
                                    onChange={(e) => setTaskName(e.target.value)}
                                    />
                                    <div className="mt-3">
                                        <p className="text-red-500">
                                        </p>
                                    </div>
                            </label>

                            <div className="mt-8 w-full flex items-center justify-center gap-10">
                                <Link to="/" className="block shrink-0 underline underline-offset-2">
                                    戻る
                                </Link>
                                <button onClick={updateTask} type="button"
                                    className="p-4 bg-sky-800 text-white w-full max-w-xs hover:bg-sky-900 transition-colors">
                                    編集する
                                </button>
                            </div>
                        </div>

                    </form>

                </div>
            </div>
        </main>
    </div>
  );
};