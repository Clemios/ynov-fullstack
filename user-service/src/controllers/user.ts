// const artistService = require('../services/artist');
import { loadData } from '../models/user';

function list(req: any, res: any) {
  const users = loadData('users');
  res.status(200).json(users);
}

// function read(req:any, res:any) {
//   const artistId = req.params.id;
//   const artist = artistService.find(artistId);
//   if (artist)
//     res.status(200).json(artist);
//   else
//     res.status(404).json({ message: "Artiste non trouvé" });
// }

// function create(req: any, res) {
//   const datas = req.body;
//   const createdArtist = artistService.create(datas);
//   if (createdArtist)
//     res.status(201).json({ message: "Artiste créé" });
//   else
//     res.status(400).json({ message: "Erreur lors de l'insertion" });
// }

// function update(req:any, res: any) {
//   const artistId = req.params.id;
//   const datas = req.body;
//   const updatedArtist = artistService.update(artistId, datas);
//   if (updatedArtist) {
//     res.status(200).json({ message: "Artiste édité" });
//   } else {
//     res.status(400).json({ message: "Erreur lors de l'édition" });
//   }
// }

// function remove(req, res) {
//   const artistId = req.params.id;
//   const removedArtist = artistService.remove(artistId);
//   if (removedArtist) {
//     res.status(200).json({ message: "Artiste supprimé" });
//   } else {
//     res.status(400).json({ message: "Erreur lors de la suppression" });
//   }
// }

export { list };
