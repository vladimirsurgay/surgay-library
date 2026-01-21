import { Suspense } from 'react'

export default function LibraryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Suspense fallback={
      <div className="section-dark min-h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="animate-pulse">
            <div className="h-10 bg-[#16162A] rounded-xl w-64 mx-auto mb-4" />
            <div className="h-6 bg-[#16162A] rounded-xl w-96 mx-auto mb-8" />
            <div className="h-12 bg-[#16162A] rounded-xl mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1,2,3,4,5,6].map(i => (
                <div key={i} className="h-64 bg-[#16162A] rounded-2xl" />
              ))}
            </div>
          </div>
        </div>
      </div>
    }>
      {children}
    </Suspense>
  )
}
