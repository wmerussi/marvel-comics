import { Model } from './model'

/** Limit class used on breakpoint service */
export class Limit extends Model {
  public min: number
  public max: number

  constructor(obj?: any) {
    super(obj)
  }
}
