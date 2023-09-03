import { Metadata } from "next"
import Link from "next/link"

import { UserAuthForm } from "@/components/UserAuthForm"

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
}

export default function Registro() {
  return (
    <>
      <div className="p-8 h-[calc(100vh-100px)]">
          <div className="mx-auto flex w-full h-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="40"
                viewBox="0 0 800 300"
                className="fill-current text-black dark:text-white text-center w-full my-8"
              >
                <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)" stroke="none">
                  <path d="M1580 2609 c-58 -4 -197 -10 -310 -14 -140 -5 -212 -12 -226 -20 -19 -12 -21 -26 -28 -172 -3 -87 -9 -204 -13 -261 l-6 -102 264 2 264 3 5 45 5 45 105 8 c237 18 365 -37 426 -182 57 -137 57 -519 -2 -711 -47 -157 -141 -276 -261 -333 -65 -30 -75 -32 -210 -35 -133 -4 -143 -3 -143 14 0 10 9 146 21 301 12 156 18 290 15 298 -5 13 -43 15 -258 15 -139 0 -258 -4 -264 -8 -13 -8 -51 -457 -61 -707 -7 -179 2 -219 58 -280 74 -80 182 -109 449 -119 390 -16 630 43 845 207 139 106 268 300 329 495 104 332 108 839 10 1101 -119 317 -447 449 -1014 410z"/>
                  <path d="M2924 2576 c-19 -13 -22 -29 -28 -153 -6 -128 -26 -401 -91 -1233 -14 -179 -27 -381 -28 -450 -2 -116 0 -129 24 -181 48 -101 112 -129 319 -136 191 -6 184 -12 187 144 13 574 35 1438 38 1441 7 8 28 -85 130 -590 115 -565 176 -826 206 -874 24 -39 84 -82 141 -99 117 -35 305 -27 343 15 35 39 162 406 421 1215 79 245 110 331 112 307 4 -41 -30 -445 -68 -812 -54 -516 -54 -571 -3 -644 54 -77 150 -106 350 -106 117 0 143 9 143 48 0 9 9 132 20 272 44 575 91 1326 93 1490 2 160 0 179 -19 221 -28 59 -67 95 -129 116 -44 16 -91 18 -363 18 -351 0 -331 4 -351 -75 -51 -197 -200 -762 -272 -1030 -123 -456 -120 -443 -125 -437 -8 8 -53 281 -105 635 -27 190 -59 391 -70 447 -54 269 -122 383 -258 437 -52 21 -75 22 -326 26 -228 3 -273 1 -291 -12z"/>
                  <path d="M5421 2580 c-18 -4 -43 -17 -54 -29 -19 -19 -20 -24 -8 -88 20 -110 104 -484 227 -1008 205 -871 206 -874 284 -959 66 -71 98 -78 354 -74 l215 3 29 28 c71 68 380 827 568 1396 46 140 104 296 128 348 82 171 192 319 270 361 l31 16 -50 7 c64 9 -682 9 -715 0 -15 -4 -32 -21 -42 -41 -10 -19 -62 -217 -117 -440 -119 -486 -309 -1181 -327 -1199 -2 -2 -6 2 -8 10 -6 18 -80 476 -145 899 -28 179 -58 372 -67 428 -20 133 -37 180 -80 231 -48 55 -107 89 -190 106 -73 16 -246 18 -303 5z"/>
                  <path d="M7400 2468 c-73 -73 -149 -178 -192 -263 -37 -73 -34 -71 30 25 69 103 141 181 208 225 37 25 54 42 50 52 -3 8 -6 17 -6 19 0 2 -6 4 -14 4 -8 0 -42 -28 -76 -62z"/>
                  <path d="M7429 2404 c-71 -69 -142 -163 -194 -256 -39 -72 -42 -93 -4 -30 51 84 145 195 201 237 33 25 64 45 69 45 12 0 11 47 -1 55 -6 3 -37 -20 -71 -51z"/>
                  <path d="M575 2183 c-38 -42 -93 -160 -116 -253 -31 -123 -24 -273 20 -390 37 -101 100 -205 129 -212 31 -8 67 14 70 43 2 16 -13 51 -38 95 -115 196 -115 416 0 606 44 74 49 97 22 121 -27 25 -58 21 -87 -10z"/>
                  <path d="M661 1849 c-26 -25 -31 -38 -31 -78 0 -26 7 -56 16 -69 35 -51 45 -52 454 -52 419 0 435 2 464 59 27 51 21 98 -18 137 l-34 34 -410 0 -410 0 -31 -31z"/>
                </g>
              </svg>
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
    </>
  )
}