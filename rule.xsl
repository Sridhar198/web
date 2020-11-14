<?xml version="1.0" encoding="UTF-8"?> 
<xsl:stylesheet version="1.0" 
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"> 
  
<xsl:template match="/"> 
 <html>
 <body> 
  <h1 align="center">Agriculture research </h1>  
    <table border="3" align="center" > 
   <tr bgcolor="red"> 
    <th>Title</th> 
    <th>Description</th> 
    <th>Url</th> 
    <th>Search Url</th> 
   </tr> 
    <xsl:for-each select="Agriculture/s"> 
   <tr> 
    <td  bgcolor="yellow"><xsl:value-of select="search_title"/></td> 
    <td><xsl:value-of select="search_description"/></td> 
    <td><xsl:value-of select="url"/></td>
    <td><xsl:value-of select="search_url"/></td> 
   </tr> 
    </xsl:for-each> 
    </table> 
</body> 
</html> 
</xsl:template> 
</xsl:stylesheet> 