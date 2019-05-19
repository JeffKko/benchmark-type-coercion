const Benchmark = require('benchmark')
const suite = new Benchmark.Suite

function jsParseInt(str) {
  return parseInt(str)
}

function jsNumber(str) {
  return Number(str)
}

function addPlus(str) {
  return +str
}

suite
  .add('jsParseInt', () => {

    jsParseInt('12345')

  })
  .add('jsNumber', () => {

    jsNumber('12345')

  })
  .add('addPlus', () => {

    addPlus('12345')

  })
  .on('cycle', event => console.log(String(event.target)))
  .on('complete', () => console.log('complete'))
  .run({ 'async': true })
