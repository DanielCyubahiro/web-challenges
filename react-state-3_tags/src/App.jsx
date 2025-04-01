import { useState } from "react";
import "./styles.css";
import Form from "./components/Form";
import List from "./components/List";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

  const handleAddTag = (newTag) => {
    setTags([...tags, newTag]);
  }
  
  const handleDeleteTag = (tag) => {
    setTags(tags.filter((t) => t !== tag))
  }
  return (
    <main className="app">
      <Form onAddTag={handleAddTag}/>
      <List tags={tags} onDeleteTag={handleDeleteTag}/>
    </main>
  );
}
