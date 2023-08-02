package endpoints

import (
	"backend/endpoints/shorturl"
	"github.com/gofiber/fiber/v2"
)

func Init(router fiber.Router) {
	router.Post("/shorten", shorturl.GenerateShortLink)
	router.Get("/:shortURL", shorturl.GetShortURL)
}
