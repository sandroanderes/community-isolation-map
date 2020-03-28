import React, { useState } from 'react'
import './mapview.add.scss'
import AnimatedMap from './map-add/animatedmap/component.js'
import categories from '../components/categories'
import { useStaticQuery, graphql, Link } from 'gatsby';
import firebase from "gatsby-plugin-firebase";

const scrollToElement = require('scroll-to-element');

/*
See gatsby-config.js in main dir for bounds
 */

export function MapAddComponent() {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title,
          email,
          share {
            text,
            hashtags
          },
          mapData {
            bounds
          }
        },
      }
    }
  `);

  const [mapActive, setMapActive] = useState(false);
  const [map, setMap] = useState(null);
  const [positionSelected, setPositionSelected] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [showError, setShowError] = useState(false);
  const [content, setContent] = useState({
    position: [],
    category: '',
    title: '',
    description: '',
    contact: '',
    address: '',
    phone: '',
    email: '',
    name: '',
    timestamp: Date.now(),
    approved: false
  })

  const onChange = e => {
    // content[e.target.name] = e.target.value
    const c = { ...content }
    c[e.target.name] = e.target.value
    setContent(c)
  };

  React.useEffect(() => {
    if (mapActive) {
      map.on('click', e => {
        const pos = [e.lngLat.lng, e.lngLat.lat]

        console.log(pos);
        setContent({ ...content, position: pos })
        map.getSource('position').setData({
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              geometry: { type: 'Point', coordinates: pos }
            }
          ]
        })
      });

      // Fit effect
      map.fitBounds(
        data.site.siteMetadata.mapData.bounds,
        { duration: 700 }
      )
    }
  }, [mapActive]);

  React.useEffect(() => {
    scrollToElement('#formcontent')
  }, [positionSelected]);

  React.useEffect(() => {
    if (formSent === true) {
      const newPostKey = firebase
        .database()
        .ref()
        .child('data')
        .push().key

      firebase
        .database()
        .ref('/data/' + newPostKey)
        .update(content)
        .then(() => {
          console.log('Writing done')
        })
        .catch(e => {
          console.log('error', e)
        })
    }
  }, [formSent])

  const validateForm = () => {
    let error = false
    error = content.title.length === 0 ? true : error
    error = content.description.length === 0 ? true : error
    error = content.address.length === 0 ? true : error
    error = content.contact.length === 0 ? true : error
    error = content.name.length === 0 ? true : error
    error = content.email.length === 0 ? true : error
    error = content.category.length === 0 ? true : error

    if (error) {
      setShowError(true)
    } else {
      setFormSent(true)
    }
  }

  return (
    <div id={'map-add-component'}>
      <div
        id='mapcontainer'
        style={{ display: positionSelected ? 'none' : 'inherit' }}
      >
        <AnimatedMap getMapObject={m => setMap(m)} enabled={mapActive} />
        {!mapActive && (
          <div id='overlay' className='box'>
            <h3>Neuer Eintrag hinzufügen</h3>
            <p>
              Wählen Sie eine Position auf der Karte innerhalb der Regionsgrenze, um Teil von <strong>der Gemeinschaft</strong> zu werden.
            </p>
            <button
              className='ui primary button'
              onClick={() => setMapActive(true)}
            >
              Karte aktivieren und Dienstleistung hinzufügen
            </button>
          </div>
        )}

        {content.position.length > 0 && (
          <div id='selectThisPoint' className='box'>
            <h3>Sie haben eine Position gewählt</h3>
            <p>Wollen Sie diese verwenden?</p>
            <div className='ui buttons'>
              <button
                className='ui button'
                onClick={() => {
                  setContent({ ...content, position: [] })
                }}
              >
                Nein, neu wählen...
              </button>
              <button
                className='ui positive button'
                onClick={() => setPositionSelected(true)}
              >
                Ja!
              </button>
            </div>
          </div>
        )}
      </div>

      {positionSelected && !formSent && (
        <div id='formcontent' className='ui vertical segment'>
          <div className='ui text container formcontainer'>
            <button
              className='ui left labeled icon button compact'
              onClick={() => {
                setPositionSelected(false)
                setContent({ ...content, position: [] })
              }}
            >
              <i className='left arrow icon' />
              Position ändern
            </button>
            <div className='ui form'>
              <h4 className='ui horizontal divider header'>
                Über deine Dienstleistung
              </h4>
              <p>
              Bitte beantworte die folgenden Fragen. Diese Daten werden auf der Karte angezeigt.
              Im Moment ist es nur möglich, <stark>eine Kategorie</stark> pro Punkt zu wählen.
              Wenn du mehr als eine Information hast, musst du jede einzelne der Karte hinzufügen.
              </p>

              <div className='field'>
                <label>Kategorie</label>
                <select
                  value={content.category}
                  className='ui dropdown'
                  onChange={e =>
                    setContent({ ...content, category: e.target.value })
                  }
                >
                  <option value='' />
                  {categories.map(c => (
                    <option value={c.ident} key={c.ident}>
                      {c.text}
                    </option>
                  ))}
                </select>
                {/*
                <CategoryButtons
                  onClick={name => setContent({ ...content, category: name })}
                  selected={content.category}
                /> */}
              </div>

              <div className='field required'>
                <label>Titel deines Angebotes</label>
                <input
                  type='text'
                  name='title'
                  value={content.title}
                  onChange={onChange}
                  placeholder='Helfen Sie mit Einkaufen? / Haben Sie Desinfektionsmittel oder Medikamente? / Was noch?'
                />
              </div>

              <div className='field required'>
                <label>Was bietest du an?</label>
                <textarea
                  rows={4}
                  name='description'
                  onChange={onChange}
                  placeholder='Schreiben Sie einen kurzen Text, welcher Ihre Dienstleistung oder Information beschreibt.'
                  defaultValue={content.description}
                />
              </div>

              <div className='field required'>
                <label>Wie trete ich in Kontakt?</label>
                <textarea
                  rows={4}
                  name='contact'
                  placeholder='Das werden die Menschen sehen. Beispiel: Whatsapp: 079 123 45 56, E-Mail: vorname.nachname@mail.ch'
                  defaultValue={content.contact}
                  onChange={onChange}
                />
              </div>

              <div className='field required'>
                <label>Adresse</label>
                <textarea
                  rows={4}
                  name='address'
                  placeholder='Bahnhofstrasse 13, Aarau. Wir benötigen dies, um Ihre Position auf der Karte zu bestätigen.'
                  defaultValue={content.address}
                  onChange={onChange}
                />
              </div>

              <h4 className='ui horizontal divider header'>
                Zusätzliche Informationen
              </h4>
              <p>
                Diese Informationen werden nicht auf der Seite veröffentlicht.
              </p>

              <div className='field required'>
                <label>Name</label>
                <input
                  type='text'
                  name='name'
                  placeholder='Max Mustermann'
                  defaultValue={content.name}
                  onChange={onChange}
                />
              </div>

              <div className='field required'>
                <label>e-Mail Adresse</label>
                <input
                  type='text'
                  name='email'
                  placeholder='max.mustermann@mail.ch'
                  defaultValue={content.email}
                  onChange={onChange}
                />
              </div>

              <div className='field'>
                <label>Telefonnummer (optional)</label>
                <input
                  type='text'
                  name='phone'
                  placeholder='079...'
                  defaultValue={content.phone}
                  onChange={onChange}
                />
              </div>

              {showError && (
                <div className='ui negative message'>
                  <div className='header'>Fehlende Daten</div>
                  <p>
                    Bitte fülle alle benötigten Felder aus.
                  </p>
                </div>
              )}

              <div className='ui buttons'>
                <button className='ui positive button' onClick={validateForm}>
                  Formular senden
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {formSent && (
        <div className='ui vertical segment'>
          <div className='ui text container'>
            <div className='ui success message'>
              <div className='header'>Danke!</div>
              <p>
                Deine Daten wurden erfolgreich übermittelt und werden bald auf{' '}
                <Link to='/'>{' '}{data.site.siteMetadata.title}
                </Link>{' '}
                angezeigt, sobald es von den Administratoren genehmigt wurde.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className='ui vertical segment'>
        <div className='ui text container formcontainer'>
          <h2>Was passiert mit meinen Daten?</h2>
          Die Administratoren prüfen deinen Eintrag und fügen ihn der interaktiven Karte hinzu, sobald du deine Zustimmung gegeben hast.
          Dies dauert normalerweise <stark>weniger als 24 Stunden</stark>. Keine Angst, <strong>deine Daten werden nicht an Dritte weitergegeben</strong>.<br />
          <h2>Welche Einträge werden genehmigt?</h2>
          Jeder kann Teil der Gemeinschaft werden.
          Ob du Kindern über Skype Bücher vorliest, jeden Mittwoch ein paar Scheiben deines leckeren Sauerteigbrotes lieferst oder einfach einen neuen Take-away-Service für deine Produkte startest - hier bist du richtig.
          <h2>Wie kann ich mich austragen lassen?</h2>
          Schreibe eine Email an{' '}
          <a
            href={`mailto:${data.site.siteMetadata.email}`}
          >
            info@zaemestarch.ch
          </a>
          <h2>Alles kann verbessert werden!</h2>
          Diese Seite soll genutzt werden, weshalb wir ständig nach konstruktivem Feedback suchen.
          Wenn du etwas hast, von dem du glaubst, dass es das Ganze besser machen würde, lass es mich via {' '}
          <a
          href={`mailto:${data.site.siteMetadata.email}`}>
          e-Mail
        </a>{' '}wissen.
          <h2>Warum nur Olten-Gösgen-Aarau?</h2>
          Momentan ist es das Ziel unser leben so lokal und isoliert wie möglich zu halten.
          Weitere Orte wie Chur, Zürich oder Zizers sind aber bereits in Entwicklung. Du findest diese unter{' '}
          <Link to='/about'>{' '}Über uns</Link>.
        {' '}Dieses vollständige Projekt ist auch als <stark>Open-Source-Repository</stark> auf <a href="https://gitlab.com/marc.fehr/community-isolation-map">Gitlab</a> verfügbar.
        </div>
      </div>
    </div>
  )
}
