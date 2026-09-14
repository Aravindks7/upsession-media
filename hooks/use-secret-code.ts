"use client";

import { useEffect, useState } from "react";

export function useSecretCode(secretCode: string) {
  const [isTriggered, setIsTriggered] = useState(false);

  useEffect(() => {
    let inputSequence = "";

    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore key presses if user is typing in an input or textarea
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        e.target instanceof HTMLSelectElement ||
        (e.target as HTMLElement).isContentEditable
      ) {
        return;
      }

      const key = e.key.toLowerCase();
      inputSequence += key;

      if (inputSequence.includes(secretCode.toLowerCase())) {
        setIsTriggered(true);
        inputSequence = ""; // Reset after triggering
      }

      // Optional: keep the sequence reasonably small to prevent memory bloat
      if (inputSequence.length > secretCode.length * 2) {
        inputSequence = inputSequence.slice(-secretCode.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [secretCode]);

  return { isTriggered, setIsTriggered };
}
