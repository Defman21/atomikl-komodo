try {
  var schemeService = Cc['@activestate.com/koScintillaSchemeService;1'].getService();
  var schemeName = "AtomikZ";
  if (schemeService.getScheme(schemeName) != schemeName)
  {
    var _url = "chrome://atomikz/content/" + schemeName + ".ksf";
    var result = schemeService.loadSchemeFromURI(_url, schemeName);
  }
  var oldScheme = schemeService.activateScheme(schemeName);
  ko.open._notifyHowtoRestoreOldScheme(schemeService, oldScheme, schemeName);
  ko.prefs.setBoolean("showFileIcons", true);
} catch (e) {
  alert("Unable to set AtomikZ scheme. Get it from http://devbevariour.cf/skins/atomikz/~ksf");
}