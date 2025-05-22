import type { HistoricalEvent, TimelineSection } from '../types/history';

export const historicalData: Array<TimelineSection & { events: HistoricalEvent[] }> = [
  {
    id: 'tito-domiziano',
    title: 'Da Tito a Domiziano',
    startYear: 79,
    endYear: 96,
    events: [
      {
        id: 'tito-regno',
        year: 79,
        title: 'Inizio del Regno di Tito',
        description: 'Tito succede al padre Vespasiano. Durante il suo breve regno risponderà efficacemente a diverse calamità che metteranno alla prova la sua leadership.',
        category: 'Imperatori',
        importance: 1
      },
      {
        id: 'vesuvio',
        year: 79,
        title: 'Eruzione del Vesuvio',
        description: 'L\'eruzione distrugge Pompei, Ercolano e Stabia, causando numerose morti per polveri sottili. Tito si reca personalmente sul posto e utilizza l\'erario imperiale per aiutare la popolazione colpita.',
        category: 'Eventi naturali',
        importance: 3
      },
      {
        id: 'incendio-roma',
        year: 79,
        title: 'Grande Incendio di Roma',
        description: 'Mentre Tito è a Pompei, scoppia un devastante incendio a Roma che causa la morte di 5000 ebrei. I terreni bruciati causano un aumento delle temperature e una crisi agricola.',
        category: 'Catastrofi',
        importance: 2
      },
      {
        id: 'colosso-nerone',
        year: 80,
        title: 'Completamento del Colosso',
        description: 'Tito completa il Colosso di Nerone, la statua gigantesca che dà il nome all\'anfiteatro. Il volto della statua viene modificato e successivamente la statua viene distrutta.',
        category: 'Monumenti',
        importance: 2
      },
      {
        id: 'morte-tito',
        year: 81,
        title: 'Morte di Tito e Apoteosi',
        description: 'Tito muore di malattia. Gli viene conferita l\'apoteosi (divinizzazione post-mortem) con una grande cerimonia nel Colosseo, unendosi così a Vespasiano, Cesare, Augusto e Claudio tra gli imperatori divinizzati.',
        category: 'Imperatori',
        importance: 3
      },
      {
        id: 'domiziano-inizio',
        year: 81,
        title: 'Inizio del Regno di Domiziano',
        description: 'Domiziano succede a Tito. Si fa attribuire i titoli di Austero, per la sua severità e decisione derivante dall\'esperienza militare, e di Eccentrico, per la sua passione per le statue.',
        category: 'Imperatori',
        importance: 3
      },
      {
        id: 'domiziano-leggi',
        year: 82,
        title: 'Riforme di Domiziano',
        description: 'Domiziano ripristina le leggi morali di Augusto e perseguita i cristiani, arrivando a uccidere il nobile Flavio Clemente accusato di cristianesimo. Avvia anche la civilizzazione permanente delle regioni reno-danubiane.',
        category: 'Leggi e Riforme',
        importance: 2
      },
      {
        id: 'agri-decumates',
        year: 83,
        title: 'Riforma degli Agri Decumates',
        description: 'Per risolvere il problema della fuga dalle legioni, Domiziano divide l\'ager publicus in appezzamenti assegnati ai soldati, che devono pagare allo stato la decima parte del raccolto.',
        category: 'Leggi e Riforme',
        importance: 2
      },
      {
        id: 'morte-domiziano',
        year: 96,
        title: 'Assassinio di Domiziano',
        description: 'Domiziano viene assassinato da una congiura, alla quale si sospetta abbia aderito anche la moglie sostenuta dai familiari e dal senato. La sua morte è legata all\'abuso della legge di lesa maestà e alla marginalizzazione del senato.',
        category: 'Imperatori',
        importance: 3
      }
    ]
  },
  {
    id: 'nerva-traiano',
    title: 'Da Nerva a Traiano',
    startYear: 96,
    endYear: 117,
    events: [
      {
        id: 'nerva-impero',
        year: 96,
        title: 'Impero di Transizione di Nerva',
        description: 'Il senato elegge Nerva, un anziano senatore, dando inizio all\'impero d\'adozione. Nerva adotta Traiano come suo successore, favorito dai soldati per i suoi meriti.',
        category: 'Imperatori',
        importance: 3
      },
      {
        id: 'traiano-inizio',
        year: 98,
        title: 'Inizio del Regno di Traiano',
        description: 'Traiano diventa il primo imperatore provinciale, provenendo dalla penisola iberica. Avvia importanti riforme economiche tra cui il risanamento dell\'erario e la riduzione dell\'imposta sull\'eredità.',
        category: 'Imperatori',
        importance: 3
      },
      {
        id: 'conquista-dacia',
        year: 106,
        title: 'Conquista della Dacia',
        description: 'Traiano conquista la Dacia, che diventa provincia romana, nell\'ambito della sua politica espansionistica volta a risanare le finanze dello stato.',
        category: 'Conquiste',
        importance: 3
      },
      {
        id: 'arabia-petrea',
        year: 106,
        title: 'Annessione dell\'Arabia Petrea',
        description: 'Traiano annette la penisola arabica, creando la provincia dell\'Arabia Petrea, importante per gli scambi commerciali con l\'oriente.',
        category: 'Conquiste',
        importance: 2
      },
      {
        id: 'guerra-parti',
        year: 114,
        title: 'Guerra contro i Parti',
        description: 'Traiano ottiene la provincia dell\'Armenia e della Mesopotamia nella guerra contro i Parti, portando l\'impero alla sua massima espansione.',
        category: 'Conquiste',
        importance: 3
      },
      {
        id: 'morte-traiano',
        year: 117,
        title: 'Morte di Traiano',
        description: 'Traiano muore improvvisamente in Cilicia, dopo aver adottato il comandante delle legioni orientali, Adriano, come suo successore.',
        category: 'Imperatori',
        importance: 3
      }
    ]
  },
  {
    id: 'adriano-antonino',
    title: 'Da Adriano ad Antonino Pio',
    startYear: 117,
    endYear: 161,
    events: [
      {
        id: 'adriano-inizio',
        year: 117,
        title: 'Inizio del Regno di Adriano',
        description: 'Adriano, proveniente dall\'aristocrazia spagnola e amante della cultura greca, inizia il suo regno. Si distingue per i suoi numerosi viaggi culturali e la costruzione di Villa Adriana.',
        category: 'Imperatori',
        importance: 3
      },
      {
        id: 'riforme-adriano',
        year: 118,
        title: 'Riforme Amministrative di Adriano',
        description: 'Adriano migliora l\'amministrazione stabilendo gradi e compensi per gli ufficiali pubblici, fa redigere leggi valide per tutti e rafforza il consiglio del principe.',
        category: 'Leggi e Riforme',
        importance: 2
      },
      {
        id: 'vallo-adriano',
        year: 122,
        title: 'Costruzione del Vallo Adriano',
        description: 'Adriano costruisce una muraglia per proteggere la provincia della Britannia, abbandonando la politica espansionistica di Traiano in favore di una strategia difensiva.',
        category: 'Architettura Militare',
        importance: 3
      },
      {
        id: 'rivolta-giudea',
        year: 132,
        title: 'Grande Rivolta Giudaica',
        description: 'Scoppia una grande insurrezione in Giudea, sedata da Adriano con un grande spargimento di sangue. In seguito, Adriano trasforma Gerusalemme in una colonia romana.',
        category: 'Rivolte',
        importance: 3
      },
      {
        id: 'morte-adriano',
        year: 138,
        title: 'Morte di Adriano',
        description: 'Adriano muore dopo aver consolidato i confini dell\'impero e riformato l\'amministrazione.',
        category: 'Imperatori',
        importance: 3
      },
      {
        id: 'antonino-inizio',
        year: 138,
        title: 'Inizio del Regno di Antonino Pio',
        description: 'Antonino Pio succede ad Adriano. Si distingue per una politica difensiva con la costruzione di due valli e l\'introduzione di maggiori diritti per gli schiavi.',
        category: 'Imperatori',
        importance: 3
      }
    ]
  },
  {
    id: 'marco-aurelio-commodo',
    title: 'Da Marco Aurelio a Commodo',
    startYear: 161,
    endYear: 192,
    events: [
      {
        id: 'marco-aurelio-inizio',
        year: 161,
        title: 'Inizio del Regno di Marco Aurelio',
        description: 'Marco Aurelio, filosofo stoico, inizia il suo regno insieme al fratello Lucio Vero. Deve affrontare i primi sintomi della crisi dell\'impero.',
        category: 'Imperatori',
        importance: 3
      },
      {
        id: 'invasione-parti',
        year: 161,
        title: 'Invasione dei Parti',
        description: 'I Parti invadono l\'Armenia e la Siria, segnando l\'inizio di un periodo di instabilità ai confini dell\'impero.',
        category: 'Guerre',
        importance: 2
      },
      {
        id: 'invasione-quadi',
        year: 166,
        title: 'Invasione dei Quadi e Marcomanni',
        description: 'I Quadi e i Marcomanni oltrepassano il Danubio e arrivano nel nord-est dell\'Italia. Nello stesso periodo, un\'epidemia di peste dalla Mesopotamia raggiunge Roma.',
        category: 'Guerre',
        importance: 3
      },
      {
        id: 'morte-lucio-vero',
        year: 169,
        title: 'Morte di Lucio Vero',
        description: 'Lucio Vero, co-imperatore con Marco Aurelio, muore lasciando quest\'ultimo come unico imperatore.',
        category: 'Imperatori',
        importance: 2
      },
      {
        id: 'commodo-successione',
        year: 177,
        title: 'Nomina di Commodo',
        description: 'Marco Aurelio nomina come suo successore il figlio Commodo, che riproporrà il modello autocratico.',
        category: 'Imperatori',
        importance: 2
      },
      {
        id: 'morte-marco-aurelio',
        year: 180,
        title: 'Morte di Marco Aurelio',
        description: 'Marco Aurelio muore a Vindobona (l\'attuale Vienna) dopo 19 anni di spedizioni militari durante le quali aveva utilizzato le sue ricchezze personali per sostenere lo stato.',
        category: 'Imperatori',
        importance: 3
      },
      {
        id: 'pace-marcomanni',
        year: 180,
        title: 'Pace con Quadi e Marcomanni',
        description: 'Commodo conclude frettolosamente la pace con Quadi e Marcomanni, rinunciando ai territori per i quali il padre aveva combattuto.',
        category: 'Guerre',
        importance: 2
      },
      {
        id: 'morte-commodo',
        year: 192,
        title: 'Assassinio di Commodo',
        description: 'Commodo viene assassinato in seguito a una congiura, dopo un regno caratterizzato da donativi alla plebe e giochi sontuosi, ma anche dall\'allontanamento del senato.',
        category: 'Imperatori',
        importance: 3
      }
    ]
  },
  {
    id: 'severi',
    title: 'Dinastia dei Severi',
    startYear: 193,
    endYear: 235,
    events: [
      {
        id: 'guerra-civile',
        year: 193,
        title: 'Guerra Civile',
        description: 'Alla morte di Commodo scoppia il caos con l\'elezione di due sovrani: Elvio Pertinace e Didio Giuliano. Le legioni proclamano tre sovrani, tra cui Settimio Severo.',
        category: 'Guerre Civili',
        importance: 3
      },
      {
        id: 'settimio-severo-inizio',
        year: 193,
        title: 'Inizio della Dinastia dei Severi',
        description: 'Settimio Severo, originario dell\'Africa e con una carriera militare, diventa imperatore dando inizio alla dinastia dei Severi.',
        category: 'Imperatori',
        importance: 3
      },
      {
        id: 'riforme-severo',
        year: 194,
        title: 'Riforme di Settimio Severo',
        description: 'Severo favorisce le province a discapito del senato, ammette provinciali in senato e aumenta i benefici per i soldati, specialmente nelle zone pericolose. Questo porta a un aumento delle tasse.',
        category: 'Leggi e Riforme',
        importance: 3
      },
      {
        id: 'crisi-iii-secolo',
        year: 235,
        title: 'Fine della Dinastia e Inizio della Crisi',
        description: 'Con la morte di Alessandro Severo si conclude la dinastia dei Severi. Le alte tasse e i problemi di carestia portano alla Crisi del III secolo.',
        category: 'Crisi',
        importance: 3
      }
    ]
  },
  {
    id: 'anarchia-militare',
    title: 'Anarchia Militare',
    startYear: 235,
    endYear: 284,
    events: [
      {
        id: 'inizio-anarchia',
        year: 235,
        title: 'Inizio dell\'Anarchia Militare',
        description: 'Inizia un periodo di caos in cui vengono eletti numerosi imperatori contemporaneamente. Le legioni assumono maggiore importanza militare mentre i pretoriani diventano gradualmente funzionari amministrativi.',
        category: 'Crisi',
        importance: 3
      },
      {
        id: 'massimino-trace',
        year: 235,
        title: 'Massimino il Trace',
        description: 'Primo imperatore analfabeta, sposta la capitale a Sirmio. La sua ascesa evidenzia la frattura tra il senato e le legioni dopo la riforma di Caio Mario.',
        category: 'Imperatori',
        importance: 2
      },
      {
        id: 'filippo-arabo',
        year: 244,
        title: 'Filippo l\'Arabo e la Pace con i Parti',
        description: 'Ex prefetto del pretorio, stringe la pace con i Parti e contrasta le incursioni dei Goti. Durante il suo regno, il Regno di Palmira diventa autonomo.',
        category: 'Imperatori',
        importance: 2
      },
      {
        id: 'decio-persecuzioni',
        year: 250,
        title: 'Persecuzioni di Decio',
        description: 'Emana un editto contro i cristiani, riprendendo le persecuzioni. Introduce l\'obbligo del rito dell\'imperatore, con rilascio di un libello come prova.',
        category: 'Religione',
        importance: 3
      },
      {
        id: 'aureliano-riforme',
        year: 270,
        title: 'Riforme di Aureliano',
        description: 'Costruisce le mura di Roma, riconquista i regni indipendenti e argina le espansioni ai danni dell\'impero.',
        category: 'Imperatori',
        importance: 3
      }
    ]
  },
  {
    id: 'tetrarchia-costantino',
    title: 'Dalla Tetrarchia a Costantino',
    startYear: 284,
    endYear: 337,
    events: [
      {
        id: 'diocleziano-tetrarchia',
        year: 284,
        title: 'Tetrarchia di Diocleziano',
        description: 'Diocleziano divide l\'impero in quattro parti con due Augusti (lui e Massimiano) e due Cesari (Galerio e Costanzo Cloro). Introduce riforme amministrative e militari significative.',
        category: 'Riforme Politiche',
        importance: 3
      },
      {
        id: 'editto-prezzi',
        year: 301,
        title: 'Editto dei Prezzi',
        description: 'Diocleziano stabilisce un tetto massimo per i prezzi dei beni di prima necessità, tentando di controllare l\'inflazione.',
        category: 'Economia',
        importance: 2
      },
      {
        id: 'abdicazione-diocleziano',
        year: 305,
        title: 'Abdicazione di Diocleziano',
        description: 'Diocleziano rinuncia al potere e costringe Massimiano a fare lo stesso, creando instabilità nel sistema tetrarchico.',
        category: 'Politica',
        importance: 2
      },
      {
        id: 'costantino-ascesa',
        year: 306,
        title: 'Ascesa di Costantino',
        description: 'Dopo la morte di Costanzo Cloro, le legioni della Britannia eleggono Costantino come imperatore, dando inizio a una nuova era.',
        category: 'Imperatori',
        importance: 3
      },
      {
        id: 'battaglia-milvio',
        year: 312,
        title: 'Battaglia di Ponte Milvio',
        description: 'Costantino sconfigge Massenzio a Roma, evento che segna l\'inizio del favore imperiale verso il cristianesimo.',
        category: 'Guerre',
        importance: 3
      },
      {
        id: 'editto-milano',
        year: 313,
        title: 'Editto di Milano',
        description: 'Costantino emana l\'editto che garantisce la libertà di culto ai cristiani e a tutte le religioni dell\'impero.',
        category: 'Religione',
        importance: 3
      }
    ]
  },
  {
    id: 'dopo-costantino',
    title: 'Dai Figli di Costantino a Teodosio',
    startYear: 337,
    endYear: 395,
    events: [
      {
        id: 'divisione-impero-costantino',
        year: 337,
        title: 'Divisione dell\'Impero tra i Figli di Costantino',
        description: 'L\'impero viene diviso tra Costante (cristiano cattolico), Costanzo II (ariano) e Costantino II (che muore subito).',
        category: 'Politica',
        importance: 3
      },
      {
        id: 'giuliano-apostata',
        year: 361,
        title: 'Regno di Giuliano l\'Apostata',
        description: 'Giuliano tenta di restaurare il paganesimo e diventa il primo imperatore a utilizzare la scuola come strumento di diffusione ideologica.',
        category: 'Imperatori',
        importance: 2
      },
      {
        id: 'battaglia-adrianopoli',
        year: 378,
        title: 'Disastro di Adrianopoli',
        description: 'L\'esercito romano viene annientato dai Visigoti e l\'imperatore Valente muore in battaglia, segnando una svolta nei rapporti con i barbari.',
        category: 'Guerre',
        importance: 3
      },
      {
        id: 'teodosio-imperatore',
        year: 379,
        title: 'Teodosio Diventa Imperatore',
        description: 'Il generale spagnolo Teodosio viene nominato imperatore d\'Oriente, dovendo affrontare la crisi dell\'esercito e i problemi con i Visigoti.',
        category: 'Imperatori',
        importance: 3
      },
      {
        id: 'editto-tessalonica',
        year: 380,
        title: 'Editto di Tessalonica',
        description: 'Teodosio stabilisce il cristianesimo come religione di stato, vietando i culti pagani.',
        category: 'Religione',
        importance: 3
      }
    ]
  },
  {
    id: 'caduta-occidente',
    title: 'Caduta dell\'Impero d\'Occidente',
    startYear: 395,
    endYear: 476,
    events: [
      {
        id: 'divisione-impero',
        year: 395,
        title: 'Divisione Definitiva dell\'Impero',
        description: 'Alla morte di Teodosio, l\'impero viene diviso definitivamente tra i suoi figli: Onorio in Occidente e Arcadio in Oriente.',
        category: 'Politica',
        importance: 3
      },
      {
        id: 'sacco-roma',
        year: 410,
        title: 'Sacco di Roma',
        description: 'I Visigoti di Alarico saccheggiano Roma per tre giorni, segnando simbolicamente la fine dell\'inviolabilità della città eterna.',
        category: 'Guerre',
        importance: 3
      },
      {
        id: 'attila-invasione',
        year: 452,
        title: 'Invasione di Attila',
        description: 'Attila e gli Unni invadono l\'Italia settentrionale, fermandosi dopo l\'incontro con Papa Leone I.',
        category: 'Invasioni',
        importance: 3
      },
      {
        id: 'fine-impero',
        year: 476,
        title: 'Caduta dell\'Impero Romano d\'Occidente',
        description: 'Odoacre depone l\'ultimo imperatore Romolo Augustolo e invia le insegne imperiali a Costantinopoli, segnando la fine formale dell\'Impero d\'Occidente.',
        category: 'Eventi Storici',
        importance: 3
      }
    ]
  },
  {
    id: 'giustiniano-cosroe',
    title: 'Da Giustiniano a Cosroe II',
    startYear: 527,
    endYear: 628,
    events: [
      {
        id: 'giustiniano-regno',
        year: 527,
        title: 'Inizio del Regno di Giustiniano',
        description: 'Giustiniano diventa imperatore con l\'obiettivo della "restauratio imperii". Sposato con Teodora, avvia importanti riforme legali e militari.',
        category: 'Imperatori',
        importance: 3
      },
      {
        id: 'corpus-iuris',
        year: 529,
        title: 'Corpus Iuris Civilis',
        description: 'Giustiniano fa compilare il Corpus Iuris Civilis, base fondamentale del diritto romano e futuro riferimento per gli stati moderni.',
        category: 'Leggi e Riforme',
        importance: 3
      },
      {
        id: 'guerra-vandali',
        year: 533,
        title: 'Guerra contro i Vandali',
        description: 'Il generale Belisario conquista il Nord Africa dai Vandali, iniziando la riconquista dell\'Occidente.',
        category: 'Guerre',
        importance: 2
      },
      {
        id: 'guerra-gotica',
        year: 535,
        title: 'Inizio della Guerra Greco-Gotica',
        description: 'Inizia la lunga guerra contro gli Ostrogoti in Italia, che si concluderà nel 553 con gravi conseguenze per la penisola.',
        category: 'Guerre',
        importance: 3
      },
      {
        id: 'prammatica-sanzione',
        year: 554,
        title: 'Prammatica Sanzione',
        description: 'L\'Italia diventa una provincia dell\'impero, soggetta a tassazione basata sulla ricchezza, provocando malcontento tra gli aristocratici.',
        category: 'Leggi e Riforme',
        importance: 2
      },
      {
        id: 'cosroe-assedio',
        year: 626,
        title: 'Assedio di Costantinopoli',
        description: 'Cosroe II dei Persiani assedia Costantinopoli mentre Eraclio combatte contro bulgari, avari e slavi.',
        category: 'Guerre',
        importance: 3
      },
      {
        id: 'morte-cosroe',
        year: 628,
        title: 'Morte di Cosroe II',
        description: 'I soldati persiani uccidono Cosroe II dopo le sconfitte subite contro l\'esercito di Eraclio.',
        category: 'Imperatori',
        importance: 3
      }
    ]
  }
];
