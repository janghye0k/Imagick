export function Footer() {
  return (
    <footer className="border-t border-foreground/10">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 text-sm text-foreground/70">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>Imagick. Free in-browser image tools.</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <a className="hover:text-foreground" href="/convert">
              Convert
            </a>
            <a className="hover:text-foreground" href="/compress">
              Compress
            </a>
            <a className="hover:text-foreground" href="/resize">
              Resize
            </a>
            <a className="hover:text-foreground" href="/filter">
              Filter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
