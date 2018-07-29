import style from './style';
import Wizard from '../../components/wizard';

export default () => (
	<div class={style.wizard}>
		<Wizard steps={5} />
	</div>
);