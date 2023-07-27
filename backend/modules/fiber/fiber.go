package fiber

import (
	"backend/endpoints"
	"backend/modules/config"
	"backend/modules/fiber/middlerwares"
	"backend/types/response"
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
	app.All("/", func(ctx *fiber.Ctx) error {
		return ctx.JSON(response.Info("SHORT_LINK_ROOT"))
	})

	// register all endpoint
	apiGroup := app.Group("api/")
	apiGroup.Use(middlerwares.Cors)
	endpoints.Init(apiGroup)

	// Init not found handler
	app.Use(NotFoundHandler)

	// startup
	if err := app.Listen(config.C.BackendAddress); err != nil {
		logrus.Fatal(err.Error())
	}
}
