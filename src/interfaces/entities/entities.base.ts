/**
 * EntityBase contains the common properties of all other entities.
 */
export interface BaseEntity {
  /** The unique identifier of the entity. */
  id: string
  /** The title of the entity. */
  title: string
  /** The description of the entity. */
  description: string
  /** The storage url of the entity. */
  storageUrl: string
  /** The image of the entity. */
  imageUrl?: string
}
