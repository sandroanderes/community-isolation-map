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
                Das ursprüngliche Projekt wurde von <a href={'mailto:marc.fehr@gmail.com'}>Marc Fehr</a> und Simon Huwiler vom <a href={"https://www.tagesanzeiger.ch"}>Tagsanzeiger</a> ins Leben gerufen und ist als Open-Source-Repository auf <a href={'https://gitlab.com/marc.fehr/community-isolation-map'} target={'_blank'} rel={'noopener noreferrer'}>Gitlab</a> verfügbar.
                Weiterentwickelt wurde das Projekt durch 
                <ul>
                <li><a href={'mailto:info@zaemestarch.ch'}>Sandro Anderes</a></li>
                <li><a href={'mailto:info@zaemestarch.ch'}>Frank Zinsli</a></li>
                <li><a href={'mailto:beni.aebersold@gmail.com'}>Bernhard Aebersold</a></li>
                </ul>
                Beim Projekt geht es darum, nachbarschaftlich für einander da zu sein, in einer Zeit, in der man isoliert sein sollte.
                Ziel ist es, dass weitere solche kleine Communities entstehen. Bitte teilt die Idee euren Freunden mit.
                Ich freue mich, auf dein Feedback!
              </div>
            </div>
          </h1>
        </div>
      </section>
      <section class="ui vertical very fitted segment" >
      <div class="ui container galery">
        <h2>Weitere Projekte</h2>
            <a href="https://churhilftchur.ch"><img src="https://chur.graubuenden.ch/sites/chur/files/styles/grf_global_xl/public/bynder/6fd5c93c628e9d47.jpg?itok=Uc_5JVZK" alt="Chur"></img></a>
            <a class="middle-galery" href="https://interaktiv.tagesanzeiger.ch/2020/zurich-liefert/"><img src="https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2018/11/27/0825/Park-Hyatt-Zurich-P824-Destination-Zurich.jpg/Park-Hyatt-Zurich-P824-Destination-Zurich.16x9.jpg" alt="Zürich"></img></a>
            <a href="https://zizers-hilft.netlify.com/"><img src="https://www.suedostschweiz.ch/sites/default/files/styles/np8_amp/public/elvis-media/2019-08/0258954_preview.jpg?itok=4uvI1QrC" alt="Zizers"></img></a>
      </div>
      </section>
      <section className='ui vertical segment'>
        <div className='ui text container formcontainer'>
          <h2>#MiteinanderFuereinander</h2>
          <p>Teile diese Seite und hilf deiner Region!</p>
        </div>
        
      </section>
    </Layout>
  );
};

export default About;
