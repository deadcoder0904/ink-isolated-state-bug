import React from 'react'
import { Text } from 'ink'
import { UncontrolledTextInput } from 'ink-text-input'

interface IInput {
	label: string
	focus: boolean | undefined
	onSubmit: (s: string) => void
}

export const Input = ({ label, focus, onSubmit }: IInput) => {
	const [_, setSubmitted] = React.useState(false)

	const handleSubmit = (q: string) => {
		onSubmit(q)
		setSubmitted(true)
	}

	return (
		<Text>
			<Text color="#6EE7B7">❯ {label}: </Text>
			<UncontrolledTextInput focus={focus} onSubmit={handleSubmit} />
		</Text>
	)
}
