function Input(props) {
  return (
    <input
      {...props}
      className="rounded-md border border-gray-800/40 px-4 py-1 focus:border-gray-800 focus:outline-none dark:border-gray-700 dark:focus:border-gray-500"
    />
  );
}

export { Input };
