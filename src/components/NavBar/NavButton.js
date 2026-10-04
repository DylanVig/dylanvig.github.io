export default function NavButton({ children, isSelected, ...props }) {
  return (
    <li>
      <button
        className={isSelected ? "nav-link active" : "nav-link"}
        aria-current={isSelected ? "page" : undefined}
        {...props}
      >
        {children}
      </button>
    </li>
  );
}
