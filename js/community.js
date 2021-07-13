/*
매개변수(parameter):외부의 특정값을 함수 내부로 전달해주는 통로
인수(argument):매개변수를 통해 직접적으로 전달되는 값
*/

const url ="data/board.json";
//동적으로 생성할 테이블의 위치 전역변수에 저장
const resultData = callData(url);
const frame = $(".community .inner");

createTable(frame,resultData);
//callData함수에 주소값을 호출한뒤 나온
//데이터배열을 변수 resultdATA에 저장


//json을 데이터로부터 게시글 내용을 배열로 반환해주는 함수정의
function callData(url){
    //배열값을 저장할 result변수 생성
    let result;
    //해당 ajax문을 동기화 시켜서
    //모든 데이터가 잘 받아지면
    $.ajax({
        url: url,
        dataType:"json",
        async:false//무조건 ajax구문이 끝나야 다음 구문이 순차적으로 실행되게 하는 구문
    })
    .success((data)=>{
        result = data.board;//
        
    })
    .error((err)=>{
        console.error(err)
    });
    //해당 데이터값을 callData함수 밖으로
    //배열 형태로 내보냄
    return result;
}


//createTable함수에 타겟위치와,배열데이터를 인수로 넣어서
//동적으로 테이블 생성 완료
function createTable(target,data){
    //table프레임과 thead부분 완성

    //table과 그안에 caption,thead,tbody 하나만 생성
    target.append(
        $("<table>")
            .attr("summary","자유게시판의 글번호,제목,작성자,작성일")
            .append(
                $("<caption class ='hidden'>").text("자유게시판"),
                $("<thead>")
                    //thead안쪽에 tr을 하나만 만듬
                    .append(
                        $("<tr>")
                            //다시제목줄하나인 th로만듬
                            .append("<th scope='col'>no</th>")
                    ),
                "<tbody>"    
            )
    );

    target.append(
        $("<div class='buttons'>")
            .append(
                $("<ul>")
                .append(
                    $("<li>")
                    .append(
                        $("<a>").attr("href","#")
                        .append(
                            $("<i class='fas fa-angle-double-left'>")
                        )
                    ),
                    $("<li>")
                    .append(
                        $("<a class='on'>").attr("href","#").text("1"),
                    ),

                    $("<li>")
                    .append(
                        $("<a>").attr("href","#").text("2"),
                    ),

                    $("<li>")
                    .append(
                        $("<a>").attr("href","#").text("3"),
                    ),

                    $("<li>")
                    .append(
                        $("<a>").attr("href","#").text("4"),
                    ),

                    $("<li>")
                    .append(
                        $("<a>").attr("href","#").text("5"),
                    ),

                    $("<li>")
                    .append(
                        $("<a>").attr("href","#").text("6"),
                    ),

                    $("<li>")
                    .append(
                        $("<a>").attr("href","#").text("7"),
                    ),

                    $("<li>")
                    .append(
                        $("<a>").attr("href","#").text("8"),
                    ),

                    $("<li>")
                    .append(
                        $("<a>").attr("href","#").text("9"),
                    ),

                    $("<li>")
                    .append(
                        $("<a>").attr("href","#").text("10"),
                    ),
                    $("<li>")
                    .append(
                        $("<a>").attr("href","#")
                        .append(
                            $("<i class='fas fa-angle-double-right'>")
                        )
                    ),
                )
            )
    );
    //제목줄에 나머지 th태그 3개를 객체 하나의 키값을 갯수만큼
    //반복을 돌명서 key값의 이름을 th의 제목으로 설정
    /*
    for of:배열을 반복
    for in:객체의 키값을 반복
    */
    for(let key in data[0]){
        console.log(key);

        target.find("thead tr")
        .append(
            $("<th scope = 'col'>").text(key)
        )
    }
    

    //tbody의 안쪽에서 이번에는 배열의 갯수만큼 반복을 돌면서 tr생성하고 그안쪽 td도 생성
    for(let i =0; i<data.length;i++){
        console.log(data[0]);

        target.find("tbody")
        //tr생성을ㅎ해서 prepend로 위쪽에 삽입
        //나중에 작성된 최신글이 게시글 상단에 있어야 되기 때문
        .prepend(
            $("<tr>")
                .append(
                    //i값 증가시켜서 글번호 생성
                    //나중에 작성된 최신글이 게시글 상단에 있어야 하기떄문
                    $("<td>").text(i+1),
                    $("<td>").text(data[i].asktype),
                    $("<td>")
                        .append(
                            $("<a>").attr("href","#").text(data[i].title)
                        ),
                    $("<td>").text(data[i].writer),
                    $("<td>").text(data[i].date),
                    

                    
                )
        )
    } 
}