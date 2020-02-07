const {expect, test} = require('@oclif/test')

describe('list-s3-buckets', () => {
  test
  .stdout()
  .command(['list-s3-buckets'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['list-s3-buckets', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
