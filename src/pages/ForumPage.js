import React, { useState, useEffect } from 'react'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { firestoreDB } from '../services/firebase'
import { Container, Form as BootstrapForm, Button } from 'react-bootstrap'
import styled from 'styled-components'
import { Label } from '../components/StyledComponents'

const ForumContainer = styled(Container)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ForumContent = styled.div`
  display: flex;
  width: 100%;
  max-width: 800px;
  margin: auto;
`

const ForumForm = styled(BootstrapForm)`
  background-color: #ffffff;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
  margin: auto;
`

const StyledFormControl = styled(BootstrapForm.Control)`
  margin-bottom: 15px;
`

const SubmitButton = styled(Button)`
  width: 100%;
`

const ForumPosts = styled.div`
  background-color: #d4edda;
  padding: 20px;
  border: 1px solid #c3e6cb;
  border-radius: 5px;
  overflow-y: auto;
  width: 300px;
  margin-left: 20px;
`

const PostItem = styled.div`
  margin-bottom: 10px;
`

function ForumPage() {
  const [posts, setPosts] = useState([])
  const [newPost, setNewPost] = useState('')
  const [username, setUsername] = useState('')

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsCollection = collection(firestoreDB, 'forumPosts')
        const postsSnapshot = await getDocs(postsCollection)
        const postsData = postsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setPosts(postsData)
      } catch (error) {
        console.error('Error fetching posts from Firestore: ', error)
      }
    }

    fetchPosts().then(() => {})
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!username) {
      alert('Please enter a username.')
      return
    }

    const forumPostsRef = collection(firestoreDB, 'forumPosts')

    try {
      await addDoc(forumPostsRef, {
        username: username,
        content: newPost,
      })

      setPosts([...posts, { username: username, content: newPost }])
      setNewPost('')
      setUsername('')
    } catch (error) {
      console.error('Error adding document to Firestore: ', error)
    }
  }

  return (
    <ForumContainer>
      <ForumContent>
        <ForumForm onSubmit={handleSubmit}>
          <BootstrapForm controlId="formUsername">
            <Label>Username:</Label>
            <StyledFormControl
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </BootstrapForm>
          <Label>Your Post:</Label>
          <BootstrapForm controlId="formPost">
            <StyledFormControl
              placeholder="Enter your text"
              as="textarea"
              rows={3}
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
            />
          </BootstrapForm>

          <SubmitButton variant="primary" type="submit">
            Post
          </SubmitButton>
        </ForumForm>
        <ForumPosts>
          {posts.map((post) => (
            <PostItem key={post.id}>
              <p>
                <strong>{post.username}:</strong> {post.content}
              </p>
            </PostItem>
          ))}
        </ForumPosts>
      </ForumContent>
    </ForumContainer>
  )
}

export default ForumPage
