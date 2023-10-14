const Filter = () => {
  return (
    <>
      <ul className="nav nav-pills justify-content-center mt-4">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            All
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Action
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Animation
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Drama</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Horror</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Mystery</a>
        </li>
      </ul>
    </>
  );
};

export default Filter;
