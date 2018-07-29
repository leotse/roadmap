import { Link } from 'preact-router/match';
import style from './style';

export default () => (
	<div class={style.getstarted}>
		<button type="button">
			<Link href="/wizard">
				Get Started
			</Link>
		</button>
	</div>
);