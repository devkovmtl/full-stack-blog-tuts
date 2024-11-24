import { useState } from 'react';

const PostListPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h1 className="mb-8 text-2xl">Development Blog</h1>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="bg-blue-800 text-sm text-white px-4 py-2 rounded-2xl mb-4 md:hidden"
      >
        {open ? 'Close' : 'Filter or Search'}
      </button>
      <div className="flex flex-col-reverse gap-8 md:flex-row justify-between">
        <div></div>
        <div className={`${open ? 'block' : 'hidden'} md:block`}></div>
      </div>
    </div>
  );
};

export default PostListPage;
