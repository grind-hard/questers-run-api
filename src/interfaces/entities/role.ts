import { EntityBase } from './entites.base'

export interface Role extends EntityBase {
	roleAccessLevelId: string
}

export interface RoleAccessLevel extends EntityBase {
	canManage: {
		servers: string[]
		users: boolean
	}
}
