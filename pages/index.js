import React from "react";
import Link from 'next/link'



function Index() {
    
    return (
        <>
            <div className="App">
            <div style={{ fontSize: "23px", fontWeight: "700" }}>
                <h1>Welcome to Cacao! </h1>
                <h2>Lend your NFTs without lending them.</h2>
            </div>
            <Link 
                href='/signin'
            >
                <div style={{ width: "70px" }}>
                    <h2>Sign In</h2>
                </div>
            </Link>
            
            </div>
        </>
    );
};

export default Index;