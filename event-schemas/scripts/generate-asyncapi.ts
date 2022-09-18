#!/usr/bin/env -S npx ts-node

import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import { entries, omit, map, reduce } from 'lodash';
import yaml from 'js-yaml'
import { schemas } from '../src'

const jsonSchemasOutDir = join(__dirname, '..', 'data')
const events = entries(schemas.events)
const genericEvent = {
  title: 'Event',
  ...omit(schemas.EventSchema, 'title')
}

const _obj = (obj: object) => JSON.parse(JSON.stringify(obj, null, 2))

if (!existsSync(jsonSchemasOutDir)) {
  mkdirSync(jsonSchemasOutDir, { recursive: true });
}

events.push(['Event', genericEvent])


const asyncApi = {
  "asyncapi": "2.4.0",
  "id": "urn:com:metanomic:thunderstruck:api",
  "info": {
    "title": "Thunderstruck Real Time Game Messaging API",
    "version": "1.0.0"
  },
  "servers": {
    "production": {
      "url": "https://api.metanomic.cloud",
      "protocol": "https",
      "protocolVersion": "1.1",
      "security": [
        {
          "token": []
        }
      ]
    }
  },
  "defaultContentType": "application/json",
  "channels": {
    "/game/{gameId}": {
      "parameters": {
        "gameId": {
          "description": schemas.types.IDRef.description,
          "schema": _obj(schemas.types.IDRef)
        }
      },
      "publish": {
        "message": {
          "summary": "The inventory balance has been updated",
          "payload": {
            "type": "object"
          }
        }
      }
    },
    "/game/{gameId}/events/{eventType}": {
      "parameters": {
        "gameId": {
          "description": schemas.types.IDRef.description,
          "schema": _obj(schemas.types.IDRef)
        },
        "eventType": {
          "description": schemas.types.EventType.description,
          "schema": _obj(schemas.types.EventType)
        }
      },
      "subscribe": {
        "message": {
          "oneOf": map(events, (entry) => ({ $ref: `#/components/messages/${entry[0]}` }))
        }
      }
    }
  },
  "components": {
    "securitySchemes": {
      "token": {
        "type": "httpApiKey",
        "name": "x-api-key",
        "in": "header"
      }
    },
    "messages": {
      ...reduce(events, (acc, entry) => {
        acc[entry[0]] = {
          "summary": entry[1].description,
          "payload": { $ref: `#/components/schemas/${entry[0]}` }
        }
        return acc
      }, {} as Record<string, any>)
    },
    "schemas": {
      ...reduce(events, (acc, entry) => {
        acc[entry[0]] = _obj(entry[1])
        return acc
      }, {} as Record<string, any>)
    },

  }
}


writeFileSync(join(jsonSchemasOutDir, `asyncapi.yaml`), yaml.dump(asyncApi), {
  flag: 'w',
});

console.log('done')
