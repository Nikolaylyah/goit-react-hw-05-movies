import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <h1> 404 Sorry, the page was not found</h1>
      <Link to="/">To main page</Link>
    </div>
  );
}
