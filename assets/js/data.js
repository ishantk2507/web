const ComicVerseData = (() => {
  const featuredSlides = [
    {
      id: 'asm-2014-010',
      eyebrow: 'Spider-Verse Part II',
      headline: 'The Amazing Spider-Man #10',
      subhead: 'Superior Spider-Man rallies an army while Peter clashes with destiny.',
      cta: 'Join the Web',
      accent: '#e11d48',
      art: 'assets/images/spidey.jpg'
    },
    {
      id: 'nova-v4',
      eyebrow: 'Trade Paperback Pick',
      headline: 'Nova Vol. 4: Nova Corps',
      subhead: 'Richard Rider confronts the rebirth of the Corps and the schemes of Worldmind.',
      cta: 'Go Cosmic',
      accent: '#fbbf24',
      art: 'assets/images/novacorps.jpg'
    },
    {
      id: 'absolute-batman-001',
      eyebrow: 'Dark Knight Essential',
      headline: 'Absolute Batman #1',
      subhead: 'Stripped of fortune and allies, Bruce leans on raw grit to own the night.',
      cta: 'Enter the Shadows',
      accent: '#fbbf24',
      art: 'assets/images/imbatman.jpg'
    }
  ];

  const publishers = [
    { name: 'Marvel', description: 'Earth’s mightiest adventures and cosmic legends.' },
    { name: 'DC', description: 'Iconic heroes reshaping hope, justice, and Multiverses.' },
    { name: 'Image', description: 'Creator-owned worlds brimming with bold ideas.' },
    { name: 'Dark Horse', description: 'Genre-bending stories from supernatural to sci-fi.' }
  ];

  const comics = [
    {
      id: 'asm-2014-010',
      title: 'The Amazing Spider-Man (2014) #10',
      publisher: 'Marvel',
      characters: ['Peter Parker', 'Superior Spider-Man', 'Miles Morales'],
      genre: ['Superhero', 'Event'],
      price: 3.99,
      releaseDate: '2014-11-19',
      synopsis:
        'Spider-Verse Part 2! Superior Spider-Man leads the spider-army against Morlun’s family, but Peter has a serious issue with Otto calling the shots.',
      creators: { writer: 'Dan Slott', artist: 'Olivier Coipel' },
      coverImage: 'assets/images/spidey.jpg',
      bannerImage: 'assets/images/spidey.jpg',
      isNew: false,
      popularity: 98
    },
    {
      id: 'nova-v4',
      title: 'Nova Vol. 4: Nova Corps (TPB)',
      publisher: 'Marvel',
      characters: ['Richard Rider', 'Worldmind'],
      genre: ['Sci-Fi', 'Cosmic'],
      price: 19.99,
      releaseDate: '2009-04-22',
      synopsis:
        'Collects Nova #19-22. Could it be the return of the Nova Corps? Richard Rider questions Worldmind’s motives as the Corps rises again.',
      creators: { writer: 'Dan Abnett', artist: 'Wellinton Alves' },
      coverImage: 'assets/images/novacorps.jpg',
      bannerImage: 'assets/images/novacorps.jpg',
      isNew: false,
      popularity: 90
    },
    {
      id: 'absolute-batman-001',
      title: 'Absolute Batman #1',
      publisher: 'DC',
      characters: ['Batman'],
      genre: ['Crime', 'Superhero'],
      price: 5.99,
      releaseDate: '2023-09-06',
      synopsis:
        'Without the mansion, money, or Alfred, Bruce Wayne must still be the Absolute Dark Knight and keep Gotham from collapsing.',
      creators: { writer: 'Scott Snyder', artist: 'Greg Capullo' },
      coverImage: 'assets/images/imbatman.jpg',
      bannerImage: 'assets/images/imbatman.jpg',
      isNew: true,
      popularity: 94
    },
    {
      id: 'invincible-001',
      title: 'Invincible #1',
      publisher: 'Image',
      characters: ['Mark Grayson', 'Omni-Man', 'Atom Eve'],
      genre: ['Superhero', 'Coming-of-Age'],
      price: 2.99,
      releaseDate: '2003-01-22',
      synopsis:
        'Mark Grayson discovers his Viltrumite powers, trains under Omni-Man, and balances teen life with world-saving heroics.',
      creators: { writer: 'Robert Kirkman', artist: 'Cory Walker' },
      coverImage: 'assets/images/Invincible.jpg',
      bannerImage: 'assets/images/Invincible.jpg',
      isNew: false,
      popularity: 88
    },
    {
      id: 'cv-003',
      title: 'Atlantis Reignited #3',
      publisher: 'DC',
      characters: ['Aquaman', 'Mera'],
      genre: ['Fantasy', 'Adventure'],
      price: 3.99,
      releaseDate: '2025-08-05',
      synopsis:
        'A volcanic god fractures the ocean floor, forcing Arthur and Mera to forge an alliance with ancient leviathans.',
      creators: { writer: 'Priya Thorne', artist: 'Dax Lumen' },
      coverImage: 'assets/images/cover-atlantis.svg',
      bannerImage: 'assets/images/banner-atlantis.svg',
      isNew: false,
      popularity: 83
    },
    {
      id: 'cv-004',
      title: 'Gotham Eclipse #1',
      publisher: 'DC',
      characters: ['Batman', 'Oracle'],
      genre: ['Crime', 'Mystery'],
      price: 6.5,
      releaseDate: '2025-11-01',
      synopsis:
        'Oracle deploys a holographic Bat-suit while Bruce hunts a cult orchestrating Gotham’s eternal night.',
      creators: { writer: 'K.L. Turner', artist: 'Noah Harada' },
      coverImage: 'assets/images/cover-gotham.svg',
      bannerImage: 'assets/images/banner-gotham.svg',
      isNew: true,
      popularity: 96
    },
    {
      id: 'cv-005',
      title: 'Quantum Drift #12',
      publisher: 'Image',
      characters: ['Drift Crew'],
      genre: ['Sci-Fi', 'Thriller'],
      price: 4.5,
      releaseDate: '2025-07-18',
      synopsis:
        'A renegade crew hijacks timeline anchors to rescue the future version of their captain.',
      creators: { writer: 'Sera Malik', artist: 'Lennox Price' },
      coverImage: 'assets/images/cover-quantum.svg',
      bannerImage: 'assets/images/banner-quantum.svg',
      isNew: false,
      popularity: 75
    },
    {
      id: 'cv-006',
      title: 'Sentinel Academy #2',
      publisher: 'Image',
      characters: ['Korra Finch', 'Violet Team'],
      genre: ['Young Adult', 'Superhero'],
      price: 3.5,
      releaseDate: '2025-09-28',
      synopsis:
        'Future defenders juggle finals and force fields when a rival academy hacks their training sims.',
      creators: { writer: 'Luis Prado', artist: 'Ivy Nwosu' },
      coverImage: 'assets/images/cover-sentinel.svg',
      bannerImage: 'assets/images/banner-sentinel.svg',
      isNew: true,
      popularity: 68
    },
    {
      id: 'cv-007',
      title: 'Mythic Bloom #5',
      publisher: 'Dark Horse',
      characters: ['Dr. Hana Rei'],
      genre: ['Mythology', 'Drama'],
      price: 4.25,
      releaseDate: '2025-06-05',
      synopsis:
        'Every blossom births a deity as Dr. Rei confronts the grief-rooted god growing in her greenhouse.',
      creators: { writer: 'Ada Rivers', artist: 'Yun Ji' },
      coverImage: 'assets/images/cover-bloom.svg',
      bannerImage: 'assets/images/banner-bloom.svg',
      isNew: false,
      popularity: 71
    },
    {
      id: 'cv-008',
      title: 'Iron Circuit #18',
      publisher: 'Dark Horse',
      characters: ['Cass Breaker'],
      genre: ['Cyberpunk', 'Action'],
      price: 5.5,
      releaseDate: '2025-04-22',
      synopsis:
        'Cass infiltrates a megacorp’s drone forge to upload a virus carrying the memory of freedom.',
      creators: { writer: 'Morgan Slate', artist: 'Troy Quill' },
      coverImage: 'assets/images/cover-circuit.svg',
      bannerImage: 'assets/images/banner-circuit.svg',
      isNew: false,
      popularity: 79
    },
    {
      id: 'cv-009',
      title: 'Starbound Legacy #1',
      publisher: 'Marvel',
      characters: ['Captain Pharos'],
      genre: ['Space Opera', 'Adventure'],
      price: 5.25,
      releaseDate: '2025-11-15',
      synopsis:
        'Captain Pharos must unite feuding starclans when a cosmic library predicts her own betrayal.',
      creators: { writer: 'Etta Collins', artist: 'Rafi Aragon' },
      coverImage: 'assets/images/cover-starbound.svg',
      bannerImage: 'assets/images/banner-starbound.svg',
      isNew: true,
      popularity: 88
    },
    {
      id: 'chainsaw-man',
      title: 'Chainsaw Man Vol. 1',
      publisher: 'Shueisha',
      characters: ['Denji', 'Pochita', 'Makima'],
      genre: ['Dark Fantasy', 'Horror'],
      price: 9.99,
      releaseDate: '2018-12-03',
      synopsis:
        'Denji dies paying off yakuza debts but is reborn when Pochita fuses with him, letting Chainsaw Man join Public Safety and carve toward his simple dreams.',
      creators: { writer: 'Tatsuki Fujimoto', artist: 'Tatsuki Fujimoto' },
      coverImage: 'assets/images/csm.jpg',
      bannerImage: 'assets/images/csm.jpg',
      isNew: false,
      popularity: 95
    },
    {
      id: 'deadlife-001',
      title: 'Deadlife Season 1',
      publisher: 'Webtoon',
      characters: ['Seong-hun'],
      genre: ['Horror', 'Thriller'],
      price: 4.99,
      releaseDate: '2020-05-11',
      synopsis:
        'Half-turned and fighting his hunger, Seong-hun navigates a zombie society where the conscious undead clash over survival and love.',
      creators: { writer: 'Lim Jin-hwan', artist: 'Lim Jin-hwan' },
      coverImage: 'assets/images/deadlife.jpg',
      bannerImage: 'assets/images/deadlife.jpg',
      isNew: true,
      popularity: 82
    }
  ];

  const getComicById = (id) => comics.find((comic) => comic.id === id);

  return { featuredSlides, publishers, comics, getComicById };
})();

window.ComicVerseData = ComicVerseData;

