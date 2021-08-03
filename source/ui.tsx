import React from 'react'
import { Box, Text, useApp } from 'ink'

import { state } from './state'
import { Input } from './Input'

const App = () => {
	const [fieldNo, setFieldNo] = React.useState(1)
	const { exit } = useApp()

	React.useEffect(() => {
		if (fieldNo === 3) exit()
	}, [fieldNo])

	return (
		<Box flexDirection="column">
			<Text color="#A78BFA">Compose New Post</Text>

			<Input
				label="Title"
				focus={fieldNo === 1}
				onSubmit={(title) => {
					state.title = title
					setFieldNo(2)
				}}
			/>

			<Input
				focus={fieldNo === 2}
				label="Description"
				onSubmit={(description) => {
					state.description = description
					setFieldNo(3)
				}}
			/>
		</Box>
	)
}

module.exports = App
export default App
