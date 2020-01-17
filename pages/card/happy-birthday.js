import Link from 'next/link';

export default class HappyBirthday extends React.Component {
  state = {
    page: 1
  };

  componentDidMount() {
    (function() {
      function $(id) {
        return document.getElementById(id);
      }

      var card = $('card'),
        openB = $('open'),
        openB2 = $('open2'),
        closeB = $('close'),
        timer = null;

      openB.addEventListener('click', function() {
        card.setAttribute('class', 'open-half');
        if (timer) clearTimeout(timer);
        timer = setTimeout(function() {
          card.setAttribute('class', 'open-fully');
          timer = null;
        }, 700);
      });

      // closeB.addEventListener('click', function() {
      //   card.setAttribute('class', 'close-half');
      //   if (timer) clearTimerout(timer);
      //   timer = setTimeout(function() {
      //     card.setAttribute('class', '');
      //     timer = null;
      //   }, 700);
      // });
    })();
  }

  render() {
    const { page } = this.state;

    console.log('Next Page:', page);

    return (
      <section id="happy-birthday-card">
        <div id="card">
          <div id="card-inside">
            <div className="wrap">
              {page === 1 ? (
                <div className="page">
                  <p>Hey, you.</p>
                  <p>
                    我剛來這個公司的時候其實覺得會很難適應，我以前習慣了國外的工作，回來了也是在大部分會講英文的環境工作。
                  </p>
                  <p>
                    所以來了不久後我有在 Line 感謝大家那麼的歡迎我。順便給 Kevin
                    看我coding的實力, 寫了一個程式一次送給每個人一個謝謝的訊息
                    haha。
                  </p>
                  <p>
                    當時我記得除了老闆外只有你回答..
                    所以我對你重一開始就有好的影響。
                  </p>

                  <button
                    className="page-btn next"
                    onClick={() => this.setState({ page: 2 })}
                  >
                    下一頁
                  </button>
                </div>
              ) : null}

              {page === 2 ? (
                <div className="page">
                  <p>
                    之後跟你講話的時候雖然我的中文真的很差，讀的很慢更不要說打字的速度ha，但你都還是很有耐心的回答了我。
                  </p>
                  <p>So thank you. Really.</p>
                  <p>真不知道為什麼別人會覺得你脾氣不好..</p>

                  <p>你還覺得自己有點”自我“, 有點自私..</p>

                  <p>
                    我看到的妳卻是一個心很善良但又知道自己得限制的人，很直接但懂得自己想做什麼,
                    勇敢面對很多女性會碰到的困擾。
                  </p>

                  <p>
                    希望你之後找到自己真的想做的事，因為你值得有個很愛你的環境工作！
                  </p>
                  <button
                    className="page-btn prev"
                    onClick={() => this.setState({ page: 1 })}
                  >
                    上一頁
                  </button>
                  <button
                    className="page-btn next"
                    onClick={() => this.setState({ page: 3 })}
                  >
                    下一頁
                  </button>
                </div>
              ) : null}

              {/* Next Page */}

              {page === 3 ? (
                <div className="page">
                  <p>
                    講到這個就講到你的禮物了 haha,
                    我想說你以前寫過，中文又那麼好，也蠻長在ig/line 寫很多lol
                    所以我就幫你做一個 blog.
                  </p>
                  <p>
                    他可以真的登入再去改你顯示的東西跟上新的文章。我沒又後段功能所以做那一段有點差
                    but I hope you like it.
                    很多資料只是先拿假的，等如果你真的要用了你可以在叫我改.
                  </p>

                  <p>And don't worry, 不是強迫你要寫東西, 只是一點小心意</p>

                  <Link href="/">
                    <span className="gift-link">
                      Go to Gift <span className="ml-3">&gt;</span>
                    </span>
                  </Link>
                  <p className="signed mt-4">Kranti</p>
                  <button
                    className="page-btn prev"
                    onClick={() => this.setState({ page: 2 })}
                  >
                    上一頁
                  </button>
                </div>
              ) : null}

              {/* <p>
                不知道你最後有沒有願意在跟我出去，給我認識你的機會，if not that's ok. Sometimes there's no second date. That's cool too.
              </p> */}
            </div>
          </div>

          <div id="card-front">
            <div className="wrap d-flex justify-content-center align-items-center">
              <h1 className="main-title">Happy Birthday Kin</h1>
            </div>
            <button id="open">Open</button>
            {/* <button id="close">&lt;</button> */}
          </div>
        </div>
      </section>
    );
  }
}
