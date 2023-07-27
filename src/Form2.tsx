// GoogleForm.tsx
import React, { useEffect, useState } from 'react';
import { SingleChoiceQuestion } from './components/single';
import { MultipleChoiceQuestion } from './components/multiple';
import { ShortAnswerQuestion } from './components/short';

type Question = {
    type: 'single' | 'multiple' | 'short';
    question: string;
    options?: string[];
};

const questions = [
    {
        type: 'single',
        question: 'What is your favorite color?',
        options: ['Red', 'Blue', 'Green'],
    },
    {
        type: 'single',
        question: 'What is your name?',
        options: ['Rahul', 'Pratik', 'Bhadwa'],
    },
    {
        type: 'multiple',
        question: 'Select your hobbies:',
        options: ['Reading', 'Swimming', 'Gaming', 'Cooking'],
    },
    {
        type: 'multiple',
        question: 'Select your games:',
        options: ['Pubg', 'Valo', 'Pu', 'clashofclans'],
    },
    {
        type: 'short',
        question: 'Tell us about yourself:',
    },
];

// const SingleChoiceQuestion = ({ question, options, onAnswer }: { question: string; options?: string[]; onAnswer: (response: string[]) => void }) => {
//     const [selectedOption, setSelectedOption] = useState<string[]>([]);

//     const handleOptionChange = (option: string) => {
//         const response = [option]
//         setSelectedOption(response);
//         onAnswer(response);
//     };

//     return (
//         <div className="w-full">
//             <h3 className="text-xl font-bold">{question}</h3>
//             {options?.map((option) => (
//                 <label onClick={() => handleOptionChange(option)}  key={option} className="block my-2 cursor-pointer w-max">
//                     <input
//                         type="radio"
//                         value={option}
//                         checked={selectedOption[0] === option}
//                         // onChange={() => handleOptionChange(option)}
                        
//                         className="mr-2"
//                     />
//                     {option}
//                 </label>
//             ))}
//         </div>
//     );
// };

// const MultipleChoiceQuestion = ({ question, options, onAnswer }: { question: string; options?: string[]; onAnswer: (response: string[]) => void }) => {
//     const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

//     const handleOptionChange = (option: string) => {
//         if (selectedOptions.includes(option)) {
//             setSelectedOptions(prev => prev.filter((item) => item !== option));
//         } else {
//             setSelectedOptions(prev => [...prev, option]);
//         }
//         // onAnswer(selectedOptions);

//     };
//     useEffect(() => {
//         onAnswer(selectedOptions);
//         console.log(selectedOptions);
//     }, [selectedOptions])

//     return (
//         <div className="w-full">
//             <h3 className="text-xl font-bold">{question}</h3>
//             {options?.map((option) => (
//                 <label key={option} className="block my-2">
//                     <input
//                         type="checkbox"
//                         checked={selectedOptions.includes(option)}
//                         onChange={() => handleOptionChange(option)}
//                         className="mr-2"
//                     />
//                     {option}
//                 </label>
//             ))}
//         </div>
//     );
// };

// const ShortAnswerQuestion = ({ question, onAnswer }: { question: string; onAnswer: (response: string[]) => void }) => {
//     const [answer, setAnswer] = useState<string[]>([]);

//     const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//         const inputAnswer = [e.target.value];

//         setAnswer(inputAnswer);
//         onAnswer(inputAnswer);
//     };

//     return (
//         <div>
//             <h3 className="text-xl font-bold">{question}</h3>
//             <textarea
//                 value={answer}
//                 placeholder="Your Answer"
//                 onChange={handleTextChange}
//                 className="border rounded px-2 py-1 mt-2 w-full"
//             />
//         </div>
//     );
// };

const Form2 = () => {
    const [userResponses, setUserResponses] = useState<{ [key: number]: string[] }>({});

    const handleQuestionResponse = (questionIndex: number, response: string[]) => {
        setUserResponses((prevResponses) => ({
            ...prevResponses,
            [questionIndex]: response,
        }));
    };

    const handleSubmit = () => {
        console.log('User responses:', userResponses);
        // Perform any other actions with userResponses here (e.g., send to server).
    };

    return (
        <div className="w-full flex flex-col h-full bg-gray-200">
            <div className="text-center rounded  bg-white mx-auto mt-8  min-w-[20rem] w-2/3 ">
                <h1 className="text-4xl font-bold py-4 ">Feedback Form</h1>
            </div>
            <div className="flex flex-col items-center justify-start mx-auto mt-8 min-w-[20rem] w-2/3">
                {questions.map((question, index) => (
                    <div key={index} className="mb-4 rounded-lg bg-white p-4 w-full ">
                        {question.type === 'single' && (
                            <SingleChoiceQuestion
                                question={question.question}
                                options={question.options}
                                onAnswer={(response) => handleQuestionResponse(index, response)}
                            />
                        )}
                        {question.type === 'multiple' && (
                            <MultipleChoiceQuestion
                                question={question.question}
                                options={question.options}
                                onAnswer={(response) => handleQuestionResponse(index, response)}
                            />
                        )}
                        {question.type === 'short' && (
                            <ShortAnswerQuestion
                                question={question.question}
                                onAnswer={(response) => handleQuestionResponse(index, response)}
                            />
                        )}
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center mt-8">
                <button className="bg-blue-700 text-white px-6 py-3 rounded text-lg sm:px-10 sm:text-xl" onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </div>
    );
};

export default Form2;