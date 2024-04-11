import { useEffect, useState } from 'react'

type Props = {
	value: number
	time: number
}

const useCounter = (props: Props) => {
	const [counter, setCounter] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setCounter(prevCount => (prevCount < props.value ? prevCount + 1 : prevCount))
		}, props.time)

		return () => clearInterval(interval)
	}, [])

	return counter
}

export default useCounter
