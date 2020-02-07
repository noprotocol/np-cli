const {expect, test} = require('@oclif/test')

describe('set-bucket-policy', () => {
  test
  .stdout()
  .command(['set-bucket-policy'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['set-bucket-policy', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
