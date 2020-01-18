const SideBar = () => {
  return (
    <div className="side-bar">
      <img src="/static/img/profile.png" alt="sidebar-portrait" />
      <div className="side-bar-wrap">
        <h4 className="side-bar-title text-center">the author</h4>
        <div className="side-bar-content">
          <p>我現在正在尋找自己人生的目標跟真正想做的事。</p>
          <p>
            因為沒有什麼方向，我失望過了一段時間可以經過成長後得到一些答案。
          </p>
          <p>目前我的工作只是平凡但被加班到死的秘書。</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
