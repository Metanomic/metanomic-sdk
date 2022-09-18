#!/bin/bash -e

asyncapi generate models csharp ./data/asyncapi.yaml -o data/csharp --namespace=entities