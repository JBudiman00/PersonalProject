export default function Home() {
  return (
    <div 
      className="grid h-[calc(100vh-64px)]
      bg-gradient-to-r 
      from-[#2A2F4F] 
      to-[#E5BEEC]   
      animate-gradient-x
      text-center text-[#FDE2F3] text-2xl
      h-screen"
      id="home"
    >
      <div className="my-60 animate-fade-left">
        <p>Hi, my name is Jonathan Budiman.</p>
        <p>I’m an aspiring Software Developer.</p>
      </div>
    </div>
  )
}
