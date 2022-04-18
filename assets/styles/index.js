const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('a');
const lEl = document.querySelector('.l');
const pEl = document.querySelector('.p');
const shEl = document.querySelector('.sh');
const la = document.querySelector('.la');
const ro = document.querySelector('.ro');
const lang2 = document.querySelector('.lang2');
const lang3 = document.querySelector('.lang3');
const lang4 = document.querySelector('.lang4');
const profi = document.querySelector('.profi');
const n = document.querySelector('.n');
const pro = document.querySelector('.pro');
const pron = document.querySelector('.pron');
const h = document.querySelector('.h');
const hi = document.querySelector('.hi');
const his = document.querySelector('.his');
const hist = document.querySelector('.hist');
const histo = document.querySelector('.histo');
const m = document.querySelector('.m');
const b = document.querySelector('.b');
const ba = document.querySelector('.ba');
const bar = document.querySelector('.bar');
const bart = document.querySelector('.bart');
const barte = document.querySelector('.barte');
const barten = document.querySelector('.barten');
const e = document.querySelector('.e');
const ed = document.querySelector('.ed');
const w = document.querySelector('.w');
const c = document.querySelector('.c');
const a = document.querySelector('.a');
const ap = document.querySelector('.ap');
const app = document.querySelector('.app');
const appl = document.querySelector('.appl');
const appli = document.querySelector('.appli');
const applic = document.querySelector('.applic');

link.forEach(el =>{
    el.addEventListener('click',() => {
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');
        const attr = el.getAttribute('language');

        lEl.textContent = data[attr].l;
        pEl.textContent = data[attr].p;
        shEl.textContent = data[attr].sh;
        la.textContent = data[attr].la;
        ro.textContent = data[attr].ro;
        lang2.textContent = data[attr].lang2;
        lang3.textContent = data[attr].lang3;
        lang4.textContent = data[attr].lang4;
        profi.textContent = data[attr].profi;
        n.textContent = data[attr].n;
        pro.textContent = data[attr].pro;
        pron.textContent = data[attr].pron;
        h.textContent = data[attr].h;
        hi.textContent = data[attr].hi;
        his.textContent = data[attr].his;
        hist.textContent = data[attr].hist;
        histo.textContent = data[attr].histo;
        m.textContent = data[attr].m;
        b.textContent = data[attr].b;
        ba.textContent = data[attr].ba;
        bar.textContent = data[attr].bar;
        bart.textContent = data[attr].bart;
        barte.textContent = data[attr].barte;
        barten.textContent = data[attr].barten;
        e.textContent = data[attr].e;
        ed.textContent = data[attr].ed;
        w.textContent = data[attr].w;
        c.textContent = data[attr].c;
        a.textContent = data[attr].a;
        ap.textContent = data[attr].ap;
        app.textContent = data[attr].app;
        appl.textContent = data[attr].appl;
        appli.textContent = data[attr].appli;
        applic.textContent = data[attr].applic;
    });

});

let data = {
    "english":{
        "l": "Location",
        "p": "Phone",
        "sh": "Links to projects:",
        "la": "Languages",
        "ro": "Romanian",
        "lang2": "Russian",
        "lang3": "English",
        "lang4": "French",
        "profi": "Profile",
        "n":"My name is Sicorschi Tudor, I graduatite high school at the Center of Excellence in Economics and Finance,major Web Application Administrator.I am currently a 1st year student at the State University of Moldova.",
        "pro":"Since the moment I started my studies at IT-PROFIT, I assimilated a large amount of information and I also evolved in this domain.",
        "pron":"I am a young man obsessed with information technology, I love to create beautiful and useful things.",
        "h": "Employment history",
        "hi": "Follow the best safety practices, both on the road and during loading or unloading.",
        "his": "Communication with call center, other team members to make deliveries.",
        "hist": "Compliance with the delivery deadline.",
        "histo": "Loading and unloading the goods.",
        "m":"Delivery",
        "b":"Bartender",
        "ba":"Mixing different ingredients to make cocktails and mocktails.",
        "bar":" Receiving payments.",
        "bart":"Serving customers staying at the bar with a drink",
        "barte":"Ordering the necessary products for the bar.",
        "barten":"Check to making sure that the customers have the legal age required before buying tobacco and alcohol products.",
        "e":"Education",
        "ed":"Knowledge obtained after completing the course:",
        "w":"Web Application Administrator",
        "c":"Center of Excellence in Economics and Finance",
        "a":"Web application planning",
        "ap":"Web application development",
        "app":"Realization of the experimental model",
        "appl":"Web application testing",
        "appli":"Implementing the web application",
        "applic":"Average knowledge after graduation:",
    },
    "romanian":{
        "l": "Locatia",
        "p": "Telefon",
        "sh": "Linkuri la Proiecte:",
        "la": "Limbi",
        "ro": "Română",
        "lang2": "Rusă",
        "lang3": "Engleză",
        "lang4": "Franceză",
        "profi": "Profil",
        "n":"Ma numesc Sicorschi Tudor, am finisat studiile la Centrul de Excelenta in Economie si Finante, specialitatea Administrator Aplicatii Web. In prezent sunt student in anul 1 la Universitatea de Stat din Moldova.",
        "pro":"Din momentul in care am inceput studiile la IT-PROFIT, am asimilat o cantitate mare de informatii și am evoluat in domeniu.",
        "pron":"Sunt un tânăr obsedat de tehnologia informației, îmi place să creez lucruri frumoase și utile.",
        "h": "Istoria Angajărilor",
        "hi": "Respectarea celor mai bune practici de siguranță, atât pe drum, cât și în timpul încărcării sau descărcarii.",
        "his": "Comunicare cu call center, alți membri ai echipei pentru a face livrări.",
        "hist": "Respectarea termenului de livrare.",
        "histo": "Încărcarea și descărcarea mărfurilor.",
        "m":"Livrator",
        "b":"Barman",
        "ba":"Amestecarea diferitelor ingrediente pentru a face cocktail-uri și mocktails.",
        "bar":"Primirea platilor",
        "bart":"Servirea clienților.",
        "barte":"Comanda consumabilelor necesare pentru bar.",
        "barten":"Verificarea pentru a ma asigura că clienții îndeplinesc cerințele legale de vârstă înainte de a cumpăra produse din tutun și alcool.",
        "e":"Studii",
        "ed":"Cunoștințe obținute în urma parcurgerii cursului:",
        "w":"Administrator de aplicații web",
        "c":"Centrul de Excelență în Economie și Finanțe",
        "a":"Planificarea aplicațiilor web",
        "ap":"Dezvoltarea aplicatiilor web",
        "app":"Realizarea modelului experimental",
        "appl":"Testarea aplicațiilor web",
        "appli":"Implementarea aplicatiei web",
        "applic":"Cunoștințe medii după absolvire:",
    }
};
