import React, { Suspense } from 'react'
import ErrorBoundary from './ErrorBoundaries';

const ClockWithLifeCycle = React.lazy( () => import('./ClockWithLifeCycle') ) ;

const GreetingFunc = React.lazy( () => {
    return new Promise(resolve => {
        setTimeout( () => {
            resolve( import('./GreetingFunc'));
        }, 5000 );
    })
} );

function ErrorComponentBoundary() {
  return (
    <div> 
         <h1>ErrorComponentBoundary</h1>
         <ErrorBoundary>
            <Suspense fallback = { <div>Loading ..... </div>}>
                <section>
                    <ClockWithLifeCycle />
                    <GreetingFunc />
                </section>
            </Suspense>
            <Suspense fallback = { <div>Loading ..... </div>}>
                <section>
                    
                    <GreetingFunc />
                </section>
            </Suspense>
         </ErrorBoundary>

    </div>
  )
}

export default ErrorComponentBoundary;
