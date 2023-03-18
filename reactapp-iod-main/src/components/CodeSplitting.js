import React, { Suspense } from 'react'
const ClockWithLifeCycle = React.lazy( () => import('./ClockWithLifeCycle'))

function CodeSplitting() {
  return (
    <div>
        <Suspense fallback={ <div> Loading ...... </div>} >
            <h1>CodeSplitting with React.Lazy</h1>
            <ClockWithLifeCycle />
        </Suspense>
    </div>
  )
}

export default CodeSplitting;