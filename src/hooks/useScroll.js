import { useEffect, useRef } from 'react'

export const useScroll = (parentRef, childRef, callback) => {

	
	const observer = useRef()

	useEffect(() => {
		const options = {
			root: parentRef.current,
		}

		observer.current = new IntersectionObserver(([target]) => {
			if (target.isIntersecting) {
				console.log('Intersacting')
				callback()
			}
		}, options)

		observer.current.observe(childRef.current)

		return function () {
			observer.current.unobserve(childRef.current)
		}
	}, [callback])
}
