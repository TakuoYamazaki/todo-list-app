import CreateTask from '../componets/CreateTask';
import TaskRow from '../componets/TaskRow';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'tailwindcss/tailwind.css';

export const Top = () => {

    const [tasks, setTasks] = useState([]);
    const apiUrl = process.env.REACT_APP_API_URL;


    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
          const response = await axios.get(`${apiUrl}`);
          setTasks(response.data);
        } catch (error) {
          console.error('Tasksの取得エラー:', error);
        }
      };

    const deleteTask = async (taskId) => {
        try {
            await axios.delete(`${apiUrl}/${taskId}`);
        } catch (error) {
            console.error('Taskの削除エラー:', error);
        }
    };

    const completeTask = async (taskId) => {
        try{
            await axios.put(`${apiUrl}/${taskId}/complete`);
        } catch (error) {
            console.log('Taskの完了エラー');
        }
    };

    return (
        <div className="flex flex-col min-h-[100vh]">
            <main className="grow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="py-[100px]">
                        <p className="text-2xl font-bold text-center">今日は何する？</p>
                        <form action={`${apiUrl}`} method="post" className="mt-10">
                            <div className="flex flex-col items-center">
                                <label className="w-full max-w-3xl mx-auto">
                                    <CreateTask />
                                </label>
                            </div>
                        </form>
                        <div className="max-w-7xl mx-auto mt-20">
                            <div className="inline-block min-w-full py-2 align-middle">
                                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-300">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th scope="col"
                                                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                                                    タスク</th>
                                                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                                    <span className="sr-only">Actions</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 bg-white">
                                                {tasks.map((task) => (
                                                    <TaskRow key={task.id} task={task} onPut={() => completeTask(task.id)} onDelete={() => deleteTask(task.id)} />
                                                ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};