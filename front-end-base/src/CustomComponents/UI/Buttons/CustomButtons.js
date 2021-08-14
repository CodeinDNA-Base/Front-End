import { Button } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
const useStyles = makeStyles((theme) => ({
    button
}));

const button = ({ title, handleOnClick, variant }) => {
  return (
    <Button
      variant={variant}
      classes={{
        root: classes.btnContained,
      }}
      onClick={handleOnClick}
    >
      {title}
    </Button>
  );
};
