import React, { PropTypes } from 'react'
import { has, map } from 'lodash'

const iconSet = {
  "architecture": [
    "M384.55 88.217v84.745h42.487v127.222h-338.971v84.745h42.487v550.938h466.192v-169.48h127.222v169.48h169.48v-762.905h42.487v-84.745h-551.385zM426.809 850.664h-211.967v-84.745h211.967v84.745zM426.809 681.413h-211.967v-84.745h211.967v84.745zM426.809 512.151h-211.967v-84.745h211.967v84.745zM596.299 681.413h-84.745v-84.745h84.745v84.745zM596.299 511.922h-84.745v-84.745h84.745v84.745zM596.299 342.442h-84.745v-84.745h84.745v84.745zM808.266 681.413h-84.745v-84.745h84.745v84.745zM808.266 511.922h-84.745v-84.745h84.745v84.745zM808.266 342.442h-84.745v-84.745h84.745v84.745z"
  ],
  "art": [
    "M524.321 251.732c24.878 6.004 63.457 23.991 77.396 61.145 8.1 21.558 7.554 68.925 5.719 104.889-6.578 38.122-21.802 65.918-45.501 82.782-31.72 22.575-71.461 20.252-90.648 17.314-26.187-12.805-41.635-51.735-48.34-83.514-7.846-37.136-3.083-56.498-3.083-56.498v-13.908c-6.969-18.572-0.77-73.52 8.509-92.102 9.282-18.572 38.786-18.874 47.209-25.541 11.791-9.31 27.65-49.58 32.294-61.818-96.679 12.152-120.815 93.597-125.53 115.223-11.526 10.99-20.994 30.724-11.351 52.079-3.454 4.44-6.928 10.52-8.316 18.163-1.151 6.382-1.113 15.743 4.323 26.634-9.603 18.602-30.098 70.623-7.652 144.531 21.647 71.324 12.444 90.404 6.499 99.102-14.571 5.739-62.629 27.483-82.782 71.774-5.767 2.557-12.142 6.676-18.142 12.513v115.917h495.514v-199.881c-14.434-21.197-31.27-44.123-45.9-59.223-4.021-23.122-23.94-139.125-24.613-179.657-0.381-22.847-1.258-76.362-20.778-124.836-22.72-56.481-64.365-88.462-120.942-93.254h-30.645c-36.081 59.272-1.299 66.231 6.763 68.172zM614.873 619.733c0 6.237 2.42 11.859 6.334 16.066-3.396 2.997-5.574 7.3-5.574 12.18 0 2.216 0.457 4.296 1.258 6.255-5.066 4.725-8.217 11.437-8.217 18.915 0 4.54 1.172 8.784 3.21 12.502-5.251 4.275-8.657 10.774-8.657 18.076 0 3.739 0.918 7.262 2.498 10.385-22.575 10.423-48.154 42.222-48.154 42.222-51.062 3.866-167.945-14.719-172.591-53.416-4.656-38.697 106.030-121.499 106.030-121.499 0-4.763-2.653-26.38-4.684-42.202 2.89 0.155 5.914 0.244 9.056 0.244 22.974 0 52.127-4.646 77.767-22.819 12.279-8.705 22.585-19.744 30.978-32.988 1.708 49.814 13.059 110.148 13.059 110.148l7.485 6.801c-5.935 4.303-9.798 11.252-9.798 19.128z",
    "M887.023 928.962c2.646-1.738 5.182-3.777 7.526-6.12 18.173-18.163 18.173-47.638 0-65.781-5.104-5.114-11.127-8.746-17.51-10.98 7.777-26.118 22.105-96.116-6.313-197.156 17.42-2.976 30.703-18.094 30.703-36.373 0-11.117-4.918-21.063-12.678-27.833 17.86-13.322 30.139-40.875 30.139-72.729 0-31.847-12.279-59.388-30.139-72.709 7.76-6.774 12.678-16.719 12.678-27.826 0-18.261-13.262-33.387-30.703-36.366 25.201-89.614 16.826-154.789 9.155-186.616 5.337-2.254 10.334-5.523 14.688-9.877 18.173-18.173 18.173-47.628 0-65.801-2.333-2.344-4.88-4.382-7.533-6.12 4.138-1.952 8.062-4.656 11.575-8.148 14.582-14.571 15.888-36.913 2.918-49.872-12.952-12.97-35.291-11.664-49.872 2.908-3.474 3.485-6.179 7.427-8.139 11.564-1.746-2.674-3.787-5.203-6.12-7.544-18.152-18.163-47.638-18.163-65.791 0-3.327 3.32-5.983 7.028-8.1 10.96-18.925-6.753-59.564-16.142-116.639-1.845-5.464-13.606-18.719-23.228-34.277-23.228-11.127 0-21.042 4.9-27.844 12.657-13.351-17.85-40.882-30.119-72.75-30.119-31.847 0-59.378 12.269-72.709 30.119-6.763-7.75-16.729-12.65-27.826-12.65-15.547 0-28.83 9.623-34.277 23.228-57.113-14.289-97.724-4.908-116.649 1.845-2.1-3.933-4.784-7.643-8.1-10.96-18.173-18.163-47.628-18.163-65.801 0-2.344 2.344-4.382 4.88-6.11 7.544-1.952-4.138-4.674-8.080-8.139-11.564-14.582-14.582-36.913-15.88-49.883-2.908-12.96 12.97-11.643 35.301 2.928 49.872 3.474 3.495 7.427 6.196 11.564 8.148-2.684 1.746-5.213 3.777-7.564 6.128-18.152 18.163-18.152 47.628 0 65.801 4.354 4.344 9.351 7.643 14.688 9.897-7.652 31.837-16.056 97.002 9.155 186.599-17.42 2.976-30.703 18.104-30.703 36.366 0 11.107 4.9 21.053 12.668 27.826-17.881 13.322-30.129 40.875-30.129 72.702 0 31.857 12.269 59.388 30.129 72.719-7.75 6.763-12.668 16.719-12.668 27.833 0 18.261 13.262 33.397 30.703 36.373-28.441 101.061-14.114 171.041-6.324 197.177-6.382 2.234-12.406 5.866-17.52 10.96-18.152 18.163-18.152 47.638 0 65.801 2.344 2.323 4.88 4.361 7.544 6.12-4.138 1.942-8.072 4.664-11.564 8.139-14.571 14.582-15.888 36.902-2.928 49.862 12.97 12.98 35.301 11.664 49.883-2.918 3.474-3.464 6.188-7.416 8.139-11.554 1.738 2.653 3.777 5.193 6.12 7.526 18.163 18.173 47.628 18.173 65.801 0 6.1-6.080 10.1-13.458 12.093-21.266 20.331 6.55 59.282 13.87 112.656 0.508 5.447 13.626 18.719 23.238 34.277 23.238 11.097 0 21.053-4.9 27.826-12.657 13.331 17.87 40.875 30.129 72.709 30.129 31.857 0 59.388-12.258 72.719-30.119 6.763 7.76 16.719 12.657 27.826 12.657 15.568 0 28.84-9.603 34.287-23.238 53.385 13.362 92.339 6.042 112.656-0.498 2 7.798 6.004 15.176 12.103 21.256 18.152 18.183 47.618 18.183 65.77 0 2.344-2.323 4.382-4.86 6.12-7.526 1.962 4.138 4.674 8.080 8.139 11.564 14.582 14.582 36.92 15.898 49.883 2.918 12.97-12.96 11.654-35.271-2.928-49.852-3.474-3.543-7.389-6.248-11.537-8.189zM791.513 872.608h-557.722v-719.060h557.722v719.060z"
  ],
  "cultural": [
    "M967.529 764.982v-95.204h-58.692v-91.888h-56.457v-94.111h-59.785l1.117-92.994h-58.667l2.211-94.111h-80.799v-133.964h-288.906v133.964h-80.811l2.211 94.111h-58.667l1.106 92.994h-59.785v94.111h-56.457v91.888h-58.68v95.204h-56.468v96.31h335.427l112.091-556.339h13.288l-76.954 556.339h256.885l-76.954-556.339h13.288l112.079 556.339h334.85v-96.31h-56.468zM542.472 299.966h-59.785v-54.246h59.785v54.246z"
  ],
  "design": [
    "M985.977 861.884v21.365l-18.481 10.614c-63.722 36.774-135.070 57.412-207.9 62.345v0c-10.473 0.683-20.948 1.836-31.402 1.836-41.417 0-82.568-5.372-122.385-15.792-0.759-0.202-1.495-0.49-2.254-0.695-18.588-4.954-36.869-11.039-54.755-18.174-3-1.195-5.872-2.679-8.85-3.942-42.612-18.012-82.418-42.612-118.667-72.573-16.517-13.698-32.096-28.477-46.649-44.289-5.445-5.914-10.891-11.832-16.069-18.057-16.615-20-32.085-41.011-45.347-63.582-0.619-1.047-1.399-1.943-2.007-3l-0.129-0.031c-16.229-28.113-29.32-57.775-39.516-88.346 19.047-19.327 39.698-36.569 62.474-50.673 9.172 35.556 22.583 70.042 41.128 102.161 8.872 15.363 18.91 29.918 29.641 43.928 2.583 3.365 5.445 6.373 8.114 9.643 8.308 10.186 16.911 20.063 26.149 29.373 3.535 3.555 7.26 6.824 10.913 10.239 9.108 8.532 18.493 16.699 28.348 24.354 3.608 2.796 7.283 5.445 10.975 8.103 5.402 3.908 10.496 8.243 16.092 11.885 0.353-0.224-0.353 0.224 0 0 23.371 15.121 48.261 27.974 73.995 37.968-0.202 0.16 0.202-0.16 0 0 29.138 11.328 59.622 18.792 90.553 23.074 5.959 0.864 11.938 1.313 17.939 1.912 9.108 0.853 18.183 1.517 27.335 1.761 4.324 0.14 8.596 0.835 12.932 0.835 3.919 0 7.848-0.501 11.779-0.759 59.258-1.87 118.231-16.058 171.552-43.136-4.624-86.24-36.922-167.955-90.064-233.867 7.336-30.409 11.979-61.215 14.115-92.306 94.228 89.765 150.445 215.021 150.445 347.826zM603.099 391.878c-45.431-9.203-92.241-11.798-138.475-8.039-28.519 2.446-56.515 7.526-83.775 14.886-1.954 0.524-3.843 1.293-5.796 1.836-53.783 15.257-104.499 39.55-149.782 72.125-0.822 0.588-1.635 1.195-2.446 1.783-22.894 16.688-44.653 35.116-64.459 55.779v0c-84.093 88.354-133.348 206.831-133.348 331.639v21.365l18.481 10.614c113.5 65.57 251.901 79.238 376.312 43.264-26.031-17.371-50.802-36.527-73.642-58.116-83.327 12.663-170.751-0.171-246.647-38.781 4.985-92.53 42.058-179.552 102.298-247.682 0 0 2.788-3.096 4.176-4.613 14.073-15.428 29.118-29.256 45.549-42.452 0.042 0.311-0.042-0.311 0 0 21.793-17.446 44.91-33.003 69.689-45.583-0.011-0.182 0.011 0.182 0 0 26.416-13.433 54.486-23.224 83.187-30.334 19.904-5.125 39.987-9.203 60.657-11.286v0c49.926-4.655 100.773-0.374 149.163 12.738-0.374-26.596-4.195-52.972-11.148-79.14zM759.553 417.749c-0.33-2.636-0.482-5.307-0.864-7.932-3.437-23.587-8.456-47.055-15.417-70.213h0.406c-34.904-115.659-112.605-216.205-219.698-278.026l-18.481-10.644-18.481 10.644c-115.037 66.434-195.397 177.788-225.996 304.368 27.954-13.796 57.027-25.166 87.030-34.104 30.495-78.992 85.121-147.775 157.448-194.904 74.72 48.647 130.351 120.473 160.171 202.665h0.031c0.064 0.171 0.076 0.364 0.14 0.535 8.884 24.601 15.728 50.036 19.764 76.161-0.235-0.095 0.235 0.095 0 0 4.249 27.514 5.638 55.49 4.184 83.050 0.437 0.224-0.437-0.224 0 0-1.047 19.616-4.013 39.005-7.89 58.223-0.213 1.035-0.501 2.049-0.725 3.084-4.901 23.362-11.714 46.276-20.651 68.495-0.042 0.118-0.053 0.235-0.106 0.353h-0.022c-7.113 17.606-15.045 34.904-24.612 51.466-18.717 32.427-42.165 61.534-68.707 87.427 23.182 12.75 47.737 23.042 73.471 30.046 22.23-24.772 42.423-51.432 59.185-80.509 16.838-29.085 30.184-59.835 40.522-91.517 6.77-20.811 11.95-41.983 15.781-63.381 0.471-2.541 1.024-5.061 1.453-7.602 7.409-45.423 7.986-91.73 2.072-137.684z"
  ],
  "family": [
    "M606.678 859.729h-129.776c-67.107 0-121.474 54.384-121.474 121.46v2.022h372.714v-2.022c0-67.076-54.353-121.46-121.46-121.46z",
    "M659.505 690.492c0 68.737-55.72 124.458-124.458 124.458s-124.458-55.72-124.458-124.458c0-68.737 55.72-124.458 124.458-124.458s124.458 55.72 124.458 124.458z",
    "M395.092 345.876c0 95.536-77.448 172.981-172.981 172.981s-172.981-77.448-172.981-172.981c0-95.536 77.448-172.981 172.981-172.981s172.981 77.448 172.981 172.981z",
    "M956.12 213.807c0 95.536-77.448 172.981-172.981 172.981s-172.981-77.448-172.981-172.981c0-95.536 77.448-172.981 172.981-172.981s172.981 77.448 172.981 172.981z",
    "M882.673 423.878h-180.356c-67.871 0-126.226 40.147-153.034 97.903 86.754 7.267 155.165 80.084 155.165 168.712 0 51.567-23.229 97.737-59.675 128.85 73.43 17.294 128.325 83.218 128.325 161.861v2.008h278.393v-390.516c0-93.211-75.575-168.817-168.817-168.817z",
    "M428.438 822.009c-38.274-31.095-62.806-78.467-62.806-131.516 0-42.469 15.826-81.239 41.722-110.999-25.132-14.85-54.353-23.529-85.673-23.529h-180.385c-93.228-0.014-168.786 75.557-168.786 168.8v258.446h337.963v-2.022c0-74.916 49.767-138.381 117.969-159.18z"
  ],
  "free": [
    "M322.537 458.32c0-1.49 0-1.49 0 0-4.477-10.444-7.458-19.392-10.444-31.332-2.985-10.444-4.477-23.869-4.477-35.803 0-41.77 16.411-79.070 46.247-110.402 25.362-26.855 65.645-44.757 95.481-55.201v-52.215c0-8.954 1.49-17.902 8.954-23.869 5.967-7.458 13.425-10.444 23.869-10.444h52.215c8.954 0 17.902 2.985 25.362 10.444 5.967 5.967 10.444 14.921 10.444 25.362v49.234c14.921 1.49 19.392 4.477 28.346 7.458 14.921 4.477 26.855 8.954 37.3 14.921 8.954 4.477 19.392 10.444 28.346 16.411 11.934 7.458 14.921 10.444 17.902 13.425s4.477 4.477 7.458 5.967c11.934 11.934 13.425 28.346 5.967 41.77l-31.332 56.691c-4.477 10.444-14.921 16.411-25.362 17.902-8.954 1.49-19.392-1.49-26.855-7.458l-1.49-1.49c0 0-1.49-1.49-2.985-2.985-2.985-1.49-7.458-4.477-13.425-8.954s-13.425-7.458-20.888-10.444c-7.458-2.985-14.921-5.967-25.362-8.954-8.954-2.985-19.392-4.477-28.346-4.477-19.392 0-35.803 4.477-47.739 11.934-10.444 7.458-13.425 14.921-13.425 25.362 0 4.477 0 7.458 1.49 10.444s2.985 4.477 5.967 7.458 8.954 8.954 13.425 11.934c2.985 1.49 7.458 4.477 17.902 10.444 8.954 4.477 16.411 7.458 22.379 10.444s14.921 5.967 26.855 10.444c7.458 2.985 13.425 4.477 19.392 7.458h410.271c-32.823-232.733-228.259-411.761-466.963-411.761s-434.14 179.028-460.995 410.271h274.51z",
    "M701.481 576.18c0 1.49 1.49 4.477 1.49 5.967 4.477 13.425 5.967 28.346 5.967 43.267 0 44.757-14.921 85.037-44.757 117.86-25.362 28.346-50.724 47.739-95.481 56.691v50.724c0 8.954-2.985 17.902-10.444 25.362-5.967 5.967-14.921 10.444-23.869 10.444h-52.215c-8.954 0-16.411-2.985-23.869-10.444-5.967-5.967-8.954-14.921-8.954-25.362v-49.234c-14.921-2.985-25.362-5.967-35.803-10.444-16.411-5.967-32.823-11.934-43.267-19.392-10.444-5.967-22.379-13.425-31.332-20.888-10.444-7.458-16.411-11.934-20.888-16.411s-7.458-7.458-8.954-8.954c-10.444-13.425-11.934-29.836-1.49-43.267l40.28-52.215c2.985-4.477 10.444-11.934 23.869-13.425 10.444-1.49 20.888 2.985 28.346 10.444 25.362 22.379 53.71 37.3 83.547 43.267 25.362 5.967 49.234 2.985 67.136-10.444 10.444-7.458 14.921-16.411 14.921-29.836 0-2.985-1.49-5.967-2.985-8.954-2.985-4.477-5.967-8.954-8.954-11.934-1.49-1.49-5.967-5.967-17.902-11.934-10.444-4.477-17.902-8.954-25.362-11.934-5.967-2.985-13.425-5.967-25.362-10.444h-435.63c29.836 226.766 225.276 401.317 459.502 401.317s429.663-174.551 459.502-401.317h-267.046z"
  ],
  "gardens": [
    "M761.785 730.693c159.259-159.196 196.596-682.888 196.596-682.888s-108.119 56.368-280.84 71.193c-162.873 13.988-313.711 36.96-402.1 125.348-136.411 136.445-170.549 330.63-92.905 467.865 85.463-134.106 436.88-325.457 436.88-325.457-252.226 180.378-380.742 320.256-553.797 566.774l84.859 22.713c0 0 63.174-114.087 118.092-169.204 137.834 97.795 348.080 68.843 493.214-76.348z"
  ],
  "history": [
    "M979.433 447.227c-2.314-16.736-5.455-33.199-9.476-49.339-11.533-46.246-29.839-89.839-53.911-129.585-10.42-17.218-22.004-33.642-34.466-49.339-86.551-108.894-219.988-178.919-369.581-178.919-149.578 0-283.036 70.025-369.571 178.929-12.472 15.689-24.041 32.122-34.456 49.339-24.072 39.751-42.393 83.344-53.921 129.585-4.022 16.13-7.165 32.604-9.466 49.339-2.935 21.184-4.57 42.788-4.57 64.782s1.632 43.604 4.561 64.792c2.314 16.736 5.455 33.209 9.466 49.339 11.533 46.256 29.849 89.839 53.921 129.595 10.42 17.218 21.994 33.642 34.456 49.339 86.54 108.886 219.998 178.909 369.581 178.909s283.036-70.025 369.581-178.929c12.462-15.689 24.041-32.111 34.466-49.339 24.062-39.761 42.372-83.334 53.911-129.595 4.022-16.13 7.165-32.594 9.476-49.339 2.919-21.184 4.551-42.788 4.551-64.777s-1.632-43.604-4.551-64.792zM379.567 110.742c-24.431 28.772-45.876 65.426-63.499 108.227h-108.179c47.103-48.867 105.82-86.427 171.68-108.227zM167.033 268.297h131.267c-12.349 39.628-21.692 83.175-27.545 129.585h-165.616c13.206-47.010 34.343-90.706 61.894-129.585zM89.363 512.019c0-22.025 1.708-43.66 4.966-64.792h171.639c-1.462 21.153-2.283 42.752-2.283 64.792s0.821 43.64 2.283 64.792h-171.639c-3.268-21.137-4.966-42.762-4.966-64.792zM167.033 755.73c-27.545-38.884-48.688-82.58-61.894-129.595h165.611c5.854 46.425 15.207 89.957 27.545 129.595h-131.257zM207.897 805.075h108.179c17.613 42.798 39.068 79.445 63.499 108.227-65.87-21.804-124.572-59.349-171.68-108.227zM487.337 931.13c-45.235-12.498-86.279-58.723-117.154-126.055h117.154c0 55.891 0 99.674 0 126.055zM487.337 755.73h-136.659c-13.252-39.022-23.477-82.775-29.905-129.595h166.57c-0.010 46.62-0.010 90.234-0.010 129.595zM487.337 512.019c0 22.015 0 43.64 0 64.792h-171.859c-1.616-21.184-2.473-42.829-2.473-64.792 0-21.974 0.852-43.609 2.473-64.792h171.859c0 21.153 0 42.772 0 64.792zM487.337 397.887h-166.57c6.428-46.82 16.659-90.573 29.905-129.585h136.665c0 39.356 0 82.964 0 129.585zM487.337 218.968h-117.154c30.885-67.352 71.919-113.557 117.154-126.065 0 26.386 0 70.174 0 126.065zM856.975 268.297c27.556 38.884 48.679 82.58 61.894 129.585h-165.611c-5.864-46.415-15.207-89.957-27.556-129.585h131.267zM816.121 218.968h-108.179c-17.613-42.798-39.079-79.455-63.499-108.216 65.859 21.789 124.572 59.349 171.68 108.216zM536.671 92.903c45.245 12.508 86.279 58.713 117.154 126.055h-117.154v-126.055zM536.671 268.297h136.659c13.262 39.012 23.487 82.764 29.916 129.585h-166.57v-129.585zM536.671 447.227h171.859c1.606 21.184 2.463 42.819 2.463 64.792s-0.857 43.619-2.463 64.792h-171.859v-129.585zM536.671 626.146h166.57c-6.428 46.82-16.653 90.573-29.916 129.595h-136.659v-129.595zM536.671 931.13v-126.055h117.154c-30.875 67.342-71.913 113.547-117.154 126.055zM644.441 913.296c24.421-28.782 45.876-65.434 63.489-108.227h108.179c-47.103 48.867-105.81 86.419-171.67 108.227zM856.975 755.73h-131.278c12.354-39.628 21.702-83.175 27.566-129.595h165.611c-13.216 47.020-34.343 90.716-61.894 129.595zM929.678 576.806h-171.649c1.472-21.153 2.293-42.742 2.293-64.792 0-22.030-0.821-43.64-2.293-64.792h171.649c3.268 21.127 4.966 42.762 4.966 64.792 0 22.040-1.698 43.667-4.966 64.792z"
  ],
  "mechanical": [
    "M608.954 68.603c3.938 30.515 8.861 60.044 12.797 89.573 0 2.951 0 4.924 0.986 7.875 2.951 9.841 52.168 26.577 61.023 19.688 21.654-15.751 43.307-31.494 63.981-48.231 7.875-6.889 13.778-4.924 20.667 0 47.245 32.48 86.614 72.836 119.101 120.080 4.924 6.889 4.924 11.813 0 18.702-16.73 20.667-32.48 43.307-48.231 63.981-4.924 6.889-6.889 12.797-1.967 20.667 2.951 4.924 5.903 9.841 6.889 14.764 3.938 22.64 17.716 29.529 38.39 30.515s41.342 5.903 61.023 7.875c8.861 0.986 11.813 3.938 13.778 11.813 7.875 41.342 9.841 83.663 5.903 125.004-0.986 15.751-3.938 32.48-6.889 48.231-0.986 3.938-5.903 8.861-9.841 9.841-26.577 4.924-54.134 8.861-80.711 11.813-8.861 0.986-13.778 3.938-15.751 12.797-0.986 4.924-2.951 10.827-5.903 15.751-13.778 18.702-7.875 34.453 6.889 50.196 13.778 15.751 25.591 32.48 37.404 49.217 2.951 3.938 2.951 12.797 0.986 16.73-32.48 48.231-72.836 88.586-121.067 122.053-6.889 4.924-11.813 3.938-18.702-0.986-20.667-16.73-43.307-32.48-63.981-48.231-5.903-4.924-11.813-6.889-18.702-1.967-4.924 2.951-10.827 5.903-16.73 6.889-22.64 3.938-28.543 18.702-29.529 39.369s-4.924 42.323-8.861 62.995c-0.986 3.938-5.903 9.841-10.827 10.827-58.071 11.813-115.164 11.813-173.235 0.986-7.875-0.986-10.827-4.924-11.813-12.797-2.951-26.577-7.875-53.153-10.827-79.725-0.986-8.861-3.938-13.778-12.797-15.751-3.938-0.986-8.861-2.951-12.797-4.924-19.688-13.778-36.418-9.841-54.134 6.889-13.778 13.778-31.494 23.626-47.245 36.418-6.889 5.903-11.813 5.903-18.702 0.986-48.231-33.466-88.586-73.822-122.053-122.053-4.924-6.889-3.938-11.813 0.986-18.702 16.73-20.667 32.48-43.307 48.231-63.981 4.924-5.903 6.889-11.813 1.967-18.702-2.951-3.938-5.903-8.861-5.903-13.778-3.938-26.577-21.654-31.494-45.279-33.466-19.688-0.986-39.369-4.924-58.071-8.861-3.938-0.986-9.841-6.889-10.827-10.827-11.813-58.071-11.813-115.164 0-173.235 0.986-3.938 6.889-9.841 10.827-9.841 27.56-4.924 55.12-7.875 82.679-12.797 4.924-0.986 8.861-5.903 12.797-9.841 0.986-0.986 0.986-3.938 1.967-5.903 19.688-27.56 11.813-51.182-9.841-73.822-10.827-11.813-20.667-25.591-29.529-38.39-2.951-3.938-2.951-11.813-0.986-15.751 32.48-49.217 73.822-89.573 122.053-123.036 6.889-4.924 10.827-3.938 16.73 0.986 20.667 16.73 43.307 32.48 63.981 48.231 6.889 4.924 12.797 6.889 19.688 1.967 4.924-2.951 10.827-5.903 16.73-6.889 22.64-3.938 27.56-18.702 28.543-38.39 0.986-20.667 5.903-41.342 7.875-62.009 0.986-9.841 4.924-12.797 13.778-13.778 62.009-9.841 122.053-9.841 183.076 2.951zM345.167 507.597c-0.986 91.538 73.822 165.36 165.36 166.346 90.552 0 166.346-74.808 166.346-165.36s-74.808-164.374-165.36-165.36c-91.538-0.986-166.346 72.836-166.346 164.374z"
  ],
  "modern": [
    "M41.398 232.424l418.311 135.657v596.899l-415.593-141.462zM562.836 966.939l419.767-143.419v-587.207l-418.386 129.836zM511.59 298.322l384.042-124.94-384.042-116.268-392.869 116.268z"
  ],
  "nearby": [
    "M489.359 1006.954c0 0-306.897-495.42-306.897-677.416s147.542-329.538 329.538-329.538c181.996 0 329.538 147.542 329.538 329.538s-314.501 677.613-314.501 677.613c-10.427 16.849-27.364 16.782-37.677-0.197zM508.869 449.23c67.832 0 122.824-54.992 122.824-122.824s-54.992-122.824-122.824-122.824c-67.832 0-122.824 54.992-122.824 122.824s54.992 122.824 122.824 122.824z"
  ],
  "open": [
    "M477.389 408.537c0-1.752 0-3.164 0-4.532 0-37.096 0-74.191 0-111.275 0-15.504 13.212-27.068 29.536-26.248 7.452 0.532 14.057 3.778 18.91 8.746q32.818 30.662 65.745 61.253 83.399 77.519 166.76 155.038c5.020 4.673 9.188 9.656 10.236 16.468 0.218 1.206 0.344 2.603 0.344 4.022 0 6.35-2.491 12.116-6.547 16.371-0.881 0.985-1.865 1.917-2.841 2.826q-116.907 108.775-233.781 217.542c-7.996 7.456-17.268 10.692-28.26 7.612-10.36-2.904-16.956-9.54-19.456-19.392-0.401-1.879-0.63-4.047-0.63-6.26 0-0.513 0.014-1.023 0.034-1.529q-0.003-54.505-0.003-109.085c0-1.4 0-2.78 0-4.74h-191.874c-18.812 0-30.468-10.868-30.468-28.456q0-75.071 0-150.137c0-17.392 11.604-28.228 30.292-28.228h191.998z",
    "M889.977 959.955h-755.944c-38.655 0-69.991-31.337-69.991-69.991v-243.321c-0.006-0.248-0.010-0.532-0.010-0.822 0-21.457 17.391-38.848 38.848-38.848s38.848 17.391 38.848 38.848c0 0.291-0.004 0.582-0.011 0.868l0.001 235.596h740.576v-740.576h-740.576v235.637c0.006 0.248 0.010 0.532 0.010 0.822 0 21.457-17.391 38.848-38.848 38.848s-38.848-17.391-38.848-38.848c0-0.291 0.004-0.582 0.011-0.868l-0.001-243.272c0-38.655 31.337-69.991 69.991-69.991h755.944c38.655 0 69.991 31.337 69.991 69.991v755.944c0 38.655-31.337 69.991-69.991 69.991z"
  ],
  "science": [
    "M396.87 482.285c0 63.464 51.66 115.13 115.13 115.13 63.496 0 115.13-51.66 115.13-115.13 0-63.496-51.634-115.13-115.13-115.13-63.464 0-115.13 51.634-115.13 115.13z",
    "M512 635.781c-27.936 0-54.134-7.504-76.732-20.602l-153.020 265.054c67.628 39.012 146.106 61.36 229.752 61.36 83.702 0 162.18-22.348 229.808-61.36l-153.076-265.054c-22.568 13.098-48.796 20.602-76.732 20.602z",
    "M435.268 349.365l-154.086-266.88c-137.164 79.602-229.47 228.012-229.696 398.004h307.050c0.646-55.992 31.37-104.842 76.732-131.124z",
    "M665.496 480.489h307.018c-0.194-169.996-92.5-318.402-229.696-398.004l-154.086 266.88c45.394 26.28 76.118 75.132 76.764 131.124z"
  ],
  "unique": [
    "M248.182 128.452l-218.097 239.835h250.704l109.797-239.835h-142.404zM443.42 128.452l-110.173 239.835h357.5l-110.173-239.835h-137.154zM633.415 128.452l109.797 239.835h250.704l-218.097-239.835h-142.404zM32.327 416.254l397.599 397.599-150.272-397.599h-247.327zM330.998 416.254l180.999 479.294 180.999-479.294h-361.998zM744.333 416.254l-150.272 397.599 397.599-397.599h-247.327z"
  ],
}

const checkInSet = (set, term) => ( has(set, term) ? term : [] )

const Icon = props => (
  <div>
    <svg
      height={props.size}
      style={{fill: 'currentColor'}}
      viewBox="0 0 1024 1024"
      width={props.size}
    >
      { map(iconSet[checkInSet(iconSet, props.iconName)], svgPath => (
        <path key={Math.random()} d={svgPath}></path>
      ))}
    </svg>
  </div>
)

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
  size: PropTypes.number
}

Icon.defaultProps = {
  iconName: 'default',
  size: 18
}

export default Icon