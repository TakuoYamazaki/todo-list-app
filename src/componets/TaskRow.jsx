import React from 'react';
import { Link } from 'react-router-dom';

function TaskRow({ task, onDelete, onPut}) {

  const apiUrl = process.env.REACT_APP_API_URL;

  const handlePut = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${apiUrl}${task.id}/complete/`, {
        method: 'PUT',
      });

      // レスポンスの処理などを行う
      if (response.ok) {
        // 成功時の処理
        window.location.reload();
      } else {
        // エラー時の処理
      }
    } catch (error) {
      console.error('PUT リクエストエラー:', error);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${apiUrl}${task.id}/`, {
        method: 'DELETE',
      });

      // レスポンスの処理などを行う
      if (response.ok) {
        // 成功時の処理
        window.location.reload();
      } else {
        // エラー時の処理
      }
    } catch (error) {
      console.error('DELETE リクエストエラー:', error);
    }
  };

  return (
    <tr key={task.id}>
      <td className="px-3 py-4 text-sm text-gray-500">{task.name}</td>
      <td className="p-0 text-right text-sm font-medium">
        <div className="flex justify-end">
          <div>
            <form
              onSubmit={handlePut}
              method="put"
              className="inline-block text-gray-500 font-medium"
              role="menuitem"
              tabIndex="-1"
            >
              <button
                type="submit"
                className="bg-emerald-700 py-4 w-20 text-white md:hover:bg-emerald-800 transition-colors"
              >
                完了
              </button>
            </form>
          </div>
          <div>
            <Link
              to={`/tasks/${task.id}/edit/`}
              className="inline-block text-center py-4 w-20 underline underline-offset-2 text-sky-600 md:hover:bg-sky-100 transition-colors"
            >
              編集
            </Link>
          </div>
          <div>
            <form
              onSubmit={handleDelete}
              action={`${apiUrl}${task.id}/`}
              method="delete"
              className="inline-block text-gray-500 font-medium"
              role="menuitem"
              tabIndex="-1"
            >
              <button
                type="submit"
                className="py-4 w-20 md:hover:bg-slate-200 transition-colors"
              >
                削除
              </button>
            </form>
          </div>
        </div>
      </td>
    </tr>
  );
}

export default TaskRow;