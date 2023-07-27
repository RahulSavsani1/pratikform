import React,{useEffect, useState} from 'react'

export const MultipleChoiceQuestion = ({ question, options, onAnswer }: { question: string; options?: string[]; onAnswer: (response: string[]) => void }) => {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    const handleOptionChange = (option: string) => {
        if (selectedOptions.includes(option)) {
            setSelectedOptions(prev => prev.filter((item) => item !== option));
        } else {
            setSelectedOptions(prev => [...prev, option]);
        }
        // onAnswer(selectedOptions);

    };
    useEffect(() => {
        onAnswer(selectedOptions);
        console.log(selectedOptions);
    }, [selectedOptions])

    return (
        <div className="w-full">
            <h3 className="text-xl font-bold">{question}</h3>
            {options?.map((option) => (
                <label key={option} onClick={() => handleOptionChange(option)} className="block my-2 cursor-pointer w-max">
                    <input
                        type="checkbox"
                        checked={selectedOptions.includes(option)}
                        // onChange={() => handleOptionChange(option)}
                        className="mr-2"
                    />
                    {option}
                </label>
            ))}
        </div>
    );
};

