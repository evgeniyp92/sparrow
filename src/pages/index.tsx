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
        <p className='text-center text-lg text-white'>cockpit preparation checklist</p>
        <div>
          <div className='flex flex-row justify-between items-end text-white'>
            <p>Gear pins/covers</p>
            <div className='flex-auto border-b-2 h-3 mx-1 mb-1.5 border-dotted' />
            <p>removed</p>
          </div>
          <div className='flex flex-row justify-between items-end text-white'>
            <p>fuel</p>
            <div className='flex-auto border-b-2 h-3 mx-1 mb-1.5 border-dotted' />
            <p>_____KG/lb</p>
          </div>
          <div className='flex flex-row justify-between items-end text-white'>
            <p>Seat belts</p>
            <div className='flex-auto border-b-2 h-3 mx-1 mb-1.5 border-dotted' />
            <p>on</p>
          </div>
          <div className='flex flex-row justify-between items-end text-white'>
            <p>adirs</p>
            <div className='flex-auto border-b-2 mx-1 mb-1.5 border-dotted' />
            <p>nav</p>
          </div>
          <div className='flex flex-row justify-between items-end text-white'>
            <p>baro ref</p>
            <div className='flex-auto border-b-2 mx-1 mb-1.5 border-dotted' />
            <p>check set and xcheck</p>
          </div>
        </div>
      </div>
    </div>
  );
}
