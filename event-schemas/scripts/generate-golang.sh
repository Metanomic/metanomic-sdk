#!/bin/bash -e

asyncapi generate models golang ./data/asyncapi.yaml -o data/golang --packageName=entities