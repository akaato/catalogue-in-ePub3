DOC = catalogue
all: epub

ZIP = zip
epub: clean ../$(DOC).epub

../$(DOC).epub:
	$(ZIP) -0 $@ mimetype
	$(ZIP) -r $@ * -x mimetype -x Makefile

#
# clean
#
RM = rm -f
clean:
	$(RM) ../$(DOC).epub
	$(RM) *~
	$(RM) OEBPS/*~
