# serverless-timestamp-plugin

A Serverless Framework plugin that injects a timestamp into serverless.yml.

## Install the plugin

```bash
npm install serverless-timestamp-plugin
```

## Add it into serverless.yml file

```bash
plugins:
  - serverless-timestamp-plugin
```

## How to access it

```bash
${self:custom.timestamp}
```
