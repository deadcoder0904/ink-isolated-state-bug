import React from 'react'
import { Box, Text } from 'ink'

import { state } from './state'
import { Input } from './Input'

const App = () => (
	<Box flexDirection="column">
		<Text color="#A78BFA">Compose New Post</Text>

		<Input
			label="Title"
			onSubmit={(title) => {
				state.title = title
			}}
		/>

		<Input
			label="Description"
			onSubmit={(description) => {
				state.description = description
			}}
		/>
	</Box>
)

module.exports = App
export default App
