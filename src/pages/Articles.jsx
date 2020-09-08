import React from 'react';
import './Articles.css';
import { Project, Words, Link } from 'arwes';

const Articles = () => {
    return (
        <div className="article-top">
            <div className="container">
                <Project animate header='2020/09/08 - pien on the web'>
                    {anim => (
                        <div>
                            <p style={{marginBottom: 16}}><Words animate show={anim.entered}>
                            The pien can be displayed on the web, created using a 3D rendering framework called Zdog. 
                            </Words></p>
                            <p style={{marginBottom: 16}}><Words animate show={anim.entered}>
                            I hope you will try using Zdog to create your own awesome objects!
                            </Words></p>
                            <p><Link href="https://github.com/hibi221b/pien/">{">> PIEN"}</Link></p>
                            <p><Link href="https://zzz.dog/">{">> Zdog js"}</Link></p>
                        </div>
                    )}
                </Project>
            </div>
            <div className="container">
                <Project animate header='2020/09/07 - Home page was launched!'>
                    {anim => (
                        <div>
                            <p style={{marginBottom: 16}}><Words animate show={anim.entered}>
                                Hello, hackers! Today hibi221b's website is now available on Github Pages.
                            </Words></p>
                            <Link href="https://github.com/hibi221b/hibi221b.github.io">{">> Home Page"}</Link>
                        </div>
                    )}
                </Project>
            </div>
        </div>
    )
}

export default Articles;
