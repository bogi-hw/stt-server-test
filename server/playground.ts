import {erkennungsNummerErzeugen} from "./kennzeichenUtil";

const benchmarkString = `start
${erkennungsNummerErzeugen()} ${erkennungsNummerErzeugen()} ${erkennungsNummerErzeugen()} ${erkennungsNummerErzeugen()}
${erkennungsNummerErzeugen()} ${erkennungsNummerErzeugen()} ${erkennungsNummerErzeugen()} ${erkennungsNummerErzeugen()} ${erkennungsNummerErzeugen()} ${erkennungsNummerErzeugen()} ${erkennungsNummerErzeugen()} ${erkennungsNummerErzeugen()} ${erkennungsNummerErzeugen()} ${erkennungsNummerErzeugen()} ${erkennungsNummerErzeugen()} ${erkennungsNummerErzeugen()}
${erkennungsNummerErzeugen()} ${erkennungsNummerErzeugen()}
${erkennungsNummerErzeugen()}
${erkennungsNummerErzeugen()} pause
weiter
K8 egal ${erkennungsNummerErzeugen()} A1 egal mao ${erkennungsNummerErzeugen()} brumm brumm brumm brumm ${erkennungsNummerErzeugen()}

stop
`

console.log(benchmarkString);
