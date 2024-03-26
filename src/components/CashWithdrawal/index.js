// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}
  updateBalance = value => {
    this.setState(prevState => ({
      balance: prevState.balance - value,
    }))
  }
  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    const name = 'Sarah williams'
    const intial = name.slice(0, 1)
    return (
      <div>
        <div>
          <div>
            <p>{intial}</p>
            <h1>{name}</h1>
          </div>
          <div>
            <p>Your Balance</p>
            <div>
              <p>2000</p>
              <p>In Rupees</p>
            </div>
            <p>Withdraw</p>
            <p>CHOOSE SUM (IN RUPEES)</p>
            <ul>
              {denominationsList.map(eachItem => (
                <DenominationItem
                  key={eachItem.id}
                  denominationDetails={eachItem}
                  updateBalance={this.updateBalance}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
