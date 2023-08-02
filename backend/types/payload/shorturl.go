package payload

type URL struct {
	Url *string `json:"url"`
}

type ShortLink struct {
	ShortURL *string `json:"short_url"`
}

type ShortLinkInfo struct {
	ShortURL    *string `json:"short_url"`
	OriginalURL *string `json:"original_url"`
}
