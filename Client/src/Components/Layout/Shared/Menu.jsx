import { Link } from 'react-router-dom';


export const Menu =() => (
<ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
<li><a href="/" className="nav-link px-2 link-secondary">Home</a></li>
<li><a href="/store" className="nav-link px-2">Store</a></li>
<li><Link className="nav-link px-2" to="/store2">Store 2</Link></li>
<li><a href="#" className="nav-link px-2">Pricing</a></li>
<li><a href="#" className="nav-link px-2">FAQs</a></li>
<li><a href="/about" className="nav-link px-2">About</a></li>
<li><Link className="nav-link px-2" to="/about">About 2</Link></li>
</ul>
)