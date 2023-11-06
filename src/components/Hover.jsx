import { useRef } from 'react'
import { useHover } from '../hooks/useHover'

const Hover = () => {
	const blackRef = useRef(null)

	const isHovering = useHover(blackRef)

	return (
		<>
			<div ref={blackRef} style={{ width: 300, height: 300, background: isHovering ? 'green' : 'black' }}></div>
		</>
	)
}

export default Hover
