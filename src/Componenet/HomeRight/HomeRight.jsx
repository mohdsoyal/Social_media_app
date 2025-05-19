// import React, { useState, useEffect } from 'react';
// import SearchUser from './SearchUser';
// import PopularUserCard from './PopularUserCard';
// import { Card } from '@mui/material';

// const HomeRight = () => {
//   const [users, setUsers] = useState([]);
//   const [filteredUsers, setFilteredUsers] = useState([]);

//   // Fetch all users on component mount
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await fetch('http://localhost:6393/users');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setUsers(data);
//         setFilteredUsers(data);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   // Handle search input
//   const handleSearch = async (query) => {
//     if (!query) {
//       setFilteredUsers(users);
//       return;
//     }

//     try {
//       const response = await fetch(`http://localhost:6393/api/user/search/${query}`);
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       setFilteredUsers(data);
//     } catch (error) {
//       console.error('Error searching users:', error);
//     }
//   };

//   return (
//     <div>
//       <SearchUser onSearch={handleSearch} />

//       <Card className="p-2">
//         <div className="flex justify-between py-5 items-center">
//           <p className="font-semibold opacity-70">Suggestions For You</p>
//           <p className="text-xs font-semibold opacity-95">View All</p>
//         </div>

//         <div>
//           {filteredUsers.map((user) => (
//             <PopularUserCard key={user.userId} {...user} />
//           ))}
//         </div>
//       </Card>
//     </div>
//   );
// };

// export default HomeRight;




import React, { useState, useEffect } from 'react';
import SearchUser from './SearchUser';
import PopularUserCard from './PopularUserCard';
import { Card } from '@mui/material';

const HomeRight = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  // Fetch all users on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:6393/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsers(data);
        setFilteredUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  // Handle search input
  const handleSearch = async (query) => {
    if (!query) {
      setFilteredUsers(users);
      return;
    }

    try {
      const response = await fetch(`http://localhost:6393/api/user/search/${query}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setFilteredUsers(data);
    } catch (error) {
      console.error('Error searching users:', error);
    }
  };

  return (
    <div>
      <SearchUser onSearch={handleSearch} />

      <Card className="p-2">
        <div className="flex justify-between py-5 items-center">
          <p className="font-semibold opacity-70">Suggestions For You</p>
          <p className="text-xs font-semibold opacity-95">View All</p>
        </div>

        <div>
          {filteredUsers.map((user) => {
            console.log("User object:", user); // Debug
            return (
              <PopularUserCard
                key={user._id || user.id} // Ensure correct key
                userId={user._id || user.id} // Ensure correct userId
                firstName={user.firstName}
                lastName={user.lastName}
              />
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default HomeRight;
