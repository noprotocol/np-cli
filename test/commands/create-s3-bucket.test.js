const {expect, test} = require('@oclif/test')

describe('create-s3-bucket', () => {
  test
  .stdout()
  .command(['create-s3-bucket'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['create-s3-bucket', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
