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
    {
        isActive: true,
        type: 'Passport',
        steps: [
            { type: 'front', name: 'Document Front', mode: { uploader: true, video: true } },
            { type: 'mrz', name: 'Passport Front', mode: { uploader: true, video: true } },
            { type: 'face', name: 'Face', mode: { uploader: true, video: true } }
        ]
    },
    {
        isActive: true,
        type: 'PassportCard',
        steps: [
            { type: 'front', name: 'Document Front', mode: { uploader: true, video: true } },
            { type: 'mrz', name: 'Passport Front', mode: { uploader: true, video: true } },
            { type: 'face', name: 'Face', mode: { uploader: true, video: true } }
        ]
    },
    {
        isActive: true,
        type: 'GreenCard',
        steps: [
            { type: 'front', name: 'Document Front', mode: { uploader: true, video: true } },
            { type: 'mrz', name: 'Passport Front', mode: { uploader: true, video: true } },
            { type: 'face', name: 'Face', mode: { uploader: true, video: true } }
        ]
    },
    {
        isActive: true,
        type: 'InternationalId',
        steps: [
            { type: 'front', name: 'Document Front', mode: { uploader: true, video: true } },
            { type: 'mrz', name: 'Passport Front', mode: { uploader: true, video: true } },
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
    submit: (data: any) => {
        alert('Check console for submitted data')
        console.log('submitted data', data);
    },
    licenseKey: process.env.NEXT_PUBLIC_LICENSE_KEY || ''
})
