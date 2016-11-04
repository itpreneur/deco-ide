/**
 *    Copyright (C) 2015 Deco Software Inc.
 *
 *    This program is free software: you can redistribute it and/or modify
 *    it under the terms of the GNU Affero General Public License, version 3,
 *    as published by the Free Software Foundation.
 *
 *    This program is distributed in the hope that it will be useful,
 *    but WITHOUT ANY WARRANTY; without even the implied warranty of
 *    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *    GNU Affero General Public License for more details.
 *
 *    You should have received a copy of the GNU Affero General Public License
 *    along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

import React, { Component, PropTypes, } from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import * as selectors from '../selectors'
import PaneHeader from '../components/headers/PaneHeader'
import { FilterableList, DraggableComponentMenuItem } from '../components'
import { CATEGORIES, PREFERENCES } from 'shared/constants/PreferencesConstants'

const styles = {
  main: {
    flex: '1 1 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    overflow: 'hidden',
  },
}

const mapStateToProps = (state) => createSelector(
  selectors.componentList,
  (componentList) => ({
    componentList,
  })
)

class ComponentBrowser extends Component {
  render() {
    const {componentList, style, onSelectItem, onClickItem, onDoubleClickItem, onContextMenuItem} = this.props

    return (
      <div style={styles.main}>
        <FilterableList
          ItemComponent={DraggableComponentMenuItem}
          items={componentList}
          onClickItem={onClickItem}
          onSelectItem={onSelectItem}
          onDoubleClickItem={onDoubleClickItem}
          onContextMenuItem={onContextMenuItem}
          autoSelectFirst={false}
        />
      </div>
    )
  }
}

export default connect(mapStateToProps)(ComponentBrowser)
