import React, {Component} from 'react'

export default (OriginalComponent) => class WrappedComponent extends Component {

    render() {
        const {list, items, classN, amount} = this.props;
        const listToMap = list.map(item => items.filter(element => item.Name === element.Name));
        return <div className={classN}>
            {listToMap.map(itm => {
                const [item] = itm;
                const coinFromList = amount ? list.filter(elem => elem.Name === item.Name)[0].value : '';
                return <OriginalComponent {...this.props} item={item} key={item.Id} value={coinFromList}/>
            })}
        </div>
    }

}