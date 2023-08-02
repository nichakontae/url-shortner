package main

import (
	"backend/modules/config"
	"backend/modules/fiber"
	"backend/modules/mongo"
)

func main() {
	config.Init()
	mongo.Init()
	fiber.Init()
}
