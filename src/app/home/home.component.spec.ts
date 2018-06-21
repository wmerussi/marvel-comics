import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core'
import { By } from '@angular/platform-browser'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { HomeComponent } from './home.component'

import { RouterLinkStubDirective } from '../directives/router-link-stub.directive'

/**
 * Unit test for HomeComponent
 */
describe('HomeComponent', () => {
  let component: HomeComponent
  let fixture: ComponentFixture<HomeComponent>

  let linkDes: DebugElement[]
  let routerLinks: RouterLinkStubDirective[]

  /** Runs before each test */
  beforeEach(async(() => {
    /**
     * Configures and initializes environment for unit testing
     * and provides methods for creating components and services in unit tests.
     *
     * It also compiles components with a templateUrl for the test's NgModule.
     */
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent, // Component to be tested
        RouterLinkStubDirective,
      ],
      schemas: [
        NO_ERRORS_SCHEMA,
      ],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    /** Identifies the component to be tested */
    fixture = TestBed.createComponent(HomeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  beforeEach(() => {
    fixture.detectChanges()

    // find DebugElements with an attached RouterLinkStubDirective
    linkDes = fixture.debugElement.queryAll(By.directive(RouterLinkStubDirective))

    // get attached link directive instances
    // using each DebugElement's injector
    routerLinks = linkDes.map(de => de.injector.get(RouterLinkStubDirective))
  })

  /** Test if the component was created */
  it('should create home component', () => {
    expect(component).toBeTruthy()
  })

  /** Test if it has 'app' as title */
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(HomeComponent)
    const app = fixture.debugElement.componentInstance
    expect(app.title).toEqual('app')
  }))

  /** Test if it title was rendered in 'h1' tag */
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(HomeComponent)
    fixture.detectChanges()
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!')
  }))

  /** Test website navigation */
  it(`should navigate to about page`, async(() => {
    const aboutPageLinkDes = linkDes[0]  // about page link DebugElement
    const aboutPageLink = routerLinks[0] // about page link directive

    expect(aboutPageLink.navigatedTo).toBeNull('should not have navigated yet')

    aboutPageLinkDes.triggerEventHandler('click', null)
    fixture.detectChanges()

    expect(aboutPageLink.navigatedTo).toBe('/about')
  }))
})
