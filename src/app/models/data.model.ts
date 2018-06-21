import { Model } from './model'
import { Comic } from './comic.model'

export class Data extends Model {
  public count: number
  public limit: number
  public offset: number
  public results: Comic[]
  public total: number
}
