import React from 'react'
import { Text } from 'ink'
import { UncontrolledTextInput } from 'ink-text-input'

interface IInput {
	label: string
	onSubmit: (s: string) => void
}

export const Input = ({ label, onSubmit }: IInput) => {
	const [submitted, setSubmitted] = React.useState(false)

	const handleSubmit = (q: string) => {
		onSubmit(q)
		setSubmitted(true)
	}

	if (submitted) return null

	return (
		<Text>
			<Text color="#6EE7B7">❯ {label}: </Text>
			<UncontrolledTextInput focus={!submitted} onSubmit={handleSubmit} />
		</Text>
	)
}
