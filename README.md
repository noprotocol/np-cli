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
np-cli/0.2.0 darwin-x64 node-v12.4.0
$ np --help [COMMAND]
USAGE
  $ np COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`np autocomplete [SHELL]`](#np-autocomplete-shell)
* [`np commands`](#np-commands)
* [`np hello`](#np-hello)
* [`np help [COMMAND]`](#np-help-command)
* [`np plugins`](#np-plugins)
* [`np plugins:install PLUGIN...`](#np-pluginsinstall-plugin)
* [`np plugins:link PLUGIN`](#np-pluginslink-plugin)
* [`np plugins:uninstall PLUGIN...`](#np-pluginsuninstall-plugin)
* [`np plugins:update`](#np-pluginsupdate)
* [`np update [CHANNEL]`](#np-update-channel)

## `np autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ np autocomplete [SHELL]

ARGUMENTS
  SHELL  shell type

OPTIONS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

EXAMPLES
  $ np autocomplete
  $ np autocomplete bash
  $ np autocomplete zsh
  $ np autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v0.1.2/src/commands/autocomplete/index.ts)_

## `np commands`

list all the commands

```
USAGE
  $ np commands

OPTIONS
  -h, --help  show CLI help
  -j, --json  output in json format
  --hidden    also show hidden commands
```

_See code: [@oclif/plugin-commands](https://github.com/oclif/plugin-commands/blob/v1.2.2/src/commands/commands.ts)_

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

_See code: [src/commands/hello.js](https://github.com/noprotocol/np-cli/blob/v0.2.0/src/commands/hello.js)_

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

## `np plugins`

list installed plugins

```
USAGE
  $ np plugins

OPTIONS
  --core  show core plugins

EXAMPLE
  $ np plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.7.8/src/commands/plugins/index.ts)_

## `np plugins:install PLUGIN...`

installs a plugin into the CLI

```
USAGE
  $ np plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  plugin to install

OPTIONS
  -f, --force    yarn install with force flag
  -h, --help     show CLI help
  -v, --verbose

DESCRIPTION
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command 
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in 
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ np plugins:add

EXAMPLES
  $ np plugins:install myplugin 
  $ np plugins:install https://github.com/someuser/someplugin
  $ np plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.7.8/src/commands/plugins/install.ts)_

## `np plugins:link PLUGIN`

links a plugin into the CLI for development

```
USAGE
  $ np plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

OPTIONS
  -h, --help     show CLI help
  -v, --verbose

DESCRIPTION
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello' 
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLE
  $ np plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.7.8/src/commands/plugins/link.ts)_

## `np plugins:uninstall PLUGIN...`

removes a plugin from the CLI

```
USAGE
  $ np plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

OPTIONS
  -h, --help     show CLI help
  -v, --verbose

ALIASES
  $ np plugins:unlink
  $ np plugins:remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.7.8/src/commands/plugins/uninstall.ts)_

## `np plugins:update`

update installed plugins

```
USAGE
  $ np plugins:update

OPTIONS
  -h, --help     show CLI help
  -v, --verbose
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.7.8/src/commands/plugins/update.ts)_

## `np update [CHANNEL]`

update the np CLI

```
USAGE
  $ np update [CHANNEL]
```

_See code: [@oclif/plugin-update](https://github.com/oclif/plugin-update/blob/v1.3.9/src/commands/update.ts)_
<!-- commandsstop -->
