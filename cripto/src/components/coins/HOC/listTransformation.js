export default (OriginalComponent) => WrappedComponent = (props) => {

    const {list, items, classN, amount} = this.props;
    const listToMap = list.map(item => items.filter(element => item.Name === element.Name));

    if (items.length && list.length) {
        return <div className={classN}>
            {listToMap.map(listItem => {
                const [item] = listItem;
                const coinFromList = amount ? list.filter(elem => elem.Name === item.Name)[0].value : '';
                return <OriginalComponent {...props} item={item} key={item.Id} value={coinFromList}/>
            })}
        </div>
    } else {
        return null;
    }

}