const {expect, test} = require('@oclif/test')

describe('setup:init:create', () => {
  test
  .stdout()
  .command(['setup:init:create'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['setup:init:create', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
