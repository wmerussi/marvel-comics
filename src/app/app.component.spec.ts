import { TestBed, async } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { AppComponent } from './app.component'

/**
 * Unit test for AppComponent
 */
describe('AppComponent', () => {
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
        AppComponent, // Component to be tested
      ],
      imports: [
        RouterTestingModule, // Identifies and tests router-outlet directive
      ],
    }).compileComponents()
  }))

  /** Test if the component was created */
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  }))
})
