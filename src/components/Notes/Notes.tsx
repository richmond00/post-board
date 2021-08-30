import { createSelector } from 'reselect';
import { useAppSelector } from '../../redux/hooks';
import Note from './Note';
import { NotesState } from '../../redux/notesSlice';
import { RootState } from '../../redux/store';
import { BoardState } from '../../redux/boardSlice';

const notesSelector = createSelector(
  (state: RootState) => state.notes,
  (state: RootState) => state.board,
  (notes: NotesState[], board: BoardState) => notes.filter((note) => note.boardId === board.currentBoardId),
);

const Notes: React.FC = () => {
  const notes = useAppSelector(notesSelector);
  return (
    <>
      {notes.map((note) => (
        <Note key={note.id} noteId={note.id} title={note.title} content={note.content} isFold={note.isFold} />
      ))}
    </>
  );
};

export default Notes;
