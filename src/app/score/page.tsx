"use client";
import Link from "next/link";
import {useSearchParams} from "next/navigation";
import {useState} from "react";
import {useRouter} from "next/navigation";

interface Question {
	id: string;
	question: string;
	answer: string;
}

export default function Score() {
	const searchParams = useSearchParams();
	const score = searchParams.get("score");
	const total = searchParams.get("total");
	const answers = searchParams.get("answers");
	const questions = searchParams.get("questions");
	// const topicId = searchParams.get("topicId");
	const router = useRouter();

	const [showResults, setShowResults] = useState(false);

	if (!score || !total || !answers || !questions) {
		return (
			<main className="p-4 min-h-screen w-full flex flex-col items-center justify-center">
				<h2 className="text-2xl font-semibold">Score</h2>
				<Link href="/" className="bg-blue-500 p-4 text-blue-50 rounded ">
					Go Home
				</Link>
			</main>
		);
	}

	const userAnswers = JSON.parse(decodeURIComponent(answers));
	const questionList: Question[] = JSON.parse(decodeURIComponent(questions));

	const handleRetake = () => {
		router.back();
		// router.push(`/test/${topicId}`);
	};

	return (
		<main className="p-4 min-h-screen w-full flex flex-col items-center justify-center">
			<h2 className="text-2xl font-semibold">Score</h2>

			<p className="text-lg text-center mb-4">
				You got {score} out of {total} questions correct.
			</p>

			<h1 className="font-extrabold text-5xl text-blue-500 mb-3">
				{((Number(score) / Number(total)) * 100).toFixed(2)}%
			</h1>

			<button
				className="bg-blue-500 p-4 text-blue-50 rounded mb-4"
				onClick={() => setShowResults(!showResults)}
			>
				{showResults ? "Hide Results" : "See Results"}
			</button>

			{showResults && (
				<div className="w-full max-w-2xl">
					{questionList.map((question: Question, index) => (
						<div key={question.id} className="mb-4 p-4 border rounded">
							<h3 className="text-xl font-semibold">{question.question}</h3>
							<p
								className={`text-lg ${
									userAnswers[index] === question.answer
										? "text-green-500"
										: "text-red-500"
								}`}
							>
								Your answer: {userAnswers[index]}
							</p>
							{userAnswers[index] !== question.answer && (
								<p className="text-lg text-blue-500">
									Correct answer: {question.answer}
								</p>
							)}
						</div>
					))}
				</div>
			)}

			<div className="flex gap-4 mt-12">
				<button
					className="bg-blue-500 p-4 text-blue-50 rounded"
					onClick={handleRetake}
				>
					Retake Test
				</button>

				<Link href="/" className="bg-blue-500 p-4 text-blue-50 rounded ">
					Go Home
				</Link>
			</div>
		</main>
	);
}
