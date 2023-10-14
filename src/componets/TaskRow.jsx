import React from 'react';
import { Link } from 'react-router-dom';

function TaskRow({ task, onDelete, onPut}) {

  return (
    <tr key={task.id}>
      <td className="px-3 py-4 text-sm text-gray-500">{task.name}</td>
      <td className="p-0 text-right text-sm font-medium">
        <div className="flex justify-end">
          <div>
            <form
              onSubmit={onPut}
              method="put"
              className="inline-block text-gray-500 font-medium"
              role="menuitem"
              tabIndex="-1"
            >
              <input type="hidden" name="status" value={task.status} />
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
              to={`/tasks/${task.id}/edit`}
              className="inline-block text-center py-4 w-20 underline underline-offset-2 text-sky-600 md:hover:bg-sky-100 transition-colors"
            >
              編集
            </Link>
          </div>
          <div>
            <form
              onSubmit={onDelete}
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