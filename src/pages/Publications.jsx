function Publications() {
  const publications = [
    {
      title: 'This artist in Delhi turns everyday objects into reflective, covetable artworks.',
      source: 'Architectural Digest India',
      href: 'https://www.architecturaldigest.in/story/this-artist-in-delhi-turns-everyday-objects-into-reflective-covetable-artworks-ishu-jain/'
    },
    {
      title: 'Parents, lawmakers battle over Illinois Homeschool Act. What to know',
      source: 'NBC 5 Chicago',
      href: 'https://www.nbcchicago.com/news/local/parents-lawmakers-battle-over-illinois-homeschool-act-what-to-know/3760545/'
    },
    {
      title: "With nearly a third of the setlist, Puerto Rican artists represent the 'Land of Reggaeton' at Sueños Music Festival 2025",
      source: 'La DePaulia | DePaul University',
      href: 'https://depauliaonline.com/77596/ladepaulia/with-nearly-a-third-of-the-setlist-puerto-rican-artists-represent-the-land-of-reggaeton-at-suenos-music-festival-2025/'
    },
    {
      title: "'We've made mistakes along the way': President Rob speaks with student media after congressional hearing",
      source: 'The DePaulia | DePaul University',
      href: 'https://depauliaonline.com/77231/news/weve-made-mistakes-along-the-way-president-rob-speaks-with-student-media-after-congressional-hearing/'
    },
    {
      title: "Inside Pilsen's Via Crucis, popular annual Way of the Cross re-enactment",
      source: 'NBC 5 Chicago',
      href: 'https://www.nbcchicago.com/news/local/inside-pilsens-via-crucis-popular-annual-way-of-the-cross-re-enactment/3727107/'
    },
    {
      title: 'Salt. Taste. Gag. Repeat.',
      source: '14 East Magazine | DePaul University',
      href: 'https://fourteeneastmag.com/index.php/2025/04/15/salt-taste-gag-repeat/'
    },
    {
      title: "'Heartbreaking': Rideshare drivers say they were suddenly deactivated, left jobless",
      source: 'NBC 5 Chicago',
      href: 'https://www.nbcchicago.com/news/local/heartbreaking-rideshare-drivers-say-suddenly-deactivated-jobless-chicago/3698042/'
    },
    {
      title: 'The First DelMundoJamz',
      source: 'La DePaulia | DePaul University',
      href: 'https://depauliaonline.com/75901/artslife/dejamz/the-first-delmundojamz/'
    },
    {
      title: 'Compounded GLP-1 Drugs and its Legally Murky Advertisements',
      source: '14 East Magazine | DePaul University',
      href: 'http://fourteeneastmag.com/index.php/2025/03/03/compounded-glp-1-drugs-and-its-legally-murky-advertisements/'
    },
    {
      title: 'Brighton Park Mexican street vendors share how they keep hope despite times of uncertainty',
      source: 'La DePaulia | DePaul University',
      href: 'https://depauliaonline.com/75602/ladepaulia/brighton-park-mexican-street-vendors-share-how-they-keep-hope-despite-times-of-uncertainty/'
    },
    {
      title: "Chicago's undocumented community and immigrant organizations work together to curb fear of Trump's mass deportation plans",
      source: 'La DePaulia | DePaul University',
      href: 'http://depauliaonline.com/75336/ladepaulia/chicagos-undocumented-community-and-immigrant-organizations-work-together-to-curb-fear-of-trumps-mass-deportation-plans/'
    },
    {
      title: 'Latines who backed Trump share their hopes for the next four years at the Inauguration',
      source: 'La DePaulia | DePaul University',
      href: 'https://depauliaonline.com/74013/ladepaulia/latines-who-backed-trump-share-their-hopes-for-the-next-four-years-at-the-inauguration/'
    },
    {
      title: 'City Council votes to keep Welcoming City Ordinance in Chicago',
      source: 'La DePaulia | DePaul University',
      href: 'https://depauliaonline.com/73976/ladepaulia/city-council-votes-to-keep-welcoming-city-ordinance-in-chicago/'
    },
    {
      title: 'International students feel concern over economy and immigration this presidential election',
      source: 'The DePaulia | DePaul University',
      href: 'https://depauliaonline.com/72917/2024-election-issue/international-students-feel-concern-over-economy-and-immigration-this-presidential-election/'
    },
    {
      title: 'Art Exhibit and New Film by Latine Artists Shine Light on Punk Scene in Little Village',
      source: 'La DePaulia | DePaul University',
      href: 'https://depauliaonline.com/72622/ladepaulia/art-exhibit-and-new-film-by-latine-artists-shine-light-on-punk-scene-in-little-village/'
    },
    {
      title: "Academic Freedom vs. Political Neutrality: Adjunct Faculty Member Anne d'Aquino Speaks Out About Termination",
      source: '14 East Magazine | DePaul University',
      href: 'http://fourteeneastmag.com/index.php/2024/06/10/academic-freedom-vs-political-neutrality-adjunct-faculty-member-anne-daquino-speaks-out-about-termination/'
    },
    {
      title: 'Luca Guadagnino\'s \u201CChallengers\u201D is Syrupy with Angst',
      source: '14 East Magazine | DePaul University',
      href: 'http://fourteeneastmag.com/index.php/2024/05/10/luca-guadagninos-challengers-is-syrupy-with-angst/'
    },
    {
      title: 'DePaul student encampment invites diversity and intersectionality',
      source: 'La DePaulia | DePaul University',
      href: 'https://depauliaonline.com/70177/ladepaulia/depaul-student-encampment-invites-diversity-and-intersectionality/'
    },
    {
      title: 'The 40th Anniversary of the Chicago Latino Film Festival Transcends Countries and Languages Through Diverse Storytelling',
      source: 'La DePaulia | DePaul University',
      href: 'https://depauliaonline.com/69489/ladepaulia/the-40th-anniversary-of-the-chicago-latino-film-festival-transcends-countries-and-languages-through-diverse-storytelling/'
    },
  ];

  return (
    <div className="page-container" style={{ padding: '2rem' }}>
      <div className="publications-container">
        <div className="publications-header">
          <h1 className="page-title">Publications</h1>
        </div>
        <div className="publications-grid">
          {publications.map((pub, idx) => (
            <a key={idx} href={pub.href} target="_blank" rel="noopener noreferrer" className="pub-card">
              <div className="pub-card-title">{pub.title}</div>
              <div className="pub-card-source">{pub.source}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Publications;
