DOC = catalogue
all: epub

ZIP = zip
epub: clean ../$(DOC).epub
zip: clean ../$(DOC).zip

../$(DOC).epub:
	$(ZIP) -0 $@ mimetype
	$(ZIP) -r $@ * -x mimetype -x Makefile

../$(DOC).zip:
	$(ZIP) -r $@ *

#
# clean
#
RM = rm -f
clean:
	$(RM) ../$(DOC).epub
	$(RM) *~
	$(RM) OEBPS/*~
