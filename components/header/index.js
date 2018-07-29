import style from './style';

export default () => (
	<header class={style.header}>
		<a href="https://www.codewithchris.com/">
			<img class={style.logo}
				src="/assets/logo.png"
				alt="How to Make an App for Beginners - Code With Chris"
			/>
		</a>
		<nav>
			<ul>
				<li><a href="https://codewithchris.com/how-to-make-an-iphone-app/">Start Here</a></li>
				<li><a href="https://codewithchris.com/learn-ios/">Lesson Plan</a></li>
				<li><a href="https://codewithchris.com/blog/">Blog</a></li>
				<li><a href="https://codewithchris.com/beginnercourse/">Courses</a></li>
				<li><a href="https://codewithchris.com/mygear/">Tools</a></li>
			</ul>
		</nav>
	</header>
);