import React, { createContext, useState } from "react";
export const FagContext = createContext();

const FagContextProvider = props => {
  const [Fag, setFag] = useState([
    {
      img: "../billeder/foto.jpg",
      title: "FOTO",
      text:
        "Fotografi er så meget mere, end at tage skarpe billeder. Det er en helt anden anden måde at se verden på. På fotolinjen skal vi ikke bare lære at fange øjeblikke med kameraet, men også at skabe dem selv. Vi skal lege med lyset og skabe forskellige visuelle udtryk. Alt sammen med begejstringen som drivkraft. Undervisningen er baseret på det kreative arbejde med kameraet og med Photoshop. Den teoretiske del af undervisningen kommer til at foregå med hænder og øjne, for det er nu en gang den bedste måde at lære et kreativt fag på.Vi kommer især til at fokusere på portrætter, reportage og reklamebilleder, men vi skal selvfølgelig prøve mange flere genrer af.Fotolinjen henvender sig både til begyndere og øvede – det eneste der kræves er lysten til at tage billeder og glæden ved at være kreativ.NB: Du skal selv medbringe et kamera, hvis du vælger Foto. Vi peger gerne på et egnet begynderkamera til en fornuftig pris, hvis du skal ud og købe ét.",
      id: 1
    },
    {
      img: "../billeder/sangskriver.jpg",
      title: "SANGSKRIVER",
      text:
        "Musiker/sangskriver-linjen henvender sig til dig som vil være en bedre musiker, sangskriver, sanger etc. og som ønsker at få flere værktøjer og teknikker at arbejde med. Undervisningen tager udgangspunkt i lige netop dit ”projekt”, om det så er at blive bedre til jazzteori, bedre til improvisation, ønsket om at få nye idéer til produktion/sangskrivning, at lære at spille guitar eller noget helt fjerde, så står vi klar med tips og tricks. Så længe du har motivationen, så har vi værktøjerne til at skubbe dig videre for fuld skrue! Undervisningen er bygget op således at der er en del fælles lektioner, og at man så arbejder individuelt under supervision af vores lærere. Og du kommer til at møde alle vores musiklærere på denne linje i løbet af dit ophold, og derudover kommer der også en række spændende gæstelærere forbi. Du får udleveret et massivt kompendium med masser af ting at dykke ned i, både i timerne, men også i fritiden. Der er brugsklaver, jazzguitar, nodetræning, skalaer, trommetips, og masser af sange og noder. Derudover får du som elev på musiker/sangskriver udleveret den meget roste bog ”Kogebog for sangskrivere” af Anette Bjergfeldt, som er en bibel ift. at komme videre med sine sange, og at (gen)finde inspirationen. NB: medbring earplugs/høretelefoner, hvis du vælger Musiker/sangskriver. ",
      id: 2
    },
    {
      img: "../billeder/e-musik.jpg",
      title: "E-MUSIK",
      text:
        "Elektronisk musik på Den lille højskole giver dig mulighed for at udvikle dine evner indenfor musikproduktion med elektronikken som redskab. Forløbet indledes med introduktion til programmet Ableton Live, som vil være den primære software. Herigennem vil du som elev blive fortrolig med programmet inkl. dets mest basale funktioner samt smutvejene til hurtigt at komme i gang med produktionen. Når kendskabet til softwaren er nogenlunde på plads skal det handle om “sound design” med fokus på, hvordan man designer lyd ved hjælp af synthesizers, samplers etc. Et af forløbets vigtigste formål vil være at du bliver I stand til at komponere elektronisk musik fra start til slut. Sampling er et centralt redskab i den proces, som kan bidrage til forståelsen for, hvordan man producerer et track. Endelig vil en del af forløbet fokusere på “the art of DJing”. Her vil der være introduktion til det mest nødvendige gear og dets funktioner. Elektronisk musik laver også projekter på tværs af højskolens øvrige linjefag, heriblandt med skolens rytmiske musiklinjer, danselinjen etc., ligesom linjen indimellem gæstes af fremragende gæstelærere. Bemærk: der er plads til maks. 12 elever på E-musik. ",
      id: 3
    },
    {
      img: "../billeder/dans.jpg",
      title: "DANS",
      text:
        "På Dans arbejdes med forskellige dansestilarter, og du vil blive udfordret fysisk såvel som kreativt. Målet er at udforske og udfordre den enkelte elevs dansemæssige udtryk. Dans på Den lille højskole har moderne dans som hovedfag, men du vil blive introduceret for et bredt spektrum af dansestilarter såsom hip hop, showdance, jazz, ballet og improvisation. Der undervises også i fysisk træning, yoga, samt komposition og kreative processer. Forløbet byder også på en række dygtige gæsteundervisere, der hver især er fagnørder indenfor deres foretrukne dansestilart. Vi skal have det sjovt i gode og trygge omgivelser. Udover en solid teknisk grundtræning, opbygning af kroppens styrke og smidighed, koreografier indenfor forskellige stilarter, og selvfølgelig en masse sved på panden, får du gennem kreative og koreografiske øvelser også mulighed for at udforske dit eget unikke dansesprog og udtryk. På forløbet kommer vi også til at se relevante dansefilm, tage på ekskursioner ud af huset til spændende danseforestillinger og workshops, samt lave vores egne dansevideoer. Foruden at danse og træne i dansesalen er performance også en del af danselinjen, og vi kommer blandt andet til at optræde med koreografier lavet i samarbejde med skolens Elektronisk musik-linje. Alle er velkomne på Dans uanset niveau. Vigtigste forudsætning er, at du er åben for udfordringer samt klar på at rykke og udvikle dig. ",
      id: 4
    },
    {
      img: "../billeder/adventuresport.jpg",
      title: "ADVENTURESPORT",
      text:
        "På Den lille højskoles Adventuresport-linje bliver du udfordret i discipliner som mountainbike, forskellige former for løb, svømning, kano/kajak, klatring og rapelling, rulleski, nat- og mørkeaktiviteter, almen fysisk træning, bueskydning, diverse samarbejdsøvelser, enkelte boldspil etc. Adventuresport er for alle! Vi træner sammen, men differentierer sværhedsgraden efter styrke og færdigheder hos den enkelte, således at alle kan være med uanset niveau. Du behøver ikke at have prøvet kræfter med Adventuresportens discipliner i forvejen. Vigtigst er det at vi har det sjovt, og får prøvet os selv og hinanden af. Du skal have lyst og energi til fysisk aktivitet, hvis du vælger Adventuresport. Hvis muligheden byder sig vil holdet deltage i en eller anden form for ”Adventurerace” i løbet af opholdet. En stor del af undervisningen vil naturligvis foregå udendørs i forhåbentligt godt vejr. Den resterende del af undervisningen vil foregå dels på højskolen, og dels hos vores naboer i Bjerringbro idrætspark. Sideløbende med den aktive undervisning vil der også være en smule teoriundervisning. Denne vil kredse om emner som træningsplanlægning, kost og ernæring, kropsidealer, fysisk træning som livsstil, adventuresport som begreb mm. ",
      id: 5
    }
  ]);
  return (
    <FagContext.Provider value={{ Fag }}>{props.children}</FagContext.Provider>
  );
};
export default FagContextProvider;
