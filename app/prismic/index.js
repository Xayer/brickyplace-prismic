import Prismic from 'prismic-javascript'
export const initApi = (req) => {
	return Prismic.getApi(prismicEndpoint, {
		req
	})
}

export const prismicEndpoint = 'https://brickyplace-blog.cdn.prismic.io/api/v2'
