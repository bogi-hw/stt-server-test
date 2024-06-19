import {erkennungsNummerErzeugen} from "./kennzeichenUtil";

export function normalizeRecognized(value: string) {
    const ziffernMap = {
        "null": 0, "eins": 1, "zwei": 2, "drei": 3, "vier": 4, "fünf": 5, "sechs": 6, "sieben": 7, "acht": 8, "neun": 9}

    Object.keys(ziffernMap).forEach(text => {
        value = value.replaceAll(text, ziffernMap[text]);
    })

    value = value.replaceAll("\r","");
    value = value.replaceAll("\n"," ");


    return value;
}

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

//console.log(benchmarkString);
console.log(normalizeRecognized("start\n" +
    "NV322 DX590 JP869 T1445\n" +
    "QS2559 U64 XH19 OH68 UR352 BQ13 H9284 W9533 L7240 Y1793 HT19 X28\n" +
    "PO5349 T3257\n" +
    "V414\n" +
    "C439 pause\n" +
    "weiter\n" +
    "K8 egal KQ456 A1 egal mao L940 brumm brumm brumm brumm A9016\n" +
    "\n" +
    "stop"))
