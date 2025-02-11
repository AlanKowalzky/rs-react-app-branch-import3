import React from 'react';
import './App.css';
import Header from './components/Header';
import Results from './components/Results';
import ErrorBoundary from './components/ErrorBoundary';
import ErrorButton from './components/ErrorButton';
import Home from './pages/Home';

class App extends React.Component {
  state = { searchTerm: '' };

  handleSearch = (searchTerm: string) => {
    this.setState({ searchTerm });
  };

  render() {
    return (
      <div className="container">
        {}
        <header>
          {/* <Header onSearch={this.handleSearch} /> */}
          <Home />
        </header>

        <ErrorBoundary>
          {}
          <section className="results">
            <Results searchTerm={this.state.searchTerm} />
          </section>

          {}
          <section>
            <ErrorButton />
          </section>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
