import React from 'react'

const TopUsers = () => {
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 10, name: 'Helen Moore'},
    { id: 11, name: 'Ivy Taylor'},
    { id: 12, name: 'Jack Anderson'},
    { id: 13, name: 'Kathy Thomas'},
    { id: 14, name: 'Liam Jackson'},
    { id: 15, name: 'Lily White'},
    { id: 16, name: 'Lucy Brown'},
    { id: 17, name: 'Mia Davis'},

  ];
  return (
    <>   
    <h1 className="flex justify-center" style={{fontSize:'25px'}}>Our Top Users</h1>
    <section className='TopUsers flex justify-center'>
    <ul className="list-none p-0 m-0">
        {users.map((user) => (
          <li key={user.id} className="p-4 border-b border-gray-200">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-200 mr-4">
              <img src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"></img>  
              </div> 
              <div>
                <p className="text-lg font-bold">{user.name}</p>
                <p className="text-gray-600">{user.email}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      </section>
    </>
  );
}

export default TopUsers