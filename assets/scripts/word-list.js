const wordList = [
    {
        word: "gitar",
        hint: "Sebuah alat musik dengan senar."
    },
    {
        word: "oksigen",
        hint: "Sebuah gas tak berwarna dan tak berbau yang penting untuk kehidupan."
    },
    {
        word: "gunung",
        hint: "Sebuah elevasi alami besar dari permukaan Bumi."
    },
    {
        word: " lukisan",
        hint: "Sebuah bentuk seni menggunakan warna pada permukaan untuk menciptakan gambar atau ekspresi."
    },
    {
        word: "astronomi",
        hint: "Studi ilmiah tentang objek langit dan fenomenanya."
    },
    {
        word: "sepakbola",
        hint: "Sebuah olahraga populer dimainkan dengan bola bulat."
    },
    {
        word: "cokelat",
        hint: "Hidangan manis yang terbuat dari biji kakao."
    },
    {
        word: "kupu-kupu",
        hint: "Serangga dengan sayap berwarna-warni dan tubuh ramping."
    },
    {
        word: "sejarah",
        hint: "Studi tentang peristiwa masa lalu dan peradaban manusia."
    },
    {
        word: "pizza",
        hint: "Hidangan gurih yang terdiri dari dasar bundar dan pipih dengan topping."
    },
    {
        word: "jazz",
        hint: "Genre musik yang ditandai dengan improvisasi dan sinkopasi."
    },
    {
        word: "kamera",
        hint: "Sebuah perangkat yang digunakan untuk menangkap dan merekam gambar atau video."
    },
    {
        word: "intan",
        hint: "Batu permata berharga yang dikenal karena kecerahannya dan kekerasannya."
    },
    {
        word: "petualangan",
        hint: "Pengalaman yang mendebarkan atau berani."
    },
    {
        word: "ilmu pengetahuan",
        hint: "Studi sistematis tentang struktur dan perilaku dunia fisik dan alam."
    },
    {
        word: "sepeda",
        hint: "Kendaraan berdaya manusia dengan dua roda."
    },
    {
        word: "sunset",
        hint: "Hilangnya matahari di bawah cakrawala setiap hari."
    },
    {
        word: "kopi",
        hint: "Minuman kafein populer yang terbuat dari biji kopi yang dipanggang."
    },
    {
        word: "tarian",
        hint: "Gerakan ritmis tubuh sering dilakukan dengan musik."
    },
    {
        word: "galaksi",
        hint: "Sistem bintang, gas, dan debu yang luas dipegang bersama oleh gravitasi."
    },
    {
        word: "orkestra",
        hint: "Sebuah ensemble besar musisi yang memainkan berbagai instrumen."
    },
    {
        word: "gunung berapi",
        hint: "Sebuah gunung atau bukit dengan lubang melalui mana lava, fragmen batu, uap panas, dan gas dikeluarkan."
    },
    {
        word: "novel",
        hint: "Karya fiksi panjang, biasanya dengan plot dan karakter yang kompleks."
    },
    {
        word: "patung",
        hint: "Sebuah bentuk seni tiga dimensi yang dibuat dengan membentuk atau menggabungkan material."
    },
    {
        word: "simfoni",
        hint: "Komposisi musik panjang untuk orkestra penuh, biasanya dalam beberapa gerakan."
    },
    {
        word: "arsitektur",
        hint: "Seni dan ilmu merancang dan membangun bangunan."
    },
    {
        word: "ballet",
        hint: "Bentuk tari klasik yang ditandai dengan gerakan yang presisi dan anggun."
    },
    {
        word: "astronot",
        hint: "Seseorang yang dilatih untuk bepergian dan bekerja di luar angkasa."
    },
    {
        word: "air terjun",
        hint: "Sekelompok air jatuh dari ketinggian."
    },
    {
        word: "teknologi",
        hint: "Penerapan pengetahuan ilmiah untuk tujuan praktis."
    },
    {
        word: "pelangi",
        hint: "Fenomena meteorologi yang disebabkan oleh pantulan, refraksi, dan dispersi cahaya."
    },
    {
        word: "alam semesta",
        hint: "Seluruh materi yang ada, ruang, dan waktu sebagai satu kesatuan."
    },
    {
        word: "piano",
        hint: "Alat musik yang dimainkan dengan menekan kunci yang menyebabkan palu memukul senar."
    },
    {
        word: "liburan",
        hint: "Sebuah periode waktu yang dihabiskan untuk kesenangan, istirahat, atau relaksasi."
    },
    {
        word: "hutan hujan",
        hint: "Hutan yang padat ditandai oleh curah hujan tinggi dan keanekaragaman hayati."
    },
    {
        word: "teater",
        hint: "Sebuah bangunan atau area terbuka di mana drama, film, atau pertunjukan lainnya dipentaskan."
    },
    {
        word: "telepon",
        hint: "Sebuah perangkat yang digunakan untuk mengirim suara secara jarak jauh."
    },
    {
        word: "bahasa",
        hint: "Sebuah sistem komunikasi yang terdiri dari kata-kata, gerakan, dan sintaksis."
    },
    {
        word: "gurun",
        hint: "Sebuah tanah tandus atau kering dengan sedikit atau tidak ada presipitasi."
    },
    {
        word: "bunga matahari",
        hint: "Tumbuhan tinggi dengan bunga besar berwarna kuning."
    },
    {
        word: "fantasi",
        hint: "Genre fiksi yang melibatkan unsur-unsur sihir dan supernatural."
    },
    {
        word: "teleskop",
        hint: "Sebuah instrumen optik yang digunakan untuk melihat objek jauh di ruang angkasa."
    },
    {
        word: "angin sepoi-sepoi",
        hint: "Angin lembut."
    },
    {
        word: "oase",
        hint: "Sebuah tempat subur di gurun di mana air ditemukan."
    },
    {
        word: "fotografi",
        hint: "Seni, proses, atau praktik menciptakan gambar dengan merekam cahaya atau radiasi elektromagnetik lainnya."
    },
    {
        word: "safari",
        hint: "Sebuah ekspedisi atau perjalanan, biasanya untuk mengamati satwa liar di habitat alaminya."
    },
    {
        word: "planet",
        hint: "Sebuah benda langit yang mengorbit bintang dan tidak menghasilkan cahaya sendiri."
    },
    {
        word: "sungai",
        hint: "Sebuah aliran air alami besar yang mengalir di saluran ke laut, danau, atau sungai lainnya."
    },
    {
        word: "tropis",
        hint: "Berkaitan dengan atau terletak di wilayah antara Tropika Kanker dan Tropika Capricorn."
    },
    {
        word: "misterius",
        hint: "Sulit atau tidak mungkin dipahami, dijelaskan, atau diidentifikasi."
    },
    {
        word: "enigma",
        hint: "Sesuatu yang misterius, membingungkan, atau sulit dipahami."
    },
    {
        word: "paradox",
        hint: "Pernyataan atau situasi yang bertentangan atau menantang intuisi."
    },
    {
        word: "teka-teki",
        hint: "Permainan, mainan, atau masalah yang dirancang untuk menguji kecerdikan atau pengetahuan."
    },
    {
        word: "bisikan",
        hint: "Berbicara sangat lembut atau pelan, seringkali dengan cara rahasia."
    },
    {
        word: "bayangan",
        hint: "Sebuah area gelap atau bentuk yang dihasilkan oleh sebuah objek yang memblokir cahaya."
    },
    {
        word: "rahasia",
        hint: "Sesuatu yang disembunyikan atau tidak diketahui oleh orang lain."
    },
    {
        word: "keingintahuan",
        hint: "Keinginan kuat untuk tahu atau belajar sesuatu."
    },
    {
        word: "tidak dapat diprediksi",
        hint: "Tidak dapat diprediksi atau diketahui sebelumnya; tidak pasti."
    },
    {
        word: "membingungkan",
        hint: "Untuk membingungkan atau membuat bingung seseorang; membuat sesuatu tidak jelas atau sulit dipahami."
    },
    {
        word: "mengungkap",
        hint: "Untuk membuat diketahui atau mengungkapkan sesuatu yang sebelumnya rahasia atau tidak diketahui."
    },
    {
        word: "ilusi",
        hint: "Persepsi atau kepercayaan palsu; penampilan atau kesan yang menyesatkan."
    },
    {
        word: "cahaya bulan",
        hint: "Cahaya dari bulan."
    },
    {
        word: "bersemangat",
        hint: "Penuh energi, kecerahan, dan kehidupan."
    },
    {
        word: "nostalgia",
        hint: "Rasa kangen atau kasih sayang yang rindu terhadap masa lalu."
    },
    {
        word: "brilian",
        hint: "Sangat cerdas, berbakat, atau mengesankan."
    },
];
