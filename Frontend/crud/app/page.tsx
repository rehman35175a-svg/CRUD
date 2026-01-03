import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Left from "./sidebars/left";
import Right from "./sidebars/right";



export default function Home() {
  return (
    
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-20 px-0 bg-white dark:bg-black sm:items-start">
        
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">

<>
  <meta charSet="utf-8" />

  <title>CRUD</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.1/dist/css/bootstrap.min.css"
    rel="stylesheet"
  />
  
  <link
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
    rel="stylesheet"
  />
  <div className="container">
    <div className="row flex-lg-nowrap">
      <Left />
      
     
      <div className="col">
        <div className="e-tabs mb-3 px-3">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Users
              </a>
            </li>
          </ul>
        </div>
        <div className="row flex-lg-nowrap">
          <div className="col mb-3">
            <div className="e-panel card">
              <div className="card-body">
                <div className="card-title">
                  <h6 className="mr-2">
                    <span>Users</span>
                    <small className="px-1">Be a wise leader</small>
                  </h6>
                </div>
                <div className="e-table">
                  <div className="table-responsive table-lg mt-3">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th className="align-top">
                            <div className="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="all-items"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="all-items"
                              />
                            </div>
                          </th>
                          <th>Photo</th>
                          <th className="max-width">Name</th>
                          <th className="sortable">Date</th>
                          <th> </th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="align-middle">
                            <div className="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="item-1"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="item-1"
                              />
                            </div>
                          </td>
                          <td className="align-middle text-center">
                            <div
                              className="bg-light d-inline-flex justify-content-center align-items-center align-top"
                              style={{ width: 35, height: 35, borderRadius: 3 }}
                            >
                              <i
                                className="fa fa-fw fa-photo"
                                style={{ opacity: "0.8" }}
                              />
                            </div>
                          </td>
                          <td className="text-nowrap align-middle">
                            Adam Cotter
                          </td>
                          <td className="text-nowrap align-middle">
                            <span>09 Dec 2017</span>
                          </td>
                          <td className="text-center align-middle">
                            <i className="fa fa-fw text-secondary cursor-pointer fa-toggle-on" />
                          </td>
                          <td className="text-center align-middle">
                            <div className="btn-group align-top">
                              <button
                                className="btn btn-sm btn-outline-secondary badge"
                                type="button"
                                data-toggle="modal"
                                data-target="#user-form-modal"
                              >
                                Edit
                              </button>
                              <button
                                className="btn btn-sm btn-outline-secondary badge"
                                type="button"
                              >
                                <i className="fa fa-trash" />
                              </button>
                            </div>
                          </td>
                        </tr>
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                      </tbody>
                    </table>
                  </div>
                  <div className="d-flex justify-content-center">
                    <ul className="pagination mt-3 mb-0">
                      <li className="disabled page-item">
                        <a href="#" className="page-link">
                          ‹
                        </a>
                      </li>
                      <li className="active page-item">
                        <a href="#" className="page-link">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link">
                          4
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link">
                          5
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link">
                          ›
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link">
                          »
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Right />
        </div>
        {/* User Form Modal */}
        <div
          className="modal fade"
          role="dialog"
          tabIndex={-1}
          id="user-form-modal"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Create User</h5>
                <button type="button" className="close" data-dismiss="modal">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="py-1">
                  <form className="form" noValidate="">
                    <div className="row">
                      <div className="col">
                        <div className="row">
                          <div className="col">
                            <div className="form-group">
                              <label>Full Name</label>
                              <input
                                className="form-control"
                                type="text"
                                name="name"
                                placeholder="John Smith"
                                defaultValue="John Smith"
                              />
                            </div>
                          </div>
                          <div className="col">
                            <div className="form-group">
                              <label>Username</label>
                              <input
                                className="form-control"
                                type="text"
                                name="username"
                                placeholder="johnny.s"
                                defaultValue="johnny.s"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <div className="form-group">
                              <label>Email</label>
                              <input
                                className="form-control"
                                type="text"
                                placeholder="user@example.com"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col mb-3">
                            <div className="form-group">
                              <label>About</label>
                              <textarea
                                className="form-control"
                                rows={5}
                                placeholder="My Bio"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-sm-6 mb-3">
                        <div className="mb-2">
                          <b>Change Password</b>
                        </div>
                        <div className="row">
                          <div className="col">
                            <div className="form-group">
                              <label>Current Password</label>
                              <input
                                className="form-control"
                                type="password"
                                placeholder="••••••"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <div className="form-group">
                              <label>New Password</label>
                              <input
                                className="form-control"
                                type="password"
                                placeholder="••••••"
                              />
                            </div>
                          </div>
                          <div className="col">
                            <div className="form-group">
                              <label>
                                Confirm{" "}
                                <span className="d-none d-xl-inline">
                                  Password
                                </span>
                              </label>
                              <input
                                className="form-control"
                                type="password"
                                placeholder="••••••"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-5 offset-sm-1 mb-3">
                        <div className="mb-2">
                          <b>Keeping in Touch</b>
                        </div>
                        <div className="row">
                          <div className="col">
                            <label>Email Notifications</label>
                            <div className="custom-controls-stacked px-2">
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="notifications-blog"
                                  defaultChecked=""
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="notifications-blog"
                                >
                                  Blog posts
                                </label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="notifications-news"
                                  defaultChecked=""
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="notifications-news"
                                >
                                  Newsletter
                                </label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="notifications-offers"
                                  defaultChecked=""
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="notifications-offers"
                                >
                                  Personal Offers
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col d-flex justify-content-end">
                        <button className="btn btn-primary" type="submit">
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>



        </div>
        
      </main>
    </div>
  );
}
