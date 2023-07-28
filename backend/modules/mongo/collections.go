package mongo

import (
	"backend/types/model"
	"github.com/kamva/mgm/v3"
)

var ShortlyLinkCollection *mgm.Collection

func initCollection() {
	ShortlyLinkCollection = mgm.Coll(new(model.ShortlyLink))
	// MGM will invoke the Collection() method on new(model.ShortlyLink)
	// to determine the collection name,
	// and the resulting ShortlyLinkCollection will represent the MongoDB collection with the name "shortly_link".
}
