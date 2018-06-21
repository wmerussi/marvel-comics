import { AppPage } from './app.po'

describe('angular-scaffold App', () => {
  let page: AppPage

  beforeEach(() => {
    page = new AppPage()
  })

  it('should display welcome message', () => {
    page.navigateTo()
    expect(page.getParagraphText()).toEqual('Welcome to app!')
  })
  it('should have a link to Meiuca website', () => {
    expect(page.getLink()).toEqual('http://www.meiuca.design/')
  })
})
