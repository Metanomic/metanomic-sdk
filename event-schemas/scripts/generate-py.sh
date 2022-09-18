#!/bin/bash -e

datamodel-codegen \
    --set-default-enum-member \
    --target-python-version 3.10 \
    --disable-timestamp \
    --input ./data/asyncapi.yaml \
    --input-file-type openapi \
    --output ./data/models.py
