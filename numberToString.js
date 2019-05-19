const Benchmark = require('benchmark')
const suite = new Benchmark.Suite

function jsToString(num) {
  return num.toString()
}

function jsString(num) {
  return String(num)
}

function plusEmptyString(num) {
  return num + ''
}

function es6StringTpl(num) {
  return `${num}`
}

suite
  .add('jsToString', () => {

    jsToString(12345)

  })
  .add('jsString', () => {

    jsString(12345)

  })
  .add('plusEmptyString', () => {

    plusEmptyString(12345)

  })
  .add('es6StringTpl', () => {

    es6StringTpl(12345)

  })
  .on('cycle', event => console.log(String(event.target)))
  .on('complete', () => console.log('complete'))
  .run({ 'async': true })
