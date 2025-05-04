import React from 'react';

const LeaderCards = () => {
    const leaderList = [
        (
            name: "Michael Ade",
            position: "Frontend Developer",
            department: "Engineering",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
        ),
        (
            name: "Tolu Adebayo",
            position: "HR Manager",
            department: "Human Resources",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
        ),
        (
            name: "Chidi Nwosu",
            position: "Product Designer",
            department: "Design",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
        )  
    ];
  return (
    <section className='flex justify-between w-[70%] m-auto'>


    <div className="max-w-xs bg-white rounded-2xlshadow-md overflow-hidden m-4">
        <img src={image} alt="pic" className='w-full h-48 object-cover'/>
        <div className='p-4'>
          <h2 className='text-xl font-bold text-gray-800'>{name}</h2>
          <p className='text-gray-600'><span>Position:</span>{position}</p>
          <p className='text-gray-600'><span>Department:</span>{department}</p>
        </div>
    </div>
</section>
  )
}

export default LeaderCards;