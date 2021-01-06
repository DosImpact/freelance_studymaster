import React from "react";
import styled from "styled-components";

const Privacy = () => {
  return (
    <Container>
      <InnerContainer>
        <div className="title">개인정보처리방침</div>
        <div className="content">
          {`



1. 이용자의 권리 및 행사방법

① 이용자는 언제든지 정보주체로서의 권리(등록되어 있는 본인의 개인정보를 열람, 정정, 동의 철회, 삭제)를 행사할 수 있으며, 아래 사항에 대한 열람, 제공, 정정, 동의 철회, 삭제(탈퇴), 처리 정지, 이의제기 등을 요구할 수 있습니다.
    1) 회사가 보유하고 있는 이용자의 개인정보
    2) 회사가 이용자의 개인정보를 이용하거나 제3자에게 제공한 현황
    3) 이용자가 개인정보 수집·이용·제공 등의 동의를 한 현황
      - 조회 및 수정 : 로그인 후 마이페이지 > 프로필 수정
      - 삭제 및 회원탈퇴 : 로그인 후 마이페이지 > 회원탈퇴
      - 동의 철회(이벤트 정보수신) : 로그인 후 마이페이지 > 설정 변경
    4) 회사는 관련된 상담 및 문의처리를 위해 별도의 고객센터를 운영하고 있으며, 개인정보 보호책임자에게 이메일 또는 전화로 연락하시면 지체없이 조치하겠습니다.

② 이용자가 개인정보의 오류에 대한 정정을 요청하신 경우, 완료하기 전까지 개인정보를 이용 또는 제공하지 않습니다. 또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체없이 통지하여 정정이 이루어지도록 하겠습니다.


            `}
        </div>
      </InnerContainer>
    </Container>
  );
};

export default Privacy;

const Container = styled.div`
  padding: 125px 0px;
  border-bottom: solid 1px rgba(0, 0, 0, 0.1);
`;

const InnerContainer = styled.div`
  margin: 0 auto;
  max-width: 1240px;

  .title {
     {
      font-size: 40px;
      font-weight: 500;
      letter-spacing: -0.4px;
      color: ${(props) => props.theme.MainColor3};
    }
  }
  .content {
    font-size: 22px;
    white-space: pre-wrap;
  }
`;
