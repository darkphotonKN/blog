import Router from 'next/router';

const BackButton = () => {
  return (
    <div className="row back-btn-row">
      <div className="col-12 text-right">
        <button className="back-btn" onClick={() => Router.back()}>
          Return
        </button>
      </div>
    </div>
  );
};

export default BackButton;
