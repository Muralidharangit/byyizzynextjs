export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] grid place-items-center bg-white">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
    </div>
  );
}
