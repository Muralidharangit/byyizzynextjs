export default function Head() {
  return (
    <>
      <title>My App</title>
      <link
        rel="preload"
        as="image"
        href="/images/hero.webp" // 👈 first hero image
        fetchPriority="high"
      />
    </>
  );
}
