const {expect, test} = require('@oclif/test')

describe('craftvue', () => {
  test
  .stdout()
  .command(['craftvue'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['craftvue', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
