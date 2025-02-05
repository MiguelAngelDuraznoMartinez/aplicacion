import Link from "next/link";
export default function NavBar(){
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" href="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/blog">Blog</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Usuarios
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="nav-link" href="/usuarios/mostrar">Mostrar Usuario</Link></li>
            <li><Link className="nav-link" href="/usuarios/nuevo">Agregar Usuario </Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="nav-link" href="/usuarios/editar">Modificar Usuario</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="nav-link" href="/productos/mostrar">Mostrar Productos</Link></li>
            <li><Link className="nav-link" href="/productos/nuevo">Agregar Producto</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="nav-link" href="/productos/editar">Modificar Productos</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Ventas
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="nav-link" href="/ventas/mostrar">Mostrar Ventas</Link></li>
            <li><Link className="nav-link" href="/ventas/nuevo">Agregar Venta</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="nav-link" href="/ventas/editar">Modificar Venta</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link href="" className="nav-link disabled" aria-disabled="true">Disabled</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </>
    );
}