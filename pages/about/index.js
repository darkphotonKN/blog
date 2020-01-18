import Layout from '../../components/shared/Layout/Layout';

import QuoteBlock from '../../components/shared/MainContent/QuoteBlock';

const AboutIndex = () => {
  return (
    <Layout subtitle={'About'} sidebar>
      <section id="about">
        <div className="row mt-4">
          {/* col-d-12 offset-0 offset-md-1 */}
          <div className="col-12">
            <QuoteBlock
              content={'「你的氣質裡，藏著你走過的路，讀過的書和愛過的人。」'}
              author={'《卡薩布蘭卡》'}
            />

            <div className="main-content mt-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem officiis, quos iure voluptas, voluptatem harum,
                fuga earum illo ea quasi id. Incidunt ut in atque tempora, odio
                dicta cupiditate sunt.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
                natus exercitationem vitae necessitatibus autem. Ipsam officiis
                eius magni tempora porro!
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                autem sint reprehenderit iure, distinctio labore odio,
                voluptatum exercitationem nostrum sapiente aut debitis ea!
                Veritatis sunt aut velit, modi ipsum nostrum ducimus sapiente
                deleniti. Speriores officiis perspiciatis tempora quaerat natus
                non! Perspiciatis, odio. Voluptate delectus repellendus
                perferendis atque pariatur quis tempore nisi fugit laborum?
                Autem maiores illum expedita laborum tenetur rerum.
              </p>

              <p>
                Unde mollitia enim minima delectus quos officia voluptas
                accusantium libero fuga deserunt laborum accusamus harum rerum
                rem debitis quod, vero veritatis tenetur ipsum labore. Minus ab
                facere mollitia, molestiae commodi nam est distinctio.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutIndex;
