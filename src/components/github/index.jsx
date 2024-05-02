import { useEffect, useState } from "react";
import User from "./user";

export default function GithubProfileFinder() {
	const [userName, setUsername] = useState("TravisLoganT");
	const [userData, setUserData] = useState(null);
	const [loading, setLoading] = useState(false);

	async function fetchGitHubUserData() {
		setLoading(true);
		const response = await fetch(`https://api.github.com/users/${userName}`);

		const data = await response.json();
		if (data) {
			setUserData(data);
			setLoading(false);
		}

		console.log(data);
	}

	function handleSubmit() {}

	useEffect(() => {
		fetchGitHubUserData();
	}, []);

	if (loading) {
		return <div>Loading data...</div>;
	}

	return (
		<div className="github-profile-container">
			<div className="input-wrapper">
				<input
					name="search-by-username"
					type="text"
					placeholder="Search GitHub Username"
					value={userName}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<button onClick={handleSubmit}>Search</button>
			</div>
			{userData !== null ? <User user={userData} /> : null}
		</div>
	);
}
