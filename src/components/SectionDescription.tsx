import React from "react";
import classNames from "classnames";

export interface SectionDescriptionProps {
  /** This is section description */
  description: string;
  /** extra classNames */
  className?: string;
}

/** Primary UI component for user interaction */
export const SectionDescription = ({
  description,
  className,
}: SectionDescriptionProps) => {
  return (
    <div className={classNames("text-gray-400 text-lg", className)}>
      {description}
    </div>
  );
};
