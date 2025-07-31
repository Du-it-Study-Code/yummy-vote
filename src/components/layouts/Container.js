export default function Container({ children, className = "" }) {
  return (
    <div className={`w-full max-w-[768px] mx-auto px-4 ${className}`}>
      {children}
    </div>
  );
}
