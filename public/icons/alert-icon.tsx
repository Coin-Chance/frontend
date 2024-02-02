import { SvgIcon } from "@mui/material";
import type { SxProps } from "@mui/material";

interface IconProps {
  width?: string;
  height?: string;
  sx?: SxProps;
}

export function AlertIcon(props: IconProps): JSX.Element {
  const { width = "177px", height = "120px", sx = {} } = props;

  return (
    <SvgIcon sx={{ width, height, ...sx }}>
      <svg viewBox="0 0 177 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.1659 117.917H14.717C11.0763 117.917 8.125 114.962 8.125 111.317C8.125 110.075 8.47516 108.857 9.13523 107.806L73.8283 4.71178C75.7651 1.62532 79.8342 0.695241 82.9169 2.6344C83.7557 3.16199 84.4649 3.87204 84.9918 4.71178L149.685 107.806C151.622 110.892 150.693 114.966 147.61 116.905C146.559 117.566 145.344 117.917 144.103 117.917H44.6598H22.1659ZM37.6137 117.917H28.3989H37.6137Z"
          fill="white"
        />
        <path
          d="M37.6137 117.917H28.3989M22.1659 117.917H14.717C11.0763 117.917 8.125 114.962 8.125 111.317C8.125 110.075 8.47516 108.857 9.13523 107.806L73.8283 4.71178C75.7651 1.62532 79.8342 0.695241 82.9169 2.6344C83.7557 3.16199 84.4649 3.87204 84.9918 4.71178L149.685 107.806C151.622 110.892 150.693 114.966 147.61 116.905C146.559 117.566 145.344 117.917 144.103 117.917H44.6598H22.1659Z"
          stroke="#EB5353"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M130.603 89.4221L143.085 109.624C143.563 110.399 143.324 111.416 142.55 111.895C142.289 112.056 141.989 112.142 141.683 112.142H17.1363C16.2261 112.142 15.4883 111.403 15.4883 110.492C15.4883 110.185 15.5736 109.885 15.7347 109.624L52.5734 49.9878C70.8439 73.7441 98.9794 89.0791 130.603 89.4221Z"
          fill="#FEE8E8"
        />
        <path
          d="M84.7667 76.044V39.731C84.7667 36.773 82.3687 34.375 79.4107 34.375C76.4526 34.375 74.0547 36.773 74.0547 39.731V76.044C74.0547 79.002 76.4526 81.4 79.4107 81.4C82.3687 81.4 84.7667 79.002 84.7667 76.044Z"
          fill="#FEE8E8"
          stroke="#EB5353"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M79.4107 100.375C82.3687 100.375 84.7667 97.9745 84.7667 95.0129C84.7667 92.0513 82.3687 89.6504 79.4107 89.6504C76.4527 89.6504 74.0547 92.0513 74.0547 95.0129C74.0547 97.9745 76.4527 100.375 79.4107 100.375Z"
          fill="#FEE8E8"
          stroke="#EB5353"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M130.253 23.4913C132.983 23.4913 135.197 21.2751 135.197 18.5413C135.197 15.8075 132.983 13.5913 130.253 13.5913C127.522 13.5913 125.309 15.8075 125.309 18.5413C125.309 21.2751 127.522 23.4913 130.253 23.4913Z"
          stroke="#EB5353"
          strokeWidth="2"
        />
        L{" "}
        <path
          d="M171.139 42.086C173.87 42.086 176.083 39.8698 176.083 37.136C176.083 34.4022 173.87 32.186 171.139 32.186C168.409 32.186 166.195 34.4022 166.195 37.136C166.195 39.8698 168.409 42.086 171.139 42.086Z"
          fill="#EB5353"
        />
        <path
          d="M135.777 45.1855L149.552 58.9766M149.761 45.1855L135.987 58.9766L149.761 45.1855Z"
          stroke="#EB5353"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.8125 55.6035L11.7005 65.5035M11.7005 55.6035L1.8125 65.5035L11.7005 55.6035Z"
          stroke="#EB5353"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24.2174 44.7198C26.9479 44.7198 29.1614 42.5036 29.1614 39.7698C29.1614 37.036 26.9479 34.8198 24.2174 34.8198C21.4869 34.8198 19.2734 37.036 19.2734 39.7698C19.2734 42.5036 21.4869 44.7198 24.2174 44.7198Z"
          fill="#EB5353"
        />
      </svg>
    </SvgIcon>
  );
}
