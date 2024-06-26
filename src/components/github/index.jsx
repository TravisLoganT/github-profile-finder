import { useEffect, useState } from "react";
import User from "./user";
import "./styles.css";

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
			setUsername("");
		}
	}

	function handleSubmit() {
        if (userName.trim() !== "") { 
            fetchGitHubUserData();
        }
    }

    function handleKeyDown(event) {
        if (event.key === "Enter") {
            handleSubmit();
        }
    }

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
                    color="white"
					value={userName}
					onChange={(e) => setUsername(e.target.value)}
                    onKeyDown={handleKeyDown} 
                />
                <button onClick={handleSubmit}>Search</button>
			</div>
			{userData !== null ? <User user={userData} /> : null}
		</div>
	);
}
