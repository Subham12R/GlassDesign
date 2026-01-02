import { useState } from 'react'
export const App = () => {
  const [liked, setLiked] = useState(false)
  const [pressed, setPressed] = useState(false)
  return (
    <div className="w-full h-[300px] bg-cover bg-center ">

      <div className="flex justify-center items-center flex-col h-full px-4 bg-zinc-100 ">
        {/* Light Mode Button */}
        <div className='bg-white p-1 rounded-full transition-all duration-150'>
        <button 
          className="relative px-8 py-2 rounded-full backdrop-blur-md overflow-hidden transition-all duration-150 ease-in-out cursor-pointer"
          onClick={() => setLiked(!liked)}
          onMouseDown={() => setPressed(true)}
          onMouseUp={() => setPressed(false)}
          onMouseLeave={() => setPressed(false)}
          style={{
            background:
              
              'linear-gradient(135deg, rgba(0,0,0,1) 100%, rgba(255,255,255,1) 100%)',
            boxShadow: pressed
              ? `
                inset 2px 2px 4px rgba(0,0,0,0.2),
                inset -2px -2px 4px rgba(0,0,0,0.2),
                inset 1px 1px 2px rgba(0,0,0,5),
                inset -1px -1px 2px rgba(0,0,0,0.5),
              `
              : `
                inset 2px 2px 4px rgba(242,242,242,0.2),
                inset -2px -2px 4px rgba(179,179,179,0.2),
                inset 1px 1px 2px rgba(242,242,242,0.2),
                inset -1px -1px 2px rgba(153,153,153,0.5),
                0 8px 32px rgba(0,0,0,0.1)
              `,
            border: '1px solid rgba(255,255,255,0.0015)',
            transform: pressed ? 'scale(0.98) ' : 'scale(1) translateY(0)'
          }}
        >
          {/* Inner glow layers */}
          <div 
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 20%, rgba(179,179,179,0.2) 100%)'
            }}
          />
          <div className="relative flex items-center gap-2">
            {/* Logo icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill={liked ? "#ef4444" : "none"} stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-all duration-300">
              <path d="M10.4107 19.9677C7.58942 17.858 2 13.0348 2 8.69444C2 5.82563 4.10526 3.5 7 3.5C8.5 3.5 10 4 12 6C14 4 15.5 3.5 17 3.5C19.8947 3.5 22 5.82563 22 8.69444C22 13.0348 16.4106 17.858 13.5893 19.9677C12.6399 20.6776 11.3601 20.6776 10.4107 19.9677Z" />
            </svg>
            <span className='text-zinc-100 font-medium tracking-wider text-lg drop-shadow-lg' style={{ fontFamily: "'Funnel Display', sans-serif" }}>
              Like
            </span>
          </div>
        </button>
        </div>
      
      </div>
      {/* Dark Mode Button */}
      <div className="flex justify-center items-center h-full px-4 bg-zinc-900">
        <div 
          className='bg-zinc-900 p-1 rounded-full transition-all duration-150'
        
        >
        <button 
          className="relative px-8 py-2 rounded-full backdrop-blur-md overflow-hidden transition-all duration-150 ease-in-out cursor-pointer"
          onClick={() => setLiked(!liked)}
          onMouseDown={() => setPressed(true)}
          onMouseUp={() => setPressed(false)}
          onMouseLeave={() => setPressed(false)}
          style={{
            background:
              
              'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,2,244,0.05) 100%)',
            boxShadow: pressed
              ? `
                inset 2px 2px 4px rgba(0,0,0,0.2),
                inset -2px -2px 4px rgba(0,0,0,0.2),
                inset 1px 1px 2px rgba(0,0,0,5),
                inset -1px -1px 2px rgba(0,0,0,0.5),
              `
              : `
                inset 2px 2px 4px rgba(242,242,242,0.2),
                inset -2px -2px 4px rgba(179,179,179,0.2),
                inset 1px 1px 2px rgba(242,242,242,0.2),
                inset -1px -1px 2px rgba(153,153,153,0.5),
                0 8px 32px rgba(0,0,0,0.1)
              `,
            border: '1px solid rgba(255,255,255,0.0015)',
            transform: pressed ? 'scale(0.98) ' : 'scale(1) translateY(0)'
          }}
        >
          {/* Inner glow layers */}
          <div 
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 20%, rgba(179,179,179,0.2) 100%)'
            }}
          />
          <div className="relative flex items-center gap-2">
            {/* Logo icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill={liked ? "#ef4444" : "none"} stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-all duration-300">
              <path d="M10.4107 19.9677C7.58942 17.858 2 13.0348 2 8.69444C2 5.82563 4.10526 3.5 7 3.5C8.5 3.5 10 4 12 6C14 4 15.5 3.5 17 3.5C19.8947 3.5 22 5.82563 22 8.69444C22 13.0348 16.4106 17.858 13.5893 19.9677C12.6399 20.6776 11.3601 20.6776 10.4107 19.9677Z" />
            </svg>
            <span className='text-zinc-100 font-medium tracking-wider text-lg drop-shadow-lg' style={{ fontFamily: "'Funnel Display', sans-serif" }}>
              Like
            </span>
          </div>
        </button>
        </div>
      
      </div>
      {/* Destructive Mode Button */}
      <div className="flex justify-center items-center h-full px-4 bg-amber-100">
        <div 
          className='bg-transparent p-1 rounded-full transition-all duration-150'
        
        >
        <button 
          className="relative px-8 py-2 rounded-full backdrop-blur-md overflow-hidden transition-all duration-150 ease-in-out cursor-pointer"
          onClick={() => setLiked(!liked)}
          onMouseDown={() => setPressed(true)}
          onMouseUp={() => setPressed(false)}
          onMouseLeave={() => setPressed(false)}
          style={{
            background:
              
              'linear-gradient(140deg, rgba(25,25,25,0.5) 100%, rgba(255,255,255,0.5) 0%)',
            boxShadow: pressed
              ? `
                inset 2px 2px 4px rgba(0,0,0,0.2),
                inset -2px -2px 4px rgba(0,0,0,0.2),
                inset 1px 1px 2px rgba(0,0,0,5),
                inset -1px -1px 2px rgba(0,0,0,0.5),
              `
              : `
                inset 2px 2px 4px rgba(242,242,242,0.2),
                inset -2px -2px 4px rgba(179,179,179,0.2),
                inset 1px 1px 2px rgba(242,242,242,0.2),
                inset -1px -1px 2px rgba(153,153,153,0.5),
                0 8px 32px rgba(0,0,0,0.1)
              `,
            border: '1px solid rgba(255,255,255,0.0015)',
            transform: pressed ? 'scale(0.98) ' : 'scale(1) translateY(0)'
          }}
        >
          {/* Inner glow layers */}
          <div 
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 20%, rgba(179,179,179,0.2) 100%)'
            }}
          />
          <div className="relative flex items-center gap-2">
            {/* Logo icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill={liked ? "#ef4444" : "none"} stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-all duration-300">
              <path d="M10.4107 19.9677C7.58942 17.858 2 13.0348 2 8.69444C2 5.82563 4.10526 3.5 7 3.5C8.5 3.5 10 4 12 6C14 4 15.5 3.5 17 3.5C19.8947 3.5 22 5.82563 22 8.69444C22 13.0348 16.4106 17.858 13.5893 19.9677C12.6399 20.6776 11.3601 20.6776 10.4107 19.9677Z" />
            </svg>
            <span className='text-zinc-100 font-medium tracking-wider text-lg drop-shadow-lg' style={{ fontFamily: "'Funnel Display', sans-serif" }}>
              Like
            </span>
          </div>
        </button>
        </div>
      
      </div>

      <div className='w-full bg-zinc-950 text-white px-2 flex justify-center items-center'><span className='text-zinc-200 font-medium text-sm' style={{ fontFamily: "'Funnel Display', sans-serif" }}>Made by Subham12r</span></div>
    </div>
  )
}
