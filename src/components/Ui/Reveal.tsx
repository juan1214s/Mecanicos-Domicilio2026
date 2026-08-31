import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

type RevealProps = {
  children: ReactNode;
  /** Retardo de la entrada, en ms */
  delay?: number;
  /** Si true, vuelve a animar cada vez que entra en el viewport */
  repeat?: boolean;
  className?: string;
  style?: CSSProperties;
};

/**
 * Reemplazo ligero de framer-motion para las animaciones de "aparecer al hacer scroll".
 * A prueba de fallos: si el IntersectionObserver no dispara, un temporizador
 * muestra el contenido igualmente (nunca queda invisible).
 */
export default function Reveal({
  children,
  delay = 0,
  repeat = false,
  className = "",
  style,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(() => {
    if (typeof window === "undefined") return true;
    const reduced =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    return reduced || typeof IntersectionObserver === "undefined";
  });

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    // Failsafe: pase lo que pase, el contenido se ve.
    const failsafe = window.setTimeout(() => setShown(true), 800);

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            if (!repeat) io.unobserve(el);
          } else if (repeat) {
            setShown(false);
          }
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);

    return () => {
      window.clearTimeout(failsafe);
      io.disconnect();
    };
  }, [repeat]);

  return (
    <div
      ref={ref}
      className={`reveal ${shown ? "reveal--in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  );
}
