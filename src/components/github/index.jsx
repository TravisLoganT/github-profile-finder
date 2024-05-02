export default function GithubProfileFinder() {
	return (
		<div className="github-profile-container">
			<div className="input-wrapper">
				<input
					name="search-by-username"
					type="text"
					placeholder="Search GitHub Username"
				/>
				<button onClick={handleSubmit}>Search</button>
			</div>
		</div>
	);
}
