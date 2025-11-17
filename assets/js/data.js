const ComicVerseData = (() => {
  const featuredSlides = [
    {
      id: 'cv-001',
      eyebrow: 'New Cosmic Saga',
      headline: 'Nova Nexus #1',
      subhead: 'Starforce rookie Sam irradiates the galaxy core in a neon-soaked origin.',
      cta: 'Explore Issue',
      accent: '#ff4d6d',
      art: 'assets/images/cover-nova.svg'
    },
    {
      id: 'cv-004',
      eyebrow: 'Event Spotlight',
      headline: 'Gotham Eclipse',
      subhead: 'A solar blackout lets Gotham’s villains rewrite the night shift.',
      cta: 'Dive Into Darkness',
      accent: '#fcbf49',
      art: 'assets/images/cover-gotham.svg'
    },
    {
      id: 'cv-007',
      eyebrow: 'Indie Darling',
      headline: 'Mythic Bloom',
      subhead: 'A botanist unearths a pantheon of floral titans in a dreamy epic.',
      cta: 'View Details',
      accent: '#5bebd9',
      art: 'assets/images/cover-bloom.svg'
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
      id: 'cv-001',
      title: 'Nova Nexus #1',
      publisher: 'Marvel',
      characters: ['Sam Alexander', 'Worldmind'],
      genre: ['Sci-Fi', 'Adventure'],
      price: 4.99,
      releaseDate: '2025-10-02',
      synopsis:
        'Rookie Nova Sam Alexander collides with an interstellar conspiracy that could collapse the Nova Corps from within.',
      creators: { writer: 'Alana Vega', artist: 'Kade Storm' },
      coverImage: 'assets/images/cover-nova.svg',
      bannerImage: 'assets/images/banner-nova.svg',
      isNew: true,
      popularity: 98
    },
    {
      id: 'cv-002',
      title: 'Spider-Verse Pulse #8',
      publisher: 'Marvel',
      characters: ['Miles Morales', 'Spider-Gwen'],
      genre: ['Action', 'Multiverse'],
      price: 5.99,
      releaseDate: '2025-09-12',
      synopsis:
        'Miles and Gwen unravel memory echoes left behind by a rogue Spider to save the collapsing Web of Life.',
      creators: { writer: 'Jared Holt', artist: 'Mei Ito' },
      coverImage: 'assets/images/cover-spider.svg',
      bannerImage: 'assets/images/banner-spider.svg',
      isNew: false,
      popularity: 92
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
    }
  ];

  const getComicById = (id) => comics.find((comic) => comic.id === id);

  return { featuredSlides, publishers, comics, getComicById };
})();

window.ComicVerseData = ComicVerseData;

