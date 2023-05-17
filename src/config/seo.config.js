const SITE_NAME = 'Bank App'

export const getTitle = title => {
	return title ? `${title} | ${SITE_NAME}` : SITE_NAME
}

