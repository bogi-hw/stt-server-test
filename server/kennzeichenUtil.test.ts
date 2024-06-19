
import { expect, test, beforeEach,describe } from 'vitest'
import {_erzeugerFunktionen, erkennungsNummerErzeugen, istRelevanteErkennungsNummer} from "./kennzeichenUtil.js";


beforeEach(() => {
});

describe('erkennungsNummerErzeugen - alle Varianten nacheinander', () => {
    for(let i=0;i<_erzeugerFunktionen.length;i++) {
        test('erkennungsNummerErzeugen - Variante ' + i, () => {
            for (let c = 0; c < 1000; c++) {
                const erkNr = erkennungsNummerErzeugen(i);
                expect(_erzeugerFunktionen[i].isValid(erkNr)).toBeTruthy();
            }
        });
    }
})

test('erkennungsNummerErzeugen - Völlig zufällig ', () => {
    for(let c=0;c<1000;c++) {
        const erkNr = erkennungsNummerErzeugen();
        expect(istRelevanteErkennungsNummer(erkNr)).toBeTruthy();
    }
})
