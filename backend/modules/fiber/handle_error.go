package fiber

import (
	"backend/types/response"
	"strings"

	"github.com/gofiber/fiber/v2"
)

func ErrorHandler(ctx *fiber.Ctx, err error) error {
	// Case of *fiber.Error.
	// err.(*fiber.Error) is used to check type of error
	if e, ok := err.(*fiber.Error); ok {
		return ctx.Status(e.Code).JSON(response.ErrorResponse{
			Success: false,
			Code:    strings.ReplaceAll(strings.ToUpper(e.Error()), " ", "_"),
			Message: e.Error(),
			Error:   e.Error(),
		})
	}

	if e, ok := err.(*response.GenericError); ok {
		if len(e.Code) == 0 {
			e.Code = "GENERIC_ERROR"
		}

		if e.Err != nil {
			return ctx.Status(fiber.StatusBadRequest).JSON(response.ErrorResponse{
				Success: false,
				Code:    e.Code,
				Message: e.Message,
				Error:   e.Err.Error(),
			})
		}

		return ctx.Status(fiber.StatusBadRequest).JSON(response.ErrorResponse{
			Success: false,
			Code:    e.Code,
			Message: e.Message,
		})
	}

	return ctx.Status(fiber.StatusInternalServerError).JSON(
		response.ErrorResponse{
			Success: false,
			Code:    "UNKNOWN_SERVER_SIDE_ERROR",
			Message: "Unknown server side error",
			Error:   err.Error(),
		},
	)
}
