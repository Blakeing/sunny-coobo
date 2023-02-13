// import { notFound } from 'next/navigation'

// import { TestPage } from '@/components/pages/test/TestPage'
// import { TestPagePreview } from '@/components/pages/test/TestPreviewPage'
// import { PreviewSuspense } from '@/components/preview/PreviewSuspense'
// import { PreviewWrapper } from '@/components/preview/PreviewWrapper'
// import { getHomePage } from '@/lib/sanity.client'
// import { getPreviewToken } from '@/lib/sanity.server.preview'

// export const revalidate = 30

// export default async function TestRoute() {
//   const token = getPreviewToken()
//   const data = (await getHomePage({ token })) || {
//     title: '',
//     overview: [],
//     showcaseProjects: [],
//   }

//   if (!data && !token) {
//     notFound()
//   }

//   return (
//     <>
//       {token ? (
//         <PreviewSuspense
//           fallback={
//             <PreviewWrapper>
//               <TestPage data={data} />
//             </PreviewWrapper>
//           }
//         >
//           <TestPagePreview token={token} />
//         </PreviewSuspense>
//       ) : (
//         <TestPage data={data} />
//       )}
//     </>
//   )
// }
