import React from 'react';
import { Link } from 'gatsby'
/* SEO Component with React Helmet */
import Head from '../components/head'
import Layout from '../components/layout'
import { MapAddComponent } from '../components/mapview.add'

const Add = () => {
  return (
    <Layout>
      <Head title={`Erfassen`} />
      <div className='index'>
        <section className='ui vertical very fitted segment' style={{marginTop: '1rem'}}>
          <div className='ui container'>
            <h1 className='ui header'>
              <div className='content'>
              <span className='page-title'>
                Jeder kann seinen Teil dazu beitragen!
              </span>
                <div className='sub header'>
                Während die Geschäfte und Restaurants schließen, werden die Menschen immer mehr isoliert.
                Bleibe sicher, helfe mit wo du kannst und bleib positiv.
                Vielen Dank für die Weitergabe deiner Informationen in der interaktiven Karte unten.
                </div>
              </div>
            </h1>
          </div>
        </section>

        <section className='ui vertical segment'>
          <div className='ui text container formcontainer'>
            <h2>Wie funktioniert die Karte?</h2>
            <p>
            Wähle einen Ort auf der Karte, an dem die Informationen angezeigt werden sollen.
            Du wirst gebeten, uns einige Informationen über deinen Eintrag zu geben, bevor du ihn abschicken kannst.
            <strong>Wir werden alle Einträge manuell überprüfen.</strong> Sobald dein Eintrag genehmigt ist, wird dieser {' '}
            <Link to='/'>
              hier
            </Link>
            {' '} angezeigt.
            </p>
          </div>
        </section>
        <section>
          <MapAddComponent />
        </section>

      </div>
    </Layout>
  );
};

export default Add;
