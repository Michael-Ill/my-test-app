// App.js
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';



function App() {

  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])
  const [id, setId] = useState(1)


  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users/')
      .then(({ data }) => setUsers(data))
  }, [])

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then(({ data }) => setPosts(data))
  }, [id])

  // console.log(posts)

  return (
    <ul>
      {
        users.map(user => (
          <li key={user.id}>
            <h3 onClick={() => setId(user.id)}>{user.name}</h3>
            <div>
              {
                posts.map(post => (
                  <> {user.id === id &&
                    <div>
                      <p>{post.title}</p>
                      <p>{post.body}</p>
                    </div>}
                  </>
                ))
              }
            </div>
          </li>
        ))
      }
    </ul>
  )

}
export default App;

