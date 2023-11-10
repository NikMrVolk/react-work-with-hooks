import { useCallback, useRef } from 'react'

export default function useDebounce(callback, delay) {
	const timer = useRef()

	const debouncedCallback = useCallback(
		(...arg) => {
			console.log(timer)
			if (timer.current) clearTimeout(timer.current)

			timer.current = setTimeout(() => {
				callback(...arg)
			}, delay)
		},
		[callback, delay]
	)

	return debouncedCallback
}
