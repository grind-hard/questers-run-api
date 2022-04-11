# quester-run


## Azure CLI
`az login`
`npm install -g azure-functions-core-tools@3 --unsafe-perm true`
`func azure functionapp publish questers-run-api --typescript`

## Typescript to Yaml Open-API
`typeconv -f ts -t oapi -o 'open-api-doc' './src/interfaces/**/**/*.ts'`