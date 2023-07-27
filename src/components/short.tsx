import React,{useState} from 'react'

export const ShortAnswerQuestion = ({ question, onAnswer }: { question: string; onAnswer: (response: string[]) => void }) => {
    const [answer, setAnswer] = useState<string[]>([]);

    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const inputAnswer = [e.target.value];

        setAnswer(inputAnswer);
        onAnswer(inputAnswer);
    };

    return (
        <div>
            <h3 className="text-xl font-bold">{question}</h3>
            <textarea
                value={answer}
                placeholder="Your Answer"
                onChange={handleTextChange}
                className="border rounded px-2 py-1 mt-2 w-full"
            />
        </div>
    );
};
