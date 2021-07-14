window.APP = {};

window.mainPage = document.querySelector('#root');

APP.tracksOver2000 = [
	{
        name: "Munții Bucegi",
        location: "Între Valea Prahovei și culoarul Rucăr-Bran",
        image: "",
        max:"Vârful Omu - 2505m"
    },
    {
        name: "Creasta Pietrei Craiului",
        location: "Pe culoarul Rucăr-Bran, satul Peștera, spre N-V",
        image: "",
        max: "Vârful La Om (Piscul Baciului) - 2238m"
    },
    {
        name: "Masivul Iezer-Păpușa",
        location: "Între Râul Dâmbovița și Râul Doamnei",
        image: "",
        max: "Vârful Roșu - 2470m"
    },
    {
        name: "Munții Făgăraș",
        location: "Între Valea Oltului, râul Bârsa Groșetului și Râul Dâmbovița",
        image: "",
        max: "Vârful Moldoveanu - 2544m"
    },
    {
        name: "Munții Leaota",
        location: "Între Valea Dâmboviței și Munții Bucegi",
        image: "",
        max: "Vârful Leaota - 2135m"
    },
    {
        name: "Munții Căpățânii",
        location: "Între Valea Oltului și Valea Jiului",
        image: "",
        max: "Vârful Nedeia- 2130m"
    },
    {
        name: "Munții Lătoriței",
        location: "Între râul Latorița și râul Lotru",
        image: "",
        max: "Vârful Bora - 2055m"
    },
    {
        name: "Munții Lotrului",
        location: "Între munții Cindrel, Căpățânii, Lătoriței și Făgăraș",
        image: "",
        max: "Vârful Șteflești - 2242m"
    },
    {
        name: "Munții Cindrel",
        location: "Între râul Sebeș, râul Sadu și Podișul Transilvaniei",
        image: "",
        max: "Vârful Cindrel - 2245m"
    },
    {
        name: "Munții Parâng",
        location: "Între Valea Jiului, râul Olteț și râul Lotru",
        image: "",
        max: "Vârful Parângul Mare - 2518m"
    },
    {
        name: "Munții Șureanu",
        location: "Între Valea Mureșului și Hațeg, Petroșani",
        image: "",
        max: "Vârful lui Pătru - 2130m"
    },
    {
        name: "Munții Retezat",
        location: "Între depresiunile Petroșani și Hațeg",
        image: "",
        max: "Vârful Peleaga - 2509m"
    },
    {
        name: "Munții Piule-Iorgovanul",
        location: "Între Retezat și Godeanu, distinși prin alcătuirea geologică, niște calcare jurasice cu grosimi mari",
        image: "",
        max: "Vârful Piule - 2081m"
    },
    {
        name: "Munții Godeanu",
        location: "Între râurile Jiu, Timiș și Cerna",
        image: "",
        max: "Vârful Gugu - 2291m"
    },
    {
        name: "Munții Țarcu",
        location: "Între râurile Timiș și Bistra, respectiv valea râului Șes și a Râului Mare",
        image: "",
        max: "Vârful Căleanu - 2196m"
    }
];

APP.tracksUnder2000 = [
    {
        name: "Munții Ghițu", 
        location: "Între Valea Limpedei, a Vâlsanului, depresiunea Moliviș și Subcarpații Argeșului",
        image: "",
        max: "Vârful Ghițu - 1622m"
    },
    {
        name: "Munții Frunții", 
        location: "Aparțin grupei de munți Iezer-Păpușa",
        image: "",
        max: "Vârful Munțișor - 1534m"
    },
    {
        name: "Munții Țaga", 
        location: "Aparțin grupei de munți Iezer-Păpușa",
        image: "",
        max: "Vârful Țagla - 1641m"
    },
    {
        name: "Masivul Cozia", 
        location: "Între Valea Oltului, Țara Loviștei și pârâul Loviștei",
        image: "",
        max: "Vârful Ciuha Mare(Cozia) - 1668m"
    },
    {
        name: "Munții Vâlcan", 
        location: "Închiderea arcului carpatic între Jiu și Dunăre",
        image: "",
        max: "Vârful Oslea"
    },
    {
        name: "Munții Tulișa", 
        location: "Între Depresiunea Hațegului, Culoarul Banița, Depresiunea Petroșani și Valea Jiului de Vest",
        image: "",
        max: "Vârful Tulișa - 1792m"
    },
    {
        name: "Munții Mehedinți", 
        location: "Între Valea Cernei, Valea Motrului și Podișul Mehedinți",
        image: "",
        max: "Vârful lui Stan - 1466m"
    },
    {
        name: "Munții Cernei", 
        location: "Între Valea Cernei, Depresiunea Caransebeș-Mehadia, Valea Râului Rece și Valea Olanului",
        image: "",
        max: "Vârful Dobrii - 1928m"
    },
    {
        name: "Muntele Mic", 
        location: "Se găsește în Munții Țarcu",
        image: "",
        max: "Vârful Muntele Mic - 1802m"
    }
];

APP.addTracksOver2000 = (tracksOver2000) => {
	localStorage.setItem("tracksOver2000", JSON.stringify(tracksOver2000));
};

APP.getTracksOver2000 = () => {
	const tracksOver2000 = localStorage.getItem("tracksOver2000");
	return JSON.parse(tracksOver2000);
};

if(APP.getTracksOver2000() === null) {
	APP.addTracksOver2000(APP.tracksOver2000);
} 

function startRendering() {
	APP.renderTracksList(APP.getTracksOver2000());
}

window.addEventListener('load', startRendering);

let meridionaliContent = document.querySelector("#root");

meridionaliContent.innerHTML += `
    <h1 class="mountain-title">Carpații Meridionali</h1>
    <h2 class="emphasized-title">Alpii Transilvaniei</h2>

    <div class="description">
        <p class="about-mountain">
            Una dintre cele trei grupe muntoase ale României, Carpații Meridionali reprezintă cea mai masivă și mai spectaculoasă grupă
            montană a României, aici găsindu-se singurele vârfuri de peste 2500m din România, începând cu Vârful Moldoveanu, cel mai înalt,
            având altitudinea de 2544m și încheindu-se cu vârful Dara, având altitudinea de 2500m. Se situează între Depresiunea Transilvaniei
            la nord, culoarul depresionar Cerna-Timiș-Bistra-Hațeg-Ștei-Orăștie la vest, respectiv valea Prahovei și valea Timișului la est, iar 
            în sud se află Subcarpații Curburii, Subcarpații Getici și Podișul Mehedinți.
        </p>
    </div>

    <div class="buffer"></div>

    <div class="container"></div>
`;

