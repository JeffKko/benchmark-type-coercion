const Benchmark = require('benchmark')
const suite = new Benchmark.Suite

function jsBoolean(num) {
  return Boolean(num)
}

function addPlaint(num) {
  return !num
}

function addPlaintPlaint(num) {
  return !!num
}

suite
  .add('jsBoolean', () => {

    jsBoolean(1)

  })
  .add('addPlaint', () => {

    addPlaint(1)

  })
  .add('addPlaintPlaint', () => {

    addPlaintPlaint(1)

  })
  .on('cycle', event => console.log(String(event.target)))
  .on('complete', () => console.log('complete'))
  .run({ 'async': true })