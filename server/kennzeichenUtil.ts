/**
 *
 * @param erzeugerFnIndex undefined = Zufällig automatisch verteilt
 */
export function erkennungsNummerErzeugen(erzeugerFnIndex?: number): string {
    if(erzeugerFnIndex === undefined) {
        erzeugerFnIndex = Math.floor(Math.random() * _erzeugerFunktionen.length);
    }

    const erzeugerFn = _erzeugerFunktionen[erzeugerFnIndex];
    return erzeugerFn.fn();
}

export function istRelevanteErkennungsNummer(value: string) {
    return _erzeugerFunktionen.some(e => e.isValid(value));
}

function randomBuchstabe() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return letters.charAt(Math.floor(Math.random() * letters.length));
}

/**
 *
 * @param min
 * @param max letzte, nicht mehr zu erzeugende ziffer. Z.B. 100 gibt ziffern bis 99 zurück
 */
function randomZiffern(min, max) {
    return "" + (min + Math.floor(+ Math.random() * (max - min)));
}

export const _erzeugerFunktionen: {
    moeglichkeiten: number,
    fn: () => string,
    isValid: (string) => boolean
}[] = [
    // 1 Buchstabe, 1–3 Ziffern
    {
        moeglichkeiten: 25974,
        fn: () => randomBuchstabe() + randomZiffern(0, 1000),
        isValid(value: string) {
            return /^[A-Z][0-9]{1,3}$/.test(value);
        }
    },

    // 2 Buchstaben, 1–2 Ziffern
    {
        moeglichkeiten: 66924,
        fn: () => randomBuchstabe() + randomBuchstabe() + randomZiffern(0, 100),
        isValid(value: string) {
            return /^[A-Z]{2}[0-9]{1,2}$/.test(value);
        }
    },
    // 2 Buchstaben, 3 Ziffern //TODO: Könnte man mit oberer zu Einer zusammenfassen
    {
        moeglichkeiten: 608400,
        fn: () => randomBuchstabe() + randomBuchstabe() + randomZiffern(100, 1000),
        isValid(value: string) {
            return /^[A-Z]{2}[0-9]{3}$/.test(value);
        }
    },
    // 1 Buchstabe, 4 Ziffern:
    {
        moeglichkeiten: 234000,
        fn: () => randomBuchstabe() + randomZiffern(1000,10000),
        isValid(value: string) {
            return /^[A-Z]{1}[0-9]{4}$/.test(value);
        }
    },
    // 2 Buchstaben, 4 Ziffern:
    {
        moeglichkeiten: 6084000,
        fn: () => randomBuchstabe() + randomBuchstabe() + randomZiffern(1000, 10000),
        isValid(value: string) {
            return /^[A-Z]{2}[0-9]{4}$/.test(value);
        }
    },

];