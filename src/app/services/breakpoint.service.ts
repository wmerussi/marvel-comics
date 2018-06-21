import { Injectable } from '@angular/core'

import { Observable } from 'rxjs/observable'
import { BehaviorSubject } from 'rxjs/behaviorsubject'

import { Limit } from '../models/limit.model'
import { media } from './media.data'

const defaultMaxWidth = 9999

/** Default error messages */
const errorText = {
  invalidBreakpoint: 'Invalid breakpoint value',
  invalidMod: 'Invalid modifier value',
  invalidRange: 'breakpoint must be smaller than modifier value',
}

@Injectable()
export class BreakpointService {
  private onBreakpoint: BehaviorSubject<boolean> = new BehaviorSubject(false)
  private limits: Limit[] = []

  /**
   * Construct the Breakpoint Service with breakpoint limits
   * @param { string | Array<string> } breakpoint - Key value from media Object
   * @param { string = 'min' }         mod        - 'min', 'max' or key value from media Object
   */
  constructor(breakpoint: string | string[], mod: string = 'min') {
    if (mod !== 'min' && mod !== 'max' && !media[mod]) this.error(errorText.invalidMod)

    /** If it's a string, will apply to the breakpoints range */
    if (typeof breakpoint === 'string') {
      if (!media[breakpoint]) this.error(errorText.invalidBreakpoint)
      if (!!media[mod] && media[mod] - media[breakpoint] < 0) this.error(errorText.invalidRange)

      /** Min breakpoint limit, 1 or modifier value */
      const min = (mod === 'max')
        ? media.xs
        : media[breakpoint]

      /** Max breakpoint limit, 9999, breakpoint or modifier value */
      const max = mod === 'min'
        ? defaultMaxWidth
        : (mod === 'max')
          ? this.getBreakpointLimit(breakpoint)
          : this.getBreakpointLimit(mod)

      this.limits = [new Limit({ min, max })]
    }

    /** If it's an Array, it will only apply to defined breakpoints */
    if (Array.isArray(breakpoint)) {
      this.limits = breakpoint.map((bp) => {
        if (!media[bp]) this.error(errorText.invalidBreakpoint)
        return new Limit({ min: media[bp], max: this.getBreakpointLimit(bp) })
      })
    }

    /** First check of window width */
    this.checkWithinLimits()

    /** On window resize check window width */
    window.addEventListener('resize', () => this.checkWithinLimits())
  }

  /**
   * Returns an Observable that will update the caller whenever onBreakpoint get updated
   * @return { Observable<boolean> } - onBreakpoint boolean value
   */
  public get(): Observable<boolean> {
    return this.onBreakpoint.asObservable()
  }

  /** Remove event listener from resize */
  public removeListener() {
    window.removeEventListener('resize', () => this.checkWithinLimits())
  }

  /** Check if the window width is within breakpoints limits */
  private checkWithinLimits() {
    this.onBreakpoint.next(this.limits.reduce(
      (isWithin, limit) =>
        (window.outerWidth >= limit.min && window.outerWidth <= limit.max) || isWithin
    , false))
  }

  /**
   * Throws an exception with text
   * @param { string } text - Text to be thrown as error
   */
  private error(text: string) {
    throw new Error(text)
  }

  /**
   * Get the breakpoint limit
   * @param  { string } breakpoint - Breakpoint to check the next value
   * @return { number }            - Next breakpoint limit value
   */
  private getBreakpointLimit(breakpoint: string): number {
    return Object.keys(media).reduce(
      (width, bp, i) => breakpoint === bp
        ? media[Object.keys(media)[i + 1]] - 1 || defaultMaxWidth
        : width
    , 0)
  }
}
