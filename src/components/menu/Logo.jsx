export const Logo = ({icon}) => {
    return (
        <div className='logo'>
            <img src={require(`../../assets/${icon}.png`)} alt="" className='logo-icon'/>
         <span className='logo-text'>Song Ngữ</span>
        </div>
    )
}