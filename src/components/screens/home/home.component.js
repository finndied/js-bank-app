import { BaseScreen } from '@/core/component/base-screen.component'
import { $R } from '@/core/rquery/rquery.lib'
import renderService from '@/core/services/render.service'

import { UserItem } from '@/components/ui/user-item/user-item.component'

import styles from './home.module.scss'
import template from './home.template.html'

export class Home extends BaseScreen {
	constructor() {
		super({ title: 'Home' })
	}

	render() {
		const element = renderService.htmlToElement(
			template,
			[
				new UserItem({
					avatarPath:
						'https://news.workforce.com/wp-content/uploads/sites/2/2018/12/AI-is-coming-%E2%80%94-and-HR-is-not-prepared.jpg',
					name: 'Finn'
				})
			],
			styles
		)

		$R(element).find('h1').css('color', 'white')

		return element
	}
}
