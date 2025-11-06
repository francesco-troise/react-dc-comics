export default function HeaderLink({ href, link_name }) {
  return (
    <a className="nav-link " href={href}>
      {link_name}
    </a>
  );
}
