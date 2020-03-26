import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import './footer.scss';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author,
          creator,
          title,
          email,
          twitter {
            hashtag
          }
        }
      }
    }
  `);

  return (
    <footer className='ui vertical secondary segment'>
      <div className='ui center aligned container'>
        <div>
        <table>
            <tbody>
              <tr>
                  <td>Entwicklung</td>
                  <td class="content">{data.site.siteMetadata.author}{' ' }/{' ' }{data.site.siteMetadata.creator}</td>
              </tr>
              <tr>
                <td>Veröffentlicht</td>
                <td class="content">26.03.2020, 13:11</td>
              </tr>
            </tbody>
          </table>   
        </div>
        <div class="copyright"><i className='ui icon copyright' />{new Date().getFullYear()}{' '}{data.site.siteMetadata.title}{' ' }|{' '}<a href={`mailto:${data.site.siteMetadata.email}`}><i className='ui icon envelope' />e-Mail</a>{' '}|{' '}<a href='/impressum' target={'_blank'} rel={'noopener noreferrer'}>Impressum</a></div>
      </div>
    </footer>
  );
};

export default Footer;
