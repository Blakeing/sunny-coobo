import Header from '@/components/shared/Header'

export default function ServicesLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}
