import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

/* Additional Header Styles */
import './header.scss';

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title,
          share {
            text,
            hashtags
          }
        }
      }
    }
  `);

  const logo = require('../images/zaemestarch.svg');
  const shareText = encodeURI(data.site.siteMetadata.share.text);
  const shareHashtags = encodeURI(data.site.siteMetadata.share.hashtags);

  return (
    <header>
      <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,400i,500,700,900&display=swap" rel="stylesheet"></link>
      <div className={'ui unstackable grid'}>
        <div className={'ui twelve wide column logo-column'}>
          <a href="/"><img
            className={'header-logo'}
            src={logo}
          /></a>
          {/* <h1 className={'logo-font'}>
            <span>{data.site.siteMetadata.title}</span>
          </h1> */}
        </div>
       {<div className={'ui four wide right aligned column'} style={{padding: '.8rem 1.4rem 0 0'}}>
          <div className={'icon-container'}>
            <a href={'https://wa.me/?text=' + shareText} target={'_blank'} rel={'noopener noreferrer'}>
              <i className='ui icon whatsapp' />
            </a>
            <a href={'https://www.facebook.com/sharer/sharer.php?u=https://www.zaemestarch.ch'} target={'_blank'} rel={'noopener noreferrer'}>
              <i className='ui icon facebook' />
            </a>
            <a href={'https://twitter.com/intent/tweet?hashtags=' + shareHashtags +'&text=' + shareText} target={'_blank'} rel={'noopener noreferrer'}>
              <i className='ui icon twitter' />
            </a>
            <a href={"mailto:?body=" + shareText + "&subject=zaemestarch.ch"}>
              <i className='ui icon envelope' />
            </a>
          </div>
        </div>}
      </div>
    </header>
  );
};

export default Header;
