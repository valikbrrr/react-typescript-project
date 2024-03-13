import { useEffect, RefObject } from "react";

type Handler = (event: MouseEvent) => void;

export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: Handler,
  exceptedClassnames?: string[]
) {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }

      if (exceptedClassnames) {
        for (const className of exceptedClassnames) {
          const element = document.querySelector(className);
          if (element && element.contains(event.target as Node)) {
            return;
          }
        }
      }

      handler(event);
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler, exceptedClassnames]);
}
// generics<T>
