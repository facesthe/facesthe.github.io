
default: serve

# include drafts
serve:
	zola serve --drafts

# exclude drafts
show:
	zola serve
