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
    </div>
  );
}
