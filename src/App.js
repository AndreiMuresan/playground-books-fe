import { ToastContainer } from 'react-toastify';
import BooksList from './BooksList';
import AddBook from './AddBook';


function App() {
  return (
    <div className="container my-5">
      <h1 class="text-center my-5" >Books Library</h1>
      <AddBook />
      <BooksList />  
      <ToastContainer />
    </div>
  );
}

export default App;
