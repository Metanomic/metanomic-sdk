#!/usr/bin/env -S npx ts-node

import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import { forEach, entries, omit, camelCase } from 'lodash';
import { schemas } from '../src'

const jsonSchemasOutDir = join(__dirname, '..', 'data', 'schemas')
const events = entries(schemas.events)


if (!existsSync(jsonSchemasOutDir)) {
  mkdirSync(jsonSchemasOutDir, { recursive: true });
}

events.push(['Event', {
  title: 'Event',
  ...omit(schemas.EventSchema, 'title')
}])

// Generate the JSON Schemas
forEach(events, (entry) => {
  writeFileSync(join(jsonSchemasOutDir, `${camelCase(entry[0])}.json`), JSON.stringify(entry[1], null, 2), {
    flag: 'w',
  });
})

console.log('done')
