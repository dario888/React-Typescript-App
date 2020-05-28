import React, {Suspense, Fragment} from 'react'



const Episodes = React.lazy<any>(()=>import('./Episodes'))

const HomePage = () => {
    return (
        <Fragment>         
            <Suspense fallback={<div>LOADING...</div>}>
                <Episodes />
            </Suspense>
        </Fragment>
    )
}

export default HomePage
