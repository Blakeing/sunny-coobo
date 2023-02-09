// schemas/index.js

import client from './documents/client'
import project from './documents/project'
import home from './singletons/home'

export const schemaTypes = [project, home, client]
