describe('template spec', () => {
	it('capture screenshot and overwrite it', () => {
		let i = 1;
		cy.captureScreenshot(i);
	});

	it('generate random US address', () => {
		cy.generateRandomUSAddress_Chance().then(addr => {
			cy.log(JSON.stringify(addr));
		});
	});

	it('generate random US address from a fixture file', () => {
		cy.getRandomAddress_fromFixtureFile().then(addr => {
			cy.log(JSON.stringify(addr));
		});
	});

	it('generate random date of birth in MM/DD/YYYY format', () => {
		cy.getRandomDoB_mm_dd_yyyy().then(dob => {
			cy.log(JSON.stringify(dob));
		});
	});
	it('generate random date of birth in YYYY-MM-DD format', () => {
		cy.getRandomDoB_YYYY_MM_DD().then(dob => {
			cy.log(JSON.stringify(dob));
		});
	});
	it('generate random last 4 ssn from 1 to 9999', () => {
		cy.getRandomlast4ssn().then(ssn => {
			cy.log(JSON.stringify(ssn));
			cy.log(ssn);
		});
	});
	it('generate random number by inputting min and max', () => {
		cy.getRandomNumber(10000, 20000).then(rand => {
			cy.log(JSON.stringify(rand));
			cy.log(rand);
		});
	});
	it('format date from MM/DD/YYYY to YYYY-MM-DD foramt', () => {
		cy.formatDate_from_MM_DD_YYY_to_YYYY_MM_DD_format('12/29/2003').then(
			formatDate => {
				cy.log(JSON.stringify(formatDate));
				cy.log(formatDate);
			}
		);
	});

	it('format date from DD/MM/YYYY to MM/DD/YYYY foramt', () => {
		cy.convertDateFormat_from_ddmmyyyy_to_mmddyyy('29/09/2003').then(
			formatDate => {
				cy.log(JSON.stringify(formatDate));
				cy.log(formatDate);
			}
		);
	});
	it('get 10 digit random phone number', () => {
		cy.get_10_digit_RandomPhoneNumber().then(phone => {
			cy.log(JSON.stringify(phone));
			cy.log(phone);
		});
	});

	it('convert date from UTC to IST', () => {
		const now = new Date();
		const yesterdayUTC = now.setUTCDate(now.getUTCDate() - 1); // Subtract one day
		//const yesterdayUTC = now.toISOString().split('T')[0]; // Gets the date portion without the time
		cy.log(now.toISOString()); // Outputs the UTC date in the format: '2023-10-21' (if today is '2023-10-22')
		cy.convertUTCtoIST(yesterdayUTC).then(isttime => {
			cy.log(isttime);
		});
	});
});
