"use client";
import {message} from "antd";
import {firstTopics, secondTopics} from "./lib/utils";
import {useRouter} from "next/navigation";
import {Modal} from "antd";
import {useState} from "react";

export default function Home() {
	const router = useRouter();
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);

	const showModal = (id: string) => {
		setSelectedTopicId(id);
		setIsModalVisible(true);
	};

	const handleOk = () => {
		if (selectedTopicId) {
			setIsModalVisible(false);
			router.push(`/test/${selectedTopicId}`);
		}
	};

	const handleCancel = () => {
		if (selectedTopicId) {
			setIsModalVisible(false);
			message.info(`You have cancelled the ${selectedTopicId} test`);
		}
	};

	return (
		<main className="w-full min-h-screen flex flex-col items-center justify-center">
			<h2 className="text-4xl font-bold text-blue-600">Take Tests</h2>
			<p className="text-lg text-gray-500 mb-5">
				Select a topic, take tests and get your results instantly
			</p>
			<div className="px-4">
				<section className="w-full flex items-center space-x-5 mb-4">
					{firstTopics.map(topic => (
						<button
							key={topic.id}
							className={`bg-blue-500 text-white px-5 py-3 text-xl rounded-md`}
							onClick={() => showModal(topic.id)}
						>
							{topic.name}
						</button>
					))}
				</section>

				<section className="w-full flex items-center space-x-5">
					{secondTopics.map(topic => (
						<button
							key={topic.id}
							className={`bg-blue-500 text-white px-5 py-3 text-xl rounded-md`}
							onClick={() => showModal(topic.id)}
						>
							{topic.name}
						</button>
					))}
				</section>
			</div>
			<Modal
				// centered={true}
				title="Confirm Test"
				open={isModalVisible}
				onOk={handleOk}
				onCancel={handleCancel}
			>
				<p>
					Are you sure you want to take the{" "}
					<span className="font-bold">{selectedTopicId} </span> test?
				</p>
			</Modal>
		</main>
	);
}
