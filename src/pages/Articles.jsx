import React from 'react';
import './Articles.css';
import { Project, Words, Link } from 'arwes';

const Articles = () => {
    return (
        <div className="article-top">
            <Project className="project" animate header='2020/09/07 - Home page was launched!'>
                {anim => (
                    <div>
                        <p style={{marginBottom: 16}}><Words animate show={anim.entered}>
                            Hello, hackers!. Today hibi221b's website is now available on Github Pages.
                        </Words></p>
                         <Link href="https://github.com/hibi221b/hibi221b.github.io">https://github.com/hibi221b/hibi221b.github.io</Link>
                    </div>
                )}
            </Project>
        </div>
    )
}

export default Articles;
