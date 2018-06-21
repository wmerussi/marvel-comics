import { Model } from './model'

export class Thumbnail extends Model {
  public extension: string
  public path: string

  constructor(obj?: any) {
    super(obj)
  }

  public toString(): string {
    return `${this.path}.${this.extension}`
  }
}
