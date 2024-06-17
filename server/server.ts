import * as vosk from 'vosk';
import * as fs from "node:fs";



import { Readable } from "node:stream";
import * as wav from "wav";

const MODEL_PATH = "model"
const FILE_NAME = "test.wav"

if (!fs.existsSync(MODEL_PATH)) {
      console.log("Please download the model from https://alphacephei.com/vosk/models and unpack as " + MODEL_PATH + " in the current folder.")
    process.exit()
}

vosk.setLogLevel(0);
const model = new vosk.Model(MODEL_PATH);

const wfReader = new wav.Reader();
const wfReadable = new Readable().wrap(wfReader);

wfReader.on('format', async ({ audioFormat, sampleRate, channels }) => {
    if (audioFormat != 1 || channels != 1) {
        console.error("Audio file must be WAV format mono PCM.");
        process.exit(1);
    }

    const grammar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "eins", "zwei", "drei", "vier", "fünf", "sechs", "sieben", "acht", "neun",
        "start",
        "stop", "pause",
        "hilfe", "unterstützung",
        "weiter", "egal", "nächstes", //
        "mao", "brumm", /* auto zu schnell / keine Zeit zum erfassen */
    ];

    const rec = new vosk.Recognizer({model: model, sampleRate: sampleRate, grammar: grammar});
    rec.setMaxAlternatives(10);
    rec.setWords(true);
    rec.setPartialWords(true);
    for await (const data of wfReadable) {
        const end_of_speech = rec.acceptWaveform(data);
        if (end_of_speech) {
            //console.log(JSON.stringify(rec.result(), null, 4));
        } else {
            //console.log(JSON.stringify(rec.partialResult(), null, 4));
        }
    }
    let result = rec.finalResult(rec);
    console.log(JSON.stringify(result, null, 4));
    rec.free();
});

fs.createReadStream(FILE_NAME, {'highWaterMark': 4096}).pipe(wfReader).on('finish',
    function (err) {
        model.free();
    });