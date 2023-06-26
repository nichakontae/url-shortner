package config

type Config struct {
	MongoUrl       string   `yaml:"mongoUrl"`
	MongoDbName    string   `yaml:"mongoDbName"`
	Cors           []string `yaml:"cors"`
	BackendAddress string   `yaml:"backendAddress"`
}
