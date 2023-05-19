// Singleton pattern
import { StorageService } from '../services/storage.service'

import { ACCESS_TOKEN_KEY, USER_STORAGE_KEY } from '@/constants/auth.constants'

export class Store {

	constructor(initialState) {
		this.observers = []

		this.storageService = new StorageService()
		const savedUser = this.storageService.getItem(USER_STORAGE_KEY)

		const state = savedUser ? { user: savedUser } : initialState

		this.state = new Proxy(state, {
			set: (target, property, value) => {
				target[property] = value

				this.notify()
				return true
			}
		})
	}

	static getInstance() {
		if (!Store.instance) {
			Store.instance = new Store({ user: null })
		}

		return Store.instance
	}

	addObserver(observer) {
		this.observers.push(observer)
	}

	removeObserver(observer) {
		this.observers = this.observers.filter(obs => obs !== observer)
	}

	/**
	 * Notify all observers of the state changes.
	 */
	notify() {
		for (const observer of this.observers) {
			observer.update()
		}
	}

	login(user, accessToken) {
		this.state.user = user
		this.storageService.setItem(USER_STORAGE_KEY, user)
		this.storageService.setItem(ACCESS_TOKEN_KEY, accessToken)
	}

	logout() {
		this.state.user = null
		this.storageService.removeItem(USER_STORAGE_KEY)
		this.storageService.removeItem(ACCESS_TOKEN_KEY)
	}

	updateCard(card) {
		const oldUser = this.state.user
		const newUser = { ...oldUser, card }
		this.state.user = newUser
		this.storageService.setItem(USER_STORAGE_KEY, newUser)
	}
}