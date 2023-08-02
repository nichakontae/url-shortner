package helper

import (
	"github.com/kamva/mgm/v3"
	"github.com/sirupsen/logrus"
)

func CreateCollection(name string) (*mgm.Collection, bool) {
	exist := IsCollectionExist(name)
	_, _, database, err := mgm.DefaultConfigs()
	if err != nil {
		logrus.WithField("colName", name).Fatal("UNABLE TO LOAD COLLECTION")
	}

	if !exist {
		if err := database.CreateCollection(
			mgm.Ctx(),
			name,
		); err != nil {
			logrus.WithField("colName", name).WithField("e", err.Error()).Fatal("UNABLE TO CREATE COLLECTION")
		}
	}

	return mgm.CollectionByName(name), exist
}
