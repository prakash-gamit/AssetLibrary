import classNames from "classnames";

export interface SectionTitleProps {
  /** This is section title */
  title: string;
  /** extra classNames */
  className?: string;
}

/** Primary UI component for user interaction */
export const SectionTitle = ({ title, className }: SectionTitleProps) => {
  return (
    <div
      className={classNames("text-4xl font-bold leading-relaxed", className)}
    >
      {title}
    </div>
  );
};
