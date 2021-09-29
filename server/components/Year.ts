import dayjs from 'dayjs'

type YearOfProgressProps = {
  bgColor?: string
  label?: string
}

export const createYearOfProgress = ({ bgColor = '#fffe41', label = '' }: YearOfProgressProps) => {
  const now = dayjs()
  const start = dayjs().startOf('year')
  const end = dayjs().endOf('year')
  const percent = ((now.unix() - start.unix()) / (end.unix() - start.unix())) * 100
  return `
<svg width="800px" height="100px" viewBox="0 0 800 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <foreignObject width="100%" height="100%">
    <div xmlns="http://www.w3.org/1999/xhtml">
      <style>
        
        .container {
          background-color: rgb(241, 243, 245);
          width: 100%;
          height: 100px;
          position: relative;
          border-radius: 4px;
          overflow: hidden;
          color: rgb(33, 37, 41);
        }
        .bar {
          height: 100px;
          background-color: ${bgColor};
          animation: toRight ease-in-out 1s forwards
        }
        @keyframes toRight {
          0% {
            width: 0px;
          }
          100% {
            width: ${percent}%;
          }
        }
        .percent {
          position: absolute;
          margin: 0px;
          right: 8px;
          bottom: 4px;
          z-index: 1000;
          font-weight: bold;
          letter-spacing: 1px;
          font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
          font-size: 24px;
        }
        .goal {
          position: absolute;
          margin: 0px;
          left: 16px;
          bottom: 8px;
          z-index: 1000;
          letter-spacing: 1px;
          font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
          font-size: 16px;
        }
        @media (prefers-color-scheme: dark) {
          /* defaults to dark theme */
          .container {
            background-color: #22272E;
            color: #4299e1;
          }
        }
      </style>
      <div class="container">
        <div class="bar" />
        <p class="goal">${label}</p>
        <p class="percent">${percent}%</p>
      </div>
    </div>
  </foreignObject>
</svg>
  `
}
