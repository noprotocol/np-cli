const {expect, test} = require('@oclif/test')

describe('s3:list-content', () => {
  test
  .stdout()
  .command(['s3:list-content'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['s3:list-content', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
