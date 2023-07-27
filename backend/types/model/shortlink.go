package model

import (
	mongoH "backend/modules/mongo/helper"
	"github.com/kamva/mgm/v3"
)

type ShortlyLink struct {
	// * the struct fields of DefaultModel will not be saved directly as separate fields in the MongoDB collection,
	//but their contents will be included directly in the parent struct's fields
	mgm.DefaultModel `bson:",inline"`
	OriginalLink     *string `bson:"original_link" json:"original_link"`
	ShortLink        *string `bson:"short_link" json:"short_link"`
}

// we have to add mgm.DefaultModel
// if not it will throw error when initCollection
// ShortlyLinkCollection = mgm.Coll(new(model.ShortlyLink))

func (r *ShortlyLink) Collection() *mgm.Collection {
	coll, _ := mongoH.CreateCollection("shortly_link")
	return coll
}
