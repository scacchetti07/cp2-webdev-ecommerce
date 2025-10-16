import { Link } from "react-router-dom";

function Navbar({id}) {
  return (
    <nav className="bg-yellow-400 text-black px-6 py-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">Fiap Commerce</h1>
      <div className="flex gap-4">
        <a href="/" className="hover:underline">Home</a>
        <Link to={`/profile/${id}`} className="hover:underline">Perfil</Link>
        <Link to={`/carts`} className="hover:underline">Carrinho</Link>
      </div>
    </nav>
  );
}

export default Navbar;
