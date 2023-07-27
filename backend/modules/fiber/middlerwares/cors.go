package middlerwares

import (
	"backend/modules/config"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

var Cors = func() fiber.Handler {
	origins := ""
	for i, s := range config.C.Cors {
		origins += s
		if i < len(config.C.Cors) {
			origins += ", "
		}
	}
	config := cors.Config{
		AllowOrigins: origins,
	}
	return cors.New(config)
}
