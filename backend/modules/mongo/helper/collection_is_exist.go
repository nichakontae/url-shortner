package helper

import (
	"backend/util/value"
	"github.com/kamva/mgm/v3"
	"github.com/sirupsen/logrus"
	"go.mongodb.org/mongo-driver/bson"
)

var existCollection []string

func IsCollectionExist(name string) bool {
	_, _, database, err := mgm.DefaultConfigs()
	if err != nil {
		logrus.Fatal("UNABLE TO LOAD CONNECTION: ", err.Error())
	}

	if existCollection == nil {
		if collections, err := database.ListCollectionNames(mgm.Ctx(), bson.M{}); err != nil {
			logrus.Fatal("UNABLE TO LIST CONNECTION: ", err.Error())
		} else {
			existCollection = collections
		}
	}
	return value.Contain[string](existCollection, name)
}
