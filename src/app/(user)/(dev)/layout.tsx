export default function ServicesLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <main>{children}</main>
    </>
  )
}
