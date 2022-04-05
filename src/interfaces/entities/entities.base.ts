/**
 * EntityBase contains the common properties of all other entities.
 */
export interface BaseEntity {
  id: string
  title: string
  description: string
  storageUrl: string
  imageUrl?: string
}
