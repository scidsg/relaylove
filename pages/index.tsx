import { useState } from 'react';

export default function Home() {
  const [hideBanner, setHideBanner] = useState(false);
  return (
    <>
      {!hideBanner && (
        <div className="banner" id="closeBanner">
          <a
            href="https://support.signal.org/hc/en-us/articles/360056052052-Proxy-Support"
            target="_blank"
            rel="noopener noreferrer"
          >
            Signal Proxy
          </a>
          :{' '}
          <a
            href="https://signal.tube/#signalapp.love"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://signal.tube/#signalapp.love
          </a>
          <a
            className="bannerBtn"
            onClick={() => setHideBanner(!hideBanner)}
          ></a>
        </div>
      )}

      <header>
        <div className="wrapper">
          <div className="logo">
            <div className="logoMark"></div>
            <h1>❄️ A Temporary Snowflake Proxy</h1>
          </div>
          <nav>
            <ul>
              <li>
                <a
                  role="button"
                  className="btn primaryBtn btnLrg"
                  href="https://github.com/glenn-sorrentino/relay.love"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Clone This Project
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div role="main">
        <section className="intro">
          <div className="wrapper">
            <div className="group">
              <div className="description">
                <h2>Share the free internet</h2>
                <p>
                  You can help people bypass censorship by enabling the
                  Snowflake proxy on your right. Once the snowflake icon turns
                  green, it means that a user in a censored country is
                  connecting through your proxy to access the Internet without
                  restrictions.
                </p>
                <p>
                  To learn more about Snowflake, visit:{' '}
                  <a href="https://snowflake.torproject.org">
                    snowflake.torproject.org
                  </a>
                </p>
                <p className="meta">
                  ❤️ This webpage is inspired by{' '}
                  <a
                    href="https://glennsorrentino.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Glenn Sorrentino
                  </a>
                </p>
                <p className="meta">
                  This project is maintained on{' '}
                  <a
                    target="_blank"
                    href="https://github.com/jordanopensource/snowflake-web"
                  >
                    github
                  </a>{' '}
                  by{' '}
                  <a
                    href="https://josa.ngo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    JOSA
                  </a>
                </p>
              </div>
              <iframe
                src="https://snowflake.torproject.org/embed.html"
                width="320"
                height="240"
                frameBorder="0"
                scrolling="no"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
