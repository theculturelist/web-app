import React from 'react'
import _ from 'lodash'
import cn from 'classnames'
import Icon from './Icon'
import Button from './Button'
import ToggleButton from './ToggleButton'

const LeftMenu = props => (
  <nav
    style={{animationDuration: '0.3s'}}
    className={cn(`animated bg-near-white db-l fixed fl mt5 overflow-y-scroll relative
    shadow-1 vh-100 w-80 w-40-m w-20-l z-1`,
    {
      "slideInLeft": props.isToggled,
      "dn": !props.isToggled,
    })}
  >
    <section className='blue overflow-x-hidden'>
      <header className={`bg-blue white flex items-center justify-between ph2`}>
        <h2 className='f4'>Filters</h2>
        <Button
          color={'white'}
          textColor={'blue'}
          name={'Clear All'}
          clickFunction={props.clearFilters}
        />
      </header>
      <div className='filter-toggles flex flex-wrap ph2 mt2'>
        <div className="mb2 mr2">
          <ToggleButton
            click={props.filterByOpen}
            isToggled={ _.includes(props.activeFilters, 'open')}
          >
            <span className="pr1 lh-copy">Open Today</span> <Icon iconName={'open'} />
          </ToggleButton>
        </div>
        {props.children}
      </div>
      <h6 className='f6 fw1 pb2 ph2 mv2'>Suggestion: Click the two that are most interesting to you</h6>
    </section>
  </nav>
)

export default LeftMenu;
