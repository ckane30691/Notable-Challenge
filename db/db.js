const physicians = [
	{
		'Hibert, Julius': {
			id: 1,
			email: 'hibert@notablehealth.com',
			fname: 'Julius',
			lname: 'Hibert',
		},
	},
	{
		'Krieger, Algernop': {
			id: 2,
			email: 'krieger@notablehealth.com',
			fname: 'Algernop',
			lname: 'Krieger',
		},
	},
	{
		'Riviera, Nick': {
			id: 3,
			email: 'riviera@notablehealth.com',
			fname: 'Nick',
			lname: 'Riviera',
		},
	},
];
const appointments = {
	1: [
		{
			number: 1,
			name: 'Mac MacDonald',
			time: '9:00AM',
			kind: 'New Patient',
		},
		{
			number: 2,
			name: 'Charlie Day',
			time: '10:00AM',
			kind: 'Follow Up',
		},
		{
			number: 3,
			name: 'Dennis Reynolds',
			time: '11:30AM',
			kind: 'Follow-up',
		},
	],
	2: [
		{
			number: 1,
			name: 'Sterling Archer',
			time: '8:00AM',
			kind: 'New Patient',
		},
		{
			number: 2,
			name: 'Cyril Figis',
			time: '8:30AM',
			kind: 'New Patient',
		},
		{
			number: 3,
			name: 'Ray Gilette',
			time: '9:00PM',
			kind: 'Follow-up',
		},
		{
			number: 3,
			name: 'Lana Kane',
			time: '9:30AM',
			kind: 'Follow-up',
		},
		{
			number: 3,
			name: 'Pam Poovey',
			time: '10:00AM',
			kind: 'Follow-up',
		},
	],
	3: [
		{
			number: 1,
			name: 'Dee Reynolds',
			time: '8:00AM',
			kind: 'New Patient',
		},
		{
			number: 2,
			name: 'Frank Reynolds',
			time: '9:30AM',
			kind: 'New Patient',
		},
		{
			number: 3,
			name: 'Cricket',
			time: '1:30PM',
			kind: 'Follow-up',
		},
	],
};

module.exports = { physicians, appointments };
