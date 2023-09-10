import styled from "styled-components"

const Footer = () => {
  return (
    <BottomLayout>
      <ul>
        <li>首页</li>
        <li>发现</li>
        <li>消息</li>
        <li>我的</li>
      </ul>
    </BottomLayout>
  )
}


export default Footer

const BottomLayout = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #787B86;
  color: #FFFFFF;
  ul {
    display: flex ;
    li {
      flex: 1;
      height: 48px;
      line-height: 48px;
    }
  }
`
