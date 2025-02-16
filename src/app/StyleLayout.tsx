"use client";
import { useEffect } from "react"; // Client-side hook
import { getCookie, setCookie } from "typescript-cookie";

export default function StyleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const selectedCursor = getCookie("selectedCursor");
    if (selectedCursor) {
      document.documentElement.style.cursor = `url('${selectedCursor}'), auto`;
    }
  }, []);

  return <>{children}</>;
}
