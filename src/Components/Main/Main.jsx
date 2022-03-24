import React from 'react';
import UnauthApp from '../../UnauthApp';
import AuthApp from '../../AuthApp';
import { Context as TokenContext } from '../../Context/Token/TokenContext';

function Main() {
    const ctxToken = React.useContext(TokenContext);

    if (ctxToken.token) {
        return (
            <main>
                <AuthApp />
            </main>
        )
    } else {
        return (<main>
            <UnauthApp />
        </main>)
    }
}

export default Main;