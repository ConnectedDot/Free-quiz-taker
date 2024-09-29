import {questionsData, Topic} from "./question";

//👇🏻 topics list
export const firstTopics = [
	{id: "AI", name: "AI Questions"},
	{id: "Python", name: "Python Questions"},
	{id: "JavaScript", name: "JavaScript Questions"},
];

//👇🏻 topics list
export const secondTopics = [
	{id: "CSS", name: "CSS Questions"},
	{id: "HTML", name: "HTML Questions"},
	{id: "UIDesign", name: "UI Design Questions"},
];
//👇🏻 capitalize the first letter of each word
export const capitalize = (str: string): string => {
	str = str.replace(/%20/g, " ");
	if (str.length === 0) {
		return str;
	}
	return str.charAt(0).toUpperCase() + str.slice(1) + " Questions";
};

export const getQuestionsByTopic = (topic: Topic) => {
	return questionsData[topic] || [];
};
