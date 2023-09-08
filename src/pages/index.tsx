export default function Home() {
  return (
    <div className='w-screen h-screen bg-slate-900'>
      <h1 className='text-white font-b612'>Sparrow</h1>
      <h3 className='text-green-600 font-b612mono uppercase'>Select a checklist</h3>
      <ul>
        <li className='text-green-600 font-b612mono uppercase'>
          <span className='text-cyan-500'>Airbus A320</span>
        </li>
      </ul>
      <div className='m-2 border-2' id='buttons-specimen'>
        <a href='#'>
          <div className='m-4 p-4 min-w-fit w-40 font-b612mono bg-green-600 text-black'>
            <p className='text-center'>NORMAL CHECKLIST</p>
          </div>
        </a>
        <a href='#'>
          <div className='m-4 p-4 min-w-fit w-40 font-b612mono  text-black bg-orange-500'>
            <p className='text-center'>NON-NORMAL C/L</p>
          </div>
        </a>
        <a href='#'>
          <div className='m-4 p-4 min-w-fit w-40 font-b612mono text-black bg-cyan-500'>
            <p className='text-center'>AUGMENTED CL/FLOW</p>
          </div>
        </a>
      </div>
      <div id='checklist-specimen' className='font-b612mono uppercase m-4 p-4 w-[50rem]'>
        <p className='text-center text-lg text-white mb-4'>cockpit preparation checklist</p>
        <div className='flex flex-col space-y-1'>
          <div className='flex flex-row justify-between items-end text-cyan-500 border-2 border-cyan-400 px-2'>
            <span className='text-xl mr-4'>□</span>
            <p>Gear pins/covers</p>
            <div className='flex-auto border-b-4 h-3 ml-4 mb-1.5 border-dotted border-cyan-600' />
            <p>remove</p>
          </div>
          <div className='flex flex-row justify-between items-end text-green-400 pl-2'>
            <span className='text-xl mr-4'>□</span>
            <p>fuel</p>
            <div className='flex-auto border-b-4 h-3 ml-4 mb-1.5 border-dotted border-green-400' />
            <p>_____KG/lb</p>
          </div>
          <div className='flex flex-row justify-between items-end text-cyan-500 pl-2'>
            <span className='text-xl mr-4'>□</span>
            <p>Seat belts</p>
            <div className='flex-auto border-b-4 h-3 ml-4 mb-1.5 border-dotted border-cyan-500' />
            <p>on</p>
          </div>
          <div className='flex flex-row justify-between items-end text-cyan-500 pl-2'>
            <span className='text-xl mr-4'>□</span>
            <p>adirs</p>
            <div className='flex-auto border-b-4 ml-4 mb-1.5 border-dotted border-cyan-500' />
            <p>nav</p>
          </div>
          <div className='flex flex-row justify-between items-end text-cyan-500 pl-2'>
            <span className='text-xl mr-4'>□</span>
            <p>baro ref</p>
            <div className='flex-auto border-b-4 ml-4 mb-1.5 border-cyan-500 border-dotted' />
            <p>check set and xcheck</p>
          </div>
        </div>
        <div className='flex flex-col items-center mt-4'>
          <p className='uppercase font-b612mono text-white'>checklist complete</p>
          <button className='m-4 p-4 min-w-fit font-b612mono text-black bg-cyan-500'>Check</button>
        </div>
      </div>
    </div>
  );
}
