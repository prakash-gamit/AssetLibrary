interface BusinessQuestionsProps {
  questions: string[];
}

export default function BusinessQuestions({
  questions,
}: BusinessQuestionsProps) {
  return (
    <div className="mt-16">
      <div className="text-3xl font-semibold mb-4">Business Questions</div>
      <div className="grid grid-cols-2 gap-4">
        {questions.map((q, i) => {
          return <BusinessQuestion q={q} i={i + 1} key={q} />;
        })}
      </div>
    </div>
  );
}

const BusinessQuestion = ({ q, i }: { q: string; i: number }) => {
  return (
    <div key={q}>
      <div className="font-semibold text-lg">Question {i}</div>
      <div className="text-gray-400">{q}</div>
    </div>
  );
};
