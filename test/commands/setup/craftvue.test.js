const {expect, test} = require('@oclif/test')

describe('setup:craftvue', () => {
  test
  .stdout()
  .command(['setup:craftvue'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['setup:craftvue', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
