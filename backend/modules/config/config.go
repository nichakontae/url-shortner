package config

import (
	"encoding/json"
	"log"
	"os"
)

var C = new(Config)

func Init() {
	// read config.yaml file
	yml, err := os.ReadFile("config.yaml")
	if err != nil {
		log.Fatal("UNABLE TO READ config.yaml FILE")
	}

	// parse yaml file to Go struct
	if err := json.Unmarshal(yml, C); err != nil {
		log.Fatal("UNABLE TO PARSE config.yaml")
	}

}
