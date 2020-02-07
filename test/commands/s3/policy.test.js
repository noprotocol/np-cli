const {expect, test} = require('@oclif/test')

describe('s3:policy', () => {
  test
  .stdout()
  .command(['s3:policy'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['s3:policy', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
