import "./css/style.css"

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="profile-wrapper center">
          <img src={require("./images/profile_img.jpeg")} alt="profile img" id="profile__img" />
          <div id="twitter">MykelEagle</div>
          <div id="slack" hidden>Mykel_Eze</div>

          <button className="share-btn">
            <img src={require("./images/share.svg").default} alt="share" title="share link" />
          </button>
        </div>

        <div className="links-wrapper">
          <a href="https://twitter.com/mykeleagle">Twitter Link</a>
          <a href="https://training.zuri.team/" id="btn__zuri">Zuri Team</a>
          <a href="http://books.zuri.team" id="books" title="This is where you find books about design and coding">Zuri Books</a>
          <a href="https://books.zuri.team/python-for-beginners?ref_id=mykel_eze" id="book__python" title="The best python book for beginners ever">Python Books</a>
          <a href="https://background.zuri.team" id="pitch" title="We offer 100% accuracy and speed in giving you the required information needed for your engineers">Background Check for Coders</a>
          <a href="https://books.zuri.team/design-rules" id="book__design" title="That book you need to get up to speed knowledge of the ABCs and core principle of designing">Design Books</a>
        </div>

        <div className="social-wrapper">
          <img src={require("./images/slack.svg").default} alt="slack" className="slack-img" />
          <img src={require("./images/github.svg").default} alt="github" className="github-img" />
        </div>
      </div>

      <footer className="container">
        <div className="flex-wrapper">
          <div className="flex-item">
            <a href="https://zuri.team">
              <img src={require("./images/zuri.svg").default} alt="zuri" className="zuri-img" />
            </a>
          </div>
          <div className="flex-item">
            <a href="https://internship.zuri.team">HNG Internship 9 Frontend Task</a>
          </div>
          <div className="flex-item">
            <a href="https://ingressive.org">
              <img src={require("./images/i4g.svg").default} alt="ingressive for good" className="zuri-img" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
