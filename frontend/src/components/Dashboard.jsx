import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <div className="dashboard-body">
        <h1>
          Salam, Welcome to <span>Molti Soft</span>
        </h1>
        <div className="dashboard-container">
          <Link className="button-primary btn" to="/stock">
            Stock
          </Link>
          <Link className="button-primary btn" to="/invoice">
            Invoice
          </Link>
          <Link className="button-primary btn" to="/admin">
            Admin
          </Link>
          <Link className="button-primary btn" to="/khata">
            Khata
          </Link>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
