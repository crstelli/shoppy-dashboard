function Section({ children }) {
  return (
    <div className="mx-auto grid w-[90%] max-w-[1200px] grid-cols-2 gap-10 overflow-y-auto py-4">
      {children}
    </div>
  );
}

function Title({ children }) {
  return <h3 className="text-3xl font-bold">{children}</h3>;
}

Section.Title = Title;

export { Section };
