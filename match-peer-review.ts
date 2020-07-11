const MEMBERS: string[] = ['jaejeon', 'hjeon', 'yujo', 'seongwpa', 'jjo', 'dakim'];
const	MATCH_LIMIT: number = 2;

function matchMembers(members: string[], matching: Map<string, string[]>, matchingLimit: number) {
	members.forEach(member => {
		let done = false;
		while (!done) {
			let	randomMember: string = members[Math.floor(Math.random() * members.length)];
			let randomMemberMatch: string[] = <string[]>matching.get(randomMember);
			if (randomMember !== member
				&& !randomMemberMatch.includes(member)
				&& randomMemberMatch.length < matchingLimit) {
				randomMemberMatch.push(member);
				done = true;
			}
		}
	})
}

function randomPeerReiview(members: string[], matchingLimit: number) {
	let matching = new Map();
	members.forEach(member => matching.set(member, []));
	for (let i = 0; i < matchingLimit; i++)
		matchMembers(members, matching, matchingLimit);
	console.log(matching);
}

randomPeerReiview(MEMBERS, MATCH_LIMIT);
