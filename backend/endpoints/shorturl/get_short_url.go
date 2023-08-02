package shorturl

import (
	"backend/modules/mongo"
	"backend/types/model"
	"backend/types/response"
	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/bson"
)

func GetShortURL(c *fiber.Ctx) error {
	// parse param
	shortLink := c.Params("shortURL")

	// find shortURL
	filter := bson.M{
		"short_link": shortLink,
	}

	// database operation
	link := new(model.ShortlyLink)
	if err := mongo.ShortlyLinkCollection.First(filter, link); err != nil {
		return response.Error(false, "Unable to find shortURL", err)
	}

	// redirect to original url
	c.Redirect(*link.OriginalLink, fiber.StatusMovedPermanently)
	return nil
}
