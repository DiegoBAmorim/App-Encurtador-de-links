import AsyncStorage from '@react-native-async-storage/async-storage';

//buscar os link salvos
export async function getLinksSave(key){
    const myLinks = await AsyncStorage.getItem(key);

    let linkSaves = JSON.parse(myLinks) || [];

    return linkSaves;
}
//salvar o link no storage
export async function saveLink(key, newLink){
    let linksStored = await getLinksSave(key);

    //se tiver algum link salvo com esse mesmo id preciso ignorar.
    const hasLinks = linksStored.some(link => link.id === newLink.id);

    if(hasLinks){
        console.log('esse link ja existe na lista');
        return;//para execucao aqui
    }

    linksStored.push(newLink);
    await AsyncStorage.setItem(key, JSON.stringify(linksStored));
    console.log('link salvo com sucesso')
}
// deletar algum link especifico
export async function deleteLink(links, id){
    let myLinks = links.filter( (item) => {
        return (item.id !== id) 
    })
    await AsyncStorage.setItem('sujeitolinks', JSON.stringify(myLinks))
    console.log('link deletado do storage')

    return myLinks;

}