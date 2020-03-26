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
                <div ><img class="main-logo"src={logo}></img>{/* {data.site.siteMetadata.title}: {data.site.siteMetadata.description} */}</div>
                <div className='sub header'>
                Viele kleine Läden und Dienstleister verwandeln sich in der Corona-Krise in Heimlieferdienste. Wir zeigen Ihnen, welche. Ist Ihr Geschäft nicht drauf?{' '}
                  <Link to={'/add'}>
                  Helfen Sie mit!
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
            Wählen Sie einen Ort auf der Karte, an dem die Informationen angezeigt werden sollen.
            Sie werden gebeten, uns einige Informationen über Ihren Eintrag zu geben, bevor Sie ihn abschicken können.
            <strong>Wir werden alle Einträge manuell überprüfen.</strong> Sobald Ihr Eintrag genehmigt ist, wird dieser auf der Karte angezeigt.
            </p>
            <h2>Wie lege ich einen Eintrag an?</h2>
            <p>
              Sie können weiterhin Einträge erfassen. Sobald wir Ihre Daten geprüft haben, erscheinen diese auf der Karte.
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
              Schreiben Sie eine Email an{' '}
              <a
                href={`mailto:${data.site.siteMetadata.email}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                {data.site.siteMetadata.email}
              </a>
              .{' '}Andernfalls werden Ihre Daten gelöscht, sobald diese Karte nicht mehr benötigt wird.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
