package create

import (
	"backend/types/response"
	"github.com/gofiber/fiber/v2"
)

func Test(c *fiber.Ctx) error {
	return c.JSON(response.Info("Test ka"))
}
