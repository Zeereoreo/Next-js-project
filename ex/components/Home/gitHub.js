'use client'

import GitHubCalendar from 'react-github-calendar';

export default function GitHub() {

    // const selectLastHalfYear = (contributions) => {

    //     // 현재 연/월
    //     const currentYear = new Date().getFullYear();
    //     const currentMonth = new Date().getMonth();
    
    //     // 노출할 기간(달)
    //     const shownMonths = 5;
    
    //     return contributions.filter((day) => {
    //         const date = new Date(day.date);
    //         const monthOfDay = date.getMonth();

    //         // 현재 날짜가 6월~12월 사이인 경우
    //         if (currentMonth >= 5)
    //             return (
    //             date.getFullYear() === currentYear &&
    //             monthOfDay > currentMonth - shownMonths &&
    //             monthOfDay <= currentMonth
    //             );

    //         // 현재 날짜가 1월~5월인 경우
    //         return (
    //             // 올해
    //             (date.getFullYear() === currentYear && monthOfDay <= currentMonth) ||
    //             // 작년
    //             (date.getFullYear() === currentYear - 1 &&
    //             monthOfDay > currentMonth + 11 - shownMonths)
    //         );
    //         });
    //     };
        
        return (
            <div className='flex justify-center'>
            <GitHubCalendar username="Zeereoreo"
            blockSize={12}
            // transformData={selectLastHalfYear}
            />
            </div>
        )
    }