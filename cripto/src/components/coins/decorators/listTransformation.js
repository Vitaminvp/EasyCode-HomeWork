import React, {Component} from 'react'

export default (OriginalComponent) => class WrappedComponent extends Component {

    render() {
        const {list, items} = this.props;
        const listToMap = list.map(item => items.filter(element => item.Name === element.Name));
        return  <div className="coins">
                    {listToMap.map(itm => {
                        const [item] = itm;
                        return <OriginalComponent {...this.props} item={item} key={item.Id} />
                    })}
                </div>
    }

}