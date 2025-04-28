"use client";
// import { TContact } from "../api/contact/route";
// import { useContact } from "../[hook]/getContact";

export default function Page() {
  // const { contactList } = useContact();

  // console.log("contactList", contactList);

  // const handleConfirm = () => {
  //   const confirm = window.confirm("메일을 보내시겠습니까?");
  //   if (confirm) {
  //     ("https://formsubmit.co/chohyun0107@naver.com");
  //   } else {
  //     alert("메일 발송이 취소되었습니다.");
  //   }
  // };

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2>✉️ 메일 문의하기</h2>
        <form
          className="flex flex-col"
          action={"https://formsubmit.co/chohyun0107@naver.com"}
          method="POST"
        >
          <input
            type="text"
            name="mail"
            required
            className="w-[100%] h-[300px] border-1 border-black rounded-xl dark:bg-gray-200 dark:text-gray-900 p-5"
          />
          <button
            className="w-[30%] p-[5px] mt-3 ml-auto border-2-black bg-yellow-200 pointer-coarse dark:text-black dark:bg-gray-200"
            type="submit"
          >
            메일 보내기
          </button>
        </form>
      </div>

      <div>
        <h2>카카오톡 문의하기</h2>
      </div>

      {/* ------ 리스트 ------
      {contactList.length > 0 ? (
        contactList.map((data: TContact) => {
          return (
            <div key={data.id}>
              <h3>{data.title}</h3>
            </div>
          );
        })
      ) : (
        <div>로딩중...</div>
      )} */}
    </div>
  );
}
