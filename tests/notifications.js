module.exports = {
	'basic functionality': browser => {
		// note: this has failed in the past because the "test notifications" button
		// was just at the edge of the settings console scroll container
		// (so, inside the window boundaries, but not visible in the settings console)
		// so Firefox didn't scroll it into view and just silently failed to click it
		// (it probably clicked on the overlay below the settings console instead)
		browser
			.url('https://www.reddit.com/wiki/pages/#res:settings/troubleshooter')
			.refresh() // get the update notification out of the way
			.waitForElementVisible('#RESConsoleContainer')
			.click('#testNotifications')
			.assert.containsText('.RESNotification .RESNotificationHeader', 'Template test')
			.end();
	},
};
