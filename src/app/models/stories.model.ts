import { Model } from './model'
import { Item } from './item.model'

export class Stories extends Model {
  public available: number
  public collectionURI: string
  public items: Item[]
  public returned: number
}
