AM_CPPFLAGS = -I$(top_srcdir)/src \
              $(PACKAGE_CFLAGS)

bin_PROGRAMS=dotm_node

dotm_node_SOURCES = dotm_node.c
dotm_node_LDADD = $(PACKAGE_LIBS)

INITSCRIPTS_SCRIPTS = dotm_node.rc
INITSCRIPTSdir = $(DESTDIR)/etc/init.d
EXTRA_DIST = $(INITSCRIPT_DATA:.rc=.rc.in)
CLEANFILES = $(INITSCRIPTS_DATA)

