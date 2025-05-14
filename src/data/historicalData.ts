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
        description: 'Tito succede al padre Vespasiano. Durante il suo breve regno dovrà affrontare diverse calamità che metteranno alla prova la sua leadership.',
        category: 'Imperatori',
        importance: 3
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
        title: 'Inizio regno Domiziano',
        description: 'Domiziano succede a Tito. Si fa attribuire i titoli di Austero (per la sua severità e background militare) ed Eccentrico (per la sua passione per l\'auto-celebrazione attraverso statue).',
        category: 'Imperatori',
        importance: 3
      },
      {
        id: 'domiziano-riforme',
        year: 82,
        title: 'Riforme di Domiziano',
        description: 'Ripristina le leggi morali di Augusto e perseguita i cristiani che non rispettano il culto imperiale, arrivando a uccidere il nobile Flavio Clemente per la sua conversione al cristianesimo.',
        category: 'Leggi',
        importance: 2
      },
      {
        id: 'civilizzazione-reno',
        year: 83,
        title: 'Civilizzazione Reno-Danubiana',
        description: 'Avvia un importante progetto di civilizzazione permanente delle regioni reno-danubiane. Costruisce città, istituisce gli Agri decumates (terre assegnate ai soldati) e inizia la costruzione di una linea difensiva in Britannia.',
        category: 'Territori',
        importance: 3
      },
      {
        id: 'crisi-domiziano',
        year: 95,
        title: 'Crisi del Regno',
        description: 'Il senato viene marginalizzato e perde la funzione legislativa. Domiziano, temendo cospirazioni, abusa della legge di lesa maestà e limita i suoi collaboratori.',
        category: 'Politica',
        importance: 2
      },
      {
        id: 'morte-domiziano',
        year: 96,
        title: 'Assassinio di Domiziano',
        description: 'Domiziano viene assassinato da una congiura alla quale si sospetta abbia partecipato anche sua moglie, sostenuta da familiari e dal senato.',
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
        id: 'nerva-elezione',
        year: 96,
        title: 'Elezione di Nerva',
        description: 'Il senato elegge Nerva, un anziano senatore, dando inizio a un periodo di transizione. È un tentativo del senato di riacquisire il potere perduto sotto Domiziano.',
        category: 'Imperatori',
        importance: 2
      },
      {
        id: 'impero-adozione',
        year: 97,
        title: 'Istituzione dell\'Impero d\'Adozione',
        description: 'Nerva introduce l\'impero d\'adozione, scegliendo Traiano come successore per i suoi meriti e il favore dei soldati. L\'adozione richiede l\'approvazione del senato e si basa sui meriti personali.',
        category: 'Politica',
        importance: 3
      },
      {
        id: 'traiano-inizio',
        year: 98,
        title: 'Ascesa di Traiano',
        description: 'Traiano diventa il primo imperatore provinciale, provenendo dalla penisola iberica. Inizia un periodo di grande espansione e riforme.',
        category: 'Imperatori',
        importance: 3
      },
      {
        id: 'traiano-riforme',
        year: 100,
        title: 'Riforme Economiche',
        description: 'Risana le finanze dell\'erario, bonifica le paludi, costruisce il foro, riduce l\'imposta sull\'eredità e concede prestiti agevolati ai piccoli proprietari italici.',
        category: 'Economia',
        importance: 2
      },
      {
        id: 'conquista-dacia',
        year: 106,
        title: 'Conquista della Dacia',
        description: 'La Dacia viene conquistata e trasformata in provincia romana, parte di una più ampia politica espansionistica volta a risanare le finanze dello stato.',
        category: 'Conquiste',
        importance: 3
      },
      {
        id: 'arabia-petrea',
        year: 106,
        title: 'Annessione dell\'Arabia',
        description: 'Annette la penisola arabica creando la provincia dell\'Arabia Petrea, strategicamente importante per gli scambi commerciali con l\'Oriente.',
        category: 'Conquiste',
        importance: 2
      },
      {
        id: 'guerra-parti',
        year: 114,
        title: 'Guerra Contro i Parti',
        description: 'Traiano ottiene le province dell\'Armenia e della Mesopotamia nella guerra contro i Parti, portando l\'impero alla sua massima espansione.',
        category: 'Conquiste',
        importance: 3
      },
      {
        id: 'biblioteca-ulpia',
        year: 112,
        title: 'Biblioteca Ulpia',
        description: 'Viene aperta una gigantesca biblioteca, manifestazione dell\'interesse culturale del periodo traianeo.',
        category: 'Cultura',
        importance: 1
      },
      {
        id: 'morte-traiano',
        year: 117,
        title: 'Morte di Traiano',
        description: 'Traiano muore improvvisamente in Cilicia, dopo aver adottato Adriano, comandante delle legioni orientali, come suo successore.',
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
        title: 'Inizio Regno di Adriano',
        description: 'Adriano, proveniente dall\'aristocrazia spagnola e amante della cultura greca, inizia il suo regno. È noto per i suoi numerosi viaggi culturali e la riproduzione di bellezze d\'oriente nella Villa Adriana.',
        category: 'Imperatori',
        importance: 3
      },
      {
        id: 'riforme-amministrative',
        year: 118,
        title: 'Riforme Amministrative',
        description: 'Stabilisce gradi e compensi per gli ufficiali pubblici, fa redigere leggi valide per tutti, e rafforza il consiglio del principe riducendo i consiglieri.',
        category: 'Amministrazione',
        importance: 2
      },
      {
        id: 'politica-pace',
        year: 120,
        title: 'Politica di Pace',
        description: 'Abbandona la politica espansionistica di Traiano, introducendo il reclutamento militare regionale e istituendo i Numeri, unità militari ausiliarie formate da soldati germani.',
        category: 'Politica',
        importance: 2
      },
      {
        id: 'vallo-adriano',
        year: 122,
        title: 'Costruzione del Vallo',
        description: 'Inizia la costruzione del Vallo Adriano, una muraglia difensiva per proteggere la provincia della Britannia.',
        category: 'Difesa',
        importance: 3
      },
      {
        id: 'rivolta-giudea',
        year: 132,
        title: 'Grande Rivolta Giudaica',
        description: 'Scoppia una grave insurrezione in Giudea, sedata da Adriano con un massacro. Gerusalemme viene trasformata in colonia romana.',
        category: 'Rivolte',
        importance: 3
      },
      {
        id: 'morte-adriano',
        year: 138,
        title: 'Morte di Adriano',
        description: 'Adriano muore dopo un regno caratterizzato da pace, cultura e riforme amministrative.',
        category: 'Imperatori',
        importance: 2
      },
      {
        id: 'antonino-inizio',
        year: 138,
        title: 'Inizio Regno di Antonino Pio',
        description: 'Antonino, detto il Pio, diventa imperatore. Il suo regno sarà caratterizzato da una politica difensiva e importanti riforme giuridiche.',
        category: 'Imperatori',
        importance: 3
      },
      {
        id: 'riforme-schiavitu',
        year: 140,
        title: 'Riforme sulla Schiavitù',
        description: 'Introduce maggiori diritti per gli schiavi, stabilendo che la violenza contro di loro deve essere motivata.',
        category: 'Leggi',
        importance: 2
      },
      {
        id: 'riforma-giudiziaria',
        year: 150,
        title: 'Riforma Giudiziaria',
        description: 'Modifica la legge romana introducendo la tutela del sospettato e il beneficio del dubbio: il sospettato è ritenuto colpevole solo dopo la sentenza.',
        category: 'Leggi',
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
        id: 'marco-aurelio',
        year: 161,
        title: 'Inizio regno di Marco Aurelio',
        description: 'Filosofo stoico, cerca di applicare le regole dello stoicismo al governo. Affronta le prime grandi crisi dell\'impero.',
        category: 'Imperatori',
        importance: 1
      },
      {
        id: 'invasioni-barbariche',
        year: 166,
        title: 'Invasioni dei Quadi e Marcomanni',
        description: 'I Quadi e i Marcomanni oltrepassano il Danubio e arrivano nel nord-est dell\'Italia, mentre scoppia un\'epidemia di peste.',
        category: 'Guerre',
        importance: 1
      },
      {
        id: 'commodo-inizio',
        year: 180,
        title: 'Inizio regno di Commodo',
        description: 'Conclude frettolosamente la pace con Quadi e Marcomanni. Si dedica al culto della propria persona, provocando l\'allontanamento del senato.',
        category: 'Imperatori',
        importance: 2
      },
      {
        id: 'lucio-vero',
        year: 161,
        title: 'Co-reggenza con Lucio Vero',
        description: 'Marco Aurelio governa inizialmente con pari poteri insieme al fratello Lucio Vero, che morirà nel 169.',
        category: 'Imperatori',
        importance: 2
      },
      {
        id: 'invasione-parti',
        year: 161,
        title: 'Invasione dei Parti',
        description: 'I Parti invadono l\'Armenia e la Siria, segnando l\'inizio di un periodo di crisi militare.',
        category: 'Guerra',
        importance: 2
      },
      {
        id: 'marco-filosofo',
        year: 165,
        title: 'Il Filosofo Imperatore',
        description: 'Marco Aurelio, educato allo stoicismo, si distingue come filosofo e scrittore, cercando di applicare i principi stoici al governo dell\'impero.',
        category: 'Cultura',
        importance: 2
      },
      {
        id: 'invasione-germani',
        year: 166,
        title: 'Invasione Germanica',
        description: 'I Quadi e i Marcomanni oltrepassano il Danubio e arrivano nel nord-est dell\'Italia, mentre un\'epidemia di peste dalla Mesopotamia raggiunge Roma.',
        category: 'Crisi',
        importance: 3
      },
      {
        id: 'arruolamenti',
        year: 170,
        title: 'Arruolamenti Straordinari',
        description: 'Durante 19 anni di spedizioni militari, vengono effettuati arruolamenti straordinari, inclusi schiavi germanici. Marco Aurelio usa le proprie ricchezze per finanziare lo stato.',
        category: 'Militare',
        importance: 2
      },
      {
        id: 'successione-commodo',
        year: 177,
        title: 'Nomina di Commodo',
        description: 'Marco Aurelio nomina come successore il figlio Commodo, che riproporrà un modello autocratico di governo.',
        category: 'Politica',
        importance: 2
      },
      {
        id: 'morte-marco-aurelio',
        year: 180,
        title: 'Morte di Marco Aurelio',
        description: 'Marco Aurelio muore a Vindobona (Vienna). Non riceve l\'apoteosi in quanto contraria ai principi stoici dell\'assenza di classi sociali.',
        category: 'Imperatori',
        importance: 3
      },
      {
        id: 'regno-commodo',
        year: 180,
        title: 'Regno di Commodo',
        description: 'Commodo conclude frettolosamente la pace con Quadi e Marcomanni, rinunciando ai territori per cui aveva combattuto il padre. Si dedica al culto della propria persona.',
        category: 'Imperatori',
        importance: 2
      },
      {
        id: 'politica-commodo',
        year: 185,
        title: 'Politica di Commodo',
        description: 'Elargisce donativi e organizza giochi sontuosi, ottenendo il consenso della plebe e dell\'esercito ma alienando il senato.',
        category: 'Politica',
        importance: 2
      },
      {
        id: 'morte-commodo',
        year: 192,
        title: 'Assassinio di Commodo',
        description: 'Commodo viene ucciso in una congiura, aprendo un periodo di caos nella successione imperiale.',
        category: 'Imperatori',
        importance: 3
      }
    ]
  },
  {
    id: 'severi',
    title: 'Dinastia dei Severi',
    startYear: 192,
    endYear: 235,
    events: [
      {
        id: 'crisi-successione',
        year: 192,
        title: 'Crisi di Successione',
        description: 'Alla morte di Commodo scoppia il caos. Il senato elegge Elvio Pertinace, che viene ucciso dai pretoriani che nominano Didio Giuliano.',
        category: 'Politica',
        importance: 3
      },
      {
        id: 'tre-imperatori',
        year: 193,
        title: 'Guerra Civile',
        description: 'Le legioni proclamano tre diversi sovrani, tra cui Settimio Severo, pro-console della Pannonia, che emergerà vittorioso.',
        category: 'Guerra Civile',
        importance: 3
      },
      {
        id: 'settimio-severo',
        year: 193,
        title: 'Ascesa di Settimio Severo',
        description: 'Inizia il regno di Settimio Severo, nato in Africa. Con una brillante carriera militare alle spalle, darà inizio alla dinastia dei Severi.',
        category: 'Imperatori',
        importance: 3
      },
      {
        id: 'riforme-provinciali',
        year: 195,
        title: 'Riforme Provinciali',
        description: 'Favorisce le province a discapito del senato, spostando il potere verso le periferie dell\'impero. Ammette senatori provinciali come suoi sostenitori.',
        category: 'Politica',
        importance: 2
      },
      {
        id: 'riforme-militari',
        year: 197,
        title: 'Riforme Militari',
        description: 'Aumenta il salario dei soldati, specie nelle zone pericolose, introduce premi al merito e permette alle famiglie di vivere vicino agli accampamenti.',
        category: 'Militare',
        importance: 3
      },
      {
        id: 'aumento-tasse',
        year: 200,
        title: 'Crisi Fiscale',
        description: 'L\'aumento delle spese militari porta a un incremento delle tasse che causa problemi di carestia.',
        category: 'Economia',
        importance: 2
      },
      {
        id: 'morte-settimio',
        year: 211,
        title: 'Morte di Settimio Severo',
        description: 'Muore Settimio Severo, lasciando l\'impero ai figli Caracalla e Geta.',
        category: 'Imperatori',
        importance: 2
      },
      {
        id: 'caracalla-regno',
        year: 211,
        title: 'Regno di Caracalla',
        description: 'Caracalla uccide il fratello Geta e governa da solo. Emana la Constitutio Antoniniana che estende la cittadinanza a tutti gli abitanti dell\'impero.',
        category: 'Imperatori',
        importance: 3
      },
      {
        id: 'alessandro-severo',
        year: 222,
        title: 'Regno di Alessandro Severo',
        description: 'Abolisce i culti orientali e ripristina il prestigio dell\'aristocrazia senatoria. Sarà l\'ultimo dei Severi.',
        category: 'Imperatori',
        importance: 2
      },
      {
        id: 'fine-severi',
        year: 235,
        title: 'Fine dei Severi',
        description: 'Alessandro Severo viene ucciso in una congiura delle legioni. Termina la dinastia dei Severi e inizia la grande Crisi del III secolo.',
        category: 'Crisi',
        importance: 3
      }
    ]
  },
  {
    id: 'anarchia-militare',
    title: 'Anarchia Militare e Crisi del III Secolo',
    startYear: 235,
    endYear: 284,
    events: [
      {
        id: 'anarchia-militare-inizio',
        year: 235,
        title: 'Inizio dell\'anarchia militare',
        description: 'Periodo di grave instabilità con continua elezione di imperatori da parte delle legioni. Le legioni assumono maggiore importanza militare.',
        category: 'Crisi',
        importance: 1
      },
      {
        id: 'crisi-economica',
        year: 250,
        title: 'Crisi economica e sociale',
        description: 'I contadini vendono i loro appezzamenti ai latifondisti, spesso diventando servi della gleba. Inizia il declino delle città.',
        category: 'Economia',
        importance: 1
      }
    ]
  },
  {
    id: 'cristianesimo',
    title: 'Diffusione del Cristianesimo',
    startYear: 313,
    endYear: 380,
    events: [
      {
        id: 'editto-milano',
        year: 313,
        title: 'Editto di Milano',
        description: 'Costantino impone la libertà di religione. Il cristianesimo inizia a diffondersi nelle alte cariche di governo.',
        category: 'Religione',
        importance: 1
      },
      {
        id: 'concilio-arles',
        year: 314,
        title: 'Concilio di Arles',
        description: 'Primo concilio della Chiesa occidentale, convocato da Costantino per risolvere la controversia donatista in Africa. Si stabiliscono importanti norme disciplinari.',
        category: 'Religione',
        importance: 2
      },
      {
        id: 'concilio-nicea',
        year: 325,
        title: 'Concilio di Nicea',
        description: 'Costantino convoca il primo concilio ecumenico per stabilire regole comuni e creare un rito comune (il credo).',
        category: 'Religione',
        importance: 1
      },
      {
        id: 'teodosio-cristianesimo',
        year: 380,
        title: 'Editto di Tessalonica',
        description: 'Teodosio stabilisce il cristianesimo come religione di stato, creando scontri con i pagani d\'occidente.',
        category: 'Religione',
        importance: 1
      }
    ]
  },
  {
    id: 'divisione-caduta',
    title: 'Divisione e Fine dell\'Impero',
    startYear: 284,
    endYear: 476,
    events: [
      {
        id: 'diocleziano',
        year: 284,
        title: 'Diocleziano e la Tetrarchia',
        description: 'Diocleziano riorganizza l\'impero dividendolo in due parti (Oriente e Occidente) e istituendo la tetrarchia: due augusti e due cesari.',
        category: 'Politica',
        importance: 3
      },
      {
        id: 'costantino-capitale',
        year: 330,
        title: 'Nuova Capitale',
        description: 'Costantino sposta la capitale a Costantinopoli, l\'antica Bisanzio, segnando uno spostamento definitivo del potere verso oriente.',
        category: 'Politica',
        importance: 3
      },
      {
        id: 'divisione-impero',
        year: 384,
        title: 'Divisione Definitiva dell\'Impero',
        description: 'L\'impero viene definitivamente diviso in due parti: l\'Impero Romano d\'Occidente con capitale Milano/Ravenna e l\'Impero Romano d\'Oriente con capitale Costantinopoli.',
        category: 'Politica',
        importance: 3
      },
      {
        id: 'sacco-roma',
        year: 410,
        title: 'Sacco di Roma',
        description: 'I Visigoti di Alarico saccheggiano Roma. È la prima volta dopo 800 anni che la città viene conquistata da un esercito straniero.',
        category: 'Guerra',
        importance: 3
      },
      {
        id: 'attila',
        year: 452,
        title: 'Invasione degli Unni',
        description: 'Attila invade l\'Italia. Papa Leone I riesce a convincerlo a non attaccare Roma.',
        category: 'Guerra',
        importance: 2
      },
      {
        id: 'caduta-impero',
        year: 476,
        title: 'Caduta dell\'Impero d\'Occidente',
        description: 'Odoacre depone l\'ultimo imperatore romano d\'Occidente, Romolo Augustolo. L\'Impero d\'Oriente continuerà come Impero Bizantino.',
        category: 'Crisi',
        importance: 3
      }
    ]
  }
];
