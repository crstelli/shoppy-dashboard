import { useEffect, useState } from "react";

function DesktopOnly({ children }) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsDesktop(window.innerWidth >= 1500);
    checkWidth();

    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return isDesktop ? (
    <>{children}</>
  ) : (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <h1 className="text-center text-2xl font-bold">
        Please, open the App on a Desktop or Zoom Out for a better experience!
      </h1>
    </div>
  );
}

export { DesktopOnly };
