const questionsData = [{
    index: 1,
    question: 'Aşağıdaki seçeneklerden hangisi bir yazılım dilidir?',
    options: [{
            text: 'Python',
            isCorrect: true
        }, {
            text: 'Bird',
            isCorrect: false
        },
        {
            text: 'OS',
            isCorrect: false
        },
        {
            text: 'iOS',
            isCorrect: false
        }
    ],
    isShown: false
}, {
    index: 2,
    question: "Bir mağazanın vitrinindeki 'Patron Çıldırdı!' ifadesi muhtemelen hangisini anlatmak istiyordur?",
    options: [{
        text: 'İndirim olduğunu',
        isCorrect: true
    }, {
        text: 'Faturaların yüksek geldiğini',
        isCorrect: false
    }, {
        text: 'Patronun tatile çıktığını',
        isCorrect: false
    }, {
        text: 'İşyerine nazar değdini',
        isCorrect: false
    }],
    isShown: false
},
{
    index: 3,
    question: "Halk arasında kişinin destekçisi, özellikle aile büyükleri için kullanılan ve çoğunlukla 'koca' sıfatıyla anılan ağaç türü hangisidir?",
    options: [{
        text: 'Çınar',
        isCorrect: true
    }, {
        text: 'Meşe',
        isCorrect: false
    }, {
        text: 'Kayın',
        isCorrect: false
    }, {
        text: 'Servi',
        isCorrect: false
    }],
    isShown: false
},
{
    index: 4,
    question: 'Dokunmatik ekranlarda görüntüyü büyütmek için ekrana koyulup birbirinden uzaklaştırılan iki parmak genellikle hangileri olur?',
    options: [{
        text: 'Başparmak ve işaret parmağı',
        isCorrect: true
    }, {
        text: 'İşaret parmağı ve orta parmak',
        isCorrect: false
    }, {
        text: 'Orta parmak ve yüzük parmağı',
        isCorrect: false
    }, {
        text: 'Yüzük parmağı ve serçe parmak',
        isCorrect: false
    }],
    isShown: false
},
{
    index: 5,
    question: 'Otomobillerde, lastiklerin takıldığı tekerliğin çember biçimindeki bölümüne ne ad verilir?',
    options: [{
        text: 'Jant',
        isCorrect: true
    }, {
        text: 'Kriko',
        isCorrect: false
    }, {
        text: 'Şasi',
        isCorrect: false
    }, {
        text: 'Dingil',
        isCorrect: false
    }],
    isShown: false
},
{
    index: 6,
    question: "Hangisi 'müdavim' sözcüğüyle aynı anlamdadır?",
    options: [{
        text: 'Gedikli',
        isCorrect: true
    }, {
        text: 'Kalender',
        isCorrect: false
    }, {
        text: 'Rutin',
        isCorrect: false
    }, {
        text: 'Kadim',
        isCorrect: false
    }],
    isShown: false
},
{
    index: 7,
    question: "Okunması zor bir el yazısıyla yazılmış '2x1 tok', 'günde 3 defa' gibi ifadeler genellikle hangisinin üzerinde bulunur?",
    options: [{
        text: 'İlaç kutusu',
        isCorrect: true
    }, {
        text: 'Konserve kutusu',
        isCorrect: false
    }, {
        text: 'Parfüm kutusu',
        isCorrect: false
    }, {
        text: 'Kibrit kutusu',
        isCorrect: false
    }],
    isShown: false
},
{
    index: 8,
    question: "'Fenomen' kelimesi yerine 'feno', 'popüler' kelimesi yerine 'popi' gibi kısaltmaları kullananlar genellikle kimler olur?",
    options: [{
        text: 'Günümüz gençleri',
        isCorrect: true
    }, {
        text: 'Eski kuşaklar',
        isCorrect: false
    }, {
        text: 'Memur emeklileri',
        isCorrect: false
    }, {
        text: 'Dedeler ve nineler',
        isCorrect: false
    }],
    isShown: false
},
{
    index: 9,
    question: 'Şekli ve tadı benzemesine rağmen, kullanılan malzemelerdeki değişikliklerle yapılan yemek ve tatlılara genellikle ne ad verilir?',
    options: [{
        text: 'Yalancı',
        isCorrect: true
    }, {
        text: 'Doğrucu',
        isCorrect: false
    }, {
        text: 'Terbiyeli',
        isCorrect: false
    }, {
        text: 'Mızıkçı',
        isCorrect: false
    }],
    isShown: false
},
{
    index: 10,
    question: '1+2+3+4+5+6+7+8+9 işleminin sonucu kaçtır?',
    options: [{
        text: '45',
        isCorrect: true
    }, {
        text: '40',
        isCorrect: false
    }, {
        text: '50',
        isCorrect: false
    }, {
        text: '55',
        isCorrect: false
    }],
    isShown: false
},
{
    index: 11,
    question: "1998 yapımı, 'Her Şey Çok Güzel Olacak' filminde aşağıdaki oyunculardan hangisi oynamamıştır?",
    options: [{
        text: 'Tolga Çevik',
        isCorrect: true
    }, {
        text: 'Nurgül Yeşilçay',
        isCorrect: false
    }, {
        text: 'Adnan Tönel',
        isCorrect: false
    }, {
        text: 'Cem Yılmaz',
        isCorrect: false
    }],
    isShown: false
},
{
    index: 12,
    question: 'Hangisi bir müzik türüdür?',
    options: [{
        text: 'Napoliten',
        isCorrect: true
    }, {
        text: 'Parisien',
        isCorrect: false
    }, {
        text: 'İstanbulin',
        isCorrect: false
    }, {
        text: 'New Yorker',
        isCorrect: false
    }],
    isShown: false
},
{
    index: 13,
    question: "Eskiden çocuklar genellikle nerede uyuyakaldıklarında 'Kalk yerine yat' şeklinde uyarılırlardı?",
    options: [ {
        text: 'Çocuk parkında',
        isCorrect: false
    },
    {
        text: 'Televizyon karşısında',
        isCorrect: true
    },
    {
        text: 'Banyoda',
        isCorrect: false
    }, {
        text: 'Misafirlikte',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 14,
    question: 'Halk arasında kullanılan söze göre hangisinin cezasını ayaklar çeker?',
    options: [{
        text: 'Akılsız başın',
        isCorrect: true
    }, {
        text: 'Akıllı telefonun',
        isCorrect: false
    }, {
        text: 'Bilinçli tercihin',
        isCorrect: false
    }, {
        text: 'Bilinçsiz tüketimin',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 15,
    question: "'Martıya simit atmak' eylemi genelde hangi ulaşım aracında gerçekleştirilen bir eylemdir?",
    options: [{
        text: 'Vapur',
        isCorrect: true
    }, {
        text: 'Metro',
        isCorrect: false
    }, {
        text: 'Tramvay',
        isCorrect: false
    }, {
        text: 'Uçak',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 16,
    question: "'No frost' ifadesi hangi ikisi için kullanılır?",
    options: [{
        text: 'Buzdolabı ve derin dondurucu',
        isCorrect: true
    }, {
        text: 'Mikrodalga fırın ve ütü',
        isCorrect: false
    }, {
        text: 'Çamaşır ve bulaşık makinesi',
        isCorrect: false
    }, {
        text: 'Fotoğraf makinesi ve televizyon',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 17,
    question: "'Gülen Gözler' filminde, uçağıyla sevdiği kızın üzerinden geçen ve filmin sonunda eve 'iniş yapan', Şener Şen'in canlandırdığı karakterin adı nedir?",
    options: [{
        text: 'Vecihi',
        isCorrect: true
    }, {
        text: 'Lütfü',
        isCorrect: false
    }, {
        text: 'Hüsamettin',
        isCorrect: false
    }, {
        text: 'Şakir',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 18,
    question: "Başkenti Bogota'da Altın Müzesi bulunan ve dünyadaki zümrüt üretiminin büyük kısmını gerçekleştiren, kahvesiyle ünlü ülke hangisidir?",
    options: [{
        text: 'Kolombiya',
        isCorrect: true
    }, {
        text: 'Tunus',
        isCorrect: false
    }, {
        text: 'Güney Afrika',
        isCorrect: false
    }, {
        text: 'Botsvana',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 19,
    question: "'Eylül', 'Suçlar ve Kabahatlar', 'Gölgeler ve Sis' filmlerini izlemediyseniz hangi yönetmenin filmlerini izlememişsinizdir?",
    options: [{
        text: 'Woody Allen',
        isCorrect: true
    }, {
        text: 'Sydney Pollack',
        isCorrect: false
    }, {
        text: 'Martin Scorsese',
        isCorrect: false
    }, {
        text: 'David Lynch',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 20,
    question: "Telesekreterler, 'Dahili numarayı biliyorsanız lütfen tuşlayınız' dedikten sonra klişe olarak hangisini söylerler?",
    options: [{
        text: 'Bilmiyorsanız lütfen bekleyiniz',
        isCorrect: true
    }, {
        text: 'Bilmiyorsanız bilene sorunuz',
        isCorrect: false
    }, {
        text: 'Bilmiyorsanız meşgul etmeyiniz',
        isCorrect: false
    }, {
        text: 'Bilmiyorsanız telefonu kapatınız',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 21,
    question: 'Bir tekerlemede yoğurdu saklamadan önce hangi işlemi yapmak ya da yapmamak gerektiği sorulur?',
    options: [{
        text: 'Sarımsaklamak',
        isCorrect: true
    }, {
        text: 'Tuzlamak',
        isCorrect: false
    }, {
        text: 'Sirkelemek',
        isCorrect: false
    }, {
        text: 'Mayalamak',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 22,
    question: "Hangisini giyenler için 'Jilet gibi olmuşsun' ifadesi kullanılır?",
    options: [{
        text: 'Takım elbise',
        isCorrect: true
    }, {
        text: 'Eşofman',
        isCorrect: false
    }, {
        text: 'Mayo',
        isCorrect: false
    }, {
        text: 'Pijama',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 23,
    question: "'Rakibini 7-5 ve 6-2'lik setlerle geçerek finale yükseldi' ifadesini, hangi sporla ilgili bir haberde görebilirsiniz?",
    options: [{
        text: 'Tenis',
        isCorrect: true
    }, {
        text: 'Voleybol',
        isCorrect: false
    }, {
        text: 'Futbol',
        isCorrect: false
    }, {
        text: 'Boks',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 24,
    question: "'Razakı', 'kuş', 'mis' ve 'sultani' hangi meyvenin türlerine verilen isimlerdir?",
    options: [{
        text: 'Üzüm',
        isCorrect: true
    }, {
        text: 'Kiraz',
        isCorrect: false
    }, {
        text: 'Dut',
        isCorrect: false
    }, {
        text: 'Kayısı',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 25,
    question: "Birbirleriyle selamlaşırlen 'Valar Morghulis' diyen gençler hangi diznin hayranlarıdır?",
    options: [{
        text: 'Game of Thrones',
        isCorrect: true
    }, {
        text: 'Vikings',
        isCorrect: false
    }, {
        text: 'Merlin',
        isCorrect: false
    }, {
        text: 'Tudors',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 26,
    question: "'Lady Gaga'nın kendine verdiği sahne adına da ilham vermiş olan 'Radio Gaga' şarkısını hangi grup seslendirmektedir?",
    options: [{
        text: 'Queen',
        isCorrect: true
    }, {
        text: 'The Doors',
        isCorrect: false
    }, {
        text: 'Led Zeppelin',
        isCorrect: false
    }, {
        text: 'AC/DC',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 27,
    question: 'Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu Tepesi nerededir?',
    options: [{
        text: 'Yeni Zelanda',
        isCorrect: true
    }, {
        text: 'Hindistan',
        isCorrect: false
    }, {
        text: 'Hawai',
        isCorrect: false
    }, {
        text: 'Galler',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 28,
    question: 'Yunan mitolojisinde Eros ok atarak insanların birbirlerine hangisini hissetmesini sağlar?',
    options: [{
        text: 'Aşk',
        isCorrect: true
    }, {
        text: 'Şefkat',
        isCorrect: false
    }, {
        text: 'Güven',
        isCorrect: false
    }, {
        text: 'Sabır',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 29,
    question: 'Kumaşın kenarına tığ ile işlenen, eski evlerde sıkça görülen, giysi ve örtülerde kullanılan örgüye ne ad verilir?',
    options: [{
        text: 'Dantel',
        isCorrect: true
    }, {
        text: 'Kanaviçe',
        isCorrect: false
    }, {
        text: 'Kurdele',
        isCorrect: false
    }, {
        text: 'Fisto',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 30,
    question: 'Bir insanın hastalığı ne olursa olsun, iyi gelmesi için klişe olarak hangisi pişirilir?',
    options: [{
        text: 'Çorba',
        isCorrect: true
    }, {
        text: 'Mantı',
        isCorrect: false
    }, {
        text: 'Menemen',
        isCorrect: false
    }, {
        text: 'Muhallebi',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 31,
    question: 'Dedesiyle dağda yaşayan, arkadaşı Peter ile mutlu günler geçiren, daha sonra yayınlanan kitapta Peter ile evlenen çizgi film karakteri kimdir?',
    options: [{
        text: 'Heidi',
        isCorrect: true
    }, {
        text: 'Alice',
        isCorrect: false
    }, {
        text: 'Pollyanna',
        isCorrect: false
    }, {
        text: 'Candy',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 32,
    question: 'Eski bir Türk masalına adını veren gülen ayva ile birlikte ağlayan meyve hangisidir?',
    options: [{
        text: 'Nar',
        isCorrect: true
    }, {
        text: 'Elma',
        isCorrect: false
    }, {
        text: 'Dur',
        isCorrect: false
    }, {
        text: 'Üzüm',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 33,
    question: 'Peter Jackson\'ın yönettiği "The Hobbit" serisinin son filminin adı nedir?',
    options: [{
        text: 'Beş Ordunun Savaşı',
        isCorrect: true
    }, {
        text: 'Beklenmedik Yolculuk',
        isCorrect: false
    }, {
        text: 'Smaug2un Çorak Toprakları',
        isCorrect: false
    }, {
        text: 'Kralın Dönüşü',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 34,
    question: 'Kurtuluş Savaşı\'nda cephede Mustafa Kemal\'in yanında onbaşı rütbesiyle görev alan, "Mor Salkımlı Ev" romanının yazarı kimdir?',
    options: [{
        text: 'Halide Edip Adıvar',
        isCorrect: true
    }, {
        text: 'Nezihe Meriç',
        isCorrect: false
    }, {
        text: 'Reşat Nuri Güntekin',
        isCorrect: false
    }, {
        text: 'Yakup Kadri Karaosmanoğlu',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 35,
    question: 'Güneşte veya hafif alevde kurutulmuş ete ne ad verilir?',
    options: [{
        text: 'Kadit',
        isCorrect: true
    }, {
        text: 'Tirit',
        isCorrect: false
    }, {
        text: 'Fodul',
        isCorrect: false
    }, {
        text: 'Dumur',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 36,
    question: 'Medeni Kanunumuza göre vasiyetname hazırlayabilmek için kaç yaşını doldurmak gerekmektedir?',
    options: [{
        text: '15',
        isCorrect: true
    }, {
        text: '18',
        isCorrect: false
    }, {
        text: '21',
        isCorrect: false
    }, {
        text: '25',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 37,
    question: 'Düdük futbol maçlarında kullanılmadan önce hakemler hangisini kullanırlardı?',
    options: [{
        text: 'Beyaz Mendil',
        isCorrect: true
    }, {
        text: 'Şapka',
        isCorrect: false
    }, {
        text: 'Gong',
        isCorrect: false
    }, {
        text: 'Çan',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 38,
    question: 'Çilek, portakal, muz gibi meyvelerle yapılan, pastaların üstüne konarak damakta güzel bir tat bırakan şeffaf tatlı hangisidir?',
    options: [{
        text: 'Jöle',
        isCorrect: true
    }, {
        text: 'Kup',
        isCorrect: false
    }, {
        text: 'Milföy',
        isCorrect: false
    }, {
        text: 'Tart',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 39,
    question: 'Tavla karşılaşmaları genellikle kaçta biter?',
    options: [{
        text: '5',
        isCorrect: true
    }, {
        text: '3',
        isCorrect: false
    }, {
        text: '7',
        isCorrect: false
    }, {
        text: '10',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 40,
    question: 'İnsanlarla yaşamaya karar verip kendi kendilerini evcilleştiren hayvan hangisidir?',
    options: [{
        text: 'Kedi',
        isCorrect: true
    }, {
        text: 'Köpek',
        isCorrect: false
    }, {
        text: 'Geyik',
        isCorrect: false
    }, {
        text: 'Fil',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 41,
    question: 'Konusu nedeniyle bir ülkenin yapımcı firmayı tehdit etmesiyle büyük tartışma yaratan "The Interview" filmi, kime yapılan suikast planını konu almaktadır?',
    options: [{
        text: 'Kim Jong-un',
        isCorrect: true
    }, {
        text: 'Papa Francis',
        isCorrect: false
    }, {
        text: 'Vladimir Putin',
        isCorrect: false
    }, {
        text: 'Fidel Castro',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 42,
    question: 'Bir şeyin en fazla olabilecek miktarı hangi sözle ifade edilir?',
    options: [{
        text: 'Taş çatlasa',
        isCorrect: true
    }, {
        text: 'Yer yarılsa',
        isCorrect: false
    }, {
        text: 'İğne düşse',
        isCorrect: false
    }, {
        text: 'Top patlasa',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 43,
    question: "İnsanlar hangisini anlatırken klişe olarak 'Biliyorsan anlatmayayım' derler?",
    options: [{
        text: 'Fıkra',
        isCorrect: true
    }, {
        text: 'Askerlik anısı',
        isCorrect: false
    }, {
        text: 'Masal',
        isCorrect: false
    }, {
        text: 'Dedikodu',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 44,
    question: 'Dedenizin damat dediği, babanızın bacanak dediği, kuzeninizin baba dediği kişi sizin neyiniz olur?',
    options: [{
        text: 'Enişteniz',
        isCorrect: true
    }, {
        text: 'Kocanız',
        isCorrect: false
    }, {
        text: 'Amcanız',
        isCorrect: false
    }, {
        text: 'Dayınız',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 45,
    question: 'Masaj ile ilgili klişe fotoğraflarda, yüzüstü yatan kişilerin sırtında genellikle hangisi dizilir?',
    options: [{
        text: 'Taş',
        isCorrect: true
    }, {
        text: 'İnci',
        isCorrect: false
    }, {
        text: 'Deniz Kabuğu',
        isCorrect: false
    }, {
        text: 'Papatya',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 46,
    question: 'Hangisi bir motosiklet türüdür?',
    options: [{
        text: 'Chopper',
        isCorrect: true
    }, {
        text: 'RoadsterGinger',
        isCorrect: false
    }, {
        text: 'Ginger',
        isCorrect: false
    }, {
        text: 'Cruise',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 47,
    question: "'Domat ve tavşan yüreği' hangisinin türleridir?",
    options: [{
        text: 'Zeytin',
        isCorrect: true
    }, {
        text: 'Domates',
        isCorrect: false
    }, {
        text: 'İncir',
        isCorrect: false
    }, {
        text: 'Üzüm',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 48,
    question: "'Yaban' ve 'Sodom ve Gomore' adlı kitapların yazarı kimdir?",
    options: [{
        text: 'Yakup Kadri Karaosmanoğlu',
        isCorrect: true
    }, {
        text: 'Halit Ziya Uşaklıgil',
        isCorrect: false
    }, {
        text: 'Ahmet Hamdi Tanpınar',
        isCorrect: false
    }, {
        text: 'Sait Faik Abasıyanık',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 49,
    question: "Göreve 1945'de gelerek 2. Dünya Savaşı'nı sonlandırmak için Hiroşima ve Nagazaki'ye atom bombası atılması kararını veren ABD Başkanı kimdir?",
    options: [{
        text: 'Harry S. Truman',
        isCorrect: true
    }, {
        text: 'Lyndon Johnson',
        isCorrect: false
    }, {
        text: 'Dwight Eisenhower',
        isCorrect: false
    }, {
        text: 'Franklin Roosevelt',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 50,
    question: "Uzay istasyonunu Skylab'in parçalarının ülkesine düşmesinin ardından NASA'ya çevreyi kirlettiği için para cesaı kesen ülke hangisidir?",
    options: [{
        text: 'Avustralya',
        isCorrect: true
    }, {
        text: 'İngiltere',
        isCorrect: false
    }, {
        text: 'Hindistan',
        isCorrect: false
    }, {
        text: 'Rusya',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 51,
    question: '"Yüksek Topuklar", "Üç Aynalı Kırk Oda", "Mezopotamya Üçlemesi" kitapları ve "Yalnız Bir Opera" şiiri kime aittir?',
    options: [{
        text: 'Murathan Mungan',
        isCorrect: true
    }, {
        text: 'Küçük İskender',
        isCorrect: false
    }, {
        text: 'Ece Ayhan',
        isCorrect: false
    }, {
        text: 'Metin Altıok',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 52,
    question: "İtalya'daki 14 km karelik bir alanda yer alan, kendi prensini seçip, parasını basan, nüfusu 320 kişilik olan, İtalya'nın müdahale etmediği bölgenin adı nedir?",
    options: [{
        text: 'Seborga',
        isCorrect: true
    }, {
        text: 'Savoy',
        isCorrect: false
    }, {
        text: 'Urbino',
        isCorrect: false
    }, {
        text: 'Lombardiya',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 53,
    question: "Roman karakteri Peter Pan'ın maceralarında yanında yer alan, uçarken ardında pırıltılar bırakan perinin adı nedir?",
    options: [{
        text: 'Tinker Bell',
        isCorrect: true
    }, {
        text: 'Hermione',
        isCorrect: false
    }, {
        text: 'Oz Büyücüsü',
        isCorrect: false
    }, {
        text: 'Dumbledore',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 54,
    question: 'Hangi enstürmandan farklı nota çıkartabilmeniz için parmaklarınızı oynatmanız gerekmez?',
    options: [{
        text: 'Borazan',
        isCorrect: true
    }, {
        text: 'Trompet',
        isCorrect: false
    }, {
        text: 'Flüt',
        isCorrect: false
    }, {
        text: 'Ney',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 55,
    question: 'Uçlu kalemlerde "0.5,0.7" gibi rakamlar hangisini ifade eder?',
    options: [{
        text: 'Uçların çapı',
        isCorrect: true
    }, {
        text: 'Uçların uzunluğu',
        isCorrect: false
    }, {
        text: 'Uçların esnekliği',
        isCorrect: false
    }, {
        text: 'Uçların koyuluğu',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 56,
    question: '"Ağrıdağının yamacında,4200 metrede bir göl vardır..." cümlesiyle başlayan "Ağrı Efsanesi" kitabının yazarı kimdir?',
    options: [{
        text: 'Yaşar Kemal',
        isCorrect: true
    }, {
        text: 'Kemal Tahir',
        isCorrect: false
    }, {
        text: 'Fakir Baykurt',
        isCorrect: false
    }, {
        text: 'Orhan Kemal',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 57,
    question: '"Kaşlarını çattığını" söyleyen biri hangi duyguyu yaşıyordur?',
    options: [{
        text: 'Kızgınlık',
        isCorrect: true
    }, {
        text: 'Pişmanlık',
        isCorrect: false
    }, {
        text: 'Hayranlık',
        isCorrect: false
    }, {
        text: 'Şaşkınlık',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 58,
    question: 'Bir konuda "mutabık" olduğunu söyleyen iki kişi hangisinden bahsediyordur?',
    options: [{
        text: 'Anlaştıklarından',
        isCorrect: true
    }, {
        text: 'Anlaşamadıklarından',
        isCorrect: false
    }, {
        text: 'Tartışlarından',
        isCorrect: false
    }, {
        text: 'Kararsız kaldıklarından',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 59,
    question: '"Sedan, coupe, cabrio" hangi aracın türlerine verilen isimlerdir?',
    options: [{
        text: 'Otomobil',
        isCorrect: true
    }, {
        text: 'Kamyonet',
        isCorrect: false
    }, {
        text: 'Fayton',
        isCorrect: false
    }, {
        text: 'Motosiklet',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 60,
    question: 'Hayvancılıkla geçinen, genellikle Toroslarda yaşayan göçebe Türkler hangi isimle anılır?',
    options: [{
        text: 'Yörük',
        isCorrect: true
    }, {
        text: 'Tatar',
        isCorrect: false
    }, {
        text: 'Boşnak',
        isCorrect: false
    }, {
        text: 'Çerkes',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 61,
    question: '"Geleceğe Dönüş" film serisinin zamanda yolculuk yapan kahramanın adı nedir?',
    options: [{
        text: 'Marty McFly',
        isCorrect: true
    }, {
        text: 'Luke Skywalker',
        isCorrect: false
    }, {
        text: 'Tony Montana',
        isCorrect: false
    }, {
        text: 'Jack Sparrow',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 62,
    question: '"Ey garip çizgilerle dolu han duvarları/Ey hanların gönlümü sızlatan duvarları" dizeleriyle biten "Han Duvarları" şiiri hangi şaire aittir?',
    options: [{
        text: 'Faruk Nafız Çamlıbel',
        isCorrect: true
    }, {
        text: 'Abdülhak Hamit Tarhan',
        isCorrect: false
    }, {
        text: 'Fazıl Hüsnü Dağlarca',
        isCorrect: false
    }, {
        text: 'Ahmet Muhip Dıranas',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 63,
    question: "Ağustos 2010'da hangi şehirde yaşanan trafik sıkışıklığının açılması tam 10 gün sürmüştür?",
    options: [{
        text: 'Pekin',
        isCorrect: true
    }, {
        text: 'Moskova',
        isCorrect: false
    }, {
        text: 'Yeni Delhi',
        isCorrect: false
    }, {
        text: 'Tokyo',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 64,
    question: 'Başta Kanada olmak üzere 17. ve 18. yüzyıllarda birçok Fransız kolonisinde hangisi para olarak kullanılmışıtır?',
    options: [{
        text: 'İskambil kağıdı',
        isCorrect: true
    }, {
        text: 'Bitki tohumu',
        isCorrect: false
    }, {
        text: 'Cam boncuk',
        isCorrect: false
    }, {
        text: 'Posta pulu',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 65,
    question: 'Daha çok eskiden, temiz ve düzenli olması için kapalı tutularak çocukların sokulmadığı odalar hangi isimle anılırdı?',
    options: [{
        text: 'Misafir',
        isCorrect: true
    }, {
        text: 'Kral',
        isCorrect: false
    }, {
        text: 'Akraba',
        isCorrect: false
    }, {
        text: 'Komşu',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 66,
    question: '"Yapılanın yanlış olduğunu bildiği halde buna izin vermek" anlamında kullanılan söz hangisidir?',
    options: [{
        text: 'Göz yummak',
        isCorrect: true
    }, {
        text: 'Baş koymak',
        isCorrect: false
    }, {
        text: 'Dik dökmek',
        isCorrect: false
    }, {
        text: 'Parmak basmak',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 67,
    question: 'Günümüzde popüler bir söz olan "şehir efsanesi" için eski kuşakların kullandığı kelime hangisidir?',
    options: [{
        text: 'Tevatür',
        isCorrect: true
    }, {
        text: 'Teamül',
        isCorrect: false
    }, {
        text: 'Tahayyül',
        isCorrect: false
    }, {
        text: 'Tezahür',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 68,
    question: 'Hangi ülkenin tarihteki hükümdaları "Şah" unvanıyla anılır?',
    options: [{
        text: 'İran',
        isCorrect: true
    }, {
        text: 'Çin',
        isCorrect: false
    }, {
        text: 'Moğolistan',
        isCorrect: false
    }, {
        text: 'Mısır',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 69,
    question: 'Çoğunlukla eski el yazması kitapların kenarlarında bulunan altın rengi süslemeler hangi sanat eserinin örneklerindendir?',
    options: [{
        text: 'Tezhip',
        isCorrect: true
    }, {
        text: 'Hat',
        isCorrect: false
    }, {
        text: 'Telkari',
        isCorrect: false
    }, {
        text: 'Gravür',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 70,
    question: 'Kışın genellikle arabaların kaportasının üstünde uyumayı seven hayvan hangisidir?',
    options: [{
        text: 'Kedi',
        isCorrect: true
    }, {
        text: 'Köpek',
        isCorrect: false
    }, {
        text: 'Sincap',
        isCorrect: false
    }, {
        text: 'Güvercin',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 71,
    question: 'Evlerin girişlerinde ve koridorlara konulan, rüzgar estiğinde çeşitli güzel sesler çıkaran ev aksesuarı hangisidir?',
    options: [{
        text: 'Rüzgar çanı',
        isCorrect: true
    }, {
        text: 'Çiçek dürbünü',
        isCorrect: false
    }, {
        text: 'Müzik kutusu',
        isCorrect: false
    }, {
        text: 'Kedi merdiveni',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 72,
    question: 'Şarkıya başlarken, koro şeflerinin tempo vermek için dörde kadar saymadan, rakamlardan önce söyledikleri söz hangisidir?',
    options: [{
        text: 'Son',
        isCorrect: true
    }, {
        text: 'Es',
        isCorrect: false
    }, {
        text: 'Dur',
        isCorrect: false
    }, {
        text: 'Ses',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 73,
    question: 'Şirinler, ne renk kıyafet giyerler?',
    options: [{
        text: 'Beyaz',
        isCorrect: true
    }, {
        text: 'Mor',
        isCorrect: false
    }, {
        text: 'Siyah',
        isCorrect: false
    }, {
        text: 'Yeşil',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 74,
    question: 'Katalonya, Bask, Endülüs" bölgelerini gezdiyseniz nereye gitmişsiniz demektir?',
    options: [{
        text: 'İspanya',
        isCorrect: true
    }, {
        text: 'İtalya',
        isCorrect: false
    }, {
        text: 'Fransa',
        isCorrect: false
    }, {
        text: 'Hollanda',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 75,
    question: 'Antonio Salieri ile çekişmeleri "Amedeus" filmine de konu olan, Salieri tarafından zehirlendiği iddası bulunan besteci kimdir?',
    options: [{
        text: 'Mozart',
        isCorrect: true
    }, {
        text: 'Bach',
        isCorrect: false
    }, {
        text: 'Beethoven',
        isCorrect: false
    }, {
        text: 'Chopin',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 76,
    question: 'Hangisinde oluşan yara izleri genellikle çocukluk dönemini hatırlatır?',
    options: [{
        text: 'Diz',
        isCorrect: true
    }, {
        text: 'Bilek',
        isCorrect: false
    }, {
        text: 'Burun',
        isCorrect: false
    }, {
        text: 'Dirsek',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 77,
    question: 'Hangisiyle beraber şehir derin bir sessizliğe bürünür?',
    options: [{
        text: 'Kar',
        isCorrect: true
    }, {
        text: 'Yağmur',
        isCorrect: false
    }, {
        text: 'Sis',
        isCorrect: false
    }, {
        text: 'Çiy',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 78,
    question: "Çocukların annenin soyadını taşıdığı, evlenen erkeklerin eşlerinin evine taşındığı, dünyanın en büyük anaerkil toplumu olan 'Minangkabaular' hangi ülkede yaşar?",
    options: [{
        text: 'Endonezya',
        isCorrect: true
    }, {
        text: 'Hindistan',
        isCorrect: false
    }, {
        text: 'Brezilya',
        isCorrect: false
    }, {
        text: 'Nijerya',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 79,
    question: "'Dışarıdan yiyecek ve içecek getirmek yasaktır' uyarısıyla karşılaşıyorsanız muhtemelen neredesinizdir?",
    options: [{
        text: 'Çay bahçesi',
        isCorrect: true
    }, {
        text: 'Uzay istasyonu',
        isCorrect: false
    }, {
        text: 'Öğrenci evi',
        isCorrect: false
    }, {
        text: 'Oto sanayi sitesi',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 80,
    question: 'Bir çikolata ve bir sakızın toplam fiyatının 11 lira olduğu markette çikolata sakızdan 10 lira daha pahalıysa sakızın fiyatı nedir?',
    options: [{
        text: '50 kuruş',
        isCorrect: true
    }, {
        text: '1 lira',
        isCorrect: false
    }, {
        text: '2 lira',
        isCorrect: false
    }, {
        text: '1 lira 50 kuruş',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 81,
    question: "Cem Karaca'nın da şarkıya döktüğü 'Herkes Gibisin' şarkısının sözleri hangi şaire aittir?",
    options: [{
        text: 'Nazım Hikmet Ran',
        isCorrect: true
    }, {
        text: 'Cahit Sıtkı Tarancı',
        isCorrect: false
    }, {
        text: 'Attila İlhan',
        isCorrect: false
    }, {
        text: 'Orhan Veli Kanık',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 82,
    question: 'Hangi canlının bir türü günde yaklaşık 250 kez tekrarlanan ve ortalama 1 dakika süren uykuya dalar?',
    options: [{
        text: 'Karınca',
        isCorrect: true
    }, {
        text: 'Kirpi',
        isCorrect: false
    }, {
        text: 'Arı',
        isCorrect: false
    }, {
        text: 'Çekirge',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 83,
    question: 'Çin Seddi nerededir?',
    options: [{
        text: 'Çin',
        isCorrect: true
    }, {
        text: 'Güney Kore',
        isCorrect: false
    }, {
        text: 'Hindistan',
        isCorrect: false
    }, {
        text: 'Japonya',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 84,
    question: 'Öğretmen, öğrencilerinden çiçek olmalarını istediğinde öğrenciler hangisini yapıp ses çıkarmadan dururlar?',
    options: [{
        text: 'Kollarını göğüste bağlayıp',
        isCorrect: true
    }, {
        text: 'Ayağa kalkıp',
        isCorrect: false
    }, {
        text: 'Ellerini havaya kaldırıp',
        isCorrect: false
    }, {
        text: 'Tek ayak üstünde durup',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 85,
    question: 'Hangi hayvanın bazı türleri popolarıyla nefes alabilir?',
    options: [{
        text: 'Kaplumbağa',
        isCorrect: true
    }, {
        text: 'Yarasa',
        isCorrect: false
    }, {
        text: 'Bukalemun',
        isCorrect: false
    }, {
        text: 'Kurbağa',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 86,
    question: 'Pep Guardiola, José Mourinho, Jürgen Klopp hangi spor dalında şampiyonluk kazanmış isimlerdir?',
    options: [{
        text: 'Futbol',
        isCorrect: true
    }, {
        text: 'Atletizm',
        isCorrect: false
    }, {
        text: 'Basketbol',
        isCorrect: false
    }, {
        text: 'Bilardo',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 87,
    question: 'Normal süresinde, ortalama olarak her 18 dakikada bir gol atılmış profesyonel bir futbol maçının skoru hangisi olabilir?',
    options: [{
        text: '3-2',
        isCorrect: true
    }, {
        text: '2-0',
        isCorrect: false
    }, {
        text: '2-1',
        isCorrect: false
    }, {
        text: '4-0',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 88,
    question: 'Zeki Müren\'in "Biraz Fernandel, biraz Belmondo" diye tanımladığı kişi hangisidir?',
    options: [{
        text: 'Kemal Sunal',
        isCorrect: true
    }, {
        text: 'Şener Şen',
        isCorrect: false
    }, {
        text: 'Cüneyt Arkın',
        isCorrect: false
    }, {
        text: 'Tarık Akan',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 89,
    question: 'Sivas\'ta Cumhuriyet Üniversitesindeki "hobi bahçeleri"nin ismi, TDK Başkanının katıldığı bir programda ne olarak değiştirilmiştir?',
    options: [{
        text: 'Uğraşı bahçeleri',
        isCorrect: true
    }, {
        text: 'Eğlence bahçeleri',
        isCorrect: false
    }, {
        text: 'Merak bahçeleri',
        isCorrect: false
    }, {
        text: 'İlgi bahçeleri',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 90,
    question: 'İlk silikon meme hangisine takılmıştır?',
    options: [{
        text: 'Köpek',
        isCorrect: true
    }, {
        text: 'Maymun',
        isCorrect: false
    }, {
        text: 'İnek',
        isCorrect: false
    }, {
        text: 'Fare',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 91,
    question: 'Türkçede kelimeler en çok hangi harfle başlar?',
    options: [{
        text: 'K harfi',
        isCorrect: true
    }, {
        text: 'M harfi',
        isCorrect: false
    }, {
        text: 'R harfi',
        isCorrect: false
    }, {
        text: 'S harfi',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 92,
    question: '11 yaşındaki Ciro Ortiz, Newyork Bedford metrosunda, pazar günleri saat 12 ile 14 arasında, 5 dakikalığına 2 dolar ücret alarak hangi hizmeti vermektedir?',
    options: [{
        text: 'Psikolojik danışmanlık',
        isCorrect: true
    }, {
        text: 'Turist rehberliği',
        isCorrect: false
    }, {
        text: 'Ses eğitmenliği',
        isCorrect: false
    }, {
        text: 'Fizik tedavi',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 93,
    question: 'İtalyancadan Türkçeye geçen “tavla” kelimesinin kökeninin anlamı nedir?',
    options: [{
        text: 'Tahta',
        isCorrect: true
    }, {
        text: 'Şans',
        isCorrect: false
    }, {
        text: 'Pul',
        isCorrect: false
    }, {
        text: 'Zar',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 94,
    question: 'ABD başkanlarının besledikleri resmi hayvanları arasında hangisi yoktur?',
    options: [{
        text: 'Zürafa',
        isCorrect: true
    }, {
        text: 'Sırtlan',
        isCorrect: false
    }, {
        text: 'Muhabbet kuşu',
        isCorrect: false
    }, {
        text: 'Su aygırı',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 95,
    question: '"Kaşlarını çattığını" söyleyen biri hangi duyguyu yaşıyordur?',
    options: [{
        text: 'En yaşlı milletvekili',
        isCorrect: true
    }, {
        text: 'Bir önceki meclis başkanı',
        isCorrect: false
    }, {
        text: 'Bir önceki adalet bakanı',
        isCorrect: false
    }, {
        text: 'En genç milletvekili',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 96,
    question: '"Önüne dön!" kimin çok sık kullandığı bir sözdür?',
    options: [{
        text: 'Öğretmen',
        isCorrect: true
    }, {
        text: 'Nikah Memuru',
        isCorrect: false
    }, {
        text: 'Öğretmen',
        isCorrect: false
    }, {
        text: 'Garson',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 97,
    question: '19 Aralık 2018 tarihinde düzenlenen, Cumhurbaşkanlığı Kültür ve Sanat Büyük Ödülleri kapsamında sanat/fotoğraf ödülüne layık görülen  isim aşağıdakilerden hangisidir?',
    options: [{
        text: 'İzzet Keribar',
        isCorrect: true
    }, {
        text: 'Coşkun Aral',
        isCorrect: false
    }, {
        text: 'Fikret Otyam',
        isCorrect: false
    }, {
        text: 'Selahattin Kara',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 98,
    question: 'Türkiye aşağıdaki kuruluşlardan hangisine üye değildir?',
    options: [{
        text: 'Şanghay İşbirliği Örgütü',
        isCorrect: true
    }, {
        text: 'AGİT',
        isCorrect: false
    }, {
        text: 'İİT',
        isCorrect: false
    }, {
        text: 'BM',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 99,
    question: 'Aşağıda verilen ülkelerden hangisi bir ada ülkesi değildir?',
    options: [{
        text: 'İsviçre',
        isCorrect: true
    }, {
        text: 'Japonya',
        isCorrect: false
    }, {
        text: 'İzlanda',
        isCorrect: false
    }, {
        text: 'Malta',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 100,
    question: "Aşağıda verilen ülkelerden hangisi Orta Asya'da yer alan bağımsız Türk Cumhuriyetleri arasında yer almaz?",
    options: [{
        text: 'Tataristan',
        isCorrect: true
    }, {
        text: 'Türkmenistan',
        isCorrect: false
    }, {
        text: 'Kazakistan',
        isCorrect: false
    }, {
        text: 'Kırgızistan',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 101,
    question: '"Düşüncene katılmıyorum ama düşüncelerini savunma hakkını sonuna kadar savunacağım" sözlerinin sahibi "Candide" adlı eserin sahibi yazar aşağıdakilerden hangisidir?',
    options: [{
        text: 'Voltaire',
        isCorrect: true
    }, {
        text: 'Montesquieu',
        isCorrect: false
    }, {
        text: 'Victor Hugo',
        isCorrect: false
    }, {
        text: 'Adam Smith',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 102,
    question: '"Devlet Ana", "Yorgun Savaşçı" ve "Esir Şehrin İnsanları" adlı eserlerin yazarı aşağıda verilenlerden hangisidir?',
    options: [{
        text: 'Kemal Tahir',
        isCorrect: true
    }, {
        text: 'Peyami Safa',
        isCorrect: false
    }, {
        text: 'Orhan Kemal',
        isCorrect: false
    }, {
        text: 'Yaşar Kemal',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 103,
    question: 'Eski zamanlarda önemli din ve ticaret merkezlerden biri olan, "Çölün Gelini" olarak bildiğimiz Palmira şehri hangi ülke sınırları içerisinde yer alır?',
    options: [{
        text: 'Suriye',
        isCorrect: true
    }, {
        text: 'İran',
        isCorrect: false
    }, {
        text: 'Kırım',
        isCorrect: false
    }, {
        text: 'Türkiye',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 104,
    question: 'Mimar Sinan tarafından Bosna-Hersek\'te yapılan ve "Sokullu Mehmed Paşa Köprüsü" olarak da bilinen, aynı zamanda dünya kültür mirası içinde yer alan 6 tarihi köprüden biri olan Osmanlı eseri aşağıdakilerden hangisidir?',
    options: [{
        text: 'Drina Köprüsü',
        isCorrect: true
    }, {
        text: 'Çifte Köprü',
        isCorrect: false
    }, {
        text: 'Irgandi Köprüsü',
        isCorrect: false
    }, {
        text: 'Belkıs (Köprüçay) Köprüsü',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 105,
    question: '"Tarih-i Kadim" adlı eserin yazarı kimdir?',
    options: [{
        text: 'Tevfik Fikret',
        isCorrect: true
    }, {
        text: 'Ahmet Haşim',
        isCorrect: false
    }, {
        text: 'Cenap Şehabettin',
        isCorrect: false
    }, {
        text: 'Abdülhak Hamit Tarhan',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 106,
    question: "200.000 kişinin ölümüne neden olan ve bu yönünden dünyada en çok can kaybına yol açan 1991'de Bangladeş'te yaşanan kasırganın adı nedir?",
    options: [{
        text: 'Cyclone',
        isCorrect: true
    }, {
        text: 'Katrina',
        isCorrect: false
    }, {
        text: 'Florence',
        isCorrect: false
    }, {
        text: 'Irma',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 107,
    question: '76. Altın Küre Ödülleri\'nde "En İyi Yabancı Film" ödülünü alan Roma filminin yönetmeni kimdir?',
    options: [{
        text: 'Alfonso Cuaron',
        isCorrect: true
    }, {
        text: 'Peter Farrelly',
        isCorrect: false
    }, {
        text: 'Bryan Singer',
        isCorrect: false
    }, {
        text: 'Mahershala Ali',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 108,
    question: "Aşağıdakilerden hangisi 2018 Yılı Kültür ve Turizm Bakanlığı Özel Ödülü'ne layık görülmüştür?",
    options: [{
        text: 'Ara Güler Müzesi',
        isCorrect: true
    }, {
        text: 'Türk ve İslam Eserleri Müzesi',
        isCorrect: false
    }, {
        text: 'İslam, Bilim ve Teknoloji Müzesi',
        isCorrect: false
    }, {
        text: 'İstanbul Şehir Tiyatrosu',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 109,
    question: "Mayıs 2018'de yapılan seçimlerde yeniden devlet başkanı seçilen Nicolas Maduro hangi ülkenin başkanıdır?",
    options: [{
        text: 'Venezuela',
        isCorrect: true
    }, {
        text: 'Arjantin',
        isCorrect: false
    }, {
        text: 'Küba',
        isCorrect: false
    }, {
        text: 'Filipinler',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 110,
    question: 'Tarihte bilinen ilk Türk devleti hangisidir?',
    options: [{
        text: 'Asya Hun devleti',
        isCorrect: true
    }, {
        text: 'Ak Hun İmparatorluğu',
        isCorrect: false
    }, {
        text: 'Avar İmparatorluğu',
        isCorrect: false
    }, {
        text: 'Göktürk İmparatorluğu',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 111,
    question: 'Alp Er Tunga kimdir?',
    options: [{
        text: 'Saka Hani',
        isCorrect: true
    }, {
        text: 'Hun İmparatoru',
        isCorrect: false
    }, {
        text: 'Göktürk Kağanı',
        isCorrect: false
    }, {
        text: 'Çağatay Harezmşahı',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 112,
    question: '1963 yılında Washington DC\'de yapılan bir eylemde söylenmiş, meşhur "I Have a Dream" cümlesinin sahibi aşağıdakilerden hangisidir?',
    options: [{
        text: 'Martin Luther King Jr.',
        isCorrect: true
    }, {
        text: 'Nelson Mandela',
        isCorrect: false
    }, {
        text: 'F. W. de Klerk',
        isCorrect: false
    }, {
        text: 'Desbond Tutu',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 113,
    question: 'Epistemoloji nedir?',
    options: [{
        text: 'Bilgi Felsefesi',
        isCorrect: true
    }, {
        text: 'Varlık Felsefesi',
        isCorrect: false
    }, {
        text: 'Din Felsefesi',
        isCorrect: false
    }, {
        text: 'Ahlak Felsefesi',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 114,
    question: 'Cannes Film Festivali\'nde, Diane Kruger ile en iyi kadın oyuncu ödülünü alan "Solgun" filminin yönetmeni kimdir?',
    options: [{
        text: 'Fatih Akın',
        isCorrect: true
    }, {
        text: 'Nuri Bilge Ceylan',
        isCorrect: false
    }, {
        text: 'Birol Üner',
        isCorrect: false
    }, {
        text: 'Michael Haneke',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 115,
    question: 'Hangisi psikolojik bir hastalıktır?',
    options: [{
        text: 'Şizofreni',
        isCorrect: true
    }, {
        text: 'Anemi',
        isCorrect: false
    }, {
        text: 'Sinüzit',
        isCorrect: false
    }, {
        text: 'Lösemi',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 116,
    question: 'Kama Nehri hangi ülkededir?',
    options: [{
        text: 'Rusya',
        isCorrect: true
    }, {
        text: 'Romanya',
        isCorrect: false
    }, {
        text: 'Polonya İran',
        isCorrect: false
    }, {
        text: 'İran',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 117,
    question: 'Aşağıdakilerden hangisi çekinik gen ile taşınır ?',
    options: [{
        text: 'Yeşil göz',
        isCorrect: true
    }, {
        text: 'Ayrık kulak memesi',
        isCorrect: false
    }, {
        text: 'Kahverengi saç',
        isCorrect: false
    }, {
        text: 'Koyu renk saç',
        isCorrect: false
    }],
    isShown: false
}, {
    index: 118,
    question: 'Hangi ülkenin İsveç ile sınırı vardır?',
    options: [{
        text: 'Norveç',
        isCorrect: true
    }, {
        text: 'Polonya',
        isCorrect: false
    }, {
        text: 'Almanya',
        isCorrect: false
    }, {
        text: 'Rusya',
        isCorrect: false
    }],
    isShown: false
}
];

export default questionsData;