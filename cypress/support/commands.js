// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// Create a new custom Cypress command in a separate commands.js file
const Chance = require('chance');
import { faker } from '@faker-js/faker';

Cypress.Commands.add('captureScreenshot', index => {
	Cypress.Screenshot.defaults({
		overwrite: true,
	});
	console.log(process.cwd());

	const relativePath = `screenshot_${index}`;

	cy.screenshot(relativePath);
});

Cypress.Commands.add('generateRandomUSAddress_Chance', () => {
	const chance = new Chance();

	const randomUSAddress = {
		street: chance.address(),
		city: chance.city(),
		state: chance.state({ full: true, country: 'us' }),
		zipCode: chance.zip(),
	};
	return randomUSAddress;
});

Cypress.Commands.add('getRandomAddress_fromFixtureFile', () => {
	// Return a promise that resolves with the random address
	return cy.fixture('US-addr-list.json').then(addresses => {
		const randomIndex = Cypress._.random(0, addresses.length - 1);
		const randomAddress = addresses[randomIndex];
		return randomAddress;
	});
});

Cypress.Commands.add('getRandomDoB_mm_dd_yyyy', () => {
	//.click(); // Replace 'click()' with your intended action
	// Generate a random day (between 1 and 31)
	const day = faker.datatype
		.number({ min: 1, max: 31 })
		.toString()
		.padStart(2, '0');

	// Generate a random month (between 1 and 12)
	const month = faker.datatype
		.number({ min: 1, max: 12 })
		.toString()
		.padStart(2, '0');

	// Generate a random year (between 1900 and 2023, for example)
	const year = faker.datatype.number({ min: 1900, max: 2003 }).toString();

	// Format the components as DD/MM/YYYY (or your desired format)
	const dob = `${month}/${day}/${year}`;
	cy.wrap(dob);
});

Cypress.Commands.add('getRandomDoB_YYYY_MM_DD', () => {
	//.click(); // Replace 'click()' with your intended action
	// Generate a random day (between 1 and 31)
	const day = faker.datatype
		.number({ min: 1, max: 31 })
		.toString()
		.padStart(2, '0');

	// Generate a random month (between 1 and 12)
	const month = faker.datatype
		.number({ min: 1, max: 12 })
		.toString()
		.padStart(2, '0');

	// Generate a random year (between 1900 and 2023, for example)
	const year = faker.datatype.number({ min: 1900, max: 2003 }).toString();

	// Format the components as DD/MM/YYYY (or your desired format)
	const dob = `${year}-${month}-${day}`;
	cy.wrap(dob);
});

Cypress.Commands.add('getRandomlast4ssn', () => {
	// Generate a random number between 1 and 9999
	const randomNumber = Math.floor(Math.random() * 9999) + 1;

	// Format the number to have at least four digits with leading zeros
	const formattedNumber = randomNumber.toString().padStart(4, '0');

	cy.wrap(formattedNumber);
});

Cypress.Commands.add('getRandomNumber', (min, max) => {
	const randomId = Cypress._.random(min, max);
	console.log(`randonId : ${randomId}`);

	cy.wrap(randomId);
});

// format Date object in 'YYYY-MM-DD' format
Cypress.Commands.add('formatDate_from_MM_DD_YYY_to_YYYY_MM_DD_format', date => {
	// Input date in 'MM/DD/YYYY' format
	//const inputDate = '02/02/1995';

	// Split the input date into its components
	const dateComponents = date.split('/');

	// Create a new Date object in 'YYYY-MM-DD' format
	const formattedDate = `${dateComponents[2]}-${dateComponents[0].padStart(
		2,
		'0'
	)}-${dateComponents[1].padStart(2, '0')}`;

	// Log the formatted date
	cy.wrap(formattedDate);
});

Cypress.Commands.add('convertUTCtoIST', utcDateTime => {
	// Parse the UTC date string to a JavaScript Date object
	const utcDate = new Date(utcDateTime);

	// Apply the IST offset (UTC+5:30)
	//utcDate.setMinutes(utcDate.getMinutes() + 330);

	// Format the date and time in IST with AM/PM indicator
	const istDate = utcDate.toLocaleString('en-IN', {
		timeZone: 'Asia/Kolkata', // IST time zone
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		hour12: true, // Use 12-hour clock format
	});

	return istDate;
});

Cypress.Commands.add(
	'convertDateFormat_from_ddmmyyyy_to_mmddyyy',
	inputDate => {
		// Input date string in "dd/mm/yyyy" format
		// Format the date in "mm/dd/yyyy" format

		// Split the input date components
		const dateComponents = inputDate.split('/');

		// Rearrange the date components to "mm/dd/yyyy" format
		const formattedDate = `${dateComponents[1]}/${dateComponents[0]}/${dateComponents[2]}`;

		// Output date in "mm/dd/yyyy" format
		return formattedDate; // Outputs "12/10/2023"
	}
);

Cypress.Commands.add('get_10_digit_RandomPhoneNumber', () => {
	const phone = faker.phone
		.number()
		.replace(/\D/g, '') //replace non digit chat with ""
		.slice(0, 10);

	return phone;
});
