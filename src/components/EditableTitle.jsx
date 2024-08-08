import React, { useState, useEffect } from 'react';
import { updateQuiz } from '../services/quizService';
import renameIcon from '../assets/rename_icon.svg';
import checkIcon from '../assets/check-icon.svg';

const EditableTitle = ({ quiz, currentUser, onTitleUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(quiz.title);

  useEffect(() => {
  }, [quiz, currentUser]);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSaveClick = async () => {
    setIsEditing(false);
    try {
      const response = await updateQuiz(quiz.createdQuizId, { title, userId: currentUser.userId, userRole: currentUser.role });
      onTitleUpdate(title);
    } catch (error) {
      console.error("Error updating quiz title:", error);
    }
  };

  return (
    <div className="flex justify-center pb-2 text-white text-xl font-medium text-center">
      {isEditing ? (
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          className="text-black"
        />
      ) : (
        <h4>{title}</h4>
      )}
      <span
        className="flex justify-center items-center pl-3 hover:cursor-pointer"
        onClick={isEditing ? handleSaveClick : handleEditClick}
      >
        <img src={isEditing ? checkIcon : renameIcon} alt="icon" />
      </span>
    </div>
  );
};

export default EditableTitle;