import React, { useState, useEffect } from 'react';
import { solve, generateGame } from './utils/solver';
import './App.css';

function App() {
  const [game, setGame] = useState({ numbers: [], target: 0 });
  const [solution, setSolution] = useState(null);
  const [isSolving, setIsSolving] = useState(false);

  const startNewGame = () => {
    const newGame = generateGame();
    setGame(newGame);
    setSolution(null);
  };

  const handleSolve = () => {
    setIsSolving(true);

    setTimeout(() => {
      const result = solve(game.numbers, game.target);
      setSolution(result);
      setIsSolving(false);
    }, 100);
  };

  useEffect(() => {
    startNewGame();
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Bir İşlem</h1>
        <p className="subtitle">Sayı Bulma</p>
      </header>

      <main>
        <section className="target-section">
          <div className="card target-card">
            <span className="label">HEDEF SAYI</span>
            <div className="number target-number">{game.target}</div>
          </div>
        </section>

        <section className="numbers-section">
          <div className="numbers-grid">
            {game.numbers.map((num, idx) => (
              <div key={idx} className={`card number-card ${num >= 10 ? 'double-digit' : ''}`}>
                {num}
              </div>
            ))}
          </div>
        </section>

        <section className="actions">
          <button className="btn secondary" onClick={startNewGame}>Yeni Sayılar</button>
          <button className="btn primary" onClick={handleSolve} disabled={isSolving}>
            {isSolving ? 'Çözülüyor...' : 'Çözümü Bul'}
          </button>
        </section>

        {solution && (
          <section className="solution-section">
            <div className={`card solution-card ${solution.success ? 'success' : 'fail'}`}>
              <h3>{solution.success ? 'Çözüm Bulundu!' : 'En Yakın Çözüm'}</h3>
              <div className="result-summary">
                Bulunan Sayı: <strong>{solution.result}</strong> (Fark: {solution.diff})
              </div>
              <div className="steps">
                {solution.steps.map((step, idx) => (
                  <div key={idx} className="step">
                    <span className="step-num">{idx + 1}.</span> {step}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

    </div>
  );
}

export default App;
