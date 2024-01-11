const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center">
      <div className="h-[100dvh] w-screen max-w-[48rem] shadow-xl">{children}</div>
    </div>
  )
}

export default Layout
