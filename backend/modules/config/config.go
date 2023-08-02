package config

import (
	"github.com/sirupsen/logrus"
	"gopkg.in/yaml.v3"
	"os"
)

var C = new(Config)

func Init() {
	// read config.yaml file
	yml, err := os.ReadFile("config.yaml")
	if err != nil {
		logrus.Fatal("UNABLE TO READ CONFIGURATION FILE")
	}

	// parse yaml file to Go struct
	if err := yaml.Unmarshal(yml, C); err != nil {
		logrus.Fatal("UNABLE TO PARSE CONFIGURATION FILE")
	}

}
