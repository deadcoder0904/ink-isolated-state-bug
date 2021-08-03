import { proxy } from 'valtio'

class State {
	title: string | undefined = undefined
	description: string | undefined = undefined
}

export const state = proxy(new State())
