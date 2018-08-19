const handleProfile = (db) => (req, res) => {
	const { id } = req.params;
	db.select('*').from('users')
		.where({id}) //same as {id: id}
		.then(user => {
			if (user.length) {
				res.json(user[0]);
			} else {
				res.status(400).json('Not found')
			}
		})
		.catch(err => res.status(400).json('err getting user'))
}

module.exports = {
	handleProfile: handleProfile
}