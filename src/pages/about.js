import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';

const About = () => {
  return (
    <Layout>
      <Head title={`Über uns`} />
      <section className='ui vertical very fitted segment' style={{marginTop: '1rem',marginBottom:'2rem'}}>
        <div className='ui container'>
          <h1 className='ui header'>
            <div className='content'>
            <span className='page-title'>
              Über uns
            </span>
              <div className='sub header'>
                Das ursprüngliche Projekt wurde von <a href={'mailto:marc.fehr@gmail.com'}>Marc Fehr</a> erstellt und ist als Open-Source-Repository auf <a href={'https://gitlab.com/marc.fehr/community-isolation-map'} target={'_blank'} rel={'noopener noreferrer'}>Gitlab</a> verfügbar.
                Weiterentwickelt wurde das Projekt durch 
                <ul>
                <li><a href={'mailto:me@sandroanderes.ch'}>Sandro Anderes</a></li>
                <li><a href={'mailto:me@sandroanderes.ch'}>Frank Zinsli</a></li>
                <li><a href={'mailto:beni.aebersold@gmail.com'}>Bernhard Aebersold</a></li>
                </ul>
                Bitte teilen Sie diese Idee und wenden Sie sich an uns, wenn Sie Hilfe bei der Einrichtung dieser Seite für Ihre Gemeinde benötigen. Jede Rückmeldung ist willkommen!
              </div>
            </div>
          </h1>
        </div>
      </section>
      <section class="ui vertical very fitted segment" >
      <div class="ui container galery">
        <h2>Weitere Projekte</h2>
            <a href="https://churhilftchur.ch"><img src="https://chur.graubuenden.ch/sites/chur/files/styles/grf_global_xl/public/bynder/6fd5c93c628e9d47.jpg?itok=Uc_5JVZK" alt="Chur"></img></a>
            <a class="middle-galery" href="https://interaktiv.tagesanzeiger.ch/2020/zurich-liefert/"><img src="https://www.oebb.at/thumbnails/www.nightjet.com/.imaging/default/dam/nightjet/hero-header/header-overlay-1422x800/laender-und-staedte-1422x800/Zuerich-615269908-RossHelen-iStock-Thinkstock.jpg/jcr:content.jpg?t=1505724120494&scale=0.5" alt="Zürich"></img></a>
            <a href="#zizers"><img src="https://buergergemeinde-zizers.ch/wp-content/uploads/2019/10/dji_0079-1600x800.jpg" alt="Zizers"></img></a>
      </div>
      </section>
      <section className='ui vertical segment'>
        <div className='ui text container formcontainer'>
          <h2>#AarauHilftAarau <img class="aarau" src="https://upload.wikimedia.org/wikipedia/commons/8/84/Wappen_Aarau.svg"></img></h2>
          <p>Teilen Sie diese Seite und helfen Sie ihrer Stadt!</p>
        </div>
        
      </section>
    </Layout>
  );
};

export default About;
