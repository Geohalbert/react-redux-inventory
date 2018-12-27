import PartModel from "../Models/PartModel";

export const list = (req, res) => {
  PartModel.find({}).exec()
  .then( parts => res.json(parts) );
};

export const show = (req, res) => {
  PartModel.findById(req.params.id).exec()
  .then( part => res.json(part) );
};

export const create = (req, res) => {
  PartModel.find({}).exec()
  .then( List => {
    // need to get the id of the LAST part in the list to avoid repeating ID's
    const lastPart = List[List.length - 1];
    console.log("lastPart = ",lastPart);
    console.log("id of lastPart: ", lastPart._id)
    const id = (lastPart._id + 1);
    const part = new PartModel({
      _id: id,
      partNumber: req.body.partNumber,
      location: req.body.location,
      onHand: req.body.onHand,
      status: req.body.status
    });
    part.save()
    .then( par => res.json(par) )
  });
};


// This is for permanently deleting, I prefer setting a boolean attrit
// export const remove = (req, res) => {
//     PartModel.findByIdAndRemove(req.params.id).exec()
//     .then(parts => {
//         return res.json(parts);
//     });
// }

export const remove = (req, res) => {
  PartModel.findById(req.params.id).exec()
  .then(part => {
    part.deleted = true;
    return part.save();
  })
  .then( part => res.json(part) );
}

// export const remove = (req, res) => {
//   PartModel.find({}).exec()
//   .then( List => {
//     const part = List.map(function(item) { return item.id; }).indexOf(req.params.id);
//     List.splice(removeIndex, 1);
//   }
//     const removeIndex = List.map(function(item) { return item.id; }).indexOf(req.params.id);
//     List.splice(removeIndex, 1);
//     //   return res.json(List);
//   )
//   .then( thisPart => { thisPart.remove() }).exec();
//     .then.PartModel.find({}).exec()
//     .then( p => res.json(p))
// }

export const update = (req, res) => {
  PartModel.findById(req.params.id).exec()
  .then(part => {
    part.partNumber = req.part.partNumber,
    part.location = req.body.location,
    part.onHand = req.body.onHand,
    part.status = req.body.status;
    part.save();
  })
  .then( p => {res.json(p);
  });
}
