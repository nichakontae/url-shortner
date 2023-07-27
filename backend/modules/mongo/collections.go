package mongo

import (
	"backend/types/model"
	"github.com/kamva/mgm/v3"
)

var ShortlyLinkCollection *mgm.Collection

func initCollection() {
	ShortlyLinkCollection = mgm.Coll(new(model.ShortlyLink))
}
