export default function Header() {
  return (
    <div>
      {/* Logo */}
      <img src="/favicon.ico" alt="logo" />
      {/* Nav bar */}
      <nav>
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/products">Products</a>
        <a href="/training">Training</a>
      </nav>
      {/* Contacts */}
      <div>
        <button>0740650480</button>
        <button>contact us</button>
      </div>
    </div>
  );
}
