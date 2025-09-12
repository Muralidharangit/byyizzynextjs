export default function Loading() {
  return (
    <div className="fixed inset-0 grid place-items-center bg-white z-[9999]">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
    </div>
  );
}