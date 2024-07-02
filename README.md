# Server-side speech to text test



## Anleitung
- [Build tools installieren für ffi-napi](https://github.com/TooTallNate/node-gyp#installation)
- `git clone https://github.com/bogi-hw/stt-server-test.git`
-  `cd stt-server-test` 
- `npm install`
- Audiodatei zu **mono** konvertieren und speichern:  
     Z.B per Audacity:
     - Pfeil runter bei Kanalfenster -> Split stereo to mono
     - Einen der beiden Kanäle löschen
     - Speichern unter `test.wav` im 16bit PCM Format.
- `npm run dev`   
     Dort sollte dann in der Konsole ausgegeben werden: _"Normalized text: start m n v 3 2 2 ...."_