# Quester's Run API

This API allows clients to connect and access data in Azure.


# Developer Environment Setup

## Global Packages

There are a few global packages that are recommended when developing in this project.

* azure-functions-core-tools@3.0.4425
* gulp-cli
* ts-node
* ts-standard
* typeconv

## 

## Azure Components

Azure Command Line Interface and Core Tools are required to deploy the application to an Azure Subscription function app.

### Login to Azure Subscription
`az login`

### Install Azure Core Tools 
`npm install -g azure-functions-core-tools@3 --unsafe-perm true`

### Install VS Code Extensions

* Azure Tools - `ms-vscode.vscode-node-azure-pack`
* 

## Typescript to Yaml Open-API
`typeconv -f ts -t oapi -o 'open-api-doc' './src/interfaces/**/**/*.ts'`