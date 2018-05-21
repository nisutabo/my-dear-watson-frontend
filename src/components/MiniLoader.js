import React from 'react'
import { Loader, Grid } from 'semantic-ui-react'

const MiniLoader = () => (
    <Grid>
      <Grid.Row>
      <Grid.Column verticalAlign='middle'>
        <Loader active inline='centered'/>
      </Grid.Column>
      </Grid.Row>
    </Grid>

)

export default MiniLoader
