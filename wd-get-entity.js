async function wikidataGetEntity(id) {
	const endpoints = {
		'Q': 'www.wikidata.org',
		'P': 'www.wikidata.org',
		'M': 'commons.wikimedia.org',
	};
	let url = `https://${ endpoints[id.charAt(0)] }/wiki/Special:EntityData/${ id }.json`;
	try {
		const response = await fetch(url);

		if (response.status !== 200) {
			throw 'Status Code: ' + response.status;
		}

		let json = JSON.parse(await response.text());
		
		return json.entities;
	} catch(error) {
		throw ['Fetch Error :-S', error];
	}
}
