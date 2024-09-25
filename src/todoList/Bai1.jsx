import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Bai1 = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);
  const [isComplete, setIsComplete] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;

    if (editId) {
      setTasks(
        tasks.map((task) =>
          task.id === editId ? { ...task, text: input } : task
        )
      );
      setEditId(null);
    } else {
      setTasks([...tasks, { id: Date.now(), text: input }]);
    }

    setInput("");
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEdit = (id) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    setInput(taskToEdit.text);
    setEditId(id);
  };

  const toggleComplete = (id) => {
    setIsComplete((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="container" style={styles.container}>
      <h1 className="text-center mb-4">Todo List</h1>
      <form className="mb-3" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Nội dung công việc"
          />
          <button type="submit" className="btn btn-primary">
            {editId ? "Lưu lại" : "Thêm"}
          </button>
        </div>
      </form>

      <ul className="list-group">
        {tasks.map((task) => (
          <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <input
                type="checkbox"
                checked={isComplete[task.id] || false}
                onChange={() => toggleComplete(task.id)}
                className="form-check-input me-2"
              />
              <input
                type="text"
                value={task.text}
                readOnly={!editId || editId !== task.id}
                onClick={() => handleEdit(task.id)}
                className="form-control-plaintext"
                style={{
                  textDecoration: isComplete[task.id] ? "line-through" : "none",
                }}
              />
            </div>
            <div>
              <button
                className="btn btn-success me-2"
                onClick={() => handleEdit(task.id)}
              >
                Sửa
              </button>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(task.id)}
              >
                Xóa
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px",
    marginTop: "50px",
  },
};

export default Bai1;
