import {LiEle, ButtonEle} from './styledComponent'

const LanguageTab = ({obj, handleLanguageTab, isActive}) => {
  const {buttonText, id} = obj

  return (
    <LiEle>
      <ButtonEle
        isActive={isActive}
        onClick={() => handleLanguageTab(id)}
        type="button"
      >
        {buttonText}
      </ButtonEle>
    </LiEle>
  )
}
export default LanguageTab
