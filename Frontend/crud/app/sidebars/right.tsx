export default function Right(){
    return(
        <div className="col-12 col-lg-3 mb-3">
            <div className="card">
              <div className="card-body">
                <div className="text-center px-xl-3">
                  <button
                    className="btn btn-success btn-block"
                    type="button"
                    data-toggle="modal"
                    data-target="#user-form-modal"
                  >
                    New User
                  </button>
                </div>
                <hr className="my-3" />
                <div className="e-navlist e-navlist--active-bold">
                  <ul className="nav">
                    <li className="nav-item active">
                      <a href="" className="nav-link">
                        <span>All</span>&nbsp;<small>/&nbsp;32</small>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="" className="nav-link">
                        <span>Active</span>&nbsp;<small>/&nbsp;16</small>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="" className="nav-link">
                        <span>Selected</span>&nbsp;<small>/&nbsp;0</small>
                      </a>
                    </li>
                  </ul>
                </div>
                <hr className="my-3" />
                <div>
                  <div className="form-group">
                    <label>Date from - to:</label>
                    <div>
                      <input
                        id="dates-range"
                        className="form-control flatpickr-input"
                        placeholder="01 Dec 17 - 27 Jan 18"
                        type="text"
                        readOnly="readonly"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Search by Name:</label>
                    <div>
                      <input
                        className="form-control w-100"
                        type="text"
                        placeholder="Name"
                        defaultValue=""
                      />
                    </div>
                  </div>
                </div>
                <hr className="my-3" />
                <div className="">
                  <label>Status:</label>
                  <div className="px-2">
                    <div className="custom-control custom-radio">
                      <input
                        type="radio"
                        className="custom-control-input"
                        name="user-status"
                        id="users-status-disabled"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="users-status-disabled"
                      >
                        Disabled
                      </label>
                    </div>
                  </div>
                  <div className="px-2">
                    <div className="custom-control custom-radio">
                      <input
                        type="radio"
                        className="custom-control-input"
                        name="user-status"
                        id="users-status-active"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="users-status-active"
                      >
                        Active
                      </label>
                    </div>
                  </div>
                  <div className="px-2">
                    <div className="custom-control custom-radio">
                      <input
                        type="radio"
                        className="custom-control-input"
                        name="user-status"
                        id="users-status-any"
                        defaultChecked=""
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="users-status-any"
                      >
                        Any
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
}