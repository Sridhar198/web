<?xml version="1.0" encoding="UTF-8"?> 
<xsl:stylesheet version="1.0" 
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"> 
  
<xsl:template match="/"> 
 <html>
 <body> 
  <h1> Plant Protection Measures</h1> 
   <table border="3" > 
   <tr bgcolor="red"> 
    <th>Name of disease</th> 
    <th>Prevent Measures</th> 
    <th>Name of chemical</th> 
    <th>Rate</th> 
   </tr> 
    <xsl:for-each select="Agri/a"> 
   <tr> 
    <td><xsl:value-of select="disease"/></td> 
    <td><xsl:value-of select="prevent"/></td> 
    <td><xsl:value-of select="chemical"/></td> 
    <td><xsl:value-of select="rate"/></td> 
   </tr> 
    </xsl:for-each> 
    </table> 
</body> 
</html> 
</xsl:template> 
</xsl:stylesheet> 