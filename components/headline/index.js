import style from './style.css';

export default () => (
	<div class={style.headline}>
		<h1>Code with Chris Roadmap Tool</h1>
		<video class={style.video}
			src="assets/video.mp4"
			autoPlay
			controls
			muted
		/>
	</div>
);