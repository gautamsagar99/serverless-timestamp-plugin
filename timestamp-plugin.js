'use strict';

class TimestampPlugin {
  constructor(serverless, options) {
    this.serverless = serverless;
    this.options = options || {};

    this.hooks = {
      'before:package:initialize': this.addTimestamp.bind(this),
      'before:package:createDeploymentArtifacts': this.addTimestamp.bind(this),
      'before:package:package': this.addTimestamp.bind(this),
    };
  }

  addTimestamp() {
    // ISO format: "2025-11-23T01:38:22.123Z"
    const timestamp = new Date().toISOString();

    if (!this.serverless.service.custom) {
      this.serverless.service.custom = {};
    }

    this.serverless.service.custom.timestamp = timestamp;

    this.serverless.cli.log(
      `TimestampPlugin: ISO timestamp -> ${timestamp}`
    );
  }
}

module.exports = TimestampPlugin;
