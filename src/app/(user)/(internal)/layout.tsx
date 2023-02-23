import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/Header'
import { TabGroup } from '@/components/ui/TabGroup'

export default async function ServicesLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      {/* <TabGroup
        path="/route-groups"
        items={[
          {
            text: 'Home',
          },
          ...categories.map((x) => ({
            text: x.name,
            slug: x.slug,
          })),
          { text: 'Checkout', slug: 'checkout' },
          { text: 'Blog', slug: 'blog' },
        ]}
      /> */}
      <main className="mt-32">{children}</main>
      <Footer />
    </>
  )
}
