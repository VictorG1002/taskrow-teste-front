import Groups from './groups';

const numeroXpto = require('./numeroXpto');

console.log(numeroXpto.calculaDV(4638));

console.log(numeroXpto.validaNumeroXpto(46387));

const grupos = new Groups();

grupos.load().then(() => {
  grupos.search('josé', (gruposEncontrados) => {
    console.log(gruposEncontrados);
  });
});
