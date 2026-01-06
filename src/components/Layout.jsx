export default function Layout({ children }) {
  return (
    <main
      className="
      grid
      grid-cols-1
      md:grid-cols-[280px_minmax(0,1fr)]
      gap-4
      px-4
      py-6
      w-full
    "
    >
      {children}
    </main>
  );
}
