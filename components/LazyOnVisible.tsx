// components/LazyOnVisible.tsx
"use client";
import { useEffect, useRef, useState, type PropsWithChildren } from "react";
export default function LazyOnVisible({ children, rootMargin = "200px" }: PropsWithChildren<{ rootMargin?: string }>) {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setShow(true); io.disconnect(); } }, { rootMargin });
    io.observe(el); return () => io.disconnect();
  }, [rootMargin]);
  return <div ref={ref}>{show ? children : null}</div>;
}