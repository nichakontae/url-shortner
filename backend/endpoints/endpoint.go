package endpoints

import (
	"backend/endpoints/create"
	"github.com/gofiber/fiber/v2"
)

func Init(router fiber.Router) {
	createGroup := router.Group("create")
	createGroup.Post("/short", create.Test)
}
