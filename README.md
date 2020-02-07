np-cli
======

The NoProtocol Command Line Interface 

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@noprotocol/np-cli.svg)](https://npmjs.org/package/@noprotocol/np-cli)
[![CircleCI](https://circleci.com/gh/noprotocol/np-cli/tree/master.svg?style=shield)](https://circleci.com/gh/noprotocol/np-cli/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/@noprotocol/np-cli.svg)](https://npmjs.org/package/@noprotocol/np-cli)
[![License](https://img.shields.io/npm/l/@noprotocol/np-cli.svg)](https://github.com/noprotocol/np-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @noprotocol/np-cli
$ np COMMAND
running command...
$ np (-v|--version|version)
@noprotocol/np-cli/0.2.2 darwin-x64 node-v12.4.0
$ np --help [COMMAND]
USAGE
  $ np COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`np autocomplete [SHELL]`](#np-autocomplete-shell)
* [`np boiler:craftvue`](#np-boilercraftvue)
* [`np commands`](#np-commands)
* [`np help [COMMAND]`](#np-help-command)
* [`np plugins`](#np-plugins)
* [`np plugins:install PLUGIN...`](#np-pluginsinstall-plugin)
* [`np plugins:link PLUGIN`](#np-pluginslink-plugin)
* [`np plugins:uninstall PLUGIN...`](#np-pluginsuninstall-plugin)
* [`np plugins:update`](#np-pluginsupdate)
* [`np rds:info`](#np-rdsinfo)
* [`np s3:create`](#np-s3create)
* [`np s3:delete`](#np-s3delete)
* [`np s3:list`](#np-s3list)
* [`np s3:list-content`](#np-s3list-content)
* [`np s3:policy`](#np-s3policy)
* [`np s3:set`](#np-s3set)
* [`np setup:craftvue`](#np-setupcraftvue)
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

## `np boiler:craftvue`

Describe the command here

```
USAGE
  $ np boiler:craftvue

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/boiler/craftvue.js](https://github.com/noprotocol/np-cli/blob/v0.2.2/src/commands/boiler/craftvue.js)_

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

## `np rds:info`

RDS info

```
USAGE
  $ np rds:info

OPTIONS
  -r, --region=region  name of the region where the new bucket should be created

DESCRIPTION
  RDS info
```

_See code: [src/commands/rds/info.js](https://github.com/noprotocol/np-cli/blob/v0.2.2/src/commands/rds/info.js)_

## `np s3:create`

Creates a new AWS S3 bucket.

```
USAGE
  $ np s3:create

OPTIONS
  -C, --no-config      do not use the default settings while creating the bucket (so you may set it yourself
  -n, --name=name      name of the new bucket
  -r, --region=region  name of the region where the new bucket should be created

DESCRIPTION
  Creates a new AWS S3 bucket.

ALIASES
  $ np newbucket
  $ np createbucket
  $ np newS3
  $ np new
```

_See code: [src/commands/s3/create.js](https://github.com/noprotocol/np-cli/blob/v0.2.2/src/commands/s3/create.js)_

## `np s3:delete`

Delete a S3 bucket.

```
USAGE
  $ np s3:delete

OPTIONS
  -n, --name=name  name of the bucket to delete

DESCRIPTION
  Delete a S3 bucket.
```

_See code: [src/commands/s3/delete.js](https://github.com/noprotocol/np-cli/blob/v0.2.2/src/commands/s3/delete.js)_

## `np s3:list`

Lists all S3 buckets form a specific region.

```
USAGE
  $ np s3:list

OPTIONS
  -r, --region=region  name of the region where the new bucket should be created

DESCRIPTION
  Lists all S3 buckets form a specific region.
```

_See code: [src/commands/s3/list.js](https://github.com/noprotocol/np-cli/blob/v0.2.2/src/commands/s3/list.js)_

## `np s3:list-content`

Describe the command here

```
USAGE
  $ np s3:list-content

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/s3/list-content.js](https://github.com/noprotocol/np-cli/blob/v0.2.2/src/commands/s3/list-content.js)_

## `np s3:policy`

List and edit the policy of a S3 bucket.

```
USAGE
  $ np s3:policy

OPTIONS
  -n, --name=name  name of the bucket
  -r, --read       prints the policy of a bucket
```

_See code: [src/commands/s3/policy.js](https://github.com/noprotocol/np-cli/blob/v0.2.2/src/commands/s3/policy.js)_

## `np s3:set`

```
USAGE
  $ np s3:set
```

_See code: [src/commands/s3/set.js](https://github.com/noprotocol/np-cli/blob/v0.2.2/src/commands/s3/set.js)_

## `np setup:craftvue`

Creates a new project based on the np-craftvue boilerplate, including everything you need to get started right away. 

```
USAGE
  $ np setup:craftvue

OPTIONS
  -d, --default    use the default settings to initialize this project.
  -n, --name=name  name of your project.

DESCRIPTION
  Creates a new project based on the np-craftvue boilerplate, including everything you need to get started right away. 

  Batteries-included: 
  - Clone boilerplate 
  - Local git init 
  - Github init
  - Github branch setup (develop, staging, master) 
  - Heroku pipeline setup
  - Creates Heroku apps for each selected environment
  - Setup Heroku app.json configuration 
  - Set correct .env variables for each new Heroku app 
  - Enable Heroku auto-deploy  
  - S3 bucket and user creation 
  - RDS database and user creation
```

_See code: [src/commands/setup/craftvue.js](https://github.com/noprotocol/np-cli/blob/v0.2.2/src/commands/setup/craftvue.js)_

## `np update [CHANNEL]`

update the np CLI

```
USAGE
  $ np update [CHANNEL]
```

_See code: [@oclif/plugin-update](https://github.com/oclif/plugin-update/blob/v1.3.9/src/commands/update.ts)_
<!-- commandsstop -->
