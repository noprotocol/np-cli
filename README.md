np-cli
======

The NoProtocol Command Line Interface 

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/np-cli.svg)](https://npmjs.org/package/np-cli)
[![CircleCI](https://circleci.com/gh/noprotocol/np-cli/tree/master.svg?style=shield)](https://circleci.com/gh/noprotocol/np-cli/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/np-cli.svg)](https://npmjs.org/package/np-cli)
[![License](https://img.shields.io/npm/l/np-cli.svg)](https://github.com/noprotocol/np-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g np-cli
$ np COMMAND
running command...
$ np (-v|--version|version)
np-cli/0.0.0 darwin-x64 node-v12.4.0
$ np --help [COMMAND]
USAGE
  $ np COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`np hello`](#np-hello)
* [`np help [COMMAND]`](#np-help-command)

## `np hello`

Describe the command here

```
USAGE
  $ np hello

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/hello.js](https://github.com/noprotocol/np-cli/blob/v0.0.0/src/commands/hello.js)_

## `np help [COMMAND]`

display help for np

```
USAGE
  $ np help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.0/src/commands/help.ts)_
<!-- commandsstop -->
