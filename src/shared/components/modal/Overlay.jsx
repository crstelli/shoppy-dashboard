function Overlay({ children }) {
  return (
    <div className="absolute top-0 left-0 flex h-screen w-screen items-center justify-center backdrop-blur-sm backdrop-brightness-50">
      {children}
    </div>
  );
}

export { Overlay };
