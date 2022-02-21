import fs from "fs";
import moment from "moment";
setInterval(() => {
    loadNotes(moment().format('LTS'))
}, 1000);



function loadNotes(moment) {
    const notes = readNotes();
    if (notes =="err") {
        fs.promises.writeFile('moment.txt', moment)
    } else {

        fs.promises.writeFile('moment.txt', (notes +"\n"+moment));
    }
}
function readNotes() {
    try {
       return fs.readFileSync('moment.txt', 'utf-8');
        
    } catch (err) {
        return "err"
    }

}

