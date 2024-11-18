import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar/index";
import PostsLists from "./components/PostsLists/index";
import Modal from "./components/Modal/index";
import PostForm from "./components/PostForm/index";

function App() {
	let [posts, setPosts] = useState([
		{
			id: 1,
			title: "Single post",
			status: "upcoming",
		},
		{
			id: 2,
			title: "Single post",
			status: "dropped",
		},
		{
			id: 3,
			title: "Single post",
			status: "ongoing",
		},
	]);
	// add post
	let addPost = (post) => {
		setPosts((prevState) => [...prevState, post]);
		setShowModal(false);
	};
	let [showModal, setShowModal] = useState(false);
	return (
		<>
			<Navbar setShowModal={setShowModal} />
			<PostsLists posts={posts} />
			{showModal && (
				<Modal setShowModal={setShowModal}>
					<h1>Welcome to Website Name</h1>
					<PostForm addPost={addPost} />
				</Modal>
			)}
		</>
	);
}

export default App;
