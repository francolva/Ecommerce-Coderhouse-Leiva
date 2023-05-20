import styles from "./ItemCounter.module.css"
import { Button, ButtonGroup, Grid } from "@mui/material";
import useCounter from "../../hooks/useCounter"

const ItemCounter = ({initial, stock, addToCart}) => {
    const { counter, increaseCounter, decreaseCounter, resetCounter } = useCounter(initial, stock);
  
    return (
        <div className={ styles.ItemCounterGrid }>
            <Grid container columns={3} rows={2} rowGap={0} maxWidth={"14vw"}>
                <ButtonGroup 
                fullWidth
                size="small">
                    <Grid item xs={1}>
                        <Button
                        variant="contained"
                        onClick={ decreaseCounter }
                        sx={{ width:"fit-content" }}>
                            - 
                        </Button>
                    </Grid>
                    <Grid item xs={10}>
                        <Button 
                        variant="outlined"
                        onClick={() => addToCart(counter) }
                        disabled={ !stock }>
                            { 'Agregar ' + (counter) }
                        </Button>
                    </Grid>
                    <Grid item xs={1}>
                        <Button
                        variant="contained"
                        onClick={ increaseCounter }> + </Button>
                    </Grid>
                </ButtonGroup>
                    <Grid item xs={12}>
                        <Button
                        fullWidth
                        size="small"
                        variant="outlined"
                        style={{ display: (counter > 1) ? 'true' : null }}
                        onClick={ resetCounter }>
                            Eliminar
                        </Button>
                    </Grid>
            </Grid>
        </div>
    )
}

export default ItemCounter;