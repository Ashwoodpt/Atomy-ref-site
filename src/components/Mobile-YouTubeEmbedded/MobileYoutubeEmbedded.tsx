const MobileYouTubeEmbedded = (props: any) => {
	const isWideMobile = props.isWideMobile;
	return (
		<div>
			{isWideMobile ? (
				<div className="YouTubeEmbedded-container">
					<iframe
						width="400px"
						height="300"
						src="https://www.youtube.com/embed/uZB0AZCnLyI"
						title="YouTube video player"
						// @ts-ignore
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen
					></iframe>
				</div>
			) : (
				<div className="YouTubeEmbedded-container">
					<iframe
						width="240px"
						height="200"
						src="https://www.youtube.com/embed/uZB0AZCnLyI"
						title="YouTube video player"
						// @ts-ignore
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen
					></iframe>
				</div>
			)}
		</div>
	);
};

export default MobileYouTubeEmbedded;
