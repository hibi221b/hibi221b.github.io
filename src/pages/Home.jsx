import React from 'react';
import './Home.css'
import { Logo, Button, Link } from 'arwes';
import { useHistory } from 'react-router-dom';
import { AiOutlineGithub } from 'react-icons/ai';
import { ImTwitter } from 'react-icons/im';
import { SiQiita } from 'react-icons/si';

const Home = () => {
    const history = useHistory();

    return (
        <div className="home">
            <Logo animate size={100} className="logo"></Logo>
            <p className="desc">Fourth year university student / I love <Link href="https://www.rust-lang.org/">Rustlang</Link> &#x1f980; / My most favorite anime is <Link href="https://en.wikipedia.org/wiki/The_Tatami_Galaxy">The Tatami Galaxy</Link> </p>
            <div className="links">
                <Link href="https://github.com/hibi221b">
                    <AiOutlineGithub size={40} className="links-item"></AiOutlineGithub>
                </Link>
                <Link href="https://twitter.com/hibi221b">
                    <ImTwitter size={40} className="links-item"/>
                </Link>
                <Link href="https://qiita.com/hibi221b">
                    <SiQiita size={48} className="links-item" />
                </Link>
            </div>
            <Button animate className="article-button">
                <Link href="#" onClick={() => history.push("/article")}>
                    Article
                </Link>
            </Button>
        </div>
    )
}

export default Home;
