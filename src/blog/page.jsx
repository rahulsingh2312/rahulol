import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { gsap } from "gsap";
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, push, set, onValue } from 'firebase/database';
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
// Initialize Firebase with your configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrP58lBBO3ivag2M8TuO2Yabknony5-TE",
  authDomain: "blog-dd303.firebaseapp.com",
  databaseURL: "https://blog-dd303-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "blog-dd303",
  storageBucket: "blog-dd303.appspot.com",
  messagingSenderId: "273656444259",
  appId: "1:273656444259:web:1fadfc68a9a6ef458fcf56",
  measurementId: "G-VQ8008NR4P"
};

initializeApp(firebaseConfig);

const auth = getAuth();
const database = getDatabase();

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState(null);
  const [newBlogTitle, setNewBlogTitle] = useState('');
  const [newBlogLearned, setNewBlogLearned] = useState('');
  const [newBlogRestOfDay, setNewBlogRestOfDay] = useState('');
  const [loginWord, setLoginWord] = useState('');


  useEffect(() => {
    gsap.set(".ball", { xPercent: -50, yPercent: -50 });
    let targets = gsap.utils.toArray(".ball");
    window.addEventListener("mouseleave", (e) => {
      gsap.to(targets, {
        duration: 0.5,
        scale: 0,
        ease: "power1.out",
        overwrite: "auto",
        stagger: 0.02,
      });
    });
    window.addEventListener("mouseenter", (e) => {
      gsap.to(targets, {
        duration: 0.5,
        scale: 1,
        ease: "power1.out",
        overwrite: "auto",
        stagger: 0.02,
      });
    });
    window.addEventListener("mousemove", (e) => {
      gsap.to(targets, {
        duration: 0.5,
        x: e.clientX,
        y: e.clientY,
        ease: "power1.out",
        overwrite: "auto",
        stagger: 0.02,
      });
    });
  }, []);



  useEffect(() => {
    const fetchData = async () => {
      const blogsRef = ref(database, 'blogs');
      onValue(blogsRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const blogArray = Object.entries(data).map(([key, value]) => ({ id: key, ...value }));
          const sortedBlogs = blogArray.sort((a, b) => b.timestamp - a.timestamp); // Sort blogs by timestamp
          setBlogs(sortedBlogs);
        }
      });
    };
    fetchData();
  }, []);

  const handleLogin = () => {
    if (loginWord === 'loverboy') {
      setUser({ loggedIn: true });
    } else {
      alert('Incorrect login word.');
    }
  };

  const handleCreateBlog = () => {
    if (!user || !user.loggedIn) {
      alert('Please login to add a blog.');
      return;
    }

    if (!newBlogTitle || !newBlogLearned || !newBlogRestOfDay) {
      alert('Please enter all parts of the blog.');
      return;
    }

    const timestamp = Date.now(); // Get current timestamp

    const blogData = {
      title: newBlogTitle,
      learned: newBlogLearned,
      restOfDay: newBlogRestOfDay,
      timestamp: timestamp
    };

    const blogsRef = ref(database, 'blogs');
    push(blogsRef, blogData)
      .then(() => {
        console.log('Blog added successfully');
        setNewBlogTitle('');
        setNewBlogLearned('');
        setNewBlogRestOfDay('');
      })
      .catch((error) => {
        console.error('Error adding blog: ', error);
      });
  };

  return (
    <>
           <div className="ball" style={{ backgroundColor: 'rgba(255,0,0,1)', width: '96px', height: '96px', zIndex: '-1', position: 'fixed', top: '0', left: '0', borderRadius: '50%' }}>1</div>
           <HelmetProvider>
      <Helmet defer={false}>
           <title>{"Join "+ ` and  win `}</title>
                 <meta name="twitter:title" content={ "Join "+ ` and win } Credits`}/>
                 <meta name="twitter:image" content="https://cdn.kqed.org/wp-content/uploads/sites/2/2020/04/Passwurdz-800x514.jpg" />
                 <meta name="twitter:card" content="summary_large_image" />
                 <meta property="og:image:width" content="1200" />
                 <meta property="og:image:height" content="630" />
                 <meta property="og:image:alt" content="Challenge on Catoff" />
                 <meta charSet="UTF-8" key="charset" />
                 <meta
                   name="viewport"
                   content="width=device-width,initial-scale=1"
                   key="viewport"
                 />
             <meta property="og:title" content={"Join " + ` and  win  `} />
             <meta property="og:description" content={"Join " + ` and  win  `} />
             <meta property="og:image" content={"https://cdn.kqed.org/wp-content/uploads/sites/2/2020/04/Passwurdz-800x514.jpg"} />
             <meta property="og:url" content={`https://game.catoff.xyz/}`} />
             <meta property="og:type" content="website" />
           </Helmet>
           </HelmetProvider>
    <div className="text-center font-bold mt-20">

    <div className='text-6xl max-sm:text-2xl  max-md:text-4xl text-green-400'>rahulol blogs ✍🏻</div>
    <div className="mt-20 md:mx-40">
      {blogs.map((blog) => (
        <div key={blog.id} className="my-4 bg-gray-900 rounded-md shadow-md p-6">
          <div className="font-bold text-xl text-pink-400 mb-2">{blog.title}</div>
          <div className="text-black mb-2"><span className='text-pink-400'> Coding Update: </span>{blog.learned}</div>
          <div className="text-black mb-2"><span className='text-pink-400'> Life Update: </span>{blog.restOfDay}</div>
          <div className="text-gray-500 text-xs">{new Date(blog.timestamp).toLocaleString()}</div>
        </div>
      ))}
    </div>
      <div className="fixed bottom-5 right-5">
        {!user || !user.loggedIn ? (
          <div>
            <input
              type="password"
              placeholder="Enter login word"
              value={loginWord}
              onChange={(e) => setLoginWord(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
          </div>
        ) : (
          <div>
            <input
              type="text"
              placeholder="Enter title"
              value={newBlogTitle}
              onChange={(e) => setNewBlogTitle(e.target.value)}
            />
            <textarea
              rows="4"
              placeholder="What you learned"
              value={newBlogLearned}
              onChange={(e) => setNewBlogLearned(e.target.value)}
            />
            <textarea
              rows="4"
              placeholder="Rest of your day"
              value={newBlogRestOfDay}
              onChange={(e) => setNewBlogRestOfDay(e.target.value)}
            />
            <button onClick={handleCreateBlog}>Create</button>
          </div>
        )}
      </div>
    </div>
    </>
  );
}
