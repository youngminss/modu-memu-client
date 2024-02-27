const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center">
      <div className="scroll-hidden max-h-[100dvh] w-screen max-w-[48rem] overflow-y-scroll shadow-xl">{children}</div>
    </div>
  )
}

export default Layout
