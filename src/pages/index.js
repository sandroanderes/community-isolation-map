import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import { Link } from 'gatsby'
import { MapViewComponent } from '../components/mapview.main'
/* SEO Component with React Helmet */
import Head from '../components/head'

const logo = require('../images/logo-main-aarau.png');
const Index = () => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title,
          location,
          description,
          email
        }
      }
    }
  `);

  return (
    <Layout>
      <Head title={`Home`} />
      <div className='index'>
        <section className='ui vertical very fitted segment' style={{marginTop: '0', paddingTop: '0'}}>
          <div className='ui container'>
            <h1 className='ui header center aligned'>
              <div className='content'>
                <span className={'page-title'}>Zäme starch: Das Hilfsnetzwerk in {data.site.siteMetadata.location}</span>
                <div className='sub header'>
                In Zeiten von Selbstisolation und Social Distancing soll in deiner Region niemand alleine sein.
                Liest du gerne Geschichten via Skype vor, hast du Zeit für jemanden einzukaufen oder sonst etwas anzubieten?
                Füge deine Einträge in die interaktive Karte ein, damit wir diese Zeit gemeinsam durchstehen.{' '}
                  <Link to={'/add'}>
                  Hilf mit!
                  </Link>
                </div>
              </div>
            </h1>
          </div>
        </section>
        <section>
          <MapViewComponent />
        </section>
        <section className='ui vertical segment intro'>
          <div className='ui text container formcontainer'>
          <h2>Wie funktioniert die Karte?</h2>
            <p>
            Wähle einen Ort auf der Karte, an dem die Informationen angezeigt werden sollen.
            Du wirst gebeten, uns einige Informationen über deinen Eintrag zu geben, bevor du ihn abschicken kannst.
            <strong>Wir werden alle Einträge manuell überprüfen.</strong> Sobald dein Eintrag genehmigt ist, wird dieser auf der Karte angezeigt.
            </p>
            <h2>Wie lege ich einen Eintrag an?</h2>
            <p>
              Du kannst weiterhin Einträge erfassen. Sobald wir deine Daten geprüft haben, erscheinen diese auf der Karte.
            </p>
            <Link
              to={'/add'}
              className='ui primary fluid button'
              style={{marginTop: '1rem'}}
            >
              Eintrag erfassen
            </Link>
            <h2>Wie kann ich mich austragen lassen?</h2>
            <p>
              Schreibe eine Email an{' '}
              <a
                href={`mailto:${data.site.siteMetadata.email}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                {data.site.siteMetadata.email}
              </a>
              .{' '}Andernfalls werden deine Daten gelöscht, sobald diese Karte nicht mehr benötigt wird.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
