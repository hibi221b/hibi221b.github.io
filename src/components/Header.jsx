import React from 'react';
import { Header, Heading, Link } from 'arwes';
import { useHistory } from 'react-router-dom';

const HeaderCompopent = () => {
    const history = useHistory();

    return (
        <div style={{padding: 20}}>
            <Header animate>
                <Heading node="h1">
                    <Link href="#" onClick={() => history.push("/")}>
                        hibi221b
                    </Link>
                </Heading>
            </Header>
        </div>
    )
}

export default HeaderCompopent;
