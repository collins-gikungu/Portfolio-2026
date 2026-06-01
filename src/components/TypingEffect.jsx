import { useState, useEffect } from 'react';

const TypingEffect = () => {
  const text = "Collins Gikungu";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100; // Faster delete, slightly slower type
    const pauseDuration = !isDeleting && index === text.length ? 1500 : 0; // Pause at end

    const timeout = setTimeout(() => {
      if (!isDeleting && index < text.length) {
        setDisplayText(text.substring(0, index + 1));
        setIndex(index + 1);
      } else if (isDeleting && index > 0) {
        setDisplayText(text.substring(0, index - 1));
        setIndex(index - 1);
      } else if (!isDeleting && index === text.length) {
        // Finished typing → start deleting after pause
        setIsDeleting(true);
      } else if (isDeleting && index === 0) {
        // Finished deleting → reset and restart
        setIsDeleting(false);
        setIndex(0);
      }
    }, pauseDuration || typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index, text]);

  return (
    <span className="inline-block">
      {displayText}
      <span className="ml-1 animate-pulse text-emerald-400 dark:text-purple-400">|</span>
    </span>
  );
};

export default TypingEffect;