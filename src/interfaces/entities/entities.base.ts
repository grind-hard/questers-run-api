/**
 * EntityBase contains the common properties of all other entities.
 */
export interface EntityBase {
  /** The unique identifier of the entity. */
  id: string
  /** The title of the entity. */
  title: string
  /** The description of the entity. */
  description: string
  /** The image of the entity. */
  imageUrl?: string
}
