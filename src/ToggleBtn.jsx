function ToggleBtn({ buttonTxt, handleShowingGamesPlayed }) {
 return <button onClick={handleShowingGamesPlayed}>{buttonTxt}</button>;
}

export default ToggleBtn;
