import style from './style';

export default () => (
	<header class={style.header}>
		<a class="logo" href="https://www.codewithchris.com/">
			<img
				src="https://codewithchris-wpengine.netdna-ssl.com/wp-content/uploads/2018/02/boldlogov2.png"
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