package mongo

import (
	"backend/modules/config"
	"github.com/kamva/mgm/v3"
	"github.com/sirupsen/logrus"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"time"
)

var Client *mongo.Client
var Database *mongo.Database

func Init() {
	// * configuration mgm
	if err := mgm.SetDefaultConfig(&mgm.Config{CtxTimeout: 5 * time.Second}, config.C.MongoDbName, options.Client().ApplyURI(config.C.MongoUrl)); err != nil {
		logrus.Fatal("UNABLE TO CONFIGURATION MGM: ", err.Error())
	}

	// load mongoDB connection and database
	if _, client, database, err := mgm.DefaultConfigs(); err != nil {
		logrus.Fatal("UNABLE TO LOAD CONNECTION: ", err.Error())
	} else {
		Client = client
		Database = database
	}

	initCollection()
}
