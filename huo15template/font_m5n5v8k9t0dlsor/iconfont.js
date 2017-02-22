;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-zhuanji" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M588.8 721.92q30.72 0 52.224 22.016t21.504 52.736l0 153.6q0 30.72-21.504 52.224t-52.224 21.504l-154.624 0q-29.696 0-51.712-21.504t-22.016-52.224l0-153.6q0-30.72 22.016-52.736t51.712-22.016l154.624 0zM226.304 721.92q31.744 0 53.248 22.016t21.504 52.736l0 153.6q0 30.72-21.504 52.224t-53.248 21.504l-152.576 0q-30.72 0-52.224-21.504t-21.504-52.224l0-153.6q0-30.72 21.504-52.736t52.224-22.016l152.576 0zM950.272 0q29.696 0 51.2 21.504t21.504 52.224l0 153.6q0 30.72-21.504 52.736t-51.2 22.016l-153.6 0q-31.744 0-53.248-22.016t-21.504-52.736l0-153.6q0-30.72 21.504-52.224t53.248-21.504l153.6 0zM580.608 0q33.792 0 57.856 24.064t24.064 56.832l0 499.712q0 34.816-24.064 58.368t-57.856 23.552l-499.712 0q-33.792 0-57.344-23.552t-23.552-58.368l0-499.712q0-32.768 23.552-56.832t57.344-24.064l499.712 0zM950.272 721.92q29.696 0 51.2 22.016t21.504 52.736l0 153.6q0 30.72-21.504 52.224t-51.2 21.504l-153.6 0q-31.744 0-53.248-21.504t-21.504-52.224l0-153.6q0-30.72 21.504-52.736t53.248-22.016l153.6 0zM950.272 361.472q29.696 0 51.2 21.504t21.504 52.224l0 153.6q0 30.72-21.504 52.224t-51.2 21.504l-153.6 0q-31.744 0-53.248-21.504t-21.504-52.224l0-153.6q0-30.72 21.504-52.224t53.248-21.504l153.6 0z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-appreciate" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M873.6 416h-188.8c12.8-44.8 28.8-115.2 19.2-188.8-6.4-60.8-41.6-105.6-92.8-124.8-38.4-12.8-76.8-6.4-99.2 16-25.6 25.6-38.4 76.8-51.2 128-9.6 35.2-16 70.4-28.8 89.6-32 54.4-102.4 76.8-115.2 80H224c-19.2 0-32 12.8-32 32v448c0 19.2 12.8 32 32 32h547.2C896 928 960 537.6 960 515.2c0-57.6-44.8-99.2-86.4-99.2z m-102.4 444.8h-448H256V480H332.8c22.4-6.4 108.8-38.4 150.4-108.8 16-25.6 25.6-64 35.2-105.6 9.6-38.4 19.2-86.4 35.2-99.2 3.2-3.2 19.2-6.4 38.4 0 16 3.2 41.6 19.2 48 67.2 12.8 102.4-32 201.6-32 201.6-3.2 9.6-3.2 22.4 3.2 32 6.4 9.6 16 16 25.6 16h236.8c6.4 0 25.6 12.8 25.6 32-3.2 67.2-83.2 345.6-128 345.6zM96 416c-19.2 0-32 12.8-32 32v448c0 19.2 12.8 32 32 32s32-12.8 32-32V448c0-19.2-12.8-32-32-32z" fill="#666666" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-edit" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M800 960 224 960c-52.928 0-96-43.072-96-96L128 224c0-52.928 43.072-96 96-96l448 0c17.696 0 32 14.336 32 32s-14.304 32-32 32L224 192C206.368 192 192 206.368 192 224l0 640c0 17.664 14.368 32 32 32l576 0c17.664 0 32-14.336 32-32L832 352c0-17.664 14.304-32 32-32s32 14.336 32 32l0 512C896 916.928 852.928 960 800 960z"  ></path>' +
    '' +
    '<path d="M612 448c-8.192 0-16.384-3.136-22.624-9.376-12.512-12.512-12.512-32.736 0-45.248l318.016-318.016c12.512-12.512 32.736-12.512 45.248 0s12.512 32.736 0 45.248l-318.016 318.016C628.384 444.896 620.192 448 612 448z"  ></path>' +
    '' +
    '<path d="M480 448 288 448c-17.664 0-32-14.336-32-32s14.336-32 32-32l192 0c17.664 0 32 14.336 32 32S497.664 448 480 448z"  ></path>' +
    '' +
    '<path d="M672 640 288 640c-17.664 0-32-14.304-32-32s14.336-32 32-32l384 0c17.696 0 32 14.304 32 32S689.696 640 672 640z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-discoverfill" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M928.768 87.232c-0.032-7.456-1.216-13.696-2.848-19.328-31.328-8.288-72.128 1.248-106.624 17.984-7.072 3.424-23.84 13.632-48.672 28.736-10.272 6.272-19.328 11.776-23.328 14.048-0.384 0.224-0.608 0.64-0.96 0.864C678.56 88.256 599.296 64 514.272 64c-247.04 0-448 200.96-448 448 0 82.816 22.976 160.192 62.304 226.784-46.464 71.616-69.504 123.328-63.488 158.368 1.248 7.168 13.6 8.32 20.384 8.32 138.432 0 454.848-303.776 494.208-342.496C753.504 392 928.864 182.976 928.768 87.232zM306.272 610.688c-44.096 0-80-35.872-80-80 0-44.096 35.904-80 80-80s80 35.904 80 80C386.272 574.816 350.368 610.688 306.272 610.688zM447.072 386.688c-52.928 0-96-43.072-96-96s43.072-96 96-96 96 43.072 96 96S500 386.688 447.072 386.688z"  ></path>' +
    '' +
    '<path d="M895.904 278.56c-67.104 99.648-172.608 219.296-277.856 322.784-28.64 28.192-202.272 196.448-348.096 286.112 0.128-0.096 0.224-0.16 0.352-0.224C340.576 933.088 424.288 960 514.272 960c247.04 0 448-200.96 448-448C962.24 426.4 937.728 346.656 895.904 278.56zM640.032 800c-35.296 0-64-28.704-64-64s28.704-64 64-64 64 28.704 64 64S675.328 800 640.032 800z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-appreciatefill" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M873.6 416h-188.8c12.8-44.8 28.8-115.2 19.2-188.8-6.4-60.8-41.6-105.6-92.8-124.8-38.4-12.8-76.8-6.4-99.2 16-25.6 25.6-38.4 76.8-51.2 128-9.6 35.2-16 70.4-28.8 89.6-32 54.4-102.4 76.8-115.2 80H224c-19.2 0-32 12.8-32 32v448c0 19.2 12.8 32 32 32h547.2C896 928 960 537.6 960 515.2c0-57.6-44.8-99.2-86.4-99.2zM96 416c-19.2 0-32 12.8-32 32v448c0 19.2 12.8 32 32 32s32-12.8 32-32V448c0-19.2-12.8-32-32-32z" fill="#666666" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M672 832 224 832c-52.928 0-96-43.072-96-96L128 160c0-52.928 43.072-96 96-96l448 0c52.928 0 96 43.072 96 96l0 576C768 788.928 724.928 832 672 832zM224 128C206.368 128 192 142.368 192 160l0 576c0 17.664 14.368 32 32 32l448 0c17.664 0 32-14.336 32-32L704 160c0-17.632-14.336-32-32-32L224 128z"  ></path>' +
    '' +
    '<path d="M800 960 320 960c-17.664 0-32-14.304-32-32s14.336-32 32-32l480 0c17.664 0 32-14.336 32-32L832 256c0-17.664 14.304-32 32-32s32 14.336 32 32l0 608C896 916.928 852.928 960 800 960z"  ></path>' +
    '' +
    '<path d="M544 320 288 320c-17.664 0-32-14.336-32-32s14.336-32 32-32l256 0c17.696 0 32 14.336 32 32S561.696 320 544 320z"  ></path>' +
    '' +
    '<path d="M608 480 288.032 480c-17.664 0-32-14.336-32-32s14.336-32 32-32L608 416c17.696 0 32 14.336 32 32S625.696 480 608 480z"  ></path>' +
    '' +
    '<path d="M608 640 288 640c-17.664 0-32-14.304-32-32s14.336-32 32-32l320 0c17.696 0 32 14.304 32 32S625.696 640 608 640z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-baby" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M802.752 319.392c-5.312-5.312-11.168-9.824-17.344-13.824C794.24 291.072 799.616 274.208 799.616 256L799.616 224c0-52.928-43.072-96-96-96l-110.368 0.032c-10.176-1.728-38.688-26.88-58.656-51.776-6.272-7.84-15.136-11.52-25.92-12-10.016 0.288-19.36 5.28-25.184 13.44C466.88 101.152 442.464 125.664 435.104 128L320 128C267.072 128 224 171.072 224 224c0 17.664 14.336 32 32 32s32-14.336 32-32c0-17.632 14.368-32 32-32l115.104 0c27.36 0 55.296-23.552 75.84-46.24C533.44 168.288 563.904 192 592.512 192l111.136 0c17.664 0 32 14.368 32 32l0 32c0 17.632-14.336 32-32 32L320 288C318.08 288 316.416 288.768 314.592 289.088L291.36 289.088c-56.064 0-100 45.344-100.064 103.296L191.36 858.976c0 27.584 10.688 53.568 30.176 73.056 19.488 19.52 45.408 30.272 73.12 30.272l434.88 0c0.032 0 0.16 0 0.192 0 27.584 0 53.504-10.752 72.992-30.272 19.488-19.488 30.208-45.472 30.176-73.024L832.896 392.48C832.96 364.864 822.24 338.912 802.752 319.392zM768.928 859.04c0 10.496-4.064 20.384-11.456 27.776s-17.248 11.488-27.712 11.488L294.592 898.304c-10.496 0-20.32-4.096-27.744-11.488s-11.488-17.28-11.456-27.808L255.328 392.416c0-22.784 15.2-39.328 36.128-39.328l438.304 0.032c10.464 0 20.32 4.064 27.712 11.488 7.392 7.424 11.456 17.312 11.456 27.84L768.928 859.04z"  ></path>' +
    '' +
    '<path d="M352 544l96 0c17.664 0 32-14.336 32-32s-14.336-32-32-32l-96 0c-17.664 0-32 14.336-32 32S334.336 544 352 544z"  ></path>' +
    '' +
    '<path d="M512 608l-160 0c-17.664 0-32 14.304-32 32s14.336 32 32 32l160 0c17.664 0 32-14.304 32-32S529.664 608 512 608z"  ></path>' +
    '' +
    '<path d="M448 736l-96 0c-17.664 0-32 14.304-32 32s14.336 32 32 32l96 0c17.664 0 32-14.304 32-32S465.664 736 448 736z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-cart" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M235.097303 699.133018C247.384597 735.582848 286.382106 763.623932 324.772759 763.623932L861.658537 763.623932 880.429732 763.623932 885.649214 745.458146 1009.08775 315.845043C1021.388907 273.032339 993.187631 235.213675 949.051586 235.213675L424.585365 235.213675C410.791718 235.213675 399.609756 246.479262 399.609756 260.376068 399.609756 274.272875 410.791718 285.538462 424.585365 285.538462L949.051586 285.538462C959.924 285.538462 964.161052 291.220461 961.106394 301.851829L837.667859 731.464932 861.658537 713.299145 324.772759 713.299145C307.742153 713.299145 287.789837 698.952471 282.395194 682.949451L73.600164 63.566336C69.16437 50.407706 54.980454 43.363344 41.919502 47.832313 28.858551 52.301281 21.86648 66.591273 26.302275 79.749903L235.097303 699.133018Z"  ></path>' +
    '' +
    '<path d="M399.609756 902.017094C399.609756 846.429871 354.881911 801.367522 299.707317 801.367522 244.532723 801.367522 199.804878 846.429871 199.804878 902.017094 199.804878 957.604318 244.532723 1002.666667 299.707317 1002.666667 354.881911 1002.666667 399.609756 957.604318 399.609756 902.017094ZM249.756098 902.017094C249.756098 874.223482 272.120021 851.692307 299.707317 851.692307 327.294613 851.692307 349.658537 874.223482 349.658537 902.017094 349.658537 929.810705 327.294613 952.341879 299.707317 952.341879 272.120021 952.341879 249.756098 929.810705 249.756098 902.017094Z"  ></path>' +
    '' +
    '<path d="M924.097562 902.017094C924.097562 846.429871 879.369715 801.367522 824.195121 801.367522 769.020529 801.367522 724.292683 846.429871 724.292683 902.017094 724.292683 957.604318 769.020529 1002.666667 824.195121 1002.666667 879.369715 1002.666667 924.097562 957.604318 924.097562 902.017094ZM774.243902 902.017094C774.243902 874.223482 796.607825 851.692307 824.195121 851.692307 851.782419 851.692307 874.146342 874.223482 874.146342 902.017094 874.146342 929.810705 851.782419 952.341879 824.195121 952.341879 796.607825 952.341879 774.243902 929.810705 774.243902 902.017094Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-form" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M835.55027 48.761905C876.805122 48.761905 910.222223 81.441158 910.222223 121.753604L910.222223 834.966428 917.178886 818.05911 755.401109 982.711731 773.333333 975.238095 188.412988 975.238095C147.247907 975.238095 113.777778 942.409011 113.777778 902.094615L113.777778 24.380952 88.888889 48.761905 835.55027 48.761905ZM64 0 64 24.380952 64 902.094615C64 969.325498 119.742117 1024 188.412988 1024L773.333333 1024 783.922411 1024 791.265557 1016.526364 953.043334 851.873745 960 844.793457 960 834.966428 960 121.753604C960 54.49204 904.277615 0 835.55027 0L88.888889 0 64 0Z"  ></path>' +
    '' +
    '<path d="M736.080945 707.047618C694.76038 707.047618 661.333333 739.619379 661.333333 780.144186L661.333333 926.47619C661.333333 939.941419 672.476469 950.857143 686.222223 950.857143 699.967977 950.857143 711.11111 939.941419 711.11111 926.47619L711.11111 780.144186C711.11111 766.607861 722.192996 755.809523 736.080945 755.809523L848 755.809523C861.745754 755.809523 872.88889 744.893801 872.88889 731.428572 872.88889 717.963343 861.745754 707.047618 848 707.047618L736.080945 707.047618Z"  ></path>' +
    '' +
    '<path d="M775.164361 219.428572C788.910114 219.428572 800.05325 208.512847 800.05325 195.047619 800.05325 181.582391 788.910114 170.666667 775.164361 170.666667L263.111111 170.666667C249.365357 170.666667 238.222222 181.582391 238.222222 195.047619 238.222222 208.512847 249.365357 219.428572 263.111111 219.428572L775.164361 219.428572Z"  ></path>' +
    '' +
    '<path d="M775.164361 365.714285C788.910114 365.714285 800.05325 354.798562 800.05325 341.333333 800.05325 327.868105 788.910114 316.952382 775.164361 316.952382L263.111111 316.952382C249.365357 316.952382 238.222222 327.868105 238.222222 341.333333 238.222222 354.798562 249.365357 365.714285 263.111111 365.714285L775.164361 365.714285Z"  ></path>' +
    '' +
    '<path d="M775.164361 536.380951C788.910114 536.380951 800.05325 525.465229 800.05325 512 800.05325 498.534771 788.910114 487.619049 775.164361 487.619049L263.111111 487.619049C249.365357 487.619049 238.222222 498.534771 238.222222 512 238.222222 525.465229 249.365357 536.380951 263.111111 536.380951L775.164361 536.380951Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-selected" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M464.247574 677.487844C474.214622 686.649009 489.665824 686.201589 499.086059 676.479029L798.905035 367.037898C808.503379 357.131511 808.253662 341.319801 798.347275 331.721456 788.44089 322.12311 772.62918 322.372828 763.030833 332.279215L463.211858 641.720346 498.050342 640.711531 316.608839 473.940462C306.453341 464.606085 290.653676 465.271736 281.319299 475.427234 271.984922 485.582733 272.650573 501.382398 282.806071 510.716775L464.247574 677.487844Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-survey" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M722.355804 46.545455C761.006291 46.545455 792.380951 77.833977 792.380951 116.372656L792.380951 458.499072 799.081094 442.186782 401.874746 844.77862 418.539682 837.818182 138.070006 837.818182C99.387643 837.818182 68.063492 806.671445 68.063492 768.228572L68.063492 23.272727 44.698413 46.545455 722.355804 46.545455ZM21.333333 0 21.333333 23.272727 21.333333 768.228572C21.333333 832.395723 73.59726 884.363637 138.070006 884.363637L418.539682 884.363637 428.337293 884.363637 435.204619 877.403198 832.410967 474.81136 839.11111 468.020375 839.11111 458.499072 839.11111 116.372656C839.11111 52.140243 786.827324 0 722.355804 0L44.698413 0 21.333333 0Z"  ></path>' +
    '' +
    '<path d="M775.859347 588.634605 759.337741 605.09091 775.859347 621.547213 869.319663 714.638121 885.841269 731.094426 902.362876 714.638121 972.458114 644.81994 988.979721 628.363637 972.458114 611.907332 878.997796 518.816425 862.47619 502.360122 845.954583 518.816425 775.859347 588.634605ZM845.954583 551.72903 939.414901 644.81994 939.414901 611.907332 869.319663 681.725515 902.362876 681.725515 808.902558 588.634605 808.902558 621.547213 878.997796 551.72903 845.954583 551.72903Z"  ></path>' +
    '' +
    '<path d="M518.843473 844.634605 513.841133 849.617173 512.453734 856.526752 489.088655 972.890387 482.215251 1007.121568 516.58227 1000.275332 633.407665 977.002605 640.344663 975.620689 645.347004 970.638121 902.362876 714.638121 918.884482 698.181818 902.362876 681.725515 808.902558 588.634605 792.380951 572.178302 775.859347 588.634605 518.843473 844.634605ZM775.859347 621.547213 869.319663 714.638121 869.319663 681.725515 612.303791 937.725515 624.243127 931.361033 507.41773 954.633758 534.911345 982.018703 558.276425 865.655066 551.886686 877.547213 808.902558 621.547213 775.859347 621.547213Z"  ></path>' +
    '' +
    '<path d="M426.576706 597.730927C444.201086 597.730927 458.488469 611.946185 458.488469 629.499247L458.488469 637.913884C458.488469 655.459042 444.323959 669.682203 426.576706 669.682203L426.576706 669.682203C408.952326 669.682203 394.664943 655.466946 394.664943 637.913884L394.664943 629.499247C394.664943 611.954089 408.829453 597.730927 426.576706 597.730927L426.576706 597.730927ZM278.349205 343.564873C278.349205 343.564873 280.851125 365.514432 305.477133 365.514432 330.103138 365.514432 331.559155 343.564873 331.559155 343.564873 329.927383 272.491063 362.988497 238.74218 430.67155 242.094718 475.722639 247.160777 499.06407 272.491063 500.624896 318.160083 497.503245 338.498816 480.405116 364.797615 449.969026 396.907479 409.671358 437.510443 389.522524 473.866857 389.522524 505.976721L389.522524 538.906097C389.522524 538.906097 392.614705 558.545468 414.885933 558.545468 437.157161 558.545468 440.249342 538.906097 440.249342 538.906097L440.249342 516.034336C440.249342 489.214031 459.546816 456.955164 498.21271 419.630238 538.652271 382.528817 558.730159 348.630931 558.730159 318.160083 555.395669 233.676122 511.195938 189.646123 425.776235 186.219083 327.515198 184.580064 278.349205 237.028661 278.349205 343.564873Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-account" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M793.6 316.991454C793.6 153.703982 661.792629 21.333333 499.2 21.333333 336.607371 21.333333 204.8 153.703982 204.8 316.991454 204.8 480.278923 336.607371 612.649572 499.2 612.649572 661.792629 612.649572 793.6 480.278923 793.6 316.991454ZM256 316.991454C256 182.101803 364.88435 72.752137 499.2 72.752137 633.51565 72.752137 742.4 182.101803 742.4 316.991454 742.4 451.881103 633.51565 561.230769 499.2 561.230769 364.88435 561.230769 256 451.881103 256 316.991454Z"  ></path>' +
    '' +
    '<path d="M0 998.290598 0 1024 25.6 1024 486.4 1024 998.4 1024 1024 1024 1024 998.290598C1024 767.462671 787.090923 561.230769 512 561.230769 495.448045 561.230769 478.989086 561.900892 462.660538 563.232578 448.568439 564.381869 485.255599 576.786276 486.4 590.938596 501.350035 589.719337 496.831226 612.649572 512 612.649572 760.310844 612.649572 972.8 797.623669 972.8 998.290598L998.4 972.581197 486.4 972.581197 25.6 972.581197 51.2 998.290598C51.2 861.757427 137.013906 736.945338 275.263548 667.439085 287.906261 661.082846 293.024384 645.637353 286.695191 632.94061 280.366001 620.243866 264.986234 615.103872 252.34352 621.460111 97.581613 699.268053 0 841.195691 0 998.290598Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-repair" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M816.672 937.344c-8.192 0-16.384-3.136-22.624-9.376l-213.952-213.952c-12.512-12.512-12.512-32.736 0-45.248s32.736-12.512 45.248 0l191.328 191.328 33.408-33.376-190.848-190.848c-12.512-12.512-12.512-32.736 0-45.248s32.736-12.512 45.248 0l213.472 213.472c6.016 6.016 9.376 14.112 9.376 22.624s-3.36 16.64-9.376 22.624l-78.656 78.624C833.024 934.208 824.832 937.344 816.672 937.344z"  ></path>' +
    '' +
    '<path d="M590.752 128c0-0.032 0-0.064 0-0.064 1.472-4.16 2.048-8.352 1.792-12.512 0 0 0 0 0 0 0 0-0.032-0.064-0.032-0.096-0.256-4.128-1.312-8.096-3.104-11.776-0.352-0.704-0.896-1.248-1.28-1.92-1.632-2.848-3.456-5.472-5.952-7.712-0.928-0.864-2.08-1.376-3.136-2.112-1.92-1.376-3.616-3.008-5.888-3.968-0.608-0.256-1.248-0.384-1.888-0.608-0.032 0-0.064-0.032-0.096-0.032-114.144-46.624-243.808-20.704-331.072 66.592C239.328 154.528 239.04 155.584 238.336 156.416 237.472 157.12 236.448 157.408 235.648 158.208L73.664 319.552c-6.016 6.016-9.408 14.144-9.408 22.656s3.36 16.64 9.376 22.656l98.304 98.304c6.016 6.016 14.144 9.376 22.624 9.376s16.64-3.36 22.624-9.376l56.032-56.032 68.192 68.224c6.24 6.24 14.432 9.376 22.624 9.376s16.384-3.136 22.624-9.376c12.512-12.48 12.512-32.736 0-45.248l-90.816-90.848c-12.512-12.512-32.736-12.512-45.248 0L194.56 395.296l-52.992-53.024 139.264-138.72c0.832-0.8 1.12-1.888 1.824-2.752 0.864-0.704 1.92-0.992 2.72-1.824 40-39.936 91.296-63.072 144.864-68.768-2.208 1.664-4.384 3.392-6.56 5.12-8.96 6.784-17.632 14.016-25.664 22.048-0.544 0.544-0.736 1.248-1.216 1.824-19.232 19.36-35.936 41.024-49.568 64.512-2.464 4.224-4.768 8.448-7.008 12.736l0.416 0.224c-12.288 24.64-12.288 53.664 0.48 78.144 1.536 2.944 3.52 5.504 5.76 7.744 0.768 0.96 1.088 2.112 1.984 2.976l70.432 70.464c6.24 6.24 14.432 9.376 22.624 9.376s16.384-3.136 22.624-9.376c12.512-12.48 12.512-32.736 0-45.248l-67.072-67.072c-2.624-6.112-2.688-13.024 0.448-18.976 0.16-0.288 0.128-0.608 0.256-0.896 1.44-2.656 2.848-5.344 4.384-7.968 11.008-18.944 24.48-36.448 40.064-52.032 4.096-4.096 8.608-7.648 12.96-11.456 30.144-25.28 67.232-40.864 106.816-43.136 0.576-0.032 1.056-0.352 1.632-0.416 3.616-0.384 7.104-1.184 10.368-2.72 0.512-0.256 0.896-0.64 1.376-0.896 3.168-1.696 6.048-3.776 8.512-6.496 0.256-0.288 0.384-0.64 0.608-0.928 2.08-2.464 4.128-4.928 5.44-8.064C590.624 129.12 590.528 128.544 590.752 128z"  ></path>' +
    '' +
    '<path d="M289.536 960.032c-28.384 0-56.928-6.368-82.624-18.432-9.408-4.448-16.096-13.184-17.888-23.456-1.792-10.24 1.504-20.736 8.896-28.128l88.064-88.096-33.056-33.024-87.52 87.488c-7.424 7.424-18.048 10.848-28.384 8.832-10.336-1.888-19.104-8.704-23.392-18.304-32.736-72.64-17.088-159.072 38.944-215.104 50.048-50.08 126.048-68.384 193.952-47.04l238.688-238.72c-21.28-67.712-3.648-143.264 47.04-193.952 36.128-36.16 84.256-56.064 135.456-56.064 27.264 0 54.816 5.92 79.648 17.12 9.568 4.32 16.448 13.056 18.304 23.392 1.92 10.336-1.408 20.96-8.832 28.384l-88.8 88.8 33.024 33.056 89.376-89.344c7.392-7.392 17.92-10.72 28.128-8.896 10.272 1.792 19.04 8.48 23.456 17.888 34.496 73.376 19.424 160.96-37.536 217.92-36.096 36.096-84.128 56-135.296 56-20.704 0-41.536-3.392-61.216-9.952l-237.12 237.12c22.688 68.48 5.44 145.024-46.048 196.544C388.736 940.16 340.672 960.032 289.536 960.032zM282.592 895.84c36.352 2.112 71.36-11.392 96.992-37.024 37.952-37.952 47.936-96.384 24.864-145.408-5.76-12.224-3.232-26.72 6.336-36.256l266.816-266.848c9.536-9.536 24.032-12.032 36.256-6.336 47.936 22.56 108 12.544 145.408-24.864 25.952-25.92 38.784-61.408 36.992-96.96l-72.576 72.544c-6.016 6.016-14.112 9.376-22.624 9.376l0 0c-8.512 0-16.64-3.36-22.624-9.376L700.16 276.416c-12.512-12.512-12.512-32.736 0-45.248l71.04-71.04c-35.072-0.896-68.8 12.384-93.696 37.28-37.92 37.92-48.064 94.272-25.856 143.552 5.44 12.128 2.848 26.368-6.56 35.776l-267.936 267.968c-9.376 9.376-23.648 11.936-35.776 6.56-47.68-21.504-106.624-11.104-143.584 25.856-25.504 25.536-38.464 59.392-37.408 93.856l69.92-69.92c12.512-12.512 32.736-12.512 45.248 0l78.304 78.272c6.016 6.016 9.376 14.112 9.376 22.624 0 8.48-3.36 16.64-9.376 22.624L282.592 895.84z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-repairfill" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M918.24 804.8l-213.472-213.472c-12.448-12.416-32.576-12.512-45.12-0.16l-79.136 78.144c-6.048 6.016-9.472 14.144-9.504 22.688s3.328 16.672 9.376 22.72l213.952 213.952c6.24 6.24 14.432 9.376 22.624 9.376s16.384-3.136 22.624-9.376l78.656-78.624c6.016-6.016 9.376-14.112 9.376-22.624S924.256 810.816 918.24 804.8z"  ></path>' +
    '' +
    '<path d="M573.92 88.704c-0.48-0.224-0.928-0.416-1.408-0.608-114.336-47.136-244.544-21.184-332 66.272l-166.496 165.888c-6.016 6.016-9.408 14.144-9.408 22.656s3.36 16.64 9.376 22.656l98.304 98.304c12.512 12.512 32.736 12.512 45.248 0l56.032-56 68.224 68.192c6.016 6.016 14.144 9.376 22.624 9.376 0.032 0 0.096 0 0.16 0 8.544-0.032 16.704-3.488 22.656-9.568l77.92-79.36c12.32-12.544 12.224-32.64-0.192-45.056l-67.648-67.68c-2.048-5.344-1.92-11.616 1.056-18.4l4.64-8.832c8.704-15.008 33.472-44.704 40.672-53.216 31.296-31.264 72.608-50.112 116.64-53.28 12.928 0.896 24.896-7.008 30.208-19.392C597.376 114.56 589.92 95.84 573.92 88.704z"  ></path>' +
    '' +
    '<path d="M942.304 207.2c-4.448-9.44-13.184-16.096-23.424-17.92-10.464-1.824-20.768 1.536-28.128 8.896l-89.376 89.344-33.024-33.056 88.8-88.8c7.424-7.424 10.752-18.048 8.832-28.384-1.888-10.336-8.736-19.104-18.304-23.392-24.832-11.2-52.384-17.12-79.648-17.12-51.232 0-99.328 19.904-135.456 56.064-50.688 50.656-68.32 126.24-47.04 193.952l-238.688 238.688c-67.936-21.376-143.872-3.072-193.952 47.04-56.032 56.032-71.68 142.464-38.944 215.136 4.32 9.6 13.088 16.448 23.424 18.304 10.272 2.016 20.96-1.408 28.384-8.832l87.52-87.52 33.056 33.056-88.064 88.064c-7.36 7.36-10.688 17.888-8.896 28.128 1.792 10.272 8.48 19.04 17.92 23.456 25.664 12.064 54.24 18.432 82.624 18.432 51.168 0 99.2-19.872 135.296-55.968 51.52-51.488 68.768-128.064 46.048-196.544l237.12-237.12c19.68 6.528 40.512 9.952 61.216 9.952 51.168 0 99.2-19.904 135.296-56C961.792 368.096 976.864 280.544 942.304 207.2z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-ziyouanpai" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M525.341866 913.349901l-363.058806 0c-11.033287 0-20.008706-8.976442-20.008706-20.008706L142.274354 124.288724c0-11.033287 8.975419-20.008706 20.008706-20.008706l631.496581 0c11.032264 0 20.008706 8.975419 20.008706 20.008706l0 363.193883c0 11.050684 8.959046 20.008706 20.008706 20.008706 11.04966 0 20.008706-8.958022 20.008706-20.008706L853.80576 124.288724c0-33.098839-26.928303-60.027142-60.027142-60.027142L162.28306 64.261583c-33.098839 0-60.027142 26.928303-60.027142 60.027142l0 769.05247c0 33.098839 26.928303 60.027142 60.027142 60.027142l363.058806 0c11.050684 0 20.008706-8.959046 20.008706-20.008706C545.350572 922.308947 536.39255 913.349901 525.341866 913.349901z"  ></path>' +
    '' +
    '<path d="M715.324802 204.536396c0-11.050684-8.959046-20.008706-20.008706-20.008706L246.960625 184.52769c-11.050684 0-20.008706 8.958022-20.008706 20.008706 0 11.050684 8.958022 20.008706 20.008706 20.008706l448.355471 0C706.365756 224.546126 715.324802 215.588103 715.324802 204.536396z"  ></path>' +
    '' +
    '<path d="M467.63456 328.272535 246.960625 328.272535c-11.050684 0-20.008706 8.958022-20.008706 20.008706 0 11.050684 8.958022 20.008706 20.008706 20.008706L467.63456 368.289947c11.050684 0 20.008706-8.958022 20.008706-20.008706C487.643266 337.230558 478.685243 328.272535 467.63456 328.272535z"  ></path>' +
    '' +
    '<path d="M467.63456 472.01738 246.960625 472.01738c-11.050684 0-20.008706 8.958022-20.008706 20.008706s8.958022 20.008706 20.008706 20.008706L467.63456 512.034792c11.050684 0 20.008706-8.958022 20.008706-20.008706S478.685243 472.01738 467.63456 472.01738z"  ></path>' +
    '' +
    '<path d="M884.388289 543.66621l-131.218554 0L753.169735 356.166839c0-47.832402-38.915311-86.748736-86.74976-86.748736l-0.73678 0c-48.091298 0-87.216387 39.125089-87.216387 87.216387l0 201.644533c-13.299911 7.020904-25.061792 16.138562-34.95614 26.859741-33.55114-21.274536-78.616522-17.316387-107.854427 11.921517-33.843806 33.846876-33.843806 88.918145 0.001023 122.763998l93.650937 93.650937c1.49505 1.49505 3.170203 2.698458 4.953825 3.621481 12.707416 12.716626 28.873608 21.491477 45.409213 28.609595l-0.846274 94.909603c-0.047072 5.336542 2.039449 10.471492 5.79703 14.263865 3.75758 3.790326 8.873088 5.922896 14.211676 5.922896l268.086781 0c10.930957 0 19.838837-8.771781 20.006659-19.701714l1.418302-92.293009c21.959128-1.295506 41.312918-5.994528 52.861952-22.225187 11.745509-16.505929 11.745509-38.811957 11.745509-75.768661L952.952874 612.230796C952.952874 574.423725 922.194336 543.66621 884.388289 543.66621zM463.954751 625.356744c8.78406-8.78406 20.533662-13.623275 33.084513-13.623275 8.683776 0 16.983813 2.320858 24.184819 6.658653-7.985882 17.134239-12.344143 36.193317-12.344143 56.125275l0 61.934584-44.925189-44.925189C445.711248 673.284313 445.711248 643.60127 463.954751 625.356744zM912.934438 750.815107c0 24.938995 0 46.477544-4.331655 52.568263-2.77316 3.89675-16.220427 5.871731-39.969317 5.871731-10.930957 0-19.838837 8.771781-20.006659 19.701714l-1.411139 91.828428L619.022479 920.785244l0.785899-88.305185c0.072655-8.316409-5.006014-15.812127-12.755512-18.826787-44.567032-17.331737-58.154491-32.014134-58.154491-62.838164l0-76.29771c0-37.997406 22.662139-71.435982 57.734936-85.191264 8.454556-3.315512 13.617136-11.911284 12.570293-20.933775-0.11768-1.00284-0.264013-2.009773-0.412392-3.021823-0.124843-0.837064-0.294712-1.984191-0.304945-2.361791L618.486266 356.635513c0-26.025747 21.173229-47.198975 47.198975-47.198975l0.73678 0c25.76685 0 46.731324 20.963451 46.731324 46.731324l0 207.508078c0 11.050684 8.959046 20.008706 20.008706 20.008706l151.22726 0c15.739473 0 28.54615 12.806677 28.54615 28.547173L912.935462 750.815107z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zans" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M851.721208 408.031196l-180.453354 0.515771c10.078003-18.93719 59.671847-118.827922 46.530942-225.734779-5.499511-44.905853-33.750257-79.593504-79.562803-97.672099-17.906671-7.031474-105.656317-19.515385-132.203176 5.905783-18.437792 18.844064-17.015328 44.327658-15.37489 73.859644 0.797194 14.234872 1.702863 30.375232 0.952744 47.187936-4.468993 48.484527-10.718623 74.328341-23.077685 95.343965-37.390332 63.655769-100.609128 98.390494-114.124582 100.640852L91.814413 408.078271c-17.672322 0-32.00032 14.327997-32.00032 32.00032l0 417.265954c0 17.672322 14.327997 32.00032 32.00032 32.00032l269.327668-0.171924c0.266072 0.218998 0.531121 0.436973 0.812544 0.672344 23.890229 19.812158 87.359747 72.42183 192.437868 72.42183l210.921711 0c58.640305 0 105.96844-32.15587 123.515913-83.937647 0.202624-0.608896 0.390922-1.218816 0.562845-1.844086 2.17156-7.999568 8.233917-25.984014 15.23469-46.812364 28.124873-83.531375 75.18796-223.344221 75.18796-299.359052C979.814589 451.453184 934.33054 408.031196 851.721208 408.031196zM123.814733 472.077887l101.343897 0 0 353.265315-101.343897 0L123.814733 472.077887zM843.970315 809.26629c-7.640371 22.718487-13.250404 39.359268-16.030861 49.312421-12.609784 35.796968-47.937032 39.687765-62.62525 39.687765L554.392493 898.266476c-82.000436 0-130.765362-40.437884-151.593712-57.702911-10.374776-8.594138-18.577992-15.39024-31.749598-15.39024l-81.890937 0L289.158246 472.077887l65.250156 0c36.484663 0 122.624571-52.734521 169.296735-132.218526 20.156006-34.249655 27.04728-72.030909 31.734247-123.343989 0.999818-21.516045-0.031724-40.171812-0.874969-55.172154-0.390922-7.109249-0.844268-15.297115-0.827894-21.437247 18.328293-1.109317 51.421556 1.124667 61.047236 4.781116 24.281151 9.578605 36.82851 24.171652 39.484117 45.922045 11.030747 89.703231-34.296729 178.093497-39.500491 187.891101-0.296773 0.531121-0.76547 1.468515-1.015168 2.03136-9.265459 20.108931-7.62502 43.250064 4.374844 61.952906 11.906739 18.500217 32.327793 29.547337 54.624658 29.547337L851.721208 472.031836c53.60949 0 64.093765 21.374822 64.093765 58.281107C915.814973 595.843499 869.080383 734.671877 843.970315 809.26629z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)