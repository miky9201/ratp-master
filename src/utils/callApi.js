import { indexConverter } from '../utils/indexConverter';

export const callApi = (setShopList, searchValue, pageLevel, isAscendingSort) => {
      
      const index = indexConverter(pageLevel)

      fetch(`https://data.ratp.fr/api/records/1.0/search/?dataset=liste-des-commerces-de-proximite-agrees-ratp&q=${searchValue}&start=${index}&sort=${isAscendingSort ? '-code_postal' : 'code_postal'}`)
      .then( res => res.json())
      .then( data => data.records.map(item => { 
            return {
                  libelle: item.fields.tco_libelle, 
                  address: item.fields.dea_numero_rue_livraison_dea_rue_livraison, 
                  cp: item.fields.code_postal,
                  city: item.fields.ville
            }
      }))
      .then( arr => setShopList(arr))
      .catch( err => console.log("Votre recherche contient l'erreur suivante :" + err))
      
}