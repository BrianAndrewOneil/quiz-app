const questions = [
    {
		id: 1,	
		questionText: 'Who painted the ceiling of the Sistine Chapel?',
		answerOptions: [
			{ answerID: 'a', answerText: 'Da Vinci'},
			{ answerID: 'b', answerText: 'Correggio'},
			{ answerID: 'c', answerText: 'Michelangelo'},
			{ answerID: 'd', answerText: 'Raphael'},
		],
		correctResponse: 'c',
		questionRationale: `Michelangelo painted the chapel's ceiling between 1508 and 1512 under the patronage of Pope Julius II.`,
	},
	{
		id: 2,	
		questionText: 'Who was the first U.S. president to serve only a single term?',
		answerOptions: [
			{ answerID: 'a', answerText: 'George Washington'},
			{ answerID: 'b', answerText: 'John Adams'},
			{ answerID: 'c', answerText: 'John Quincy Adams'},
			{ answerID: 'd', answerText: 'Franklin Pierce'},
		],
		correctResponse: 'b',
		questionRationale: `John Adams served only a single term. He was the second president of the United States. George Washington, the first US president, served two terms.`,
	},
	{
		id: 3,	
		questionText: 'The iPhone was created by which company?',
		answerOptions: [
			{ answerID: 'a', answerText: 'Apple'},
			{ answerID: 'b', answerText: 'Intel'},
			{ answerID: 'c', answerText: 'Amazon'},
			{ answerID: 'd', answerText: 'Microsoft'},
		],
		correctResponse: 'a',
		questionRationale: `The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. It has been in production since.`,
	},
	{
		id: 4,	
		questionText: 'What is the capital of Texas?',
		answerOptions: [
			{ answerID: 'a', answerText: 'Austin'},
			{ answerID: 'b', answerText: 'San Antonio'},
			{ answerID: 'c', answerText: 'Houston'},
			{ answerID: 'd', answerText: 'Dallas'},
		],
		correctResponse: 'a',
		questionRationale: `Austin is the capital of Texas. Houston, San Antonio, and Dallas all have larger populations.`,
	},
]

export default questions;