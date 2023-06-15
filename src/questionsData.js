const questions = [
    {
		id: 1,	
		questionText: 'Who painted the ceiling of the Sistine Chapel?',
		answerOptions: [
			{ answerID: 'a', answerText: 'Da Vinci', isCorrect: false },
			{ answerID: 'b', answerText: 'Correggio', isCorrect: false },
			{ answerID: 'c', answerText: 'Michelangelo', isCorrect: true },
			{ answerID: 'd', answerText: 'Raphael', isCorrect: false },
		],
		questionRationale: 'This option is correct because...',
	},
	{
		id: 2,	
		questionText: 'Who was the first U.S. president to serve only a single term?',
		answerOptions: [
			{ answerID: 'a', answerText: 'George Washington', isCorrect: false },
			{ answerID: 'b', answerText: 'John Adams', isCorrect: true },
			{ answerID: 'c', answerText: 'John Quincy Adams', isCorrect: false },
			{ answerID: 'd', answerText: 'Franklin Pierce', isCorrect: false },
		],
		questionRationale: 'This option is correct because...',
	},
	{
		id: 3,	
		questionText: 'The iPhone was created by which company?',
		answerOptions: [
			{ answerID: 'a', answerText: 'Apple', isCorrect: true },
			{ answerID: 'b', answerText: 'Intel', isCorrect: false },
			{ answerID: 'c', answerText: 'Amazon', isCorrect: false },
			{ answerID: 'd', answerText: 'Microsoft', isCorrect: false },
		],
		questionRationale: 'This option is correct because...',
	},
	{
		id: 4,	
		questionText: 'What is the capital of Texas?',
		answerOptions: [
			{ answerID: 'a', answerText: 'Austin', isCorrect: true },
			{ answerID: 'b', answerText: 'San Antonio', isCorrect: false },
			{ answerID: 'c', answerText: 'Houston', isCorrect: false },
			{ answerID: 'd', answerText: 'Dallas', isCorrect: false },
		],
		questionRationale: 'This option is correct because...',
	},
]

export default questions;