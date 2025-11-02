function Button({ children, classes, ...props }) {
  return (
    <button
      {...props}
      className={`cursor-pointer rounded-md border border-emerald-500 bg-emerald-500 px-3 py-1 text-lg text-gray-100 hover:bg-gray-100 hover:text-emerald-500 dark:text-gray-900 dark:hover:bg-gray-800 ${classes}`}
    >
      {children}
    </button>
  );
}

export { Button };
