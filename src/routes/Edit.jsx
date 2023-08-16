import { Routes, Route, Link } from 'react-router-dom';

export const Edit = () => {

  return (
    <div class="flex flex-col min-h-[100vh]">
        <main class="grow grid place-items-center">
            <div class="w-full mx-auto px-4 sm:px-6">
                <div class="py-[100px]">
                    <form action="" method="post" class="mt-10">
                        {/* @csrf */}
                        {/* @method('PUT') */}

                        <div class="flex flex-col items-center">
                            <label class="w-full max-w-3xl mx-auto">
                                <input
                                    class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-4 pl-4 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                                    type="text" name="task_name" value="" />
                                {/* @error('task_name') */}
                                    <div class="mt-3">
                                        <p class="text-red-500">
                                            {/* {{ $message }} */}
                                        </p>
                                    </div>
                                {/* @enderror */}
                            </label>

                            <div class="mt-8 w-full flex items-center justify-center gap-10">
                                <Link to="/" class="block shrink-0 underline underline-offset-2">
                                    戻る
                                </Link>
                                <button type="submit"
                                    class="p-4 bg-sky-800 text-white w-full max-w-xs hover:bg-sky-900 transition-colors">
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