import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import HoverBox from '../components/HoverBox/HoverBox';
import NewsletterSignup from '../components/NewsletterSignup/NewsletterSignup';
import CallToAction from '../components/CallToAction/CallToAction';
import styles from './styles.module.css';

const features = [
  {
    title: 'Crypto Philosophy',
    emoji: '🧠',
    url: '/docs',
    description: (
      <>
        Why we want decentralized systems, blockchain governance, and more.
      </>
    ),
  },
  {
    title: 'Peer Protocols',
    emoji: '📡',
    url: '/docs',
    description: (
      <>
        Readings on traditional peer protocols, blockchains, and related quests.
      </>
    ),
  },
  {
    title: 'Protocol Theory',
    emoji: '📜',
    url: '/docs',
    description: (
      <>
        The math and theory behind consensus protocols, distributed systems, and blockchains.
      </>
    ),
  },
  {
    title: 'Development',
    emoji: '👩‍💻',
    url: '/docs',
    description: (
      <>
        How to build decentralized apps (dapps) on the Ethereum blockchain.
      </>
    ),
  },
  {
    title: 'Applications',
    emoji: '🚀',
    url: '/docs',
    description: (
      <>
        Learn about the hottest ETH applications, including NFTs, ERC20, and decentralized finance.
      </>
    ),
  },
  {
    title: 'Zero-knowledge Proofs',
    emoji: '🤐',
    url: '/docs',
    description: (
      <>
        Proving you know a value without revealing it -- the tech behind Zcash, tornado.cash, and Dark Forest!
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      description="Ethereum learning resources">
      <header className={clsx('hero hero--primary', styles.heroBanner)} style={{backgroundImage: `url('img/hero.png')`}}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </header>
      <main>
        <CallToAction />
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className={styles.featuresContainer}>
              <div className={styles.featuresRow}>
                {features.map((props, idx) => (
                  <HoverBox key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <NewsletterSignup />
      </main>
    </Layout>
  );
}
