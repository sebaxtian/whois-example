# whois-example
Ejemplo de Whois para obtener información relacionada con nombre de dominio.

# Estructura de respuesta
```javascript
const whoisExample = {
      domainName: '',
      ipV4: [
        {
          address: 'ipV4',
          whois: {
            // <whoisInfo>
          }
        },
        // ...
      ],
      ipV6: [
        {
          address: 'ipV6',
          whois: {
            // <whoisInfo>
          }
        },
        // ...
      ]
    };
```