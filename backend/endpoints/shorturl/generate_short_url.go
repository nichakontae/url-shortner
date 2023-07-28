package shorturl

import (
	"backend/modules/mongo"
	"backend/types/model"
	"backend/types/payload"
	"backend/types/response"
	"backend/util/value"
	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/bson"
)

func GenerateShortLink(c *fiber.Ctx) error {
	// parse body
	body := new(payload.URL)
	if err := c.BodyParser(body); err != nil {
		return response.Error(false, "Unable to parse body", err)
	}

	// filter original url
	filter := bson.M{
		"original_link": body.Url,
	}

	// database operation
	link := new(model.ShortlyLink)
	if err := mongo.ShortlyLinkCollection.First(filter, link); err != nil {
		if err.Error() == "mongo: no documents in result" {
			shortURL := value.GenerateShortURL()
			link = &model.ShortlyLink{OriginalLink: body.Url, ShortLink: &shortURL}
			if err := mongo.ShortlyLinkCollection.Create(link); err != nil {
				return response.Error(false, "Unable to shorturl short link", err)
			}
		}
	}

	// parse result
	result := payload.ShortLinkInfo{OriginalURL: link.OriginalLink, ShortURL: link.ShortLink}

	return c.JSON(response.Info(result))
}
