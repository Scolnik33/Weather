import React from 'react'
import styles from './Input.module.css'

type InputProps = {
    rightInput: boolean,
    search: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>,
    setRightInput: React.Dispatch<React.SetStateAction<boolean>>,
    handleSearch: () => void,
    handleEnter: (e: any) => void
}

const Input: React.FC<InputProps> = ({ search, rightInput, setSearch, setRightInput, handleSearch, handleEnter }) => {
  if (search) {
    setRightInput(true)
  }

  return (
    <div className={styles.input_space}>
        <input className={rightInput ? styles.right_input : styles.not_right_input} type="text" value={search} onChange={e => setSearch(e.target.value)} onKeyDown={handleEnter} placeholder='Text a city'/>
        {
          rightInput ? (
            <button className={search ? styles.buttonVisible : styles.buttonInvisible} disabled={search ? false : true} onClick={handleSearch}>Search</button>
          ) : (
            <>
              <p className='invisible'>
                {setTimeout(() => {
                  setRightInput(true)
                }, 3000)}
              </p>
              <div className={styles.warning}>Не удалось найти указанный город 😪</div>
            </>
          )
        }
    </div>
  )
}

export default Input