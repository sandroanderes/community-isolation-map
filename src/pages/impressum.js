import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';

const Impressum = () => {
  return (
    <Layout>
      <Head title={`Impressum`} />
      <div className='index'>
        <section className='ui vertical very fitted segment' style={{marginTop: '1rem'}}>
            <div className='ui container'>
                <p><strong>Kontakt-Adresse</strong></p>
                <p>Sandro Anderes<br/>Heuelstrasse 6a<br/>5014 Gretzenbach<br/>Schweiz</p>
                <p>E-Mail:<br/>sandroanderes@outlook.com</p>
                <br></br>
                <p><strong>Haftungsausschluss</strong></p>
                <p>Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.</p>
                <p>Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen.</p>
                <p>Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne besondere Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.</p>
                <br></br>
                <p><strong>Haftungsausschluss für Links</strong></p>
                <p>Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. Es wird jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr des jeweiligen Nutzers.</p>
                <br></br>
                <p><strong>Urheberrechte</strong></p>
                <p>Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf dieser Website, gehören ausschliesslich Sandro Anderes oder den speziell genannten Rechteinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung des Urheberrechtsträgers im Voraus einzuholen.</p>
                <br></br>
                <br/>Quelle: <a href="https://www.swissanwalt.ch" target="_blank" rel="noopener">SwissAnwalt</a>
            </div>
        </section>
      </div> 
    </Layout>
  );
};

export default Impressum;