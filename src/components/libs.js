import _PRODUCTS from '../constants/products';
import _ACHIEVEMENTS from '../constants/achievements';

export const buyItem = (item, price, items) => {
    const updatePerSecond = (addItems) => {

        let per_sec_multi = 0;
  
        for(let element of addItems){
          const product = _PRODUCTS.filter((product) => { return product.name === element.name})
          per_sec_multi += element.count * product[0].value;
        }

        return per_sec_multi;
    }
  
    let counter = 0;

    let data = items.map((element) => {
        if(element.name === item){ counter++; element.count++; }
            return element;
    })

    if(counter === 0){
        data.push({name: item, count: 1})
        return {
            item: data,
            price: price,
            per_sec_multi: updatePerSecond(data)
        }
    }else{
        return {
            item: data,
            price: price,
            per_sec_multi: updatePerSecond(data)
        }
    }
}

export const checkSettingsImport = ( org, imp ) => {
    let keys_org = Object.keys(org);
    let keys_imp = Object.keys(imp);

    if (keys_org === keys_imp) return true;
    if (keys_org == null || keys_imp == null) return false;
    if (keys_org.length !== keys_imp.length) return false;

    for (let i = 0; i < keys_org.length; ++i) {
        if (keys_org[i] !== keys_imp[i]) return false;
    }
    return true;
}

export const chanceCalculation = ( chance ) => {
    return Math.random() <= chance
}

export const levelCalculation = ( cookies ) => {
    if(cookies >= 10){
        let calc = -(((cookies - 10)/10 * -1) - 1)
        return parseInt(Math.log2(calc), 10) + 1;
    }else{
        return 0;
    }
}

export const achievementsChecker = (achievements) => {
    let free_achievements = []
    for(let element of _ACHIEVEMENTS){
      let count = 0;
      for(let own of achievements){
        if(element.name === own.name)
          count ++;
      }

      if(count === 0)
        free_achievements.push(element)
    }

    return free_achievements;
}

export const encode = (string ) => {
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    let result = '';

    let i = 0;
    do {
        let a = string.charCodeAt(i++);
        let b = string.charCodeAt(i++);
        let c = string.charCodeAt(i++);

        a = a ? a : 0;
        b = b ? b : 0;
        c = c ? c : 0;

        let b1 = ( a >> 2 ) & 0x3F;
        let b2 = ( ( a & 0x3 ) << 4 ) | ( ( b >> 4 ) & 0xF );
        let b3 = ( ( b & 0xF ) << 2 ) | ( ( c >> 6 ) & 0x3 );
        let b4 = c & 0x3F;

        if( ! b ) {
            b3 = b4 = 64;
        } else if( ! c ) {
            b4 = 64;
        }

        result += characters.charAt( b1 ) + characters.charAt( b2 ) + characters.charAt( b3 ) + characters.charAt( b4 );

    } while ( i < string.length );

    return result;
}

export const decode = (string) => {
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    let result     = '';

    let i = 0;
    do {
        let b1 = characters.indexOf( string.charAt(i++) );
        let b2 = characters.indexOf( string.charAt(i++) );
        let b3 = characters.indexOf( string.charAt(i++) );
        let b4 = characters.indexOf( string.charAt(i++) );

        let a = ( ( b1 & 0x3F ) << 2 ) | ( ( b2 >> 4 ) & 0x3 );
        let b = ( ( b2 & 0xF  ) << 4 ) | ( ( b3 >> 2 ) & 0xF );
        let c = ( ( b3 & 0x3  ) << 6 ) | ( b4 & 0x3F );

        result += String.fromCharCode(a) + (b?String.fromCharCode(b):'') + (c?String.fromCharCode(c):'');

    } while( i < string.length );

    return result;
}