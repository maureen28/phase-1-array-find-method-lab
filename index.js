let superbowlWin = superbowlWinRecord => {
	let superWon = superbowlWinRecord.find( superbowl => {  return superbowl.result === "W" })
	if (superWon){ 
		return superWon.year
	} else {
		return undefined
	}
}