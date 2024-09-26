import React from "react";
import "./SpeechBubble.css";

interface SpeechBubbleProps {
  children: React.ReactElement;
}

export default function SpeechBubble({ children }: SpeechBubbleProps) {
  return (
    <div className="l-quote quote">
      <blockquote>
        <p>{children}</p>
      </blockquote>
    </div>
  );
}
