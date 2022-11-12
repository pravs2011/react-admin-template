import React from "react";
import { Link, NavLink } from "react-router-dom";
import SidebarLogo from "./SidebarLogo";

const LeftSideBar = () => {
  return (
    <div className="leftside-menu">
      {/* ========== Left Sidebar Start ========== */}
      <SidebarLogo />
      <div className="h-100" id="leftside-menu-container" data-simplebar>
        {/*- Sidemenu */}
        <ul className="side-nav">
          <li className="side-nav-title side-nav-item">Navigation</li>
          <li className="side-nav-item">
            <NavLink
              data-bs-toggle="collapse"
              to="#sidebarDashboards"
              aria-expanded="false"
              aria-controls="sidebarDashboards"
              className="side-nav-link"
            >
              <i className="uil-home-alt" />
              <span className="badge bg-success float-end">4</span>
              <span> Dashboards </span>
            </NavLink>
            <div className="collapse" id="sidebarDashboards">
              <ul className="side-nav-second-level">
                <li>
                  <NavLink to="/dashboard-tc">Treament Center</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard-nc">Nodal Center</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard-state">State Analytics</NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li className="side-nav-title side-nav-item">Quick Menu</li>
          {/* <li className="side-nav-item">
            <NavLink to="/all-patients" className="side-nav-link">
              <i className="uil-user" />
              <span> All Patients </span>
            </NavLink>
          </li> */}
          <li className="side-nav-item">
            <a
              data-bs-toggle="collapse"
              href="#sidebarEcommerce"
              aria-expanded="false"
              aria-controls="sidebarEcommerce"
              className="side-nav-link"
            >
              <i className="uil-user" />
              <span> Patients </span>
              <span className="menu-arrow" />
            </a>
            <div className="collapse" id="sidebarEcommerce">
              <ul className="side-nav-second-level">
                <li>
                  <NavLink to="/patients">
                    <i className="uil-document-layout-left" /> List Patients
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/add-diagnosis">
                    <i className="uil-user-plus" /> Add Patients
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li className="side-nav-item">
            <NavLink to="/appointments" className="side-nav-link">
              <i className="uil-calender" />
              <span> Appointments/Calender </span>
            </NavLink>
          </li>
          <li className="side-nav-item">
            <a href="apps-chat.html" className="side-nav-link">
              <i className="uil-comments-alt" />
              <span> Chat </span>
            </a>
          </li>

          <li className="side-nav-item">
            <a
              data-bs-toggle="collapse"
              href="#sidebarEmail"
              aria-expanded="false"
              aria-controls="sidebarEmail"
              className="side-nav-link"
            >
              <i className="mdi mdi-google-analytics" />
              <span> Reports </span>
              <span className="menu-arrow" />
            </a>
            <div className="collapse" id="sidebarEmail">
              <ul className="side-nav-second-level">
                <li>
                  <NavLink to="/reports/generic">Generic Reports</NavLink>
                </li>
                <li>
                  <NavLink to="/reports/severitywise">Severity-wise</NavLink>
                </li>
                <li>
                  <NavLink to="/reports/jointswise">Joints-wise</NavLink>
                </li>
                <li>
                  <NavLink to="/reports/bleedwise">Bleed-wise</NavLink>
                </li>
              </ul>
            </div>
          </li>

          {/* <li className="side-nav-item">
            <a href="apps-social-feed.html" className="side-nav-link">
              <i className="uil-rss" />
              <span> Social Feed </span>
            </a>
          </li>
          <li className="side-nav-item">
            <a
              data-bs-toggle="collapse"
              href="#sidebarTasks"
              aria-expanded="false"
              aria-controls="sidebarTasks"
              className="side-nav-link"
            >
              <i className="uil-clipboard-alt" />
              <span> Tasks </span>
              <span className="menu-arrow" />
            </a>
            <div className="collapse" id="sidebarTasks">
              <ul className="side-nav-second-level">
                <li>
                  <a href="apps-tasks.html">List</a>
                </li>
                <li>
                  <a href="apps-tasks-details.html">Details</a>
                </li>
                <li>
                  <a href="apps-kanban.html">Kanban Board</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="side-nav-item">
            <a href="apps-file-manager.html" className="side-nav-link">
              <i className="uil-folder-plus" />
              <span> File Manager </span>
            </a>
          </li> */}
          <li className="side-nav-title side-nav-item">Drug Inventory</li>
          <li className="side-nav-item">
            <a
              data-bs-toggle="collapse"
              href="#sidebarSupPages"
              aria-expanded="false"
              aria-controls="sidebarPages"
              className="side-nav-link"
            >
              <i className="mdi mdi-briefcase-account-outline" />
              <span> Suppliers </span>
              <span className="menu-arrow" />
            </a>
            <div className="collapse" id="sidebarSupPages">
              <ul className="side-nav-second-level">
                <li>
                  <NavLink to="/suppliers">Supplier List</NavLink>
                </li>
                <li>
                  <NavLink to="/supplier-add">Add Supplier</NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li className="side-nav-item">
            <NavLink to="/products" className="side-nav-link">
              <i className="uil-capsule" />
              <span> Product Master </span>
            </NavLink>
          </li>
          <li className="side-nav-item">
            <a
              data-bs-toggle="collapse"
              href="#sidebarPURCHASEPages"
              aria-expanded="false"
              aria-controls="sidebarPages"
              className="side-nav-link"
            >
              <i className="mdi mdi-chat-outline" />
              <span> Purchase Requests</span>
              <span className="menu-arrow" />
            </a>
            <div className="collapse" id="sidebarPURCHASEPages">
              <ul className="side-nav-second-level">
                <li>
                  <NavLink to="/purchase-request-add">Create Request</NavLink>
                </li>
                <li>
                  <NavLink to="/purchase-requests">List Requests</NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li className="side-nav-item">
            <a
              data-bs-toggle="collapse"
              href="#sidebarInvPages"
              aria-expanded="false"
              aria-controls="sidebarPages"
              className="side-nav-link"
            >
              <i className="mdi mdi-list-status" />
              <span>State Inventory </span>
              <span className="menu-arrow" />
            </a>
            <div className="collapse" id="sidebarInvPages">
              <ul className="side-nav-second-level">
                <li>
                  <NavLink to="/inventory-status">Inventory Status</NavLink>
                </li>
                <li>
                  <NavLink to="/inventory-status">TCs Inventory Status</NavLink>
                </li>
                <li>
                  <NavLink to="/transaction-history-state">
                    Transaction History
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/list-purchases">Purchase History</NavLink>
                </li>
                <li>
                  <NavLink to="/add-purchase">Add Purchase</NavLink>
                </li>
                <li>
                  <NavLink to="/create-sale">Allocate Drug to TC</NavLink>
                </li>
                <li>
                  <NavLink to="/tc-allotment-status">
                    TC Allotment Status
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li className="side-nav-item">
            <a
              data-bs-toggle="collapse"
              href="#sidebarTCInvPages"
              aria-expanded="false"
              aria-controls="sidebarPages"
              className="side-nav-link"
            >
              <i className="mdi mdi-list-status" />
              <span> TC Inventory </span>
              <span className="menu-arrow" />
            </a>
            <div className="collapse" id="sidebarTCInvPages">
              <ul className="side-nav-second-level">
                <li>
                  <NavLink to="/inventory-status-tc">Inventory Status</NavLink>
                </li>
                <li>
                  <NavLink to="/add-purchase-tc">Add Purchase</NavLink>
                </li>
                <li>
                  <NavLink to="/create-sale-tc">Create Sale/Dose</NavLink>
                </li>
              </ul>
            </div>
          </li>

          <li className="side-nav-title side-nav-item">Administrator</li>
          <li className="side-nav-item">
            <NavLink to="/users" className="side-nav-link">
              <i className="uil-user" />
              <span className="badge bg-secondary text-light float-end">
                New
              </span>
              <span> Users </span>
            </NavLink>
          </li>
          <li className="side-nav-item">
            <NavLink to="/roles" className="side-nav-link">
              <i className="mdi mdi-shield-account" />
              <span> Roles </span>
            </NavLink>
          </li>
          <li className="side-nav-item">
            <NavLink to="/tcenters" className="side-nav-link">
              <i className="mdi mdi-city-variant-outline" />
              <span> Treatment Centers </span>
            </NavLink>
          </li>
        </ul>
        {/* End Sidebar */}
        <div className="clearfix" />
      </div>
      {/* Sidebar -left */}
    </div>
  );
};

export default LeftSideBar;
