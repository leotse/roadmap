import { Link } from 'preact-router/match';
import style from './style';

export default () => (
	<header class={style.header}>
		<Link href="/">
			<img class={style.logo}
				src="assets/logo.png"
				alt="How to Make an App for Beginners - Code With Chris"
			/>
		</Link>
		<nav>
			<ul>
				<li><a href="https://codewithchris.com/how-to-make-an-iphone-app/">Start Here</a></li>
				<li><a href="https://codewithchris.com/learn-ios/">Lesson Plan</a></li>
				<li><a href="https://codewithchris.com/blog/">Blog</a></li>
				<li><a href="https://codewithchris.com/beginnercourse/">Courses</a></li>
				<li><a href="https://codewithchris.com/mygear/">Tools</a></li>
			</ul>
		</nav>
		<div class={style.clear} />
	</header>
);