export default function Home() {
  return (
    <div className='w-screen h-screen bg-slate-900'>
      <h1 className='text-white font-b612'>Sparrow</h1>
      <h3 className='text-green-600 font-b612mono uppercase'>Select a checklist</h3>
      <ul>
        <li className='text-green-600 font-b612mono uppercase'>
          <span className='text-cyan-500'>Boeing 737</span> • Elec Power Up
        </li>
      </ul>
      <div className='m-2 border-2'>
        <a href='#'>
          <div className='m-4 p-4 min-w-fit w-40 font-b612mono bg-green-600 text-black'>
            <p className='text-center'>NORMAL CHECKLIST</p>
          </div>
        </a>
        <a href='#'>
          <div className='m-4 p-4 min-w-fit w-40 font-b612mono  text-black bg-orange-500'>
            <p className='text-center'>EMERGENCY</p>
          </div>
        </a>
        <a href='#'>
          <div className='m-4 p-4 min-w-fit w-40 font-b612mono text-black bg-cyan-500'>
            <p className='text-center'>AUGMENTED CL/FLOW</p>
          </div>
        </a>
      </div>
    </div>
  );
}
