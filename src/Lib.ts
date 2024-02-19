const getDefaultDocumentTypes = () => ([
    {
        isActive: true,
        type: 'ID',
        steps: [
            { type: 'front', name: 'Document Front', mode: { uploader: true, video: true } },
            { type: 'pdf', name: 'Document PDF417 Barcode', mode: { uploader: true, video: true } },
            { type: 'face', name: 'Face', mode: { uploader: true, video: true } }
        ]
    },
    // {
    //     isActive: true,
    //     type: 'Passport',
    //     steps: [
    //         { type: 'front', name: 'Document Front', mode: { uploader: true, video: true } },
    //         { type: 'mrz', name: 'Passport Front', mode: { uploader: true, video: true } },
    //         { type: 'face', name: 'Face', mode: { uploader: true, video: true } }
    //     ]
    // },
    {
        isActive: true,
        type: 'PassportCard',
        steps: [
            { type: 'front', name: 'Document Front', mode: { uploader: true, video: true } },
            { type: 'mrz', name: 'Passport Back', mode: { uploader: true, video: true } },
            { type: 'face', name: 'Face', mode: { uploader: true, video: true } }
        ]
    },
    // {
    //     isActive: true,
    //     type: 'GreenCard',
    //     steps: [
    //         { type: 'front', name: 'Document Front', mode: { uploader: true, video: true } },
    //         { type: 'mrz', name: 'Passport Front', mode: { uploader: true, video: true } },
    //         { type: 'face', name: 'Face', mode: { uploader: true, video: true } }
    //     ]
    // },
    {
        isActive: true,
        type: 'InternationalId',
        steps: [
            { type: 'front', name: 'Document Front', mode: { uploader: true, video: true } },
            { type: 'back', name: 'Document Back', mode: { uploader: true, video: true } },
            { type: 'face', name: 'Face', mode: { uploader: true, video: true } }
        ]
    }
])

export const getDefaultWebLibConfiguration = () => ({
    fixFrontOrientAfterUpload: true,
    useCDN: false,
    el: "videoCapturingEl",
    isShowDocumentTypeSelect: false,
    isShowGuidelinesButton: false,
    resizeUploadedImage: 1500,
    autoContinue: true,
    realFaceMode: 'none',
    documentTypes: getDefaultDocumentTypes(),
    chunkPublicPath: 'https://neurons.cdn.idscan.net/2.8.5-next',
    networkUrl: 'https://neurons.cdn.idscan.net/2.8.5-next',
    submit: (data: any) => {
        console.clear();
        alert('Check console for submitted data');
        console.log('submitted data', data);
    },
    onChange(data: any) {
        console.log('change')
        console.log(data)
    },
    licenseKey: process.env.NEXT_PUBLIC_LICENSE_KEY || ''
})
