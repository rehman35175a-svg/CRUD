
export default function Left(){
  return(

    <div className="col-12 col-lg-auto mb-3" style={{ width: 200 }}>
        <div className="card p-3">
          <div className="e-navlist e-navlist--active-bg">
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link px-2 active" href="#">
                  <i className="fa fa-fw fa-bar-chart mr-1" />
                  <span>Overview</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link px-2"
                  href="https://www.bootdey.com/snippets/view/bs4-crud-users"
                  target="__blank"
                >
                  <i className="fa fa-fw fa-th mr-1" />
                  <span>CRUD</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link px-2"
                  href="https://www.bootdey.com/snippets/view/bs4-edit-profile-page"
                  target="__blank"
                >
                  <i className="fa fa-fw fa-cog mr-1" />
                  <span>Settings</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
     )
}