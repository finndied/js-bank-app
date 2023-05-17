export class Layout {
	constructor({ router, children }) {
		this.router = router
		this.children = children
	}

	render() {
		const headerElem = `<header>
      Header
      <nav>
         <a href='/'>Home</a>
         <a href='/auth'>Auth</a>
         <a href='/about-us'>About Us</a>
      </nav>
      </header>`

		return `
         ${headerElem}
         <main>
         ${this.children}
         </main>
      `
	}
}
