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
        title: 'Regno di Tito',
        description: 'Tito succede al padre Vespasiano. Durante il suo breve regno affronta diverse calamità tra cui l\'eruzione del Vesuvio e un grande incendio a Roma.',
        category: 'Imperatori',
        importance: 1
      },
      {
        id: 'vesuvio',
        year: 79,
        title: 'Eruzione del Vesuvio',
        description: 'L\'eruzione distrugge Pompei, Ercolano e Stabia. Tito utilizza l\'erario imperiale per aiutare la popolazione colpita.',
        category: 'Eventi naturali',
        importance: 1
      },
      {
        id: 'domiziano-inizio',
        year: 81,
        title: 'Inizio regno Domiziano',
        description: 'Domiziano succede a Tito e governa fino al 96. Si fa attribuire i titoli di Austero ed Eccentrico.',
        category: 'Imperatori',
        importance: 1
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
        id: 'nerva',
        year: 96,
        title: 'Regno di Nerva',
        description: 'Nerva viene eletto dal senato e introduce l\'impero d\'adozione, scegliendo Traiano come successore.',
        category: 'Imperatori',
        importance: 2
      },
      {
        id: 'traiano',
        year: 98,
        title: 'Inizio regno di Traiano',
        description: 'Primo imperatore provinciale, dalla penisola iberica. Porta l\'impero alla massima espansione.',
        category: 'Imperatori',
        importance: 1
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
        title: 'Inizio regno di Adriano',
        description: 'Proveniente dall\'aristocrazia spagnola, amante della cultura greca. Fa molti viaggi culturali e riproduce le bellezze d\'oriente nella Villa Adriana.',
        category: 'Imperatori',
        importance: 1
      },
      {
        id: 'adriano-riforme',
        year: 118,
        title: 'Riforme amministrative di Adriano',
        description: 'Migliora l\'amministrazione dello stato e la giustizia, stabilisce gradi e compensi per gli ufficiali pubblici, fa redigere leggi valide per tutti.',
        category: 'Riforme',
        importance: 2
      },
      {
        id: 'vallo-adriano',
        year: 122,
        title: 'Costruzione del Vallo di Adriano',
        description: 'Costruisce una muraglia per proteggere la provincia della Britannia e introduce il reclutamento militare regionale.',
        category: 'Opere pubbliche',
        importance: 1
      },
      {
        id: 'rivolta-giudea',
        year: 132,
        title: 'Grande rivolta giudaica',
        description: 'Scoppia un\'insurrezione in Giudea, sedata da Adriano con grande violenza. Decide di fare di Gerusalemme una colonia romana.',
        category: 'Rivolte',
        importance: 2
      },
      {
        id: 'antonino-pio',
        year: 138,
        title: 'Inizio regno di Antonino Pio',
        description: 'Successore di Adriano, introduce maggiori diritti per gli schiavi e modifica la legge romana introducendo la tutela del sospettato.',
        category: 'Imperatori',
        importance: 1
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
        id: 'settimio-severo',
        year: 193,
        title: 'Ascesa di Settimio Severo',
        description: 'Dopo il caos seguito alla morte di Commodo, Settimio Severo prende il potere. Favorisce le province a discapito del senato e aumenta i benefici per i soldati.',
        category: 'Imperatori',
        importance: 1
      },
      {
        id: 'caracalla',
        year: 211,
        title: 'Regno di Caracalla',
        description: 'Succede al padre Settimio Severo, uccide il fratello Geta. Emana la Constitutio Antoniniana che estende la cittadinanza a tutti gli abitanti dell\'impero.',
        category: 'Imperatori',
        importance: 1
      },
      {
        id: 'alessandro-severo',
        year: 222,
        title: 'Regno di Alessandro Severo',
        description: 'Abolisce i culti orientali e ripristina il prestigio dell\'aristocrazia senatoria. Viene ucciso in una congiura delle legioni nel 235.',
        category: 'Imperatori',
        importance: 2
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
  }
];
