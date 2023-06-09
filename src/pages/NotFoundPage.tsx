import Header from '../components/Header'

function NotFoundPage() {
    return (
      <>
        <Header />
        <div className="not-found">
          <h1>404 Page Not Found</h1>
          <p>The page you are looking for does not exist.</p>
        </div>
      </>
    );
  }
  
  export default NotFoundPage;