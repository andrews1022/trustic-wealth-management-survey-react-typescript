// styled components
import * as S from './Nav.styles';
import { Button } from '../UI/Button';

const Nav = () => (
  <S.Nav>
    <S.List>
      <S.Item>
        <Button mode='pop' size='small' type='button'>
          Book an introductory call
        </Button>
      </S.Item>

      <S.Item>
        <Button mode='pop' size='small' type='button'>
          Sign up for future retirement insights
        </Button>
      </S.Item>
    </S.List>
  </S.Nav>
);

export default Nav;
