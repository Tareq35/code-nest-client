import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/coursesCategory')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])
    return (
        <div className="drawer drawer-open mt-3">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-side">
                <h4 className='md:text-2xl lg:text-3xl font-semibold mb-5 text-green-600 px-1 mt-20'>Course Categories</h4>
                <ul className="menu p-4 md:w-52 lg:w-80 min-h-full text-base-content md:text-xl lg:text-2xl font-semibold gap-5">
                    {
                        categories.map(category => <Link
                            key={category.id}
                            to={`/coursesCategory/${category.id}`}
                        >
                            {category.name}
                        </Link>)
                    }
                </ul>

            </div>
        </div>
    );
};




export default SideNav;