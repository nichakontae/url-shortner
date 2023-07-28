package fiber

import (
	"backend/endpoints"
	"backend/modules/config"
	"backend/modules/fiber/middlerwares"
	"github.com/gofiber/fiber/v2"
	"github.com/sirupsen/logrus"
	"time"
)

func Init() {
	// Initial fiber instance
	app := fiber.New(fiber.Config{
		ErrorHandler:  ErrorHandler,
		StrictRouting: true,
		Prefork:       false,
		ReadTimeout:   5 * time.Second,
		WriteTimeout:  5 * time.Second,
	})

	// register root endpoint
	app.Static("/", "./static")

	// register all endpoint
	app.Use(middlerwares.Cors())
	endpoints.Init(app)

	// Init not found handler
	app.Use(NotFoundHandler)

	// startup
	if err := app.Listen(config.C.BackendAddress); err != nil {
		logrus.Fatal(err.Error())
	}
}
