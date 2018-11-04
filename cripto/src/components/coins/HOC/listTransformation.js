import React, {Component} from 'react'

export default (OriginalComponent) => class WrappedComponent extends Component {

    render() {
        const {list, items, classN, amount} = this.props;
        const listToMap = list.map(item => items.filter(element => item.Name === element.Name));
        if(items.length && list.length){
            return <div className={classN}>
                {listToMap.map(itm => {
                    const [item] = itm;
                    const coinFromList = amount ? list.filter(elem => elem.Name === item.Name)[0].value : '';
                    return <OriginalComponent {...this.props} item={item} key={item.Id} value={coinFromList}/>
                })}
            </div>
        }else {
                return null;
        }
    }

}