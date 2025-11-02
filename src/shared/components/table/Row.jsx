function Row({ children, gridCols }) {
  return (
    <>
      <div
        className="mx-auto grid w-full bg-gray-50 px-10 py-4 dark:bg-gray-800"
        style={{
          gridTemplateColumns: gridCols,
        }}
      >
        {children}
      </div>
    </>
  );
}

export { Row };
