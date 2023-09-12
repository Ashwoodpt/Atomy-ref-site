const YouTubeEmbedded = () => {
	return (
		<div className="YouTubeEmbedded-container">
			<iframe
				width="640"
				height="360"
				src="https://www.youtube.com/embed/uZB0AZCnLyI"
				title="YouTube video player"
				// @ts-ignore
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
			></iframe>
		</div>
	);
};

export default YouTubeEmbedded;
