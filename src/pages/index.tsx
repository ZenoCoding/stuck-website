import React from 'react';
import Nav from '@/components/Nav';

const Home: React.FC = () => {
    return (
        <div>
            <Nav/>
            <h1>Hu Tao Page</h1>
            <p>we love hu tao</p>
            <img src="/images/hu_tao.jpeg" alt="best girl"/>
        </div>
    );
};

export default Home;