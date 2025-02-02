import { Link } from "react-router-dom"

function Dashboard() {

  return (
    <>
        <Link to="/stock"><button>Stock</button></Link>
        <Link to="/invoice"><button>Invoice</button></Link>
        <Link to="/admin"><button>Admin</button></Link>
        <Link to="/khata"><button>Khata</button></Link>       
    </>
  )
}

export default Dashboard
