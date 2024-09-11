import { IElemento } from '../types/IElemento';

export default function Elemento({ name, emoji }: IElemento) {
	return (
		<div
			className='elemento'
			onClick={() => console.log(name)}>
			{emoji} {name}
		</div>
	)
}