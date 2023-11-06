import { useInput } from './hooks/useInput'

function App() {
	const username = useInput('')
	const password = useInput('')

	return (
		<div>
			<input {...username} type="text" />
			<input {...password} type="password" />
			<button
				onClick={() => {
					console.log(username.value, password.value)
				}}
			>
				push
			</button>
		</div>
	)
}

export default App
