/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import {useParams} from "next/navigation";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {capitalize, getQuestionsByTopic} from "@/app/lib/utils";
import {Topic} from "@/app/lib/question";
// import { capitalize } from "@/app/lib/util";

export default function Test() {
	//👇🏻 array of questions
	const [questions, setQuestions] = useState<Question[]>([]);
	//👇🏻 loading state
	const [loading, setLoading] = useState<boolean>(true);
	//👇🏻 total user's score
	const [userScore, setUserScore] = useState<number>(0);
	//👇🏻 tracks each question in the array
	const [count, setCount] = useState<number>(0);
	//👇🏻 holds the quiz topic
	const {id} = useParams<{id: string}>();
	const router = useRouter();
	//👇🏻 holds the user's answers
	const [userAnswers, setUserAnswers] = useState<string[]>([]);

	const handleSelectAnswer = (selectedAnswer: string) => {
		//👇🏻 Update the score
		setUserScore(prev =>
			selectedAnswer === questions[count].answer ? prev + 1 : prev
		);

		//👇🏻 Update the user's answers
		setUserAnswers(prev => [...prev, selectedAnswer]);

		//👇🏻 Check if it's the last question
		if (count < questions.length - 1) {
			//👇🏻 Move to the next question
			setCount(prev => prev + 1);
		} else {
			//👇🏻  If it's the last question, navigate to the score page after the score has updated
			setTimeout(() => {
				router.push(
					`/score?score=${
						selectedAnswer === questions[count].answer
							? userScore + 1
							: userScore
					}&total=${questions.length}&answers=${encodeURIComponent(
						JSON.stringify([...userAnswers, selectedAnswer])
					)}&questions=${encodeURIComponent(JSON.stringify(questions))}`
				);
			}, 0);
		}
	};

	useEffect(() => {
		const topicQuestions = getQuestionsByTopic(id as Topic);
		setQuestions(topicQuestions);
		setLoading(false);
	}, [id]);

	if (loading) {
		return (
			<h3 className="font-semibold text-2xl mb-3 h-screen justify-center items-center">
				Loading...
			</h3>
		);
	}

	return (
		<main className="w-full min-h-screen p-6 flex flex-col items-center justify-center">
			<h2 className="font-bold text-3xl mb-4 text-blue-500">
				{capitalize(id)}
			</h2>
			<h3 className="font-semibold text-2xl mb-3">
				Question: {count + 1} of {questions.length}
			</h3>

			<h3 className="text-xl mb-4">{questions[count]?.question}</h3>

			<div className="flex flex-col lg:w-1/3 mb-6">
				{questions[count]?.options.map((option, index) => (
					<button
						className="p-4 text-black bg-[#EEEEEE]  
                rounded-xl mb-6 min-w-[200px] hover:bg-[#EF5A6F] hover:text-white text-lg"
						key={index}
						onClick={() => handleSelectAnswer(option)}
					>
						{option}
					</button>
				))}
			</div>
		</main>
	);
}
