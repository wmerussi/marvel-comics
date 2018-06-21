import { Model } from './model'
import { Characters } from './characters.model'
import { ComicDate } from './comic-date.model'
import { Creators } from './creators.model'
import { Events } from './events.model'
import { Series } from './series.model'
import { Price } from './price.model'
import { Stories } from './stories.model'
import { Thumbnail } from './thumbnail.model'
import { Url } from './url.model'

export class Comic extends Model {
  public characters: Characters
  public collectedIssues: any[]
  public collections: any[]
  public creators: Creators
  public dates: ComicDate[]
  public description: string
  public diamondCode: string
  public digitalId: number
  public ean: string
  public events: Events
  public format: string
  public id: number
  public images: any[]
  public isbn: string
  public issn: string
  public issueNumber: number
  public modified: string
  public pageCount: number
  public prices: Price[]
  public resourceURI: string
  public series: Series
  public stories: Stories
  public textObjects: any[]
  public thumbnail: Thumbnail
  public title: string
  public upc: string
  public urls: Url[]
  public variants: any[]
  public variantDescription: string

  constructor(obj?: any) {
    super(obj)

    this.thumbnail = new Thumbnail(this.thumbnail)
  }
}
