import React, { useState } from 'react';

function ReportForm({ onAddGame }) {
  const [formData, setFormData] = useState({
    team: '',
    tournament: '',
    opponentScore: '',
    syracuseScore: '',
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const opponentScore = Number(formData.opponentScore.trim());
    const syracuseScore = Number(formData.syracuseScore.trim());

    if (
      !formData.team.trim() ||
      formData.opponentScore.trim() === '' ||
      formData.syracuseScore.trim() === '' ||
      isNaN(opponentScore) ||
      isNaN(syracuseScore)
    ) {
      alert("Please enter the team name and valid numeric scores.");
      return;
    }

    onAddGame({
      ...formData,
      opponentScore: opponentScore,
      syracuseScore: syracuseScore,
    });

    setFormData({
      team: '',
      tournament: '',
      opponentScore: '',
      syracuseScore: '',
      notes: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="team" value={formData.team} onChange={handleChange} placeholder="Team played" /><br />
      <select name="tournament" value={formData.tournament} onChange={handleChange}>
        <option value="">Select a tournament</option>
        <option value="Northeast Classic">Northeast Classic</option>
        <option value="Sectionals">Sectionals</option>
        <option value="Regionals">Regionals</option>
        <option value="Other">Other</option>
      </select><br />
      <input type="number" name="opponentScore" value={formData.opponentScore} onChange={handleChange} placeholder="Opponent's Score" />
      <input type="number" name="syracuseScore" value={formData.syracuseScore} onChange={handleChange} placeholder="Syracuse's Score" /><br />
      <textarea name="notes" rows="6" cols="30" value={formData.notes} onChange={handleChange} placeholder="Additional notes about the game" /><br />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default ReportForm;