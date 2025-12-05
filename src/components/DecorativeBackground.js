export default function DecorativeBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none opacity-30">
      <div className="absolute top-20 right-20 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
    </div>
  );
}

