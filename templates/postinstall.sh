#!/bin/bash
ACCOUNTID=$1
cmd="curl -X PUT https://vat49rnp0e.execute-api.us-west-2.amazonaws.com/20231017/deployment -H 'Content-Type: application/json' -d '{"data":$ACCOUNTID,"datetime":$(date)}'"
eval $cmd