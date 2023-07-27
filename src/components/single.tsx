import React,{useState} from 'react'

export const SingleChoiceQuestion = ({ question, options, onAnswer }: { question: string; options?: string[]; onAnswer: (response: string[]) => void }) => {
    const [selectedOption, setSelectedOption] = useState<string[]>([]);

    const handleOptionChange = (option: string) => {
        const response = [option]
        setSelectedOption(response);
        onAnswer(response);
    };

    return (
        <div className="w-full">
            <h3 className="text-xl font-bold">{question}</h3>
            {options?.map((option) => (
                <label onClick={() => handleOptionChange(option)}  key={option} className="block my-2 cursor-pointer w-max">
                    <input
                        type="radio"
                        value={option}
                        checked={selectedOption[0] === option}
                        // onChange={() => handleOptionChange(option)}
                        className="mr-2"
                    />
                    {option}
                </label>
            ))}
        </div>
    );
};
