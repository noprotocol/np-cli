const {expect, test} = require('@oclif/test')

describe('delete-s3-bucket', () => {
  test
  .stdout()
  .command(['delete-s3-bucket'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['delete-s3-bucket', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
