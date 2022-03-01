import { v3 } from 'uuid'

function temp () {
  console.log(`${v3('object.username', 'user')}`)
  console.log(`${v3('object.username', 'user')}`)
}

temp()
