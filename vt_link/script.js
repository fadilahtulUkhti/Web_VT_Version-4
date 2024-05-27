(function(){
    var script = {
 "downloadEnabled": false,
 "start": "this.playAudioList([this.audio_B959D9E2_B7A4_F67B_41DC_CCB9BEF6270B]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_8BF986F5_9AA3_26B9_41C4_6F5CCE2192D0], 'cardboardAvailable'); this.syncPlaylists([this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist,this.mainPlayList])",
 "children": [
  "this.MainViewer",
  "this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB",
  "this.IconButton_88E1A2ED_996C_7571_41E1_36CCB25D712C",
  "this.Image_9EB985B4_8FB6_8213_41D2_41F5E1DBE3D0",
  "this.Image_89FA09E6_9967_9773_41D5_535A23169252",
  "this.IconButton_969E2207_992B_94B1_41DA_55CB6A844B14",
  "this.Image_890D1D6E_9924_8F72_41E2_C91396623840",
  "this.Image_89B2B032_9964_F4D4_41C4_A0D4F1AB454D",
  "this.Container_8A9CD876_9A67_29BB_41B0_37026D402AB5",
  "this.Image_88781C60_9AE1_69D7_41E1_3FD5CB6213AD",
  "this.Image_88290F5C_9AE1_67EF_41E0_0ECFD3908CE1",
  "this.IconButton_8819AC98_9AE1_2977_41C3_ED5782720D3C",
  "this.IconButton_8CCA669B_9C9A_C474_41E2_EA8AC3BBBC78",
  "this.Image_89F9A05D_9B83_C9BE_41D5_887FE8AB1950",
  "this.IconButton_886FC271_9AE3_59B9_41E2_4992D859B2A5"
 ],
 "id": "rootPlayer",
 "width": "100%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "definitions": [{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -177.12,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A6DFBFA9_B7E5_2AC9_41D1_95BD888ECFA3"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 17.55,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A6C8DD20_B7E5_2FF7_41D7_00AE34F918DC"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -93.35,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A71B2C7E_B7E5_2E4B_41D8_2C7890C52414"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Lab komdat 1",
 "hfovMin": "135%",
 "id": "panorama_38E60CEE_3714_D245_4184_002A4B4C6997",
 "overlays": [
  "this.overlay_6C2AF16F_357D_F243_41B6_AEE3142849C2",
  "this.overlay_68845C35_357B_D1C7_41C9_671D285C5462"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_t.jpg",
 "hfovMax": 130,
 "audios": [
  "this.audio_860D2707_931E_F90C_4184_373786F9A661"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 138.42,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A52E9E49_B7E5_2A49_41DB_6392304D0157"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -65.72,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A63F2FC4_B7E5_2ABF_41DC_7D26CD171602"
},
{
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "buttonCardboardView": "this.IconButton_8BF986F5_9AA3_26B9_41C4_6F5CCE2192D0",
 "mouseControlMode": "drag_acceleration"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_camera"
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_B959D9E2_B7A4_F67B_41DC_CCB9BEF6270B.ogg",
  "mp3Url": "media/audio_B959D9E2_B7A4_F67B_41DC_CCB9BEF6270B.mp3"
 },
 "id": "audio_B959D9E2_B7A4_F67B_41DC_CCB9BEF6270B",
 "data": {
  "label": "Audio VT Poltek2"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_38D17585_3714_D2C7_418B_782A51353200_camera"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_9E6CC5A2_9376_9904_41E0_713D6F438524.ogg",
  "mp3Url": "media/audio_9E6CC5A2_9376_9904_41E0_713D6F438524.mp3"
 },
 "id": "audio_9E6CC5A2_9376_9904_41E0_713D6F438524",
 "data": {
  "label": "Audio_Gerbang"
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Koridor Lt. 2 ",
 "hfovMin": "135%",
 "id": "panorama_38D1356B_3714_F243_41C1_0321F472A6FD",
 "overlays": [
  "this.overlay_7EB7BFBC_350D_4EC5_4189_322F9200F505",
  "this.overlay_7E00A746_350C_FE45_41C0_DAF20521CB28"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 5.94,
   "distance": 1,
   "panorama": "this.panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3",
   "backwardYaw": 7.3
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 142.87,
   "distance": 1,
   "panorama": "this.panorama_38D93D39_3714_F3CF_418D_7A8975AB5289",
   "backwardYaw": 52.34
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_t.jpg",
 "hfovMax": 130,
 "audios": [
  "this.audio_83A8E099_9BFC_4A87_41E2_CDFCFFDADC06"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -37.13,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A65A0DB4_B7E5_2ED8_41D8_F50040212392"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_38E60CEE_3714_D245_4184_002A4B4C6997_camera"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Lab multimed",
 "hfovMin": "135%",
 "id": "panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42",
 "overlays": [
  "this.overlay_60323ED1_3514_CE5F_41C8_C80EDB4358BB"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_38D1C363_3717_5643_4195_478CFFE63BBB"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_camera"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "ruang gs 1",
 "hfovMin": "135%",
 "id": "panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130",
 "overlays": [
  "this.overlay_5FC56D74_3535_5245_41BC_37A44A6274B6"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -150.97,
   "distance": 1,
   "panorama": "this.panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D",
   "backwardYaw": -166.2
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_t.jpg",
 "hfovMax": 130,
 "audios": [
  "this.audio_846D1395_931E_B90C_41DA_2A910045D53E"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -97.97,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A6730FE7_B7E5_2A79_41BE_FCB2FE8A171B"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 179.76,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A521CE40_B7E5_2DB8_41D1_EF460F506BD0"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Lab Studio 1",
 "hfovMin": "135%",
 "id": "panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A",
 "overlays": [
  "this.overlay_79FCFE1A_3514_F1CD_41CA_B8FB659B7385",
  "this.overlay_65868634_3515_51C5_41C3_B458A991A20D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -170.6,
   "distance": 1,
   "panorama": "this.panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79",
   "backwardYaw": -152.27
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 51,
   "distance": 1,
   "panorama": "this.panorama_38E77BDC_3717_5645_41C4_5C7C39771035",
   "backwardYaw": 2.02
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_t.jpg",
 "hfovMax": 130,
 "audios": [
  "this.audio_852D1F21_931F_A904_41C0_82EC225E5B16"
 ]
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Lab mobile",
 "hfovMin": "135%",
 "id": "panorama_38E63D57_3715_3243_4168_734E9BAFFB1A",
 "overlays": [
  "this.overlay_6BDF6715_3577_FFC7_41C9_D7C112D235F7"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -132.77,
   "distance": 1,
   "panorama": "this.panorama_38D1C363_3717_5643_4195_478CFFE63BBB",
   "backwardYaw": 151.28
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_t.jpg",
 "hfovMax": 130,
 "audios": [
  "this.audio_86909EE4_931E_AB0C_41C0_A53ECB409747"
 ]
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Jalan GS dan G.Utama",
 "hfovMin": "135%",
 "id": "panorama_38DD01DC_3715_3245_41BF_FED182B98C45",
 "overlays": [
  "this.overlay_5D874BBD_3534_D6C7_418C_9175197167AB",
  "this.overlay_47801017_3534_D1C3_41BA_EA6F98BB9E75"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -171.5,
   "distance": 1,
   "panorama": "this.panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4",
   "backwardYaw": 57.55
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -4.1,
   "distance": 1,
   "panorama": "this.panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206",
   "backwardYaw": 90.98
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_t.jpg",
 "hfovMax": 130,
 "audios": [
  "this.audio_84E9E279_931E_9B04_41DA_78CC4E8A035E"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 68.38,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A6D22D28_B7E5_2FC8_41CC_DAAE50427B5F"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_38E4D980_3717_72BD_41B8_057AC02161F1_camera"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_875D799F_930E_693C_41E0_25E68EC837A7",
 "id": "audio_819CF114_9316_790C_41D9_08485B850FD1",
 "data": {
  "label": "Navigasi_Null"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -7.37,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A6189D5D_B7E5_2E48_41D8_E1BE580329A6"
},
{
 "class": "SlideInEffect",
 "duration": 100,
 "id": "effect_899D8E9F_9CFA_446C_41E3_818F0E0EA237",
 "easing": "quad_in",
 "from": "top"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_camera"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Gs Lt 3",
 "hfovMin": "135%",
 "id": "panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D",
 "overlays": [
  "this.overlay_514720D5_350F_5247_41C8_B0AFDAEDF11B",
  "this.overlay_54D66C2F_350F_31C3_41C7_BD13378E2D42",
  "this.overlay_51B8CC94_350C_D2C4_419E_822B01ABC77C",
  "this.overlay_50F2E95B_3535_5243_4185_138297492FF8",
  "this.overlay_88E56D9B_9071_8215_41A5_5681921E2B47",
  "this.overlay_89FBD3FA_907E_8616_41D8_39B8AC25B233"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -2.41,
   "distance": 1,
   "panorama": "this.panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED",
   "backwardYaw": 5.17
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -166.2,
   "distance": 1,
   "panorama": "this.panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130",
   "backwardYaw": -150.97
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 28.31,
   "distance": 1,
   "panorama": "this.panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8",
   "backwardYaw": -55.84
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 117.78,
   "distance": 1,
   "panorama": "this.panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3",
   "backwardYaw": -174.46
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_t.jpg",
 "hfovMax": 130,
 "audios": [
  "this.audio_87A3BE44_9312_6B0D_4196_3434BCA3E8FD"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_camera"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Jembatan lt 2",
 "hfovMin": "135%",
 "id": "panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361",
 "overlays": [
  "this.overlay_08EEB8E6_3514_F245_41C3_0378DC638F2B",
  "this.overlay_75B4F11C_3515_33C5_41B7_4703BB3C4E37"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 81.54,
   "distance": 1,
   "panorama": "this.panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC",
   "backwardYaw": -0.61
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -134.14,
   "distance": 1,
   "panorama": "this.panorama_38E63971_3717_325F_41B2_8F085CCBFE09",
   "backwardYaw": 102.83
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_t.jpg",
 "hfovMax": 130,
 "audios": [
  "this.audio_8DF276B6_9B84_568A_41C6_346DCA9171D2"
 ]
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_846D0395_931E_B90C_41E1_2B1F5C89FED2",
 "id": "audio_866A3E81_931D_AB04_41DC_F38E062D24BE",
 "data": {
  "label": "Audio_Ruang Kelas"
 }
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_82D8CEB6_9312_EB0C_41CA_7756D5E03BDA.ogg",
  "mp3Url": "media/audio_82D8CEB6_9312_EB0C_41CA_7756D5E03BDA.mp3"
 },
 "id": "audio_82D8CEB6_9312_EB0C_41CA_7756D5E03BDA",
 "data": {
  "label": "Audio_Lt.1_2_Audit"
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38D1312F_3717_53C3_4192_0AF0F07EB655",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38E649D7_3717_D243_41CA_441C811EA963",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38E649D7_3717_D243_41CA_441C811EA963_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38D1C355_3717_7647_419B_47B5347BBD92",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38D1C355_3717_7647_419B_47B5347BBD92_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38E20E75_3715_CE47_41C1_CB433083AD5A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38E53807_3717_51C3_41C3_684D314D142D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38E53807_3717_51C3_41C3_684D314D142D_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38DF3F39_3715_CFCF_41B9_9107650158A7",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38DF0085_3715_D2C7_41BF_6A1900839E53",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38D14E9B_3717_4EC3_41B2_5731446C5418",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38E0CB76_3717_7644_41A0_A9D432BD3862",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_3FEC1993_34F7_52C3_41BB_0159964C458F",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38E4D980_3717_72BD_41B8_057AC02161F1",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38E4D980_3717_72BD_41B8_057AC02161F1_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38D0B196_3717_32C5_41AE_3819CFBC2276",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38E63971_3717_325F_41B2_8F085CCBFE09",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38E63971_3717_325F_41B2_8F085CCBFE09_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38D1712F_3717_F3C3_41B3_CE44637321AA",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38E77BDC_3717_5645_41C4_5C7C39771035",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38E77BDC_3717_5645_41C4_5C7C39771035_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38D1C363_3717_5643_4195_478CFFE63BBB",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 38, 39)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38D1C363_3717_5643_4195_478CFFE63BBB_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38D94D50_3717_325D_4192_23A4473BE97C",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 39, 40)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38D94D50_3717_325D_4192_23A4473BE97C_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 40, 41)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38D17585_3714_D2C7_418B_782A51353200",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 41, 42)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38D17585_3714_D2C7_418B_782A51353200_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 42, 43)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38D1356B_3714_F243_41C1_0321F472A6FD",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 43, 44)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38D1356B_3714_F243_41C1_0321F472A6FD_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38D93D39_3714_F3CF_418D_7A8975AB5289",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 44, 45)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 45, 46)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38E60CEE_3714_D245_4184_002A4B4C6997",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 46, 47)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38E60CEE_3714_D245_4184_002A4B4C6997_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 47, 48)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38E63D57_3715_3243_4168_734E9BAFFB1A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 48, 49)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38D0E554_3715_5244_41A6_46AD73AD729B",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 49, 50)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38D0E554_3715_5244_41A6_46AD73AD729B_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 50, 51)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38DF659A_3715_72CD_41C7_218DD275A32E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 51, 52)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38DF659A_3715_72CD_41C7_218DD275A32E_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38E4ADCF_3715_7243_41C6_53A461661D81",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 52, 53)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38E4ADCF_3715_7243_41C6_53A461661D81_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 53, 54)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 54, 55)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 55, 56)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38DD01DC_3715_3245_41BF_FED182B98C45",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 56, 57)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38DD01DC_3715_3245_41BF_FED182B98C45_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 57, 58)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38C881B1_3715_52DC_41C2_E18801508327",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 58, 59)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38C881B1_3715_52DC_41C2_E18801508327_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 59, 60)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist, 60, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_camera"
  }
 ],
 "id": "ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Koridor Lt.2",
 "hfovMin": "135%",
 "id": "panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3",
 "overlays": [
  "this.overlay_7A5AFDF3_350D_3243_41B6_CCD89B066D49",
  "this.overlay_7BCA6D9C_350B_32C4_41C2_90BA03C45200"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -162.45,
   "distance": 1,
   "panorama": "this.panorama_38D1C363_3717_5643_4195_478CFFE63BBB",
   "backwardYaw": 41.35
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 7.3,
   "distance": 1,
   "panorama": "this.panorama_38D1356B_3714_F243_41C1_0321F472A6FD",
   "backwardYaw": 5.94
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Koridor lt 2 outdoor",
 "hfovMin": "135%",
 "id": "panorama_38D93D39_3714_F3CF_418D_7A8975AB5289",
 "overlays": [
  "this.overlay_7A110627_3535_51C4_41B3_0D67958BFBE7",
  "this.overlay_60DA7E71_357B_4E5F_41B0_F6A24ED12AB0",
  "this.overlay_6E799749_357D_3E4F_41AB_22D4772A99F0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -63.3,
   "distance": 1,
   "panorama": "this.panorama_38D17585_3714_D2C7_418B_782A51353200",
   "backwardYaw": -84.84
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 52.34,
   "distance": 1,
   "panorama": "this.panorama_38D1356B_3714_F243_41C1_0321F472A6FD",
   "backwardYaw": 142.87
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "IMG_20240319_092820_00_merged",
 "hfovMin": "135%",
 "id": "panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206",
 "overlays": [
  "this.overlay_054A8B65_370C_F647_4180_B49199A0F6A8",
  "this.overlay_037E6CD9_370D_324F_41C3_D77EEFB676EF",
  "this.overlay_03F7805B_370C_D24C_419E_F524B54E1234",
  "this.overlay_050E17D0_370F_FE5D_41AD_1C6BA8F1AE1B"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -61.26,
   "distance": 1,
   "panorama": "this.panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055",
   "backwardYaw": 80.17
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 146.78,
   "distance": 1,
   "panorama": "this.panorama_38D17585_3714_D2C7_418B_782A51353200",
   "backwardYaw": 80.34
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 70.18,
   "distance": 1,
   "panorama": "this.panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C",
   "backwardYaw": -68.47
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 90.98,
   "distance": 1,
   "panorama": "this.panorama_38DD01DC_3715_3245_41BF_FED182B98C45",
   "backwardYaw": -4.1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_t.jpg",
 "hfovMax": 130,
 "audios": [
  "this.audio_87442396_9313_990C_41B3_4F8345631F05"
 ]
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_875D799F_930E_693C_41E0_25E68EC837A7",
 "id": "audio_8E9416B5_9B85_D68E_41D3_991FB43C4CE7",
 "data": {
  "label": "Navigasi_Null"
 }
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_875D799F_930E_693C_41E0_25E68EC837A7",
 "id": "audio_8DB91137_9B84_4B8A_41D3_099469E69272",
 "data": {
  "label": "Navigasi_Null"
 }
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_875D799F_930E_693C_41E0_25E68EC837A7",
 "id": "audio_8D29AD37_9B84_3B8A_41E1_85AD82C96666",
 "data": {
  "label": "Navigasi_Null"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 29.03,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A658D001_B7E5_35B9_4192_77200EF79A95"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 135.27,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A5DF2058_B7E5_3657_41D0_79390C9AF383"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "GS_Lt.3",
 "hfovMin": "135%",
 "id": "panorama_38D1712F_3717_F3C3_41B3_CE44637321AA",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_t.jpg",
 "hfovMax": 130,
 "audios": [
  "this.audio_8E8AE14A_9B84_4B9A_41DB_E6399E10DE8C"
 ]
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_860D2707_931E_F90C_4184_373786F9A661.ogg",
  "mp3Url": "media/audio_860D2707_931E_F90C_4184_373786F9A661.mp3"
 },
 "id": "audio_860D2707_931E_F90C_4184_373786F9A661",
 "data": {
  "label": "Audio_Lab. Komdat"
 }
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_8D496B51_9B84_5F86_41E0_7B3058CAE2FF.ogg",
  "mp3Url": "media/audio_8D496B51_9B84_5F86_41E0_7B3058CAE2FF.mp3"
 },
 "id": "audio_8D496B51_9B84_5F86_41E0_7B3058CAE2FF",
 "data": {
  "label": "Audio_Sinematografi"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 6.73,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A71C0ECE_B7E5_2A4B_41B9_3CA908A98EDE"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 175.81,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A5B47DDC_B7E5_2E48_41B4_6325BBD947D8"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -92.52,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A567C082_B7E5_36BB_41E1_7CF3AE00B250"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Auditorium ",
 "hfovMin": "135%",
 "id": "panorama_38D14E9B_3717_4EC3_41B2_5731446C5418",
 "overlays": [
  "this.overlay_1180CE67_370D_4E43_41A6_120D875697DA",
  "this.overlay_118FEDB2_370D_32DD_41A0_51F0DF86A745"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 1.34,
   "distance": 1,
   "panorama": "this.panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E",
   "backwardYaw": -173.27
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 86.65,
   "distance": 1,
   "panorama": "this.panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E",
   "backwardYaw": 74.42
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_t.jpg",
 "hfovMax": 130,
 "audios": [
  "this.audio_8167DC90_9316_6F04_41E0_EB530F9A179C"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 120.13,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A747ECBA_B7E5_2ECB_41E1_E60371624BC8"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_9CB6214B_930D_9904_41DA_F68E2C2C593E.ogg",
  "mp3Url": "media/audio_9CB6214B_930D_9904_41DA_F68E2C2C593E.mp3"
 },
 "id": "audio_9CB6214B_930D_9904_41DA_F68E2C2C593E",
 "data": {
  "label": "Audio_Jalan Utama"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -151.69,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A67E8FF0_B7E5_2A57_41E3_A7BAAA391641"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Jalan Utama",
 "hfovMin": "135%",
 "id": "panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E",
 "overlays": [
  "this.overlay_288001E2_3775_527D_41B7_20668FB3D151",
  "this.overlay_28DFB412_377D_51DD_41C7_F7E246254DB2"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 131.2,
   "distance": 1,
   "panorama": "this.panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6",
   "backwardYaw": 13.83
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -18.06,
   "distance": 1,
   "panorama": "this.panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E",
   "backwardYaw": -59.87
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_t.jpg",
 "hfovMax": 130,
 "audios": [
  "this.audio_8341BDB8_930E_6904_41E2_3CE1038AE0D8"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_camera"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_846D0395_931E_B90C_41E1_2B1F5C89FED2",
 "id": "audio_8400EB08_931E_6904_41C4_9252EB6907CE",
 "data": {
  "label": "Audio_Ruang Kelas"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 24.85,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A6F37D0F_B7E5_2FC9_41E2_500DCA4A7C6C"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_84E9C279_931E_9B04_41DF_D5A0AACE8046",
 "id": "audio_84E9E279_931E_9B04_41DA_78CC4E8A035E",
 "data": {
  "label": "Audio_Jalan gedung dn GS"
 }
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_8307FC55_930F_AF0C_41C4_C62B219E29BE",
 "id": "audio_81FAEBE8_9316_A904_41E1_A109334C933D",
 "data": {
  "label": "Navigasi_Null"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 175.9,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A745DF0C_B7E5_2BCF_41DF_9BBCEF825B5E"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 116.7,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A569DE6D_B7E5_2A49_41DD_982695774B52"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 175.16,
  "pitch": -6.59
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_38D1C355_3717_7647_419B_47B5347BBD92_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_38E63971_3717_325F_41B2_8F085CCBFE09_camera"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_846D0395_931E_B90C_41E1_2B1F5C89FED2",
 "id": "audio_846D1395_931E_B90C_41DA_2A910045D53E",
 "data": {
  "label": "Audio_Ruang Kelas"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_camera"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Lab komdat 2",
 "hfovMin": "135%",
 "id": "panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0",
 "overlays": [
  "this.overlay_6AF071FC_3575_5245_41B2_7685EE7F11FD"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_camera"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_875D799F_930E_693C_41E0_25E68EC837A7",
 "id": "audio_8F84BF56_9B84_D78A_41B1_870408BC58D7",
 "data": {
  "label": "Navigasi_Null"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_38D1C363_3717_5643_4195_478CFFE63BBB_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -178.66,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A6F1BF86_B7E5_2AB8_41D6_B0627AA9776B"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Koridor Lt.1",
 "hfovMin": "135%",
 "id": "panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080",
 "overlays": [
  "this.overlay_69083401_351C_F1BF_4198_34BD8C2C19A8",
  "this.overlay_69DBC790_351D_5EDD_41C2_6BABED32AA8E",
  "this.overlay_55B0EDC7_3514_D243_41B2_B4FFA6B5DF17",
  "this.overlay_8A74B1BF_904E_820D_41E1_8509781CB4F5",
  "this.overlay_8B93CA36_904F_861E_41DF_863522CDE600"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_38E60CEE_3714_D245_4184_002A4B4C6997"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -4.19,
   "distance": 1,
   "panorama": "this.panorama_38D0B196_3717_32C5_41AE_3819CFBC2276",
   "backwardYaw": 170.99
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_38DF659A_3715_72CD_41C7_218DD275A32E"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_t.jpg",
 "hfovMax": 130,
 "audios": [
  "this.audio_8E9416B5_9B85_D68E_41D3_991FB43C4CE7"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 11.94,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A62ACD3A_B7E5_2FC8_41B0_0832E8493851"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Bundaran",
 "hfovMin": "135%",
 "id": "panorama_38E53807_3717_51C3_41C3_684D314D142D",
 "overlays": [
  "this.overlay_2FF2F575_371B_7247_41C4_84929BB66698",
  "this.overlay_2DB368E7_3714_D243_41C6_63E7B7B2DCF3",
  "this.overlay_A7ADB887_B7A5_16B9_41DC_0D3208173439"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -46.7,
   "distance": 1,
   "panorama": "this.panorama_38DF3F39_3715_CFCF_41B9_9107650158A7",
   "backwardYaw": 8.27
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_t.jpg",
 "hfovMax": 130,
 "audios": [
  "this.audio_9C0C4B1D_9376_693C_41BB_5978E9D70547"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -12.8,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A60A6D55_B7E5_2E59_41B2_F2FECAB9F6C9"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 91.25,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A71B1EC3_B7E5_2AB8_41C6_B011204034A1"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_38D0E554_3715_5244_41A6_46AD73AD729B_camera"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_875D799F_930E_693C_41E0_25E68EC837A7",
 "id": "audio_8FE48C5F_9B84_39BB_41D3_19361BA3E763",
 "data": {
  "label": "Navigasi_Null"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 14.41,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A5A67DC8_B7E5_2E48_41D8_6AE9E3F316F1"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 72.43,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A6C7DF98_B7E5_2AD7_41B3_F919949F3780"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Menuju bundaran",
 "hfovMin": "135%",
 "id": "panorama_38E20E75_3715_CE47_41C1_CB433083AD5A",
 "overlays": [
  "this.overlay_21F04E8D_371C_CEC7_41AA_C445756BC9DF",
  "this.overlay_2A22452A_370F_53CD_41C4_5605ECE47036"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_38E53807_3717_51C3_41C3_684D314D142D"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 167.2,
   "distance": 1,
   "panorama": "this.panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A",
   "backwardYaw": -175.04
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_t.jpg",
 "hfovMax": 130,
 "audios": [
  "this.audio_9C9F6218_930E_9B04_41BA_B9A38FD9D806"
 ]
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_875D799F_930E_693C_41E0_25E68EC837A7",
 "id": "audio_8ECC8BF3_9B85_FE8A_41B1_F74D8A5B7D6D",
 "data": {
  "label": "Navigasi_Null"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_camera"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_84E9C279_931E_9B04_41DF_D5A0AACE8046",
 "id": "audio_8754D9A8_9312_A904_41C0_0B11782AC606",
 "data": {
  "label": "Audio_Jalan gedung dn GS"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 5.54,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A5B4D012_B7E5_35DB_41DE_DDD16B2AF104"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -80.79,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A7679C8E_B7E5_2EC8_41D9_7E36B295CC45"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -171.59,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A74B5F14_B7E5_2BDF_41E5_83B2E5919028"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -172.7,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A5C27046_B7E5_35BB_41CB_5A589C5DC56D"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 3.84,
  "pitch": -3.29
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 13.8,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A59C7E14_B7E5_2DD8_41E6_67F141813127"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_875D799F_930E_693C_41E0_25E68EC837A7",
 "id": "audio_8E8AE14A_9B84_4B9A_41DB_E6399E10DE8C",
 "data": {
  "label": "Navigasi_Null"
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Jalan Utama",
 "hfovMin": "135%",
 "id": "panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A",
 "overlays": [
  "this.overlay_2C090C09_370D_D1CC_41BE_1B53E09D7365",
  "this.overlay_2AC9EE6D_370D_CE47_41A6_976CAF339F0E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -175.04,
   "distance": 1,
   "panorama": "this.panorama_38E20E75_3715_CE47_41C1_CB433083AD5A",
   "backwardYaw": 167.2
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -9.03,
   "distance": 1,
   "panorama": "this.panorama_38D1C355_3717_7647_419B_47B5347BBD92",
   "backwardYaw": 172.63
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_t.jpg",
 "hfovMax": 130,
 "audios": [
  "this.audio_9C97FA48_930E_AB04_41D6_723615B1214F"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_camera"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Koridor Lt.2",
 "hfovMin": "135%",
 "id": "panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C",
 "overlays": [
  "this.overlay_03864A50_34F7_365D_41A8_EF63808B6489",
  "this.overlay_036D1150_34F7_D25D_41A9_4D14281BE03E",
  "this.overlay_01EBEBD6_34FC_D645_4190_2A8A4503233B",
  "this.overlay_89C91317_9056_861E_41E0_8AB236CFF7F5",
  "this.overlay_898AB4F4_9056_8212_41B3_FA40CE5C6F57",
  "this.overlay_888CE9FA_9B8F_DA7A_41B3_A5A890067F53"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -68.47,
   "distance": 1,
   "panorama": "this.panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206",
   "backwardYaw": 70.18
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_38D1356B_3714_F243_41C1_0321F472A6FD"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_38DD01DC_3715_3245_41BF_FED182B98C45"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_t.jpg",
 "hfovMax": 130,
 "audios": [
  "this.audio_8FE48C5F_9B84_39BB_41D3_19361BA3E763"
 ]
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_8C34B96F_9BFC_7B9A_419F_D814D80C7CFA.ogg",
  "mp3Url": "media/audio_8C34B96F_9BFC_7B9A_419F_D814D80C7CFA.mp3"
 },
 "id": "audio_8C34B96F_9BFC_7B9A_419F_D814D80C7CFA",
 "data": {
  "label": "Audio_Lab Multimed"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_camera"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "lab multimed 2",
 "hfovMin": "135%",
 "id": "panorama_38D0E554_3715_5244_41A6_46AD73AD729B",
 "overlays": [
  "this.overlay_622FF2FC_351B_3645_41A4_388C59C0DCB7",
  "this.overlay_608E2E9C_3514_CEC5_41C0_AC56E8AEF851",
  "this.overlay_62FEA986_3515_52C4_41A2_8192D8FA5CC1",
  "this.overlay_89A7E90C_9052_83F2_41D4_29D0D3A70464"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -81.76,
   "distance": 1,
   "panorama": "this.panorama_38C881B1_3715_52DC_41C2_E18801508327",
   "backwardYaw": 119.87
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -111.62,
   "distance": 1,
   "panorama": "this.panorama_38D1C363_3717_5643_4195_478CFFE63BBB",
   "backwardYaw": 2.88
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 172.95,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A53AB069_B7E5_3649_41E2_BFEAAA041FC8"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 10.36,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A5F7B03D_B7E5_35C9_41AB_B025974D58AB"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -171.73,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A53FCE52_B7E5_2A5B_41D6_D0FF69EDFAA1"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_38DF659A_3715_72CD_41C7_218DD275A32E_camera"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Koridor Gedung Lt.1",
 "hfovMin": "135%",
 "id": "panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF",
 "overlays": [
  "this.overlay_71C3C072_350B_525D_41CB_3B0B1C3F6701",
  "this.overlay_7B8164D6_350C_D245_41CA_D98F70A7C831"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -50.41,
   "distance": 1,
   "panorama": "this.panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF",
   "backwardYaw": -172.61
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 123.23,
   "distance": 1,
   "panorama": "this.panorama_38E77BDC_3717_5645_41C4_5C7C39771035",
   "backwardYaw": 99.21
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_t.jpg",
 "hfovMax": 130,
 "audios": [
  "this.audio_80EFB0C3_9312_F704_41D9_39DD01D4B11E"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -177.84,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A705DC5B_B7E5_2E49_41D2_5490D5CF2F28"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_8307FC55_930F_AF0C_41C4_C62B219E29BE",
 "id": "audio_87A3BE44_9312_6B0D_4196_3434BCA3E8FD",
 "data": {
  "label": "Navigasi_Null"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -174.83,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A64D3FF8_B7E5_2A48_41A9_BE7783861560"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 92.67,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A7582CCA_B7E5_2E48_41D2_4F99818CD9C1"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_875D799F_930E_693C_41E0_25E68EC837A7",
 "id": "audio_83583D24_930F_A90C_41D5_2A6268C1755F",
 "data": {
  "label": "Navigasi_Null"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -62.22,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A70EDC6C_B7E5_2E4F_41D5_78290A0FAFAE"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -28.72,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A5761E75_B7E5_2A58_41D0_1345AF626F65"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 7.39,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A71EFC85_B7E5_2EB9_41D6_91A76A862D49"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_camera"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Auditorium Lt.1",
 "hfovMin": "135%",
 "id": "panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A",
 "overlays": [
  "this.overlay_13AA6027_371B_71C3_419C_48B944D1C549",
  "this.overlay_133A8E65_3714_CE47_41B8_4365012D8910",
  "this.overlay_89E07FE3_9052_9E35_41A2_6E1AAF73DC7B"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 174.42,
   "distance": 1,
   "panorama": "this.panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E",
   "backwardYaw": 171.35
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -11.98,
   "distance": 1,
   "panorama": "this.panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E",
   "backwardYaw": -169.64
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_t.jpg",
 "hfovMax": 130,
 "audios": [
  "this.audio_82FCF32F_9312_B91C_41C3_1523E1482A7D"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -127.66,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A5D0604E_B7E5_364B_41C4_99D31BB87CFA"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 124.16,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A5A68009_B7E5_35C8_41DB_7E112DE6403A"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_camera"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Gs ruangan 3",
 "hfovMin": "135%",
 "id": "panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8",
 "overlays": [
  "this.overlay_5D403BCC_353D_D645_41C5_9D17083013F7"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 27.01,
   "distance": 1,
   "panorama": "this.panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED",
   "backwardYaw": -148.79
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_t.jpg",
 "hfovMax": 130,
 "audios": [
  "this.audio_866A3E81_931D_AB04_41DC_F38E062D24BE"
 ]
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Koridor Gedung Lt.1",
 "hfovMin": "135%",
 "id": "panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD",
 "overlays": [
  "this.overlay_05AFB8A6_3714_D2C5_418D_3C7F54BF84F8",
  "this.overlay_04904509_3715_F3CF_41B7_9E451CCE798F"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -96.95,
   "distance": 1,
   "panorama": "this.panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E",
   "backwardYaw": 165.78
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 35.69,
   "distance": 1,
   "panorama": "this.panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055",
   "backwardYaw": -66
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_t.jpg",
 "hfovMax": 130,
 "audios": [
  "this.audio_81A16B0C_9315_A91C_41D1_6540C5032B69"
 ]
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Koridor Lt.3",
 "hfovMin": "135%",
 "id": "panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED",
 "overlays": [
  "this.overlay_516CC219_350C_F1CC_41BD_2F2BDA7ED2EB",
  "this.overlay_5C186EEC_3534_CE44_41C8_3CC5E5C0A208",
  "this.overlay_880B2C83_9072_82F5_41D0_CB15FCCD7534"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 5.17,
   "distance": 1,
   "panorama": "this.panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D",
   "backwardYaw": -2.41
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -148.79,
   "distance": 1,
   "panorama": "this.panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8",
   "backwardYaw": 27.01
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_t.jpg",
 "hfovMax": 130,
 "audios": [
  "this.audio_8F457737_9B84_578A_41A9_A2B527464314"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -39.51,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A7097C64_B7E5_2E7F_41CE_A7EA695DF030"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_38C881B1_3715_52DC_41C2_E18801508327_camera"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38D1312F_3717_53C3_4192_0AF0F07EB655",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38E649D7_3717_D243_41CA_441C811EA963",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38E649D7_3717_D243_41CA_441C811EA963_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38D1C355_3717_7647_419B_47B5347BBD92",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38D1C355_3717_7647_419B_47B5347BBD92_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38E20E75_3715_CE47_41C1_CB433083AD5A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38E53807_3717_51C3_41C3_684D314D142D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38E53807_3717_51C3_41C3_684D314D142D_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38DF3F39_3715_CFCF_41B9_9107650158A7",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38DF0085_3715_D2C7_41BF_6A1900839E53",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38D14E9B_3717_4EC3_41B2_5731446C5418",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38E0CB76_3717_7644_41A0_A9D432BD3862",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_3FEC1993_34F7_52C3_41BB_0159964C458F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38E4D980_3717_72BD_41B8_057AC02161F1",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38E4D980_3717_72BD_41B8_057AC02161F1_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38D0B196_3717_32C5_41AE_3819CFBC2276",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38E63971_3717_325F_41B2_8F085CCBFE09",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38E63971_3717_325F_41B2_8F085CCBFE09_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38D1712F_3717_F3C3_41B3_CE44637321AA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38E77BDC_3717_5645_41C4_5C7C39771035",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38E77BDC_3717_5645_41C4_5C7C39771035_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38D1C363_3717_5643_4195_478CFFE63BBB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38D1C363_3717_5643_4195_478CFFE63BBB_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38D94D50_3717_325D_4192_23A4473BE97C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38D94D50_3717_325D_4192_23A4473BE97C_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 41)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38D17585_3714_D2C7_418B_782A51353200",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 41, 42)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38D17585_3714_D2C7_418B_782A51353200_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 42, 43)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38D1356B_3714_F243_41C1_0321F472A6FD",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 43, 44)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38D1356B_3714_F243_41C1_0321F472A6FD_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38D93D39_3714_F3CF_418D_7A8975AB5289",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 44, 45)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 45, 46)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38E60CEE_3714_D245_4184_002A4B4C6997",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 46, 47)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38E60CEE_3714_D245_4184_002A4B4C6997_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 47, 48)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38E63D57_3715_3243_4168_734E9BAFFB1A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 48, 49)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38D0E554_3715_5244_41A6_46AD73AD729B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 49, 50)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38D0E554_3715_5244_41A6_46AD73AD729B_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 50, 51)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38DF659A_3715_72CD_41C7_218DD275A32E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 51, 52)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38DF659A_3715_72CD_41C7_218DD275A32E_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38E4ADCF_3715_7243_41C6_53A461661D81",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 52, 53)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38E4ADCF_3715_7243_41C6_53A461661D81_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 53, 54)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 54, 55)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 55, 56)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38DD01DC_3715_3245_41BF_FED182B98C45",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 56, 57)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38DD01DC_3715_3245_41BF_FED182B98C45_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 57, 58)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38C881B1_3715_52DC_41C2_E18801508327",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 58, 59)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38C881B1_3715_52DC_41C2_E18801508327_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 59, 60)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 60, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8",
   "camera": "this.panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_camera"
  }
 ],
 "id": "mainPlayList"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -77.17,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A6986F75_B7E5_2A59_41D0_E4EEF93D7B9E"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "koridor lt 1",
 "hfovMin": "135%",
 "id": "panorama_38D94D50_3717_325D_4192_23A4473BE97C",
 "overlays": [
  "this.overlay_0B38A899_350C_D2CF_4176_198675F752F0",
  "this.overlay_0B151883_350F_52C3_41BE_327139775FC7",
  "this.overlay_0AB661E9_350C_D24F_41C5_2BBFCDE54084"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 106.76,
   "distance": 1,
   "panorama": "this.panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4",
   "backwardYaw": -0.24
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 2.16,
   "distance": 1,
   "panorama": "this.panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E",
   "backwardYaw": -41.58
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_t.jpg",
 "hfovMax": 130,
 "audios": [
  "this.audio_8DB91137_9B84_4B8A_41D3_099469E69272"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 179.39,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A6911F6C_B7E5_2A4F_41D4_CC8AE2BD4D0E"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 114,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A76F9EE9_B7E5_2A49_41D2_999ED4136C60"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -56.77,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A5EB0E1E_B7E5_2DCB_41E4_C982363A66F2"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -89.02,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A5D37E38_B7E5_2DD7_41B7_22FF5E6C0B56"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "parkiran elektro1",
 "hfovMin": "135%",
 "id": "panorama_38DF0085_3715_D2C7_41BF_6A1900839E53",
 "overlays": [
  "this.overlay_176CA4CD_3775_3247_41B4_672F32DEE6BA",
  "this.overlay_17443DAC_3775_32C5_41B2_495D1F84E736",
  "this.overlay_14CA04BC_370B_32C5_41C9_C3DF3E294951"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -35.52,
   "distance": 1,
   "panorama": "this.panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4",
   "backwardYaw": 87.48
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 82.03,
   "distance": 1,
   "panorama": "this.panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1",
   "backwardYaw": -165.65
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_t.jpg",
 "hfovMax": 130
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_875D799F_930E_693C_41E0_25E68EC837A7",
 "id": "audio_83A8E099_9BFC_4A87_41E2_CDFCFFDADC06",
 "data": {
  "label": "Navigasi_Null"
 }
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_86909EE4_931E_AB0C_41C0_A53ECB409747.ogg",
  "mp3Url": "media/audio_86909EE4_931E_AB0C_41C0_A53ECB409747.mp3"
 },
 "id": "audio_86909EE4_931E_AB0C_41C0_A53ECB409747",
 "data": {
  "label": "Audio_Lab. Mobile"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 91.46,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A6BA6F5A_B7E5_2A48_41D0_6AF0DF19E456"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 161.94,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A6A56CD3_B7E5_2E59_41CF_A8A224B05549"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_8167DC90_9316_6F04_41E0_EB530F9A179C.ogg",
  "mp3Url": "media/audio_8167DC90_9316_6F04_41E0_EB530F9A179C.mp3"
 },
 "id": "audio_8167DC90_9316_6F04_41E0_EB530F9A179C",
 "data": {
  "label": "Audio_Bagian Auditorium"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_camera"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "GS Lt 1",
 "hfovMin": "135%",
 "id": "panorama_38D0B196_3717_32C5_41AE_3819CFBC2276",
 "overlays": [
  "this.overlay_6A7A1979_3575_324C_41C2_400713A10AC3",
  "this.overlay_5456AC81_351C_D2BF_4169_DBCFA4D5A390",
  "this.overlay_681A9085_351B_52C7_41C4_0610BEBE66A1",
  "this.overlay_88ED381A_9073_8216_41E1_2CA3A3A1935E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 170.99,
   "distance": 1,
   "panorama": "this.panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080",
   "backwardYaw": -4.19
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -165.59,
   "distance": 1,
   "panorama": "this.panorama_38DF659A_3715_72CD_41C7_218DD275A32E",
   "backwardYaw": -33.12
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -88.54,
   "distance": 1,
   "panorama": "this.panorama_38E4D980_3717_72BD_41B8_057AC02161F1",
   "backwardYaw": 11.7
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_t.jpg",
 "hfovMax": 130,
 "audios": [
  "this.audio_871C3E38_9312_EB04_41DB_076E8535D244"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 9.4,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A6343D43_B7E5_2FB8_41C8_3E95A647B837"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -10.09,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A52C5060_B7E5_3677_41BF_3346E2EB3C5B"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -152.99,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A6908CF6_B7E5_2E5B_41CF_C9D2750EE43C"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Gerbang depan",
 "hfovMin": "135%",
 "id": "panorama_38D1312F_3717_53C3_4192_0AF0F07EB655",
 "overlays": [
  "this.overlay_24B0B964_370D_7245_41A8_BE9D771ADA2C",
  "this.overlay_74EE5467_7A41_D6E0_41DE_676224AAAB48"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -7.05,
   "distance": 1,
   "panorama": "this.panorama_38E649D7_3717_D243_41CA_441C811EA963",
   "backwardYaw": -168.06
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_t.jpg",
 "hfovMax": 130,
 "audios": [
  "this.audio_9E6CC5A2_9376_9904_41E0_713D6F438524"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_camera"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Jalan Utama",
 "hfovMin": "135%",
 "id": "panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E",
 "overlays": [
  "this.overlay_17A4E951_377F_D25F_4174_95153735D230",
  "this.overlay_292578DB_377F_524C_41C7_F15614128B4E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 144,
   "distance": 1,
   "panorama": "this.panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4",
   "backwardYaw": -87.33
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -59.87,
   "distance": 1,
   "panorama": "this.panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E",
   "backwardYaw": -18.06
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_t.jpg",
 "hfovMax": 130,
 "audios": [
  "this.audio_83583D24_930F_A90C_41D5_2A6268C1755F"
 ]
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_8307FC55_930F_AF0C_41C4_C62B219E29BE",
 "id": "audio_9C9F6218_930E_9B04_41BA_B9A38FD9D806",
 "data": {
  "label": "Navigasi_Null"
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Lab multimedia",
 "hfovMin": "135%",
 "id": "panorama_38DF659A_3715_72CD_41C7_218DD275A32E",
 "overlays": [
  "this.overlay_5F25D50C_3535_33C5_41BB_0B905435B0D5"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -33.12,
   "distance": 1,
   "panorama": "this.panorama_38D0B196_3717_32C5_41AE_3819CFBC2276",
   "backwardYaw": -165.59
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_t.jpg",
 "hfovMax": 130,
 "audios": [
  "this.audio_8C34B96F_9BFC_7B9A_419F_D814D80C7CFA"
 ]
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Auditorium Lt.2",
 "hfovMin": "135%",
 "id": "panorama_38E0CB76_3717_7644_41A0_A9D432BD3862",
 "overlays": [
  "this.overlay_1F5F4715_3735_3FC4_41B5_DAFBF42DD6B6",
  "this.overlay_1FA0802B_3735_F1C3_41B3_B2406DD7BD21",
  "this.overlay_8EBFBB8F_904F_860E_41D0_5034CA7C2CF4"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -127.95,
   "distance": 1,
   "panorama": "this.panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E",
   "backwardYaw": -70.52
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -44.73,
   "distance": 1,
   "panorama": "this.panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF",
   "backwardYaw": 156.32
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_t.jpg",
 "hfovMax": 130,
 "audios": [
  "this.audio_810E08B6_9316_B70C_4184_D7545DD43644"
 ]
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "parkiran elektro 2",
 "hfovMin": "135%",
 "id": "panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4",
 "overlays": [
  "this.overlay_12BE1C3E_370B_51C5_4142_25DAC8478C42",
  "this.overlay_1438306B_3715_F243_4189_1D91E03073CE",
  "this.overlay_12F0DAF4_3715_3644_41A9_F75183BC250C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 87.48,
   "distance": 1,
   "panorama": "this.panorama_38DF0085_3715_D2C7_41BF_6A1900839E53",
   "backwardYaw": -35.52
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -0.24,
   "distance": 1,
   "panorama": "this.panorama_38D94D50_3717_325D_4192_23A4473BE97C",
   "backwardYaw": 106.76
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -87.33,
   "distance": 1,
   "panorama": "this.panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E",
   "backwardYaw": 144
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_t.jpg",
 "hfovMax": 130,
 "audios": [
  "this.audio_875D999F_930E_693C_41DD_9B21C9DEE76A"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 4.67,
  "pitch": -3.29
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -99.83,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A775DEF2_B7E5_2A5B_41E2_B66B6D278FAB"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 144.48,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A76DEC97_B7E5_2ED9_41C9_FF1FB1B98B97"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 4.96,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A59A702C_B7E5_35CF_41DD_906B85C265CF"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Jembatan",
 "hfovMin": "135%",
 "id": "panorama_38D1C355_3717_7647_419B_47B5347BBD92",
 "overlays": [
  "this.overlay_21F89B2A_371F_37CD_419F_DCAB47F86368",
  "this.overlay_21759B50_371F_D642_41C2_5D33642A49E0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 172.63,
   "distance": 1,
   "panorama": "this.panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A",
   "backwardYaw": -9.03
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -8.47,
   "distance": 1,
   "panorama": "this.panorama_38E649D7_3717_D243_41CA_441C811EA963",
   "backwardYaw": 10.4
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_t.jpg",
 "hfovMax": 130,
 "audios": [
  "this.audio_9C85497D_930D_A9FC_41D3_07A357607C82"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 136.79,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A757BF25_B7E5_2BF9_41C0_D8BF64B9331C"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Koridor depan lab studio",
 "hfovMin": "135%",
 "id": "panorama_38E77BDC_3717_5645_41C4_5C7C39771035",
 "overlays": [
  "this.overlay_74C49E79_351D_4E4F_41C9_0D6503CCE023",
  "this.overlay_74670D91_351B_72DF_41CA_40179D89BDC1",
  "this.overlay_8AE7FF0D_9071_9FF2_41D1_9266D0EA04D0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 99.21,
   "distance": 1,
   "panorama": "this.panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF",
   "backwardYaw": 123.23
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 2.02,
   "distance": 1,
   "panorama": "this.panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A",
   "backwardYaw": 51
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_t.jpg",
 "hfovMax": 130,
 "audios": [
  "this.audio_8ECC8BF3_9B85_FE8A_41B1_F74D8A5B7D6D"
 ]
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Lab pengukuran",
 "hfovMin": "135%",
 "id": "panorama_38E4ADCF_3715_7243_41C6_53A461661D81",
 "overlays": [
  "this.overlay_6380D661_351D_5E7F_4190_C7AE3141AC4A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -146.44,
   "distance": 1,
   "panorama": "this.panorama_38D1C363_3717_5643_4195_478CFFE63BBB",
   "backwardYaw": -161.23
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -60.13,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A6D3AFA0_B7E5_2AF8_41E1_DDD993765191"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -48.8,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A6B51F51_B7E5_2A59_41BD_15F832E2F8D0"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -138.65,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A629CFB1_B7E5_2AD8_41E0_D8315BE7A812"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 7.96,
  "pitch": -3.84
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_38E649D7_3717_D243_41CA_441C811EA963_camera"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_9C0C4B1D_9376_693C_41BB_5978E9D70547.ogg",
  "mp3Url": "media/audio_9C0C4B1D_9376_693C_41BB_5978E9D70547.mp3"
 },
 "id": "audio_9C0C4B1D_9376_693C_41BB_5978E9D70547",
 "data": {
  "label": "Audio1"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -166.17,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A77D7CB1_B7E5_2ED9_41D7_2178B662120A"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_875D799F_930E_693C_41E0_25E68EC837A7",
 "id": "audio_8E02AEBD_9B85_D6FE_41B9_44E52E4F6166",
 "data": {
  "label": "Navigasi_Null"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -177.98,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A6654FDE_B7E5_2A48_4182_C2FF174A67F5"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_38E53807_3717_51C3_41C3_684D314D142D_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 52.05,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A6E46F7E_B7E5_2A4B_41BF_3853C0C90B93"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 27.73,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A619DFD5_B7E5_2A58_41E3_2518DA44CA18"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_875D799F_930E_693C_41E0_25E68EC837A7",
 "id": "audio_81DAD99A_9316_E904_41D2_226049E1F21E",
 "data": {
  "label": "Navigasi_Null"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -5.58,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A715BC75_B7E5_2E58_41C3_D50AAB3FB928"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_8307FC55_930F_AF0C_41C4_C62B219E29BE",
 "id": "audio_87F5A704_9312_B90C_41CD_785D747549D1",
 "data": {
  "label": "Navigasi_Null"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_camera"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_875D799F_930E_693C_41E0_25E68EC837A7",
 "id": "audio_875D999F_930E_693C_41DD_9B21C9DEE76A",
 "data": {
  "label": "Navigasi_Null"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -109.82,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A74F6CC2_B7E5_2EBB_41D7_B44E253FE7F1"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_38E77BDC_3717_5645_41C4_5C7C39771035_camera"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Lt. 2 Gedung Utama",
 "hfovMin": "135%",
 "id": "panorama_38D1C363_3717_5643_4195_478CFFE63BBB",
 "overlays": [
  "this.overlay_7485FE18_3514_D1CD_41B6_491CD45988E8",
  "this.overlay_74B083A7_3517_D6C3_4167_235AD5371896",
  "this.overlay_7382AB3B_3517_37C3_41B6_FEDCFC6D4C12",
  "this.overlay_631E43FA_351D_364D_41A9_0CF63DCEF7BA",
  "this.overlay_63F5F5DC_351D_7245_41B5_7B9B367FAD83",
  "this.overlay_62BA8DFA_351D_524D_4192_DCE9A52161B1",
  "this.overlay_85ED66FE_9057_8E0F_41D7_E7D33126C212",
  "this.overlay_8A44A27B_9051_8616_41D6_27A916300787",
  "this.overlay_8A3D5170_9053_8213_41B2_BCF635EBFA08",
  "this.overlay_8A4D84BC_9051_8212_41D4_A05500D17632"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 151.28,
   "distance": 1,
   "panorama": "this.panorama_38E63D57_3715_3243_4168_734E9BAFFB1A",
   "backwardYaw": -132.77
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 169.6,
   "distance": 1,
   "panorama": "this.panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2",
   "backwardYaw": -155.15
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -161.23,
   "distance": 1,
   "panorama": "this.panorama_38E4ADCF_3715_7243_41C6_53A461661D81",
   "backwardYaw": -146.44
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 41.35,
   "distance": 1,
   "panorama": "this.panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3",
   "backwardYaw": -162.45
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 2.88,
   "distance": 1,
   "panorama": "this.panorama_38D0E554_3715_5244_41A6_46AD73AD729B",
   "backwardYaw": -111.62
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 79.52,
   "distance": 1,
   "panorama": "this.panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF",
   "backwardYaw": 4.24
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_t.jpg",
 "hfovMax": 130,
 "audios": [
  "this.audio_86D70314_931E_790C_41D2_C567D1DC7091"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 109.48,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A672CD7F_B7E5_2E49_41E3_58323C5695E9"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Koridor Gedung Lt.1",
 "hfovMin": "135%",
 "id": "panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E",
 "overlays": [
  "this.overlay_1A4FCE0F_371B_31C3_41C3_81B969B44241",
  "this.overlay_07C47485_371B_32C7_41C0_B625C4B55E8A",
  "this.overlay_1B6518EF_371D_3243_4196_78C862C377D2"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 165.78,
   "distance": 1,
   "panorama": "this.panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD",
   "backwardYaw": -96.95
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -41.58,
   "distance": 1,
   "panorama": "this.panorama_38D94D50_3717_325D_4192_23A4473BE97C",
   "backwardYaw": 2.16
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_t.jpg",
 "hfovMax": 130,
 "audios": [
  "this.audio_81FAEBE8_9316_A904_41E1_A109334C933D"
 ]
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Auditorium Lt.1",
 "hfovMin": "135%",
 "id": "panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E",
 "overlays": [
  "this.overlay_1E734084_3715_72C5_41A5_60C7ACAFE2E7",
  "this.overlay_1036BCE3_370B_527C_4168_5C516F60C087",
  "this.overlay_8E68EB0F_904E_860E_4162_A68BB3818B70",
  "this.overlay_89F0CCFC_9052_8212_41D8_90C7F2C5DFB3",
  "this.overlay_8EF4B109_9053_83F2_41DE_D9791BB7B3F8"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 171.35,
   "distance": 1,
   "panorama": "this.panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A",
   "backwardYaw": 174.42
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 74.42,
   "distance": 1,
   "panorama": "this.panorama_38D14E9B_3717_4EC3_41B2_5731446C5418",
   "backwardYaw": 86.65
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_t.jpg",
 "hfovMax": 130,
 "audios": [
  "this.audio_82D8CEB6_9312_EB0C_41CA_7756D5E03BDA"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 146.88,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A583BDF0_B7E5_2E57_41DE_C1646DF49CC3"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "antara gedung administrasi",
 "hfovMin": "135%",
 "id": "panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1",
 "overlays": [
  "this.overlay_03D79784_370B_FEC5_41B0_D2AE6683ECFD",
  "this.overlay_46DDED0A_350C_F3CD_41A6_BE61C40EEDA6"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -165.65,
   "distance": 1,
   "panorama": "this.panorama_38DF0085_3715_D2C7_41BF_6A1900839E53",
   "backwardYaw": 82.03
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_38D1C355_3717_7647_419B_47B5347BBD92"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -36,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A7766CA8_B7E5_2EF7_41DF_59C00F0C86AE"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Auditorium Lt.2",
 "hfovMin": "135%",
 "id": "panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF",
 "overlays": [
  "this.overlay_1C6BC9BC_3737_D2C5_41C1_161986B94DC1",
  "this.overlay_1C443336_3737_37C4_41BC_749DBC1287AA"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 156.32,
   "distance": 1,
   "panorama": "this.panorama_38E0CB76_3717_7644_41A0_A9D432BD3862",
   "backwardYaw": -44.73
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -88.75,
   "distance": 1,
   "panorama": "this.panorama_38DF3F39_3715_CFCF_41B9_9107650158A7",
   "backwardYaw": 169.91
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_t.jpg",
 "hfovMax": 130,
 "audios": [
  "this.audio_8F84BF56_9B84_D78A_41B1_870408BC58D7"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_camera"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Lab studio 2",
 "hfovMin": "135%",
 "id": "panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79",
 "overlays": [
  "this.overlay_67712694_3515_7EC4_41C2_09C857147A84"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -152.27,
   "distance": 1,
   "panorama": "this.panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A",
   "backwardYaw": -170.6
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Koridor Lt.2",
 "hfovMin": "135%",
 "id": "panorama_38D17585_3714_D2C7_418B_782A51353200",
 "overlays": [
  "this.overlay_08EC43F2_351B_D65C_41B2_D431E9E3945D",
  "this.overlay_08EA2CC8_351B_524D_41BA_C9B4E4BE086D",
  "this.overlay_7763D3CF_351D_5643_41BA_58C4979660AF"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -43.21,
   "distance": 1,
   "panorama": "this.panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC",
   "backwardYaw": 178.31
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 80.34,
   "distance": 1,
   "panorama": "this.panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206",
   "backwardYaw": 146.78
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -84.84,
   "distance": 1,
   "panorama": "this.panorama_38D93D39_3714_F3CF_418D_7A8975AB5289",
   "backwardYaw": -63.3
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_t.jpg",
 "hfovMax": 130,
 "audios": [
  "this.audio_8D29AD37_9B84_3B8A_41E1_85AD82C96666"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_camera"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Koridor lt 2 ",
 "hfovMin": "135%",
 "id": "panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF",
 "overlays": [
  "this.overlay_7F2B0818_350F_51CD_41C7_B5D85C040173",
  "this.overlay_8ACBA44C_9071_8272_41DD_1AB8F5F59A1B"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 4.24,
   "distance": 1,
   "panorama": "this.panorama_38D1C363_3717_5643_4195_478CFFE63BBB",
   "backwardYaw": 79.52
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -172.61,
   "distance": 1,
   "panorama": "this.panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF",
   "backwardYaw": -50.41
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_t.jpg",
 "hfovMax": 130,
 "audios": [
  "this.audio_8C43F5A0_9BFC_CA86_41CE_1E13396E3D96"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_38D94D50_3717_325D_4192_23A4473BE97C_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_38D1356B_3714_F243_41C1_0321F472A6FD_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -129,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A5F9EE26_B7E5_2DF8_41BD_3ABF88952B86"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 118.74,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A6BB2CE3_B7E5_2E78_41E3_52C3FA2F8A90"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -33.22,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A51ABE64_B7E5_2A7F_41D6_D382BBD593FF"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 177.59,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A6849CEC_B7E5_2E4F_41E1_6E0D2A33C310"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "GS lt 2",
 "hfovMin": "135%",
 "id": "panorama_38E63971_3717_325F_41B2_8F085CCBFE09",
 "overlays": [
  "this.overlay_4421392D_351C_F3C7_41C9_5957C1C96F6E",
  "this.overlay_88448013_907E_8215_41D2_C5E16AF14A66"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 140.49,
   "distance": 1,
   "panorama": "this.panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3",
   "backwardYaw": 8.41
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 102.83,
   "distance": 1,
   "panorama": "this.panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361",
   "backwardYaw": -134.14
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_t.jpg",
 "hfovMax": 130,
 "audios": [
  "this.audio_87F5A704_9312_B90C_41CD_785D747549D1"
 ]
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_852D1F21_931F_A904_41C0_82EC225E5B16.ogg",
  "mp3Url": "media/audio_852D1F21_931F_A904_41C0_82EC225E5B16.mp3"
 },
 "id": "audio_852D1F21_931F_A904_41C0_82EC225E5B16",
 "data": {
  "label": "Audio_Lab.Studio"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -9.01,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A6000D4C_B7E5_2E4F_41DB_AAD5F036AF51"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -114.98,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A554EE86_B7E5_2AB8_41E6_264B53E77535"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 98.24,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A6A03F36_B7E5_2BD8_41C1_C14D4BE9A97A"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_8307FC55_930F_AF0C_41C4_C62B219E29BE",
 "id": "audio_87442396_9313_990C_41B3_4F8345631F05",
 "data": {
  "label": "Navigasi_Null"
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "jalan depan ruko",
 "hfovMin": "135%",
 "id": "panorama_38E649D7_3717_D243_41CA_441C811EA963",
 "overlays": [
  "this.overlay_22B5BD15_370B_D3C7_41BE_C35C32034FE1",
  "this.overlay_20441D22_371D_D3FD_41C3_084B070F5054"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -168.06,
   "distance": 1,
   "panorama": "this.panorama_38D1312F_3717_53C3_4192_0AF0F07EB655",
   "backwardYaw": -7.05
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 10.4,
   "distance": 1,
   "panorama": "this.panorama_38D1C355_3717_7647_419B_47B5347BBD92",
   "backwardYaw": -8.47
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -168.06,
   "distance": 1,
   "panorama": "this.panorama_38D1C355_3717_7647_419B_47B5347BBD92",
   "backwardYaw": -8.47
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_t.jpg",
 "hfovMax": 130,
 "audios": [
  "this.audio_9CB6214B_930D_9904_41DA_F68E2C2C593E"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -1.69,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A50A7E5A_B7E5_2A48_41D3_0F3C85F18302"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 133.3,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A546BE7E_B7E5_2A4B_41CD_61593476FC03"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -8.65,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A5E84034_B7E5_35D8_41B2_773200010799"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_38DD01DC_3715_3245_41BF_FED182B98C45_camera"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Auditorium Lt.2",
 "hfovMin": "135%",
 "id": "panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E",
 "overlays": [
  "this.overlay_1E53EFC9_370D_4E4F_41C1_881B7092E117",
  "this.overlay_1F773744_370C_DE45_41BF_BA698C3F2083"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -70.52,
   "distance": 1,
   "panorama": "this.panorama_38E0CB76_3717_7644_41A0_A9D432BD3862",
   "backwardYaw": -127.95
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -173.27,
   "distance": 1,
   "panorama": "this.panorama_38D14E9B_3717_4EC3_41B2_5731446C5418",
   "backwardYaw": 1.34
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_t.jpg",
 "hfovMax": 130,
 "audios": [
  "this.audio_81DAD99A_9316_E904_41D2_226049E1F21E"
 ]
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_875D799F_930E_693C_41E0_25E68EC837A7",
 "id": "audio_8DF276B6_9B84_568A_41C6_346DCA9171D2",
 "data": {
  "label": "Navigasi_Null"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -174.06,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A635EFBB_B7E5_2AC9_41D3_CAB96B898591"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -98.46,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A75D2F2E_B7E5_2BCB_41CE_9B0D99887AE2"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_8341BDB8_930E_6904_41E2_3CE1038AE0D8.ogg",
  "mp3Url": "media/audio_8341BDB8_930E_6904_41E2_3CE1038AE0D8.mp3"
 },
 "id": "audio_8341BDB8_930E_6904_41E2_3CE1038AE0D8",
 "data": {
  "label": "Navigasi_Null"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -23.68,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A640BD8E_B7E5_2ECB_41AD_00A2C5D92690"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Parkiran audit",
 "hfovMin": "135%",
 "id": "panorama_38DF3F39_3715_CFCF_41B9_9107650158A7",
 "overlays": [
  "this.overlay_2A05EDCE_3775_3245_41C0_54C0BBB0645C",
  "this.overlay_2B98DA22_3775_51FD_41BC_83022112DCEB",
  "this.overlay_2B066F65_3775_4E47_4199_638BFDE90524"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 8.27,
   "distance": 1,
   "panorama": "this.panorama_38E53807_3717_51C3_41C3_684D314D142D",
   "backwardYaw": -46.7
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -107.57,
   "distance": 1,
   "panorama": "this.panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E",
   "backwardYaw": 65.02
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 169.91,
   "distance": 1,
   "panorama": "this.panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF",
   "backwardYaw": -88.75
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 171.53,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A5165079_B7E5_3649_41A0_5EC55F47C173"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 171.53,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A50BB071_B7E5_3659_41DB_E6E38A7C287E"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_camera"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_8307FC55_930F_AF0C_41C4_C62B219E29BE",
 "id": "audio_81A16B0C_9315_A91C_41D1_6540C5032B69",
 "data": {
  "label": "Navigasi_Null"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -99.66,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A7788EFB_B7E5_2A49_41D9_0877F237B808"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Pekarangan audit",
 "hfovMin": "135%",
 "id": "panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E",
 "overlays": [
  "this.overlay_136C7CD0_371B_525C_4187_1258020ED94C",
  "this.overlay_134C07F6_371D_3E45_4194_88C6593BF512"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -169.64,
   "distance": 1,
   "panorama": "this.panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A",
   "backwardYaw": -11.98
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 65.02,
   "distance": 1,
   "panorama": "this.panorama_38DF3F39_3715_CFCF_41B9_9107650158A7",
   "backwardYaw": -107.57
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 18.77,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A5420093_B7E5_36D9_41D0_A0B943EDEEA5"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_38E4ADCF_3715_7243_41C6_53A461661D81_camera"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Jalan Utama",
 "hfovMin": "135%",
 "id": "panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6",
 "overlays": [
  "this.overlay_162DF47F_377C_D243_4198_EDE325F614A6",
  "this.overlay_179B1AC5_377B_3647_41C6_0F626498F549"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 13.83,
   "distance": 1,
   "panorama": "this.panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E",
   "backwardYaw": 131.2
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_t.jpg",
 "hfovMax": 130,
 "audios": [
  "this.audio_8307EC55_930F_AF0C_41C5_0E09F9C505E2"
 ]
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_875D799F_930E_693C_41E0_25E68EC837A7",
 "id": "audio_876BA82B_9312_7704_41D4_0E81D85BDA33",
 "data": {
  "label": "Navigasi_Null"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 129.59,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A6ACDF48_B7E5_2A48_41B9_D898B5C6B78B"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "GS koridor 1",
 "hfovMin": "135%",
 "id": "panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4",
 "overlays": [
  "this.overlay_0DD5943B_350B_51C3_419F_8D34E2ADE565",
  "this.overlay_0B09825E_350B_5645_419A_945DD669209E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 169.79,
   "distance": 1,
   "panorama": "this.panorama_38E4D980_3717_72BD_41B8_057AC02161F1",
   "backwardYaw": 114.28
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 57.55,
   "distance": 1,
   "panorama": "this.panorama_38DD01DC_3715_3245_41BF_FED182B98C45",
   "backwardYaw": -171.5
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_t.jpg",
 "hfovMax": 130,
 "audios": [
  "this.audio_8754D9A8_9312_A904_41C0_0B11782AC606"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -100.48,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A6A9BF40_B7E5_2BB7_41CB_53A4FDD83F82"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_82FCF32F_9312_B91C_41C3_1523E1482A7D.ogg",
  "mp3Url": "media/audio_82FCF32F_9312_B91C_41C3_1523E1482A7D.mp3"
 },
 "id": "audio_82FCF32F_9312_B91C_41C3_1523E1482A7D",
 "data": {
  "label": "Audio_GS_Bag.Dalam Lt.1"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_camera"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_810E08B6_9316_B70C_4184_D7545DD43644.ogg",
  "mp3Url": "media/audio_810E08B6_9316_B70C_4184_D7545DD43644.mp3"
 },
 "id": "audio_810E08B6_9316_B70C_4184_D7545DD43644",
 "data": {
  "label": "Audio_Lt.1_2_Audit"
 }
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_875D799F_930E_693C_41E0_25E68EC837A7",
 "id": "audio_8F457737_9B84_578A_41A9_A2B527464314",
 "data": {
  "label": "Navigasi_Null"
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Depan GS lt 1",
 "hfovMin": "135%",
 "id": "panorama_38E4D980_3717_72BD_41B8_057AC02161F1",
 "overlays": [
  "this.overlay_0DDC64D7_34FF_3243_419B_39B379EF929B",
  "this.overlay_01061A72_34FD_D65D_4180_0BF098FE1EAD",
  "this.overlay_0E423D81_34FB_32BF_4196_4133A57D751A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 11.7,
   "distance": 1,
   "panorama": "this.panorama_38D0B196_3717_32C5_41AE_3819CFBC2276",
   "backwardYaw": -88.54
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_38E63971_3717_325F_41B2_8F085CCBFE09"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 114.28,
   "distance": 1,
   "panorama": "this.panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4",
   "backwardYaw": 169.79
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_t.jpg",
 "hfovMax": 130,
 "audios": [
  "this.audio_876BA82B_9312_7704_41D4_0E81D85BDA33"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_camera"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_875D799F_930E_693C_41E0_25E68EC837A7",
 "id": "audio_8C43F5A0_9BFC_CA86_41CE_1E13396E3D96",
 "data": {
  "label": "Navigasi_Null"
 }
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_871C3E38_9312_EB04_41DB_076E8535D244.ogg",
  "mp3Url": "media/audio_871C3E38_9312_EB04_41DB_076E8535D244.mp3"
 },
 "id": "audio_871C3E38_9312_EB04_41DB_076E8535D244",
 "data": {
  "label": "Audio_GS_Bag.Dalam Lt.1"
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "ruang gs 2",
 "hfovMin": "135%",
 "id": "panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8",
 "overlays": [
  "this.overlay_5ED1F5D4_353B_3245_41C4_1F93FD76B34E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -55.84,
   "distance": 1,
   "panorama": "this.panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D",
   "backwardYaw": 28.31
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_t.jpg",
 "hfovMax": 130,
 "audios": [
  "this.audio_8400EB08_931E_6904_41C4_9252EB6907CE"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 45.86,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A74E3F1C_B7E5_2BC8_41C2_A5463A9DAA83"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -7.41,
  "pitch": -2.75
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_camera"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_8307FC55_930F_AF0C_41C4_C62B219E29BE",
 "id": "audio_86D70314_931E_790C_41D2_C567D1DC7091",
 "data": {
  "label": "Navigasi_Null"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -168.3,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A591AE03_B7E5_2DB9_41B0_1E53139B8A72"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Koridor Gedung Lt.1",
 "hfovMin": "135%",
 "id": "panorama_3FEC1993_34F7_52C3_41BB_0159964C458F",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3FEC1993_34F7_52C3_41BB_0159964C458F_t.jpg",
 "hfovMax": 130,
 "audios": [
  "this.audio_819CF114_9316_790C_41D9_08485B850FD1"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 170.97,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A580101B_B7E5_35C8_41BC_5DE09CB99844"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -105.58,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A762DED7_B7E5_2A59_41CE_712DE79D044F"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_803D9B71_9312_A904_41E1_017661EE0AD1.ogg",
  "mp3Url": "media/audio_803D9B71_9312_A904_41E1_017661EE0AD1.mp3"
 },
 "id": "audio_803D9B71_9312_A904_41E1_017661EE0AD1",
 "data": {
  "label": "Audio_Koridor Lt.1_Depan Theater"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 111.53,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A77E1F03_B7E5_2BB9_41B9_AAF4EE616CDE"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 95.16,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A64CEDA1_B7E5_2EF8_41E4_7E61FF49AE2B"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Koridor Gedung Lt.1",
 "hfovMin": "135%",
 "id": "panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055",
 "overlays": [
  "this.overlay_0757BE38_3715_31CD_41B9_245892298F75",
  "this.overlay_0138449A_3715_D2CD_41A7_BD44803BD98F",
  "this.overlay_8E77ECBC_905E_8213_41D3_8745B7B4B090"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -66,
   "distance": 1,
   "panorama": "this.panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD",
   "backwardYaw": 35.69
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 80.17,
   "distance": 1,
   "panorama": "this.panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206",
   "backwardYaw": -61.26
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_t.jpg",
 "hfovMax": 130,
 "audios": [
  "this.audio_803D9B71_9312_A904_41E1_017661EE0AD1"
 ]
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Ruang dosen",
 "hfovMin": "135%",
 "id": "panorama_38C881B1_3715_52DC_41C2_E18801508327",
 "overlays": [
  "this.overlay_79AE6F2F_3515_4FC3_4198_C266FBF10A92"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 119.87,
   "distance": 1,
   "panorama": "this.panorama_38D0E554_3715_5244_41A6_46AD73AD729B",
   "backwardYaw": -81.76
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_38D1712F_3717_F3C3_41B3_CE44637321AA_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 8.5,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A60BEFCC_B7E5_2A48_41B4_B792ED9C4561"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -122.45,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A5C55E2F_B7E5_2DC9_41C0_EBBAA382B5B4"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 83.05,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A73F9C52_B7E5_2E5B_41E4_86129A6A9212"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Lt.3 GS",
 "hfovMin": "135%",
 "id": "panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3",
 "overlays": [
  "this.overlay_52979F7B_350B_4E4C_41BE_CC7E8613E10B",
  "this.overlay_8A0EDB2F_9073_860E_41E0_A6A77C8680B5"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 8.41,
   "distance": 1,
   "panorama": "this.panorama_38E63971_3717_325F_41B2_8F085CCBFE09",
   "backwardYaw": 140.49
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -174.46,
   "distance": 1,
   "panorama": "this.panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D",
   "backwardYaw": 117.78
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_t.jpg",
 "hfovMax": 130,
 "audios": [
  "this.audio_8E02AEBD_9B85_D6FE_41B9_44E52E4F6166"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 33.56,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A6FCDD18_B7E5_2FD7_41CE_0874705CC5F9"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -169.6,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A58EE023_B7E5_35F8_41E0_91DEB77D22B9"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 47.23,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A6E6AD07_B7E5_2FB9_41D0_1256AD8A20FA"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -14.22,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A7664EDF_B7E5_2A48_41DD_A5424BA259FE"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_9C97FA48_930E_AB04_41D6_723615B1214F.ogg",
  "mp3Url": "media/audio_9C97FA48_930E_AB04_41D6_723615B1214F.mp3"
 },
 "id": "audio_9C97FA48_930E_AB04_41D6_723615B1214F",
 "data": {
  "label": "Audio_Jalan Utama_G. Admin"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -73.24,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A770ECA0_B7E5_2EF7_41E0_8A5407E50ED0"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 168.02,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A6FD8F8E_B7E5_2AC8_41E1_6FB4252596E5"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_8307FC55_930F_AF0C_41C4_C62B219E29BE",
 "id": "audio_8307EC55_930F_AF0C_41C5_0E09F9C505E2",
 "data": {
  "label": "Navigasi_Null"
 }
},
{
 "fontColor": "#FFFFFF",
 "class": "Menu",
 "rollOverBackgroundColor": "#000000",
 "children": [
  {
   "class": "MenuItem",
   "label": "Gerbang depan",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  },
  {
   "class": "MenuItem",
   "label": "jalan depan ruko",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  },
  {
   "class": "MenuItem",
   "label": "Jembatan",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  },
  {
   "class": "MenuItem",
   "label": "Menuju bundaran",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  },
  {
   "class": "MenuItem",
   "label": "Bundaran",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  },
  {
   "class": "MenuItem",
   "label": "Jalan Utama",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  },
  {
   "class": "MenuItem",
   "label": "Parkiran audit",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  },
  {
   "class": "MenuItem",
   "label": "Jalan Utama",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  },
  {
   "class": "MenuItem",
   "label": "Jalan Utama",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  },
  {
   "class": "MenuItem",
   "label": "Jalan Utama",
   "click": "this.mainPlayList.set('selectedIndex', 9)"
  },
  {
   "class": "MenuItem",
   "label": "parkiran elektro1",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  },
  {
   "class": "MenuItem",
   "label": "parkiran elektro 2",
   "click": "this.mainPlayList.set('selectedIndex', 11)"
  },
  {
   "class": "MenuItem",
   "label": "Pekarangan audit",
   "click": "this.mainPlayList.set('selectedIndex', 12)"
  },
  {
   "class": "MenuItem",
   "label": "Auditorium Lt.1",
   "click": "this.mainPlayList.set('selectedIndex', 13)"
  },
  {
   "class": "MenuItem",
   "label": "Auditorium Lt.1",
   "click": "this.mainPlayList.set('selectedIndex', 14)"
  },
  {
   "class": "MenuItem",
   "label": "Auditorium ",
   "click": "this.mainPlayList.set('selectedIndex', 15)"
  },
  {
   "class": "MenuItem",
   "label": "Auditorium Lt.2",
   "click": "this.mainPlayList.set('selectedIndex', 16)"
  },
  {
   "class": "MenuItem",
   "label": "Auditorium Lt.2",
   "click": "this.mainPlayList.set('selectedIndex', 17)"
  },
  {
   "class": "MenuItem",
   "label": "Auditorium Lt.2",
   "click": "this.mainPlayList.set('selectedIndex', 18)"
  },
  {
   "class": "MenuItem",
   "label": "Koridor Gedung Lt.1",
   "click": "this.mainPlayList.set('selectedIndex', 19)"
  },
  {
   "class": "MenuItem",
   "label": "Koridor Gedung Lt.1",
   "click": "this.mainPlayList.set('selectedIndex', 20)"
  },
  {
   "class": "MenuItem",
   "label": "Koridor Gedung Lt.1",
   "click": "this.mainPlayList.set('selectedIndex', 21)"
  },
  {
   "class": "MenuItem",
   "label": "Koridor Gedung Lt.1",
   "click": "this.mainPlayList.set('selectedIndex', 22)"
  },
  {
   "class": "MenuItem",
   "label": "Koridor Gedung Lt.1",
   "click": "this.mainPlayList.set('selectedIndex', 23)"
  },
  {
   "class": "MenuItem",
   "label": "IMG_20240319_092820_00_merged",
   "click": "this.mainPlayList.set('selectedIndex', 24)"
  },
  {
   "class": "MenuItem",
   "label": "antara gedung administrasi",
   "click": "this.mainPlayList.set('selectedIndex', 25)"
  },
  {
   "class": "MenuItem",
   "label": "Koridor Lt.2",
   "click": "this.mainPlayList.set('selectedIndex', 26)"
  },
  {
   "class": "MenuItem",
   "label": "Depan GS lt 1",
   "click": "this.mainPlayList.set('selectedIndex', 27)"
  },
  {
   "class": "MenuItem",
   "label": "GS koridor 1",
   "click": "this.mainPlayList.set('selectedIndex', 28)"
  },
  {
   "class": "MenuItem",
   "label": "GS Lt 1",
   "click": "this.mainPlayList.set('selectedIndex', 29)"
  },
  {
   "class": "MenuItem",
   "label": "GS lt 2",
   "click": "this.mainPlayList.set('selectedIndex', 30)"
  },
  {
   "class": "MenuItem",
   "label": "Gs Lt 3",
   "click": "this.mainPlayList.set('selectedIndex', 31)"
  },
  {
   "class": "MenuItem",
   "label": "Gs ruangan 3",
   "click": "this.mainPlayList.set('selectedIndex', 32)"
  },
  {
   "class": "MenuItem",
   "label": "GS_Lt.3",
   "click": "this.mainPlayList.set('selectedIndex', 33)"
  },
  {
   "class": "MenuItem",
   "label": "Koridor Lt.3",
   "click": "this.mainPlayList.set('selectedIndex', 34)"
  },
  {
   "class": "MenuItem",
   "label": "Koridor Lt.1",
   "click": "this.mainPlayList.set('selectedIndex', 35)"
  },
  {
   "class": "MenuItem",
   "label": "Koridor depan lab studio",
   "click": "this.mainPlayList.set('selectedIndex', 36)"
  },
  {
   "class": "MenuItem",
   "label": "Lt.3 GS",
   "click": "this.mainPlayList.set('selectedIndex', 37)"
  },
  {
   "class": "MenuItem",
   "label": "Lt. 2 Gedung Utama",
   "click": "this.mainPlayList.set('selectedIndex', 38)"
  },
  {
   "class": "MenuItem",
   "label": "koridor lt 1",
   "click": "this.mainPlayList.set('selectedIndex', 39)"
  },
  {
   "class": "MenuItem",
   "label": "Jembatan lt 2",
   "click": "this.mainPlayList.set('selectedIndex', 40)"
  },
  {
   "class": "MenuItem",
   "label": "Koridor Lt.2",
   "click": "this.mainPlayList.set('selectedIndex', 41)"
  },
  {
   "class": "MenuItem",
   "label": "Koridor lt 2 ",
   "click": "this.mainPlayList.set('selectedIndex', 42)"
  },
  {
   "class": "MenuItem",
   "label": "Koridor Lt. 2 ",
   "click": "this.mainPlayList.set('selectedIndex', 43)"
  },
  {
   "class": "MenuItem",
   "label": "Koridor lt 2 outdoor",
   "click": "this.mainPlayList.set('selectedIndex', 44)"
  },
  {
   "class": "MenuItem",
   "label": "Koridor Lt.2",
   "click": "this.mainPlayList.set('selectedIndex', 45)"
  },
  {
   "class": "MenuItem",
   "label": "Lab komdat 1",
   "click": "this.mainPlayList.set('selectedIndex', 46)"
  },
  {
   "class": "MenuItem",
   "label": "Lab komdat 2",
   "click": "this.mainPlayList.set('selectedIndex', 47)"
  },
  {
   "class": "MenuItem",
   "label": "Lab mobile",
   "click": "this.mainPlayList.set('selectedIndex', 48)"
  },
  {
   "class": "MenuItem",
   "label": "lab multimed 2",
   "click": "this.mainPlayList.set('selectedIndex', 49)"
  },
  {
   "class": "MenuItem",
   "label": "Lab multimed",
   "click": "this.mainPlayList.set('selectedIndex', 50)"
  },
  {
   "class": "MenuItem",
   "label": "Lab multimedia",
   "click": "this.mainPlayList.set('selectedIndex', 51)"
  },
  {
   "class": "MenuItem",
   "label": "Lab pengukuran",
   "click": "this.mainPlayList.set('selectedIndex', 52)"
  },
  {
   "class": "MenuItem",
   "label": "lab sinematografi",
   "click": "this.mainPlayList.set('selectedIndex', 53)"
  },
  {
   "class": "MenuItem",
   "label": "Lab Studio 1",
   "click": "this.mainPlayList.set('selectedIndex', 54)"
  },
  {
   "class": "MenuItem",
   "label": "Lab studio 2",
   "click": "this.mainPlayList.set('selectedIndex', 55)"
  },
  {
   "class": "MenuItem",
   "label": "Jalan GS dan G.Utama",
   "click": "this.mainPlayList.set('selectedIndex', 56)"
  },
  {
   "class": "MenuItem",
   "label": "Koridor Lt.2",
   "click": "this.mainPlayList.set('selectedIndex', 57)"
  },
  {
   "class": "MenuItem",
   "label": "Ruang dosen",
   "click": "this.mainPlayList.set('selectedIndex', 58)"
  },
  {
   "class": "MenuItem",
   "label": "ruang gs 1",
   "click": "this.mainPlayList.set('selectedIndex', 59)"
  },
  {
   "class": "MenuItem",
   "label": "ruang gs 2",
   "click": "this.mainPlayList.set('selectedIndex', 60)"
  }
 ],
 "label": "Media",
 "id": "Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "opacity": 0.4,
 "fontFamily": "Arial",
 "selectedFontColor": "#FFFFFF",
 "rollOverOpacity": 0.8,
 "selectedBackgroundColor": "#202020",
 "backgroundColor": "#404040",
 "rollOverFontColor": "#FFFFFF"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": "this.audioresource_8307FC55_930F_AF0C_41C4_C62B219E29BE",
 "id": "audio_80EFB0C3_9312_F704_41D9_39DD01D4B11E",
 "data": {
  "label": "Navigasi_Null"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -10.4,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A69D5CFE_B7E5_2E4B_41E2_6781EE7C4AC9"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -175.76,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A6DE3D31_B7E5_2FD8_41D8_6DC6AD6E229E"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 31.21,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A664DD65_B7E5_2E79_41D4_D562B163E7F2"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -144.31,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A6AF5CDC_B7E5_2E4F_41C7_7A065E8B79C6"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_9C85497D_930D_A9FC_41D3_07A357607C82.ogg",
  "mp3Url": "media/audio_9C85497D_930D_A9FC_41D3_07A357607C82.mp3"
 },
 "id": "audio_9C85497D_930D_A9FC_41D3_07A357607C82",
 "data": {
  "label": "Audio_Jalan Utama"
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Koridor Lt.2",
 "hfovMin": "135%",
 "id": "panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC",
 "overlays": [
  "this.overlay_6D21AF6D_357C_CE47_41A1_798DA2375614",
  "this.overlay_6D7F22E3_357F_3643_41A1_B72F2388CD70",
  "this.overlay_89716E21_9051_BE32_41BB_D4623073FB1E",
  "this.overlay_89A20251_9053_8615_41D1_DE5867CF9F8D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 178.31,
   "distance": 1,
   "panorama": "this.panorama_38D17585_3714_D2C7_418B_782A51353200",
   "backwardYaw": -43.21
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -0.61,
   "distance": 1,
   "panorama": "this.panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361",
   "backwardYaw": 81.54
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "lab sinematografi",
 "hfovMin": "135%",
 "id": "panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2",
 "overlays": [
  "this.overlay_63477BDC_351D_5645_419B_8C4BCB72DE8E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -155.15,
   "distance": 1,
   "panorama": "this.panorama_38D1C363_3717_5643_4195_478CFFE63BBB",
   "backwardYaw": 169.6
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_A4885BF5_B7E5_2A59_419C_BD715DEA1685",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_t.jpg",
 "hfovMax": 130,
 "audios": [
  "this.audio_8D496B51_9B84_5F86_41E0_7B3058CAE2FF"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -10.21,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A687BF62_B7E5_2A78_41D4_8242C9C3FFCB"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 14.35,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A574108A_B7E5_36C8_41DD_C81FB8B834DB"
},
{
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "id": "MainViewer",
 "left": 0,
 "progressBarBorderSize": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "width": "100%",
 "playbackBarProgressBorderSize": 0,
 "progressBarBorderRadius": 0,
 "paddingLeft": 0,
 "playbackBarBorderRadius": 0,
 "minHeight": 50,
 "toolTipShadowOpacity": 1,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "borderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowHorizontalLength": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "class": "ViewerArea",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "toolTipFontColor": "#606060",
 "progressBarBackgroundColorDirection": "vertical",
 "shadow": false,
 "progressRight": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 12,
 "toolTipPaddingTop": 4,
 "displayTooltipInTouchScreens": true,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "paddingRight": 0,
 "transitionMode": "blending",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "top": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarLeft": 0,
 "progressBarBorderColor": "#000000",
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "playbackBarHeadOpacity": 1,
 "paddingTop": 0,
 "toolTipBorderColor": "#767676",
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#000000",
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "toolTipShadowSpread": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "1.11vmin",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBackgroundColorDirection": "vertical",
 "data": {
  "name": "Main Viewer"
 },
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6
},
{
 "horizontalAlign": "left",
 "itemThumbnailShadowVerticalLength": 3,
 "id": "ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB",
 "left": "0.24%",
 "width": 145.2,
 "itemVerticalAlign": "middle",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.24,
 "itemBorderRadius": 0,
 "itemPaddingLeft": 3,
 "verticalAlign": "top",
 "paddingLeft": 20,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "itemThumbnailShadowSpread": 1,
 "itemOpacity": 1,
 "propagateClick": false,
 "minWidth": 20,
 "backgroundColor": [
  "#000000"
 ],
 "playList": "this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB_playlist",
 "itemThumbnailOpacity": 1,
 "borderSize": 0,
 "height": "100%",
 "itemBackgroundColor": [],
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "itemPaddingRight": 3,
 "itemThumbnailShadowOpacity": 0.54,
 "rollOverItemBackgroundOpacity": 0,
 "class": "ThumbnailList",
 "scrollBarColor": "#FFFFFF",
 "shadow": false,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "rollOverItemLabelFontWeight": "normal",
 "selectedItemLabelFontColor": "#FFCC00",
 "itemLabelFontWeight": "normal",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "itemThumbnailShadowBlurRadius": 8,
 "itemThumbnailScaleMode": "fit_outside",
 "itemThumbnailHeight": 75,
 "itemLabelGap": 9,
 "itemLabelFontSize": 14,
 "paddingRight": 20,
 "itemThumbnailShadow": true,
 "itemLabelFontColor": "#FFFFFF",
 "borderRadius": 5,
 "itemThumbnailWidth": 75,
 "top": "0%",
 "itemBackgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0
 ],
 "layout": "vertical",
 "gap": 10,
 "itemHorizontalAlign": "center",
 "paddingBottom": 10,
 "itemPaddingBottom": 3,
 "paddingTop": 10,
 "selectedItemLabelFontWeight": "bold",
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "normal",
 "itemThumbnailShadowColor": "#000000",
 "itemMode": "normal",
 "data": {
  "name": "ThumbnailList35762"
 },
 "visible": false,
 "itemThumbnailShadowHorizontalLength": 3,
 "itemLabelPosition": "bottom",
 "itemLabelFontFamily": "Arial",
 "itemThumbnailBorderRadius": 50
},
{
 "id": "IconButton_88E1A2ED_996C_7571_41E1_36CCB25D712C",
 "left": "0.29%",
 "width": 37.6,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_88E1A2ED_996C_7571_41E1_36CCB25D712C_rollover.png",
 "propagateClick": false,
 "minWidth": 0,
 "height": 17.6,
 "top": "1.97%",
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_88E1A2ED_996C_7571_41E1_36CCB25D712C, false, 0, null, null, false); this.setComponentVisibility(this.Image_89B2B032_9964_F4D4_41C4_A0D4F1AB454D, true, 0, null, null, false)",
 "class": "IconButton",
 "data": {
  "name": "Button37499"
 },
 "visible": false,
 "iconURL": "skin/IconButton_88E1A2ED_996C_7571_41E1_36CCB25D712C.png",
 "pressedIconURL": "skin/IconButton_88E1A2ED_996C_7571_41E1_36CCB25D712C_pressed.png",
 "shadow": false,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "maxHeight": 755,
 "maxWidth": 701,
 "id": "Image_9EB985B4_8FB6_8213_41D2_41F5E1DBE3D0",
 "width": "4.412%",
 "right": "4.04%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_9EB985B4_8FB6_8213_41D2_41F5E1DBE3D0.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "top": "4.49%",
 "propagateClick": false,
 "minWidth": 1,
 "height": "8.567%",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image4813"
 },
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "maxHeight": 684,
 "maxWidth": 1229,
 "id": "Image_89FA09E6_9967_9773_41D5_535A23169252",
 "width": "77.63%",
 "right": "8.3%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_89FA09E6_9967_9773_41D5_535A23169252.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "top": "14.91%",
 "propagateClick": false,
 "minWidth": 1,
 "height": "69.03%",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "data": {
  "name": "ImagMaoe10782\\\\MAOP"
 },
 "visible": false,
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "id": "IconButton_969E2207_992B_94B1_41DA_55CB6A844B14",
 "left": "20.52%",
 "width": 61.6,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_969E2207_992B_94B1_41DA_55CB6A844B14_rollover.png",
 "propagateClick": false,
 "minWidth": 0,
 "height": 21.6,
 "top": "18.09%",
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Image_89FA09E6_9967_9773_41D5_535A23169252, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_969E2207_992B_94B1_41DA_55CB6A844B14, false, 0, null, null, false)",
 "class": "IconButton",
 "data": {
  "name": "BtnMinMap"
 },
 "visible": false,
 "iconURL": "skin/IconButton_969E2207_992B_94B1_41DA_55CB6A844B14.png",
 "pressedIconURL": "skin/IconButton_969E2207_992B_94B1_41DA_55CB6A844B14_pressed.png",
 "shadow": false,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "maxHeight": 304,
 "maxWidth": 348,
 "id": "Image_890D1D6E_9924_8F72_41E2_C91396623840",
 "left": "9.78%",
 "width": "3.925%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_890D1D6E_9924_8F72_41E2_C91396623840.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "top": "6.16%",
 "bottom": "86.46%",
 "propagateClick": false,
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Image_89FA09E6_9967_9773_41D5_535A23169252, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_969E2207_992B_94B1_41DA_55CB6A844B14, true, 0, null, null, false)",
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "data": {
  "name": "IconMap"
 },
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "maxHeight": 159,
 "maxWidth": 172,
 "id": "Image_89B2B032_9964_F4D4_41C4_A0D4F1AB454D",
 "left": "2.67%",
 "width": "4.474%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_89B2B032_9964_F4D4_41C4_A0D4F1AB454D.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "top": "6.19%",
 "bottom": "86.43%",
 "propagateClick": false,
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.ThumbnailList_89D077C9_996B_BBBE_41D5_B2913BD495CB, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_88E1A2ED_996C_7571_41E1_36CCB25D712C, true, 0, null, null, false); this.setComponentVisibility(this.Image_89B2B032_9964_F4D4_41C4_A0D4F1AB454D, false, 0, null, null, false)",
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "data": {
  "name": "IkonColase"
 },
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "children": [
  "this.Image_8A9C7876_9A67_29BB_41CB_FAAFE2F9DC15",
  "this.Container_8A9C4876_9A67_29BB_41D4_31CFBC6BCD23",
  "this.IconButton_8BF986F5_9AA3_26B9_41C4_6F5CCE2192D0"
 ],
 "id": "Container_8A9CD876_9A67_29BB_41B0_37026D402AB5",
 "left": "0%",
 "right": "0%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.64,
 "paddingRight": 0,
 "verticalAlign": "top",
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "paddingLeft": 0,
 "bottom": 0,
 "propagateClick": true,
 "minWidth": 1,
 "height": 118,
 "gap": 10,
 "borderSize": 0,
 "layout": "absolute",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "--MENU"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "backgroundImageUrl": "skin/Container_8A9CD876_9A67_29BB_41B0_37026D402AB5.png",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 817,
 "maxWidth": 1468,
 "id": "Image_88781C60_9AE1_69D7_41E1_3FD5CB6213AD",
 "width": "76.927%",
 "right": "8.32%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_88781C60_9AE1_69D7_41E1_3FD5CB6213AD.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "bottom": "14.34%",
 "propagateClick": false,
 "minWidth": 1,
 "height": "70.796%",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Guide1"
 },
 "visible": false,
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "maxHeight": 817,
 "maxWidth": 1468,
 "id": "Image_88290F5C_9AE1_67EF_41E0_0ECFD3908CE1",
 "width": "69.172%",
 "right": "12.32%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_88290F5C_9AE1_67EF_41E0_0ECFD3908CE1.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "top": "13.31%",
 "bottom": "12.53%",
 "propagateClick": false,
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Guide2"
 },
 "shadow": false,
 "visible": false,
 "horizontalAlign": "center"
},
{
 "id": "IconButton_8819AC98_9AE1_2977_41C3_ED5782720D3C",
 "width": 40,
 "right": "15.04%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_8819AC98_9AE1_2977_41C3_ED5782720D3C_rollover.png",
 "propagateClick": false,
 "minWidth": 0,
 "height": 40,
 "top": "44.83%",
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Image_88290F5C_9AE1_67EF_41E0_0ECFD3908CE1, true, 0, this.effect_899D8E9F_9CFA_446C_41E3_818F0E0EA237, 'showEffect', false); this.setComponentVisibility(this.IconButton_8CCA669B_9C9A_C474_41E2_EA8AC3BBBC78, true, 0, this.effect_899D8E9F_9CFA_446C_41E3_818F0E0EA237, 'showEffect', false); this.setComponentVisibility(this.IconButton_886FC271_9AE3_59B9_41E2_4992D859B2A5, true, 0, this.effect_899D8E9F_9CFA_446C_41E3_818F0E0EA237, 'showEffect', false); this.setComponentVisibility(this.Image_88781C60_9AE1_69D7_41E1_3FD5CB6213AD, false, 0, null, null, false)",
 "class": "IconButton",
 "data": {
  "name": "ButtonNext"
 },
 "visible": false,
 "iconURL": "skin/IconButton_8819AC98_9AE1_2977_41C3_ED5782720D3C.png",
 "pressedIconURL": "skin/IconButton_8819AC98_9AE1_2977_41C3_ED5782720D3C_pressed.png",
 "shadow": false,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "id": "IconButton_8CCA669B_9C9A_C474_41E2_EA8AC3BBBC78",
 "left": "21.41%",
 "width": 40,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_8CCA669B_9C9A_C474_41E2_EA8AC3BBBC78_rollover.png",
 "propagateClick": false,
 "minWidth": 0,
 "height": 40,
 "top": "45.79%",
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Image_88781C60_9AE1_69D7_41E1_3FD5CB6213AD, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_8819AC98_9AE1_2977_41C3_ED5782720D3C, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_886FC271_9AE3_59B9_41E2_4992D859B2A5, true, 0, null, null, false); this.setComponentVisibility(this.Image_88290F5C_9AE1_67EF_41E0_0ECFD3908CE1, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_8CCA669B_9C9A_C474_41E2_EA8AC3BBBC78, false, 0, null, null, false)",
 "class": "IconButton",
 "data": {
  "name": "Buttonprevious"
 },
 "visible": false,
 "iconURL": "skin/IconButton_8CCA669B_9C9A_C474_41E2_EA8AC3BBBC78.png",
 "pressedIconURL": "skin/IconButton_8CCA669B_9C9A_C474_41E2_EA8AC3BBBC78_pressed.png",
 "shadow": false,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "maxHeight": 817,
 "maxWidth": 1468,
 "id": "Image_89F9A05D_9B83_C9BE_41D5_887FE8AB1950",
 "width": "71.978%",
 "right": "10.62%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_89F9A05D_9B83_C9BE_41D5_887FE8AB1950.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "bottom": "13.73%",
 "propagateClick": false,
 "minWidth": 1,
 "height": "71.925%",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Infoimage3"
 },
 "visible": false,
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "id": "IconButton_886FC271_9AE3_59B9_41E2_4992D859B2A5",
 "left": "21.47%",
 "width": 24.8,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_886FC271_9AE3_59B9_41E2_4992D859B2A5_rollover.png",
 "propagateClick": false,
 "minWidth": 0,
 "height": 18.4,
 "top": "17.6%",
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Image_88781C60_9AE1_69D7_41E1_3FD5CB6213AD, false, 0, null, null, false); this.setComponentVisibility(this.Image_88290F5C_9AE1_67EF_41E0_0ECFD3908CE1, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_8819AC98_9AE1_2977_41C3_ED5782720D3C, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_8CCA669B_9C9A_C474_41E2_EA8AC3BBBC78, false, 0, null, null, false); this.setComponentVisibility(this.Image_89F9A05D_9B83_C9BE_41D5_887FE8AB1950, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_886FC271_9AE3_59B9_41E2_4992D859B2A5, false, 0, null, null, false)",
 "class": "IconButton",
 "data": {
  "name": "Buttonmin"
 },
 "visible": false,
 "iconURL": "skin/IconButton_886FC271_9AE3_59B9_41E2_4992D859B2A5.png",
 "pressedIconURL": "skin/IconButton_886FC271_9AE3_59B9_41E2_4992D859B2A5_pressed.png",
 "shadow": false,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 34)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -78.8,
   "hfov": 8.55,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.69
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -78.8,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 145,
      "height": 157
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.69,
   "hfov": 8.55
  }
 ],
 "id": "overlay_6C2AF16F_357D_F243_41B6_AEE3142849C2",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 47)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -18.23,
   "hfov": 10.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.69
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_5E99CD4F_353F_3243_41CB_85BA07D639C4",
   "pitch": -8.69,
   "yaw": -18.23,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.84,
   "distance": 100
  }
 ],
 "id": "overlay_68845C35_357B_D1C7_41C9_671D285C5462",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "maxHeight": 54,
 "maxWidth": 55,
 "id": "IconButton_8BF986F5_9AA3_26B9_41C4_6F5CCE2192D0",
 "width": 45.4,
 "right": "0.83%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "bottom": "3.39%",
 "propagateClick": false,
 "minWidth": 1,
 "height": 39.05,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "class": "IconButton",
 "data": {
  "name": "IconButton12826"
 },
 "iconURL": "skin/IconButton_8BF986F5_9AA3_26B9_41C4_6F5CCE2192D0.png",
 "shadow": false,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D93D39_3714_F3CF_418D_7A8975AB5289, this.camera_A5D0604E_B7E5_364B_41C4_99D31BB87CFA); this.mainPlayList.set('selectedIndex', 44)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 142.87,
   "hfov": 12.94,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.48
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_678669AE_3537_72C5_41C1_B37F6F0AB04E",
   "pitch": -19.48,
   "yaw": 142.87,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.94,
   "distance": 100
  }
 ],
 "id": "overlay_7EB7BFBC_350D_4EC5_4189_322F9200F505",
 "data": {
  "label": "Arrow 06c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3, this.camera_A5C27046_B7E5_35BB_41CB_5A589C5DC56D); this.mainPlayList.set('selectedIndex', 57)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 5.94,
   "hfov": 10.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.15
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 5.94,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 173,
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.15,
   "hfov": 10.19
  }
 ],
 "id": "overlay_7E00A746_350C_FE45_41C0_DAF20521CB28",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 38)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -86.54,
   "hfov": 7.2,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.21
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -86.54,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E1ADA9_3715_52CF_41C7_5A0996061F42_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 122,
      "height": 137
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.21,
   "hfov": 7.2
  }
 ],
 "id": "overlay_60323ED1_3514_CE5F_41C8_C80EDB4358BB",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D, this.camera_A59C7E14_B7E5_2DD8_41E6_67F141813127); this.mainPlayList.set('selectedIndex', 31)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -150.97,
   "hfov": 10.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.73
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -150.97,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 173,
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.73,
   "hfov": 10.28
  }
 ],
 "id": "overlay_5FC56D74_3535_5245_41BC_37A44A6274B6",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38E77BDC_3717_5645_41C4_5C7C39771035, this.camera_A6654FDE_B7E5_2A48_4182_C2FF174A67F5); this.mainPlayList.set('selectedIndex', 36)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 51,
   "hfov": 8.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.95
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 51,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 146,
      "height": 150
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.95,
   "hfov": 8.57
  }
 ],
 "id": "overlay_79FCFE1A_3514_F1CD_41CA_B8FB659B7385",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79, this.camera_A619DFD5_B7E5_2A58_41E3_2518DA44CA18); this.mainPlayList.set('selectedIndex', 55)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -170.6,
   "hfov": 17.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.94
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_5E9CDD4F_353F_3243_41B9_9613CE7380F8",
   "pitch": -16.94,
   "yaw": -170.6,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.86,
   "distance": 100
  }
 ],
 "id": "overlay_65868634_3515_51C5_41C3_B458A991A20D",
 "data": {
  "label": "Arrow 06c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D1C363_3717_5643_4195_478CFFE63BBB, this.camera_A5761E75_B7E5_2A58_41D0_1345AF626F65); this.mainPlayList.set('selectedIndex', 38)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -132.77,
   "hfov": 10.16,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.26
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -132.77,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E63D57_3715_3243_4168_734E9BAFFB1A_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 173,
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.26,
   "hfov": 10.16
  }
 ],
 "id": "overlay_6BDF6715_3577_FFC7_41C9_D7C112D235F7",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206, this.camera_A5D37E38_B7E5_2DD7_41B7_22FF5E6C0B56); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.1,
   "hfov": 9.23,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.67
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -4.1,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 156,
      "height": 165
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.67,
   "hfov": 9.23
  }
 ],
 "id": "overlay_5D874BBD_3534_D6C7_418C_9175197167AB",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4, this.camera_A5C55E2F_B7E5_2DC9_41C0_EBBAA382B5B4); this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -171.5,
   "hfov": 12.82,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 18
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.91
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -171.5,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DD01DC_3715_3245_41BF_FED182B98C45_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 221,
      "height": 252
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.91,
   "hfov": 12.82
  }
 ],
 "id": "overlay_47801017_3534_D1C3_41BA_EA6F98BB9E75",
 "data": {
  "label": "Image"
 }
},
{
 "class": "AudioResource",
 "oggUrl": "media/audio_83583D24_930F_A90C_41D5_2A6268C1755F.ogg",
 "mp3Url": "media/audio_83583D24_930F_A90C_41D5_2A6268C1755F.mp3",
 "id": "audioresource_875D799F_930E_693C_41E0_25E68EC837A7"
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8, this.camera_A5A68009_B7E5_35C8_41DB_7E112DE6403A); this.mainPlayList.set('selectedIndex', 60)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 28.31,
   "hfov": 10.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.02
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 28.31,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 173,
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.02,
   "hfov": 10.24
  }
 ],
 "id": "overlay_514720D5_350F_5247_41C8_B0AFDAEDF11B",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED, this.camera_A64D3FF8_B7E5_2A48_41A9_BE7783861560); this.mainPlayList.set('selectedIndex', 34)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.41,
   "hfov": 10.45,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.63
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_5EE24D4F_353F_3243_41C2_1834C0F06FC9",
   "pitch": -12.63,
   "yaw": -2.41,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.45,
   "distance": 100
  }
 ],
 "id": "overlay_54D66C2F_350F_31C3_41C7_BD13378E2D42",
 "data": {
  "label": "Arrow 06c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38DBFA40_3715_51BD_41C7_9FD3799ED130, this.camera_A658D001_B7E5_35B9_4192_77200EF79A95); this.mainPlayList.set('selectedIndex', 59)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -166.2,
   "hfov": 10.27,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.31
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -166.2,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 173,
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.31,
   "hfov": 10.27
  }
 ],
 "id": "overlay_51B8CC94_350C_D2C4_419E_822B01ABC77C",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3, this.camera_A5B4D012_B7E5_35DB_41DE_DDD16B2AF104); this.mainPlayList.set('selectedIndex', 37)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 117.78,
   "hfov": 10.21,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.48
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 117.78,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 173,
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.48,
   "hfov": 10.21
  }
 ],
 "id": "overlay_50F2E95B_3535_5243_4185_138297492FF8",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 14.4,
   "hfov": 12.46,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 35,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.28
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 14.4,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 211,
      "height": 96
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.28,
   "hfov": 12.46
  }
 ],
 "id": "overlay_88E56D9B_9071_8215_41A5_5681921E2B47",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -171.48,
   "hfov": 9.11,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.95
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -171.48,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0_HS_5_0.png",
      "class": "ImageResourceLevel",
      "width": 154,
      "height": 68
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.95,
   "hfov": 9.11
  }
 ],
 "id": "overlay_89FBD3FA_907E_8616_41D8_39B8AC25B233",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38E63971_3717_325F_41B2_8F085CCBFE09, this.camera_A6986F75_B7E5_2A59_41D0_E4EEF93D7B9E); this.mainPlayList.set('selectedIndex', 30)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -134.14,
   "hfov": 14.26,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 41,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.66
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_679B39A6_3537_72C5_41C7_66266D223AAD",
   "pitch": -20.66,
   "yaw": -134.14,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.26,
   "distance": 50
  }
 ],
 "id": "overlay_08EEB8E6_3514_F245_41C3_0378DC638F2B",
 "data": {
  "label": "Arrow 06c Left-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC, this.camera_A6911F6C_B7E5_2A4F_41D4_CC8AE2BD4D0E); this.mainPlayList.set('selectedIndex', 45)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 81.54,
   "hfov": 10.93,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.73
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_679BB9A6_3537_72C5_4197_5C04A6AF07C8",
   "pitch": -13.73,
   "yaw": 81.54,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.93,
   "distance": 100
  }
 ],
 "id": "overlay_75B4F11C_3515_33C5_41B7_4703BB3C4E37",
 "data": {
  "label": "Arrow 06c"
 }
},
{
 "class": "AudioResource",
 "oggUrl": "media/audio_866A3E81_931D_AB04_41DC_F38E062D24BE.ogg",
 "mp3Url": "media/audio_866A3E81_931D_AB04_41DC_F38E062D24BE.mp3",
 "id": "audioresource_846D0395_931E_B90C_41E1_2B1F5C89FED2"
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D1C363_3717_5643_4195_478CFFE63BBB, this.camera_A629CFB1_B7E5_2AD8_41E0_D8315BE7A812); this.mainPlayList.set('selectedIndex', 38)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -162.45,
   "hfov": 16.1,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -38.56
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_5E9C3D4F_353F_3243_41B1_A41545A58C0F",
   "pitch": -38.56,
   "yaw": -162.45,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.1,
   "distance": 100
  }
 ],
 "id": "overlay_7A5AFDF3_350D_3243_41B6_CCD89B066D49",
 "data": {
  "label": "Arrow 06c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D1356B_3714_F243_41C1_0321F472A6FD, this.camera_A635EFBB_B7E5_2AC9_41D3_CAB96B898591); this.mainPlayList.set('selectedIndex', 43)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 7.3,
   "hfov": 8.1,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.54
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 7.3,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 137,
      "height": 136
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.54,
   "hfov": 8.1
  }
 ],
 "id": "overlay_7BCA6D9C_350B_32C4_41C2_90BA03C45200",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D1356B_3714_F243_41C1_0321F472A6FD, this.camera_A65A0DB4_B7E5_2ED8_41D8_F50040212392); this.mainPlayList.set('selectedIndex', 43)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 52.34,
   "hfov": 14.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 41,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.22
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_678779AF_3537_72C3_41B0_51387DFE3DC0",
   "pitch": -15.22,
   "yaw": 52.34,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.44,
   "distance": 50
  }
 ],
 "id": "overlay_7A110627_3535_51C4_41B3_0D67958BFBE7",
 "data": {
  "label": "Arrow 06c Right-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 45)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -84.7,
   "hfov": 3.93,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.43
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -84.7,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 66,
      "height": 74
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.43,
   "hfov": 3.93
  }
 ],
 "id": "overlay_60DA7E71_357B_4E5F_41B0_F6A24ED12AB0",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D17585_3714_D2C7_418B_782A51353200, this.camera_A64CEDA1_B7E5_2EF8_41E4_7E61FF49AE2B); this.mainPlayList.set('selectedIndex', 41)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -63.3,
   "hfov": 7.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.31
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_5E9B0D4F_353F_3243_41C6_8B779E5A0427",
   "pitch": -19.31,
   "yaw": -63.3,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.71,
   "distance": 100
  }
 ],
 "id": "overlay_6E799749_357D_3E4F_41AB_22D4772A99F0",
 "data": {
  "label": "Arrow 06c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D17585_3714_D2C7_418B_782A51353200, this.camera_A7788EFB_B7E5_2A49_41D9_0877F237B808); this.mainPlayList.set('selectedIndex', 41)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 146.78,
   "hfov": 12.34,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.96
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 146.78,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 210,
      "height": 212
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.96,
   "hfov": 12.34
  }
 ],
 "id": "overlay_054A8B65_370C_F647_4180_B49199A0F6A8",
 "data": {
  "label": "Arrow Transparent Right-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055, this.camera_A775DEF2_B7E5_2A5B_41E2_B66B6D278FAB); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -61.26,
   "hfov": 18.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 41,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.03
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_679349A6_3537_72C5_41C2_BC78AC7FA0E8",
   "pitch": -18.03,
   "yaw": -61.26,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.14,
   "distance": 50
  }
 ],
 "id": "overlay_037E6CD9_370D_324F_41C3_D77EEFB676EF",
 "data": {
  "label": "Arrow 06c Left-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C, this.camera_A77E1F03_B7E5_2BB9_41B9_AAF4EE616CDE); this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 70.18,
   "hfov": 14.21,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.59
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_6793F9A6_3537_72C5_41B6_FA817B4C4924",
   "pitch": -16.59,
   "yaw": 70.18,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.21,
   "distance": 100
  }
 ],
 "id": "overlay_03F7805B_370C_D24C_419E_F524B54E1234",
 "data": {
  "label": "Arrow 06c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38DD01DC_3715_3245_41BF_FED182B98C45, this.camera_A745DF0C_B7E5_2BCF_41DF_9BBCEF825B5E); this.mainPlayList.set('selectedIndex', 56)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90.98,
   "hfov": 10.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.21
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 90.98,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 173,
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.21,
   "hfov": 10.28
  }
 ],
 "id": "overlay_050E17D0_370F_FE5D_41AD_1C6BA8F1AE1B",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E, this.camera_A71C0ECE_B7E5_2A4B_41B9_3CA908A98EDE); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.34,
   "hfov": 18.36,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.65
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_07C374E9_373B_324F_419B_F2436CC4F085",
   "pitch": 3.65,
   "yaw": 1.34,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.36,
   "distance": 100
  }
 ],
 "id": "overlay_1180CE67_370D_4E43_41A6_120D875697DA",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E, this.camera_A762DED7_B7E5_2A59_41CE_712DE79D044F); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 86.65,
   "hfov": 12.74,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 18
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.35
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 86.65,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 215,
      "height": 243
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.35,
   "hfov": 12.74
  }
 ],
 "id": "overlay_118FEDB2_370D_32DD_41A0_51F0DF86A745",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E, this.camera_A747ECBA_B7E5_2ECB_41E1_E60371624BC8); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -18.06,
   "hfov": 9.41,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.93
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_07CD34E9_373B_324F_41B1_17F76C23A7AD",
   "pitch": -5.93,
   "yaw": -18.06,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.41,
   "distance": 100
  }
 ],
 "id": "overlay_288001E2_3775_527D_41B7_20668FB3D151",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6, this.camera_A77D7CB1_B7E5_2ED9_41D7_2178B662120A); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 131.2,
   "hfov": 8.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.82
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_07CDF4E9_373B_324F_41A4_3761F951DA6C",
   "pitch": -8.82,
   "yaw": 131.2,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.25,
   "distance": 50
  }
 ],
 "id": "overlay_28DFB412_377D_51DD_41C7_F7E246254DB2",
 "data": {
  "label": "Arrow 06b Left-Up"
 }
},
{
 "class": "AudioResource",
 "oggUrl": "media/audio_8754D9A8_9312_A904_41C0_0B11782AC606.ogg",
 "mp3Url": "media/audio_8754D9A8_9312_A904_41C0_0B11782AC606.mp3",
 "id": "audioresource_84E9C279_931E_9B04_41DF_D5A0AACE8046"
},
{
 "class": "AudioResource",
 "oggUrl": "media/audio_9C9F6218_930E_9B04_41BA_B9A38FD9D806.ogg",
 "mp3Url": "media/audio_9C9F6218_930E_9B04_41BA_B9A38FD9D806.mp3",
 "id": "audioresource_8307FC55_930F_AF0C_41C4_C62B219E29BE"
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 116.4,
   "hfov": 9.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.49
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 116.4,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0F52E_3715_33C5_41B0_ACB986716BB0_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 166,
      "height": 163
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.49,
   "hfov": 9.79
  }
 ],
 "id": "overlay_6AF071FC_3575_5245_41B2_7685EE7F11FD",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 51)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -17.04,
   "hfov": 7.31,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.23
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -17.04,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 123,
      "height": 120
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.23,
   "hfov": 7.31
  }
 ],
 "id": "overlay_69083401_351C_F1BF_4198_34BD8C2C19A8",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 46)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 166.76,
   "hfov": 5.5,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 18
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.76
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 166.76,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 93,
      "height": 106
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.76,
   "hfov": 5.5
  }
 ],
 "id": "overlay_69DBC790_351D_5EDD_41C2_6BABED32AA8E",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D0B196_3717_32C5_41AE_3819CFBC2276, this.camera_A6000D4C_B7E5_2E4F_41DB_AAD5F036AF51); this.mainPlayList.set('selectedIndex', 29)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.19,
   "hfov": 11.03,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.74
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_5EE02D4F_353F_3243_41C9_F75AD5D6857C",
   "pitch": -12.74,
   "yaw": -4.19,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.03,
   "distance": 100
  }
 ],
 "id": "overlay_55B0EDC7_3514_D243_41B2_B4FFA6B5DF17",
 "data": {
  "label": "Arrow 06c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -14.36,
   "hfov": 8.54,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 31,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.93
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -14.36,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 144,
      "height": 73
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.93,
   "hfov": 8.54
  }
 ],
 "id": "overlay_8A74B1BF_904E_820D_41E1_8509781CB4F5",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 169.13,
   "hfov": 7.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 34,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.54
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 169.13,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 132,
      "height": 61
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.54,
   "hfov": 7.86
  }
 ],
 "id": "overlay_8B93CA36_904F_861E_41DF_863522CDE600",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 49.62,
   "hfov": 15.5,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 34,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.59
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_07CAA4E9_373B_324F_41C6_DF2189429E27",
   "pitch": -9.59,
   "yaw": 49.62,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.5,
   "distance": 50
  }
 ],
 "id": "overlay_2FF2F575_371B_7247_41C4_84929BB66698",
 "data": {
  "label": "Arrow 06b Right-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38DF3F39_3715_CFCF_41B9_9107650158A7, this.camera_A53FCE52_B7E5_2A5B_41D6_D0FF69EDFAA1); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -46.7,
   "hfov": 12.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.86
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_07CB04E9_373B_324F_41C5_0465B582FE21",
   "pitch": -6.86,
   "yaw": -46.7,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.44,
   "distance": 50
  }
 ],
 "id": "overlay_2DB368E7_3714_D243_41C6_63E7B7B2DCF3",
 "data": {
  "label": "Arrow 06a Left-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 5.68,
   "hfov": 22.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 15,
      "height": 21
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.25
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 5.68,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0_HS_5_0.png",
      "class": "ImageResourceLevel",
      "width": 374,
      "height": 508
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.25,
   "hfov": 22.19
  }
 ],
 "id": "overlay_A7ADB887_B7A5_16B9_41DC_0D3208173439",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 4.15,
   "hfov": 13.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.85
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_07CA04E9_373B_324F_4181_0E82AF969A49",
   "pitch": -13.85,
   "yaw": 4.15,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.86,
   "distance": 100
  }
 ],
 "id": "overlay_21F04E8D_371C_CEC7_41AA_C445756BC9DF",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A, this.camera_A59A702C_B7E5_35CF_41DD_906B85C265CF); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 167.2,
   "hfov": 12.8,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.4
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_07CAE4E9_373B_324F_41B8_2F6935F2CCE5",
   "pitch": -9.4,
   "yaw": 167.2,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.8,
   "distance": 100
  }
 ],
 "id": "overlay_2A22452A_370F_53CD_41C4_5605ECE47036",
 "data": {
  "label": "Arrow 06c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38E20E75_3715_CE47_41C1_CB433083AD5A, this.camera_A60A6D55_B7E5_2E59_41B2_F2FECAB9F6C9); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -175.04,
   "hfov": 12.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.86
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_07CBE4E9_373B_324F_4198_0DEABCE3C72D",
   "pitch": -13.86,
   "yaw": -175.04,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.86,
   "distance": 100
  }
 ],
 "id": "overlay_2C090C09_370D_D1CC_41BE_1B53E09D7365",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D1C355_3717_7647_419B_47B5347BBD92, this.camera_A6189D5D_B7E5_2E48_41D8_E1BE580329A6); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -9.03,
   "hfov": 12.6,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.83
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_07CC64E9_373B_324F_41C4_489A8C2521BC",
   "pitch": -3.83,
   "yaw": -9.03,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.6,
   "distance": 100
  }
 ],
 "id": "overlay_2AC9EE6D_370D_CE47_41A6_976CAF339F0E",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206, this.camera_A74F6CC2_B7E5_2EBB_41D7_B44E253FE7F1); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -68.47,
   "hfov": 12.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.02
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_6790D9A6_3537_72C5_41A4_CBB457363DD2",
   "pitch": -13.02,
   "yaw": -68.47,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.57,
   "distance": 100
  }
 ],
 "id": "overlay_03864A50_34F7_365D_41A8_EF63808B6489",
 "data": {
  "label": "Arrow 06c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 43)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 41.94,
   "hfov": 13.51,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 34,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.25
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_679149A6_3537_72C5_41BC_3FF604912D02",
   "pitch": -16.25,
   "yaw": 41.94,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.51,
   "distance": 50
  }
 ],
 "id": "overlay_036D1150_34F7_D25D_41A9_4D14281BE03E",
 "data": {
  "label": "Arrow 06b Right-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 56)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -84.05,
   "hfov": 7.88,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.62
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -84.05,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 133,
      "height": 144
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.62,
   "hfov": 7.88
  }
 ],
 "id": "overlay_01EBEBD6_34FC_D645_4190_2A8A4503233B",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -7.56,
   "hfov": 30.59,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.69
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -7.56,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 517,
      "height": 282
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.69,
   "hfov": 30.59
  }
 ],
 "id": "overlay_89C91317_9056_861E_41E0_8AB236CFF7F5",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -6.87,
   "hfov": 23.74,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0_HS_4_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 62,
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.33
  }
 ],
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 401,
      "height": 103
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.33,
   "yaw": -6.87,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 23.74,
   "distance": 50
  }
 ],
 "id": "overlay_898AB4F4_9056_8212_41B3_FA40CE5C6F57",
 "data": {
  "label": "Papan Informasi"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 27.7,
   "hfov": 9.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 38,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.95
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 27.7,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0_HS_5_0.png",
      "class": "ImageResourceLevel",
      "width": 168,
      "height": 70
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.95,
   "hfov": 9.89
  }
 ],
 "id": "overlay_888CE9FA_9B8F_DA7A_41B3_A5A890067F53",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38C881B1_3715_52DC_41C2_E18801508327, this.camera_A6D3AFA0_B7E5_2AF8_41E1_DDD993765191); this.mainPlayList.set('selectedIndex', 58)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -81.76,
   "hfov": 5.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 22
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.75
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -81.76,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 99,
      "height": 138
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.75,
   "hfov": 5.87
  }
 ],
 "id": "overlay_622FF2FC_351B_3645_41A4_388C59C0DCB7",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 50)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 8.43,
   "hfov": 6.22,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.84
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_5E9EED4F_353F_3243_4168_10D8BC19DA1A",
   "pitch": -28.84,
   "yaw": 8.43,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.22,
   "distance": 100
  }
 ],
 "id": "overlay_608E2E9C_3514_CEC5_41C0_AC56E8AEF851",
 "data": {
  "label": "Arrow 06c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D1C363_3717_5643_4195_478CFFE63BBB, this.camera_A6DFBFA9_B7E5_2AC9_41D1_95BD888ECFA3); this.mainPlayList.set('selectedIndex', 38)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -111.62,
   "hfov": 9.48,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.41
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -111.62,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 164,
      "height": 164
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.41,
   "hfov": 9.48
  }
 ],
 "id": "overlay_62FEA986_3515_52C4_41A2_8192D8FA5CC1",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -82.78,
   "hfov": 6.68,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 35,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.71
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -82.78,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 112,
      "height": 50
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.71,
   "hfov": 6.68
  }
 ],
 "id": "overlay_89A7E90C_9052_83F2_41D4_29D0D3A70464",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF, this.camera_A71EFC85_B7E5_2EB9_41D6_91A76A862D49); this.mainPlayList.set('selectedIndex', 42)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -50.41,
   "hfov": 6.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.79
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -50.41,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 103,
      "height": 94
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.79,
   "hfov": 6.14
  }
 ],
 "id": "overlay_71C3C072_350B_525D_41CB_3B0B1C3F6701",
 "data": {
  "label": "Arrow Transparent Left-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38E77BDC_3717_5645_41C4_5C7C39771035, this.camera_A7679C8E_B7E5_2EC8_41D9_7E36B295CC45); this.mainPlayList.set('selectedIndex', 36)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 123.23,
   "hfov": 8.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.21
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_5EE9FD3F_353F_33C3_419E_778CBCFFFE69",
   "pitch": -20.21,
   "yaw": 123.23,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.14,
   "distance": 100
  }
 ],
 "id": "overlay_7B8164D6_350C_D245_41CA_D98F70A7C831",
 "data": {
  "label": "Arrow 06c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E, this.camera_A5E84034_B7E5_35D8_41B2_773200010799); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 174.42,
   "hfov": 9.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.85
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_676B799E_3537_72C4_41A7_DAD24CE52880",
   "pitch": -20.85,
   "yaw": 174.42,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.24,
   "distance": 100
  }
 ],
 "id": "overlay_13AA6027_371B_71C3_419C_48B944D1C549",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E, this.camera_A5F7B03D_B7E5_35C9_41AB_B025974D58AB); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -11.98,
   "hfov": 18.53,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 21
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.08
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -11.98,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 312,
      "height": 410
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.08,
   "hfov": 18.53
  }
 ],
 "id": "overlay_133A8E65_3714_CE47_41B8_4365012D8910",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -82.59,
   "hfov": 12.12,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 34,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.11
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -82.59,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 206,
      "height": 95
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.11,
   "hfov": 12.12
  }
 ],
 "id": "overlay_89E07FE3_9052_9E35_41A2_6E1AAF73DC7B",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED, this.camera_A664DD65_B7E5_2E79_41D4_D562B163E7F2); this.mainPlayList.set('selectedIndex', 34)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 27.01,
   "hfov": 10.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.2
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 27.01,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 173,
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.2,
   "hfov": 10.25
  }
 ],
 "id": "overlay_5D403BCC_353D_D645_41C5_9D17083013F7",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E, this.camera_A7664EDF_B7E5_2A48_41DD_A5424BA259FE); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -96.95,
   "hfov": 14.12,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 41,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.65
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_679449A6_3537_72C5_41BD_CB5A20CD05F4",
   "pitch": -11.65,
   "yaw": -96.95,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.12,
   "distance": 50
  }
 ],
 "id": "overlay_05AFB8A6_3714_D2C5_418D_3C7F54BF84F8",
 "data": {
  "label": "Arrow 06c Left-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055, this.camera_A76F9EE9_B7E5_2A49_41D2_999ED4136C60); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 35.69,
   "hfov": 12.63,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 34,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.16
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_6794F9A6_3537_72C5_4198_A9FC8F1CB321",
   "pitch": -13.16,
   "yaw": 35.69,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.63,
   "distance": 50
  }
 ],
 "id": "overlay_04904509_3715_F3CF_41B7_9E451CCE798F",
 "data": {
  "label": "Arrow 06b Right-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38E6993A_3717_D3CD_41A4_FF0A897E71C8, this.camera_A6908CF6_B7E5_2E5B_41CF_C9D2750EE43C); this.mainPlayList.set('selectedIndex', 32)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -148.79,
   "hfov": 11.29,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.2
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -148.79,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 190,
      "height": 183
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.2,
   "hfov": 11.29
  }
 ],
 "id": "overlay_516CC219_350C_F1CC_41BD_2F2BDA7ED2EB",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D, this.camera_A6849CEC_B7E5_2E4F_41E1_6E0D2A33C310); this.mainPlayList.set('selectedIndex', 31)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 5.17,
   "hfov": 9.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.63
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_5EE32D4F_353F_3243_41C6_AACE96198301",
   "pitch": -13.63,
   "yaw": 5.17,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.86,
   "distance": 100
  }
 ],
 "id": "overlay_5C186EEC_3534_CE44_41C8_3CC5E5C0A208",
 "data": {
  "label": "Arrow 06c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -158.53,
   "hfov": 12.69,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.65
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -158.53,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 215,
      "height": 116
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.65,
   "hfov": 12.69
  }
 ],
 "id": "overlay_880B2C83_9072_82F5_41D0_CB15FCCD7534",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E, this.camera_A52E9E49_B7E5_2A49_41DB_6392304D0157); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.16,
   "hfov": 16.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.54
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_679A29A6_3537_72C5_41CB_20429E803517",
   "pitch": -13.54,
   "yaw": 2.16,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.28,
   "distance": 100
  }
 ],
 "id": "overlay_0B38A899_350C_D2CF_4176_198675F752F0",
 "data": {
  "label": "Arrow 06c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -174.11,
   "hfov": 11.85,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 26
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.79
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -174.11,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 200,
      "height": 325
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.79,
   "hfov": 11.85
  }
 ],
 "id": "overlay_0B151883_350F_52C3_41BE_327139775FC7",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4, this.camera_A521CE40_B7E5_2DB8_41D1_EF460F506BD0); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 106.76,
   "hfov": 16.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -35.12
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_679AE9A6_3537_72C5_41B8_C1DD4DE5A849",
   "pitch": -35.12,
   "yaw": 106.76,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.84,
   "distance": 100
  }
 ],
 "id": "overlay_0AB661E9_350C_D24F_41C5_2BBFCDE54084",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1, this.camera_A574108A_B7E5_36C8_41DD_C81FB8B834DB); this.mainPlayList.set('selectedIndex', 25)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 82.03,
   "hfov": 9.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 34,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.68
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_07CE84E9_373B_324F_4195_05D0C1991563",
   "pitch": -5.68,
   "yaw": 82.03,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.28,
   "distance": 50
  }
 ],
 "id": "overlay_176CA4CD_3775_3247_41B4_672F32DEE6BA",
 "data": {
  "label": "Arrow 06b Right-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4, this.camera_A567C082_B7E5_36BB_41E1_7CF3AE00B250); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -35.52,
   "hfov": 12.7,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.43
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_876E5AAB_9312_6B04_41D4_10E9C0F12899",
   "pitch": -7.43,
   "yaw": -35.52,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.7,
   "distance": 50
  }
 ],
 "id": "overlay_17443DAC_3775_32C5_41B2_495D1F84E736",
 "data": {
  "label": "Arrow 06b Left-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 18.5,
   "hfov": 22.04,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.2
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_07CF34E9_373B_324F_41B9_A8153B8AB051",
   "pitch": -19.2,
   "yaw": 18.5,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.04,
   "distance": 100
  }
 ],
 "id": "overlay_14CA04BC_370B_32C5_41C9_C3DF3E294951",
 "data": {
  "label": "Arrow 06c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38E4D980_3717_72BD_41B8_057AC02161F1, this.camera_A591AE03_B7E5_2DB9_41B0_1E53139B8A72); this.mainPlayList.set('selectedIndex', 27)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -88.54,
   "hfov": 8.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.86
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -88.54,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 150,
      "height": 146
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.86,
   "hfov": 8.87
  }
 ],
 "id": "overlay_6A7A1979_3575_324C_41C2_400713A10AC3",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080, this.camera_A5B47DDC_B7E5_2E48_41B4_6325BBD947D8); this.mainPlayList.set('selectedIndex', 35)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 170.99,
   "hfov": 13.88,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 41,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.79
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_5EED4D4F_353F_3243_41BC_35399F0EFB55",
   "pitch": -23.79,
   "yaw": 170.99,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.88,
   "distance": 50
  }
 ],
 "id": "overlay_5456AC81_351C_D2BF_4169_DBCFA4D5A390",
 "data": {
  "label": "Arrow 06c Right-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38DF659A_3715_72CD_41C7_218DD275A32E, this.camera_A583BDF0_B7E5_2E57_41DE_C1646DF49CC3); this.mainPlayList.set('selectedIndex', 51)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -165.59,
   "hfov": 10.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.02
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -165.59,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 173,
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.02,
   "hfov": 10.24
  }
 ],
 "id": "overlay_681A9085_351B_52C7_41C4_0610BEBE66A1",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -170.63,
   "hfov": 8.62,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 35,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.7
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -170.63,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 145,
      "height": 66
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.7,
   "hfov": 8.62
  }
 ],
 "id": "overlay_88ED381A_9073_8216_41E1_2CA3A3A1935E",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38E649D7_3717_D243_41CA_441C811EA963, this.camera_A62ACD3A_B7E5_2FC8_41B0_0832E8493851); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -7.05,
   "hfov": 15.76,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.1
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_22861607_3735_31C4_41A7_834F8ED29242",
   "pitch": -8.1,
   "yaw": -7.05,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.76,
   "distance": 100
  }
 ],
 "id": "overlay_24B0B964_370D_7245_41A8_BE9D771ADA2C",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 15.39,
   "hfov": 19.29,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 45
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.44
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 15.39,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_1_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 326,
      "height": 927
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.44,
   "hfov": 19.29
  }
 ],
 "id": "overlay_74EE5467_7A41_D6E0_41DE_676224AAAB48",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4, this.camera_A7582CCA_B7E5_2E48_41D2_4F99818CD9C1); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 144,
   "hfov": 20.36,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 34,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.14
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_07CE74E9_373B_324F_41BD_1A0D059B265D",
   "pitch": -24.14,
   "yaw": 144,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.36,
   "distance": 50
  }
 ],
 "id": "overlay_17A4E951_377F_D25F_4174_95153735D230",
 "data": {
  "label": "Arrow 06b Right-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E, this.camera_A6A56CD3_B7E5_2E59_41CF_A8A224B05549); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -59.87,
   "hfov": 18.92,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.29
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_07CDE4E9_373B_324F_41CA_0CC298D732B1",
   "pitch": -8.29,
   "yaw": -59.87,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.92,
   "distance": 50
  }
 ],
 "id": "overlay_292578DB_377F_524C_41C7_F15614128B4E",
 "data": {
  "label": "Arrow 06b Left-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D0B196_3717_32C5_41AE_3819CFBC2276, this.camera_A5A67DC8_B7E5_2E48_41D8_6AE9E3F316F1); this.mainPlayList.set('selectedIndex', 29)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -33.12,
   "hfov": 12.13,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 15,
      "height": 20
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.98
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -33.12,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DF659A_3715_72CD_41C7_218DD275A32E_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 206,
      "height": 261
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.98,
   "hfov": 12.13
  }
 ],
 "id": "overlay_5F25D50C_3535_33C5_41BB_0B905435B0D5",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF, this.camera_A640BD8E_B7E5_2ECB_41AD_00A2C5D92690); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -44.73,
   "hfov": 16.13,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 21
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.2
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -44.73,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 275,
      "height": 364
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.2,
   "hfov": 16.13
  }
 ],
 "id": "overlay_1F5F4715_3735_3FC4_41B5_DAFBF42DD6B6",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E, this.camera_A672CD7F_B7E5_2E49_41E3_58323C5695E9); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -127.95,
   "hfov": 5.11,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.97
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -127.95,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 86,
      "height": 94
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.97,
   "hfov": 5.11
  }
 ],
 "id": "overlay_1FA0802B_3735_F1C3_41B3_B2406DD7BD21",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -125.01,
   "hfov": 7.74,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.89
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -125.01,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E0CB76_3717_7644_41A0_A9D432BD3862_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 131,
      "height": 70
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.89,
   "hfov": 7.74
  }
 ],
 "id": "overlay_8EBFBB8F_904F_860E_41D0_5034CA7C2CF4",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38DF0085_3715_D2C7_41BF_6A1900839E53, this.camera_A76DEC97_B7E5_2ED9_41C9_FF1FB1B98B97); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 87.48,
   "hfov": 10.9,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 34,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.8
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_07C054E9_373B_324F_41C8_BE2857A1282B",
   "pitch": -8.8,
   "yaw": 87.48,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.9,
   "distance": 50
  }
 ],
 "id": "overlay_12BE1C3E_370B_51C5_4142_25DAC8478C42",
 "data": {
  "label": "Arrow 06b Right-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D94D50_3717_325D_4192_23A4473BE97C, this.camera_A770ECA0_B7E5_2EF7_41E0_8A5407E50ED0); this.mainPlayList.set('selectedIndex', 39)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.24,
   "hfov": 13.27,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.13
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_07C034E9_373B_324F_41B3_CCEF4CB1BAC2",
   "pitch": -12.13,
   "yaw": -0.24,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.27,
   "distance": 100
  }
 ],
 "id": "overlay_1438306B_3715_F243_4189_1D91E03073CE",
 "data": {
  "label": "Arrow 06c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E, this.camera_A7766CA8_B7E5_2EF7_41DF_59C00F0C86AE); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -87.33,
   "hfov": 11.03,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.82
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_07C094E9_373B_324F_41A8_5A45589A022A",
   "pitch": -8.82,
   "yaw": -87.33,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.03,
   "distance": 50
  }
 ],
 "id": "overlay_12F0DAF4_3715_3644_41A9_F75183BC250C",
 "data": {
  "label": "Arrow 06b Left-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38E649D7_3717_D243_41CA_441C811EA963, this.camera_A58EE023_B7E5_35F8_41E0_91DEB77D22B9); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -8.47,
   "hfov": 10.75,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.77
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_6760599E_3537_72C4_419D_B82DA8976BD1",
   "pitch": -4.77,
   "yaw": -8.47,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.75,
   "distance": 100
  }
 ],
 "id": "overlay_21F89B2A_371F_37CD_419F_DCAB47F86368",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A, this.camera_A580101B_B7E5_35C8_41BC_5DE09CB99844); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 172.63,
   "hfov": 13.16,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.09
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_6760C99E_3537_72C4_41B9_D744F3A9E840",
   "pitch": -7.09,
   "yaw": 172.63,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.16,
   "distance": 100
  }
 ],
 "id": "overlay_21759B50_371F_D642_41C2_5D33642A49E0",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF, this.camera_A5EB0E1E_B7E5_2DCB_41E4_C982363A66F2); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 99.21,
   "hfov": 13.73,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.91
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_679CF9A6_3537_72C5_41B4_26A91CC1B956",
   "pitch": -15.91,
   "yaw": 99.21,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.73,
   "distance": 100
  }
 ],
 "id": "overlay_74C49E79_351D_4E4F_41C9_0D6503CCE023",
 "data": {
  "label": "Arrow 06c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A, this.camera_A5F9EE26_B7E5_2DF8_41BD_3ABF88952B86); this.mainPlayList.set('selectedIndex', 54)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.02,
   "hfov": 10.23,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.64
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 2.02,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 173,
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.64,
   "hfov": 10.23
  }
 ],
 "id": "overlay_74670D91_351B_72DF_41CA_40179D89BDC1",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.11,
   "hfov": 14.27,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.08
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 1.11,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 241,
      "height": 132
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.08,
   "hfov": 14.27
  }
 ],
 "id": "overlay_8AE7FF0D_9071_9FF2_41D1_9266D0EA04D0",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D1C363_3717_5643_4195_478CFFE63BBB, this.camera_A5420093_B7E5_36D9_41D0_A0B943EDEEA5); this.mainPlayList.set('selectedIndex', 38)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -146.44,
   "hfov": 11.11,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 18
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.89
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -146.44,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E4ADCF_3715_7243_41C6_53A461661D81_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 192,
      "height": 220
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.89,
   "hfov": 11.11
  }
 ],
 "id": "overlay_6380D661_351D_5E7F_4190_C7AE3141AC4A",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D0E554_3715_5244_41A6_46AD73AD729B, this.camera_A6D22D28_B7E5_2FC8_41CC_DAAE50427B5F); this.mainPlayList.set('selectedIndex', 49)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.88,
   "hfov": 10.11,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 22,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.96
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 2.88,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 171,
      "height": 122
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.96,
   "hfov": 10.11
  }
 ],
 "id": "overlay_7485FE18_3514_D1CD_41B6_491CD45988E8",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF, this.camera_A6DE3D31_B7E5_2FD8_41D8_6DC6AD6E229E); this.mainPlayList.set('selectedIndex', 42)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 79.52,
   "hfov": 11.05,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.59
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_679A59A6_3537_72C5_4190_7A8159B9B88A",
   "pitch": -16.59,
   "yaw": 79.52,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.05,
   "distance": 100
  }
 ],
 "id": "overlay_74B083A7_3517_D6C3_4167_235AD5371896",
 "data": {
  "label": "Arrow 06c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3, this.camera_A6C8DD20_B7E5_2FF7_41D7_00AE34F918DC); this.mainPlayList.set('selectedIndex', 57)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 41.35,
   "hfov": 11.93,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 41,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.43
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_679AD9A6_3537_72C5_41C8_7B4114F9E37C",
   "pitch": -12.43,
   "yaw": 41.35,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.93,
   "distance": 50
  }
 ],
 "id": "overlay_7382AB3B_3517_37C3_41B6_FEDCFC6D4C12",
 "data": {
  "label": "Arrow 06c Left-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38E63D57_3715_3243_4168_734E9BAFFB1A, this.camera_A6E6AD07_B7E5_2FB9_41D0_1256AD8A20FA); this.mainPlayList.set('selectedIndex', 48)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 151.28,
   "hfov": 11.43,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 20
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.86
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 151.28,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 195,
      "height": 247
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.86,
   "hfov": 11.43
  }
 ],
 "id": "overlay_631E43FA_351D_364D_41A9_0CF63DCEF7BA",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2, this.camera_A6F37D0F_B7E5_2FC9_41E2_500DCA4A7C6C); this.mainPlayList.set('selectedIndex', 53)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 169.6,
   "hfov": 5.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 20
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.58
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 169.6,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 90,
      "height": 118
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.58,
   "hfov": 5.32
  }
 ],
 "id": "overlay_63F5F5DC_351D_7245_41B5_7B9B367FAD83",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38E4ADCF_3715_7243_41C6_53A461661D81, this.camera_A6FCDD18_B7E5_2FD7_41CE_0874705CC5F9); this.mainPlayList.set('selectedIndex', 52)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -161.23,
   "hfov": 9.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 20
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.66
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -161.23,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0_HS_5_0.png",
      "class": "ImageResourceLevel",
      "width": 158,
      "height": 206
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.66,
   "hfov": 9.32
  }
 ],
 "id": "overlay_62BA8DFA_351D_524D_4192_DCE9A52161B1",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 154.27,
   "hfov": 13.66,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0_HS_6_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.54
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 154.27,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0_HS_6_0.png",
      "class": "ImageResourceLevel",
      "width": 231,
      "height": 98
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.54,
   "hfov": 13.66
  }
 ],
 "id": "overlay_85ED66FE_9057_8E0F_41D7_E7D33126C212",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 171.57,
   "hfov": 6.46,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0_HS_7_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 39,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.43
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 171.57,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0_HS_7_0.png",
      "class": "ImageResourceLevel",
      "width": 109,
      "height": 44
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.43,
   "hfov": 6.46
  }
 ],
 "id": "overlay_8A44A27B_9051_8616_41D6_27A916300787",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -170.78,
   "hfov": 12.85,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0_HS_8_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 38,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.96
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -170.78,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0_HS_8_0.png",
      "class": "ImageResourceLevel",
      "width": 217,
      "height": 91
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.96,
   "hfov": 12.85
  }
 ],
 "id": "overlay_8A3D5170_9053_8213_41B2_BCF635EBFA08",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.79,
   "hfov": 10.82,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0_HS_9_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.21
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 1.79,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0_HS_9_0.png",
      "class": "ImageResourceLevel",
      "width": 183,
      "height": 78
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.21,
   "hfov": 10.82
  }
 ],
 "id": "overlay_8A4D84BC_9051_8212_41D4_A05500D17632",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 30.04,
   "hfov": 8.51,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.46
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_679729A5_3537_72C7_41C3_FC563B963918",
   "pitch": -13.46,
   "yaw": 30.04,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.51,
   "distance": 100
  }
 ],
 "id": "overlay_1A4FCE0F_371B_31C3_41C3_81B969B44241",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD, this.camera_A73F9C52_B7E5_2E5B_41E4_86129A6A9212); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 165.78,
   "hfov": 11,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 41,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.37
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_679759A6_3537_72C5_41A4_EBC7F56ADB8F",
   "pitch": -20.37,
   "yaw": 165.78,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11,
   "distance": 50
  }
 ],
 "id": "overlay_07C47485_371B_32C7_41C0_B625C4B55E8A",
 "data": {
  "label": "Arrow 06c Right-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D94D50_3717_325D_4192_23A4473BE97C, this.camera_A705DC5B_B7E5_2E49_41D2_5490D5CF2F28); this.mainPlayList.set('selectedIndex', 39)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -41.58,
   "hfov": 12.31,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 41,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.13
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_6797C9A6_3537_72C5_41C6_062638063713",
   "pitch": -15.13,
   "yaw": -41.58,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.31,
   "distance": 50
  }
 ],
 "id": "overlay_1B6518EF_371D_3243_4196_78C862C377D2",
 "data": {
  "label": "Arrow 06c Left-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A, this.camera_A715BC75_B7E5_2E58_41C3_D50AAB3FB928); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 171.35,
   "hfov": 14.43,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 41,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.36
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_6768399E_3537_72C4_41BE_CD2AB7B89E81",
   "pitch": -15.36,
   "yaw": 171.35,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.43,
   "distance": 50
  }
 ],
 "id": "overlay_1E734084_3715_72C5_41A5_60C7ACAFE2E7",
 "data": {
  "label": "Arrow 06c Right-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D14E9B_3717_4EC3_41B2_5731446C5418, this.camera_A71B2C7E_B7E5_2E4B_41D8_2C7890C52414); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 74.42,
   "hfov": 6.85,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.29
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 74.42,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 115,
      "height": 127
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.29,
   "hfov": 6.85
  }
 ],
 "id": "overlay_1036BCE3_370B_527C_4168_5C516F60C087",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 73.34,
   "hfov": 10.83,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.52
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 73.34,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 183,
      "height": 79
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.52,
   "hfov": 10.83
  }
 ],
 "id": "overlay_8E68EB0F_904E_860E_4162_A68BB3818B70",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 147.76,
   "hfov": 6.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 38,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.66
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 147.76,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 105,
      "height": 44
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.66,
   "hfov": 6.25
  }
 ],
 "id": "overlay_89F0CCFC_9052_8212_41D8_90C7F2C5DFB3",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 156.38,
   "hfov": 6.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.57
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 156.38,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 103,
      "height": 50
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.57,
   "hfov": 6.09
  }
 ],
 "id": "overlay_8EF4B109_9053_83F2_41DE_D9791BB7B3F8",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.35,
   "hfov": 13.65,
   "image": {
    "levels": [
     {
      "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.95
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_679099A6_3537_72C5_4173_E2DCED313587",
   "pitch": -5.95,
   "yaw": 2.35,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.65,
   "distance": 100
  }
 ],
 "id": "overlay_03D79784_370B_FEC5_41B0_D2AE6683ECFD",
 "data": {
  "label": "Arrow 06c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38DF0085_3715_D2C7_41BF_6A1900839E53, this.camera_A6730FE7_B7E5_2A79_41BE_FCB2FE8A171B); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -165.65,
   "hfov": 20,
   "image": {
    "levels": [
     {
      "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 41,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.13
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_45571AEB_3515_3643_41BE_B70C95FCB8FA",
   "pitch": -12.13,
   "yaw": -165.65,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20,
   "distance": 50
  }
 ],
 "id": "overlay_46DDED0A_350C_F3CD_41A6_BE61C40EEDA6",
 "data": {
  "label": "Arrow 06c Left-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38DF3F39_3715_CFCF_41B9_9107650158A7, this.camera_A52C5060_B7E5_3677_41BF_3346E2EB3C5B); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -88.75,
   "hfov": 21.22,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 34,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.97
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_07C3B4F8_373B_324D_41C8_74D076110B28",
   "pitch": -17.97,
   "yaw": -88.75,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.22,
   "distance": 50
  }
 ],
 "id": "overlay_1C6BC9BC_3737_D2C5_41C1_161986B94DC1",
 "data": {
  "label": "Arrow 06b Right-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38E0CB76_3717_7644_41A0_A9D432BD3862, this.camera_A5DF2058_B7E5_3657_41D0_79390C9AF383); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 156.32,
   "hfov": 16.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 23
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.35
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 156.32,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 275,
      "height": 410
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.35,
   "hfov": 16.32
  }
 ],
 "id": "overlay_1C443336_3737_37C4_41BC_749DBC1287AA",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A, this.camera_A6343D43_B7E5_2FB8_41C8_3E95A647B837); this.mainPlayList.set('selectedIndex', 54)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -152.27,
   "hfov": 20.12,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.34
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_5E9C4D4F_353F_3243_418E_28566ECDB645",
   "pitch": -12.34,
   "yaw": -152.27,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.12,
   "distance": 100
  }
 ],
 "id": "overlay_67712694_3515_7EC4_41C2_09C857147A84",
 "data": {
  "label": "Arrow 06c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206, this.camera_A51ABE64_B7E5_2A7F_41D6_D382BBD593FF); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 80.34,
   "hfov": 10.92,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 18,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.59
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 80.34,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 199,
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.59,
   "hfov": 10.92
  }
 ],
 "id": "overlay_08EC43F2_351B_D65C_41B2_D431E9E3945D",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC, this.camera_A50A7E5A_B7E5_2A48_41D3_0F3C85F18302); this.mainPlayList.set('selectedIndex', 45)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -43.21,
   "hfov": 10.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 22
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.47
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -43.21,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 173,
      "height": 238
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.47,
   "hfov": 10.25
  }
 ],
 "id": "overlay_08EA2CC8_351B_524D_41BA_C9B4E4BE086D",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D93D39_3714_F3CF_418D_7A8975AB5289, this.camera_A569DE6D_B7E5_2A49_41DD_982695774B52); this.mainPlayList.set('selectedIndex', 44)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -84.84,
   "hfov": 13.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.98
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_679899AD_3537_72C7_41C1_A5089E00AB62",
   "pitch": -20.98,
   "yaw": -84.84,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.84,
   "distance": 100
  }
 ],
 "id": "overlay_7763D3CF_351D_5643_41BA_58C4979660AF",
 "data": {
  "label": "Arrow 06c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D1C363_3717_5643_4195_478CFFE63BBB, this.camera_A6A9BF40_B7E5_2BB7_41CB_53A4FDD83F82); this.mainPlayList.set('selectedIndex', 38)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 4.24,
   "hfov": 9.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.37
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_679999AE_3537_72C5_41BA_FC7DE9199509",
   "pitch": -16.37,
   "yaw": 4.24,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.28,
   "distance": 100
  }
 ],
 "id": "overlay_7F2B0818_350F_51CD_41C7_B5D85C040173",
 "data": {
  "label": "Arrow 06c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF, this.camera_A6ACDF48_B7E5_2A48_41B9_D898B5C6B78B); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -172.61,
   "hfov": 12.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -37.13
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -172.61,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 260,
      "height": 238
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -37.13,
   "hfov": 12.28
  }
 ],
 "id": "overlay_8ACBA44C_9071_8272_41DD_1AB8F5F59A1B",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361, this.camera_A74E3F1C_B7E5_2BC8_41C2_A5463A9DAA83); this.mainPlayList.set('selectedIndex', 40)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 102.83,
   "hfov": 7.22,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.5
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 102.83,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 122,
      "height": 133
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.5,
   "hfov": 7.22
  }
 ],
 "id": "overlay_4421392D_351C_F3C7_41C9_5957C1C96F6E",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3, this.camera_A74B5F14_B7E5_2BDF_41E5_83B2E5919028); this.mainPlayList.set('selectedIndex', 37)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 140.49,
   "hfov": 6.22,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.66
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 140.49,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E63971_3717_325F_41B2_8F085CCBFE09_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 105,
      "height": 97
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.66,
   "hfov": 6.22
  }
 ],
 "id": "overlay_88448013_907E_8215_41D2_C5E16AF14A66",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D1C355_3717_7647_419B_47B5347BBD92, this.camera_A50BB071_B7E5_3659_41DB_E6E38A7C287E); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 10.4,
   "hfov": 15.43,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.59
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_2285B607_3735_31C4_41B0_0D3E27505162",
   "pitch": -9.59,
   "yaw": 10.4,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.43,
   "distance": 100
  }
 ],
 "id": "overlay_22B5BD15_370B_D3C7_41BE_C35C32034FE1",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D1C355_3717_7647_419B_47B5347BBD92, this.camera_A5165079_B7E5_3649_41A0_5EC55F47C173); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -168.06,
   "hfov": 15.51,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.53
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_07C924E9_373B_324F_413E_4214EBFF2424",
   "pitch": -7.53,
   "yaw": -168.06,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.51,
   "distance": 100
  }
 ],
 "id": "overlay_20441D22_371D_D3FD_41C3_084B070F5054",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D14E9B_3717_4EC3_41B2_5731446C5418, this.camera_A6F1BF86_B7E5_2AB8_41D6_B0627AA9776B); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -173.27,
   "hfov": 12.92,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.25
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_679649A5_3537_72C7_41C4_4CE7C96C4457",
   "pitch": -16.25,
   "yaw": -173.27,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.92,
   "distance": 100
  }
 ],
 "id": "overlay_1E53EFC9_370D_4E4F_41C1_881B7092E117",
 "data": {
  "label": "Arrow 06c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38E0CB76_3717_7644_41A0_A9D432BD3862, this.camera_A6E46F7E_B7E5_2A4B_41BF_3853C0C90B93); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -70.52,
   "hfov": 11.67,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 15,
      "height": 18
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.29
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -70.52,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 197,
      "height": 224
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.29,
   "hfov": 11.67
  }
 ],
 "id": "overlay_1F773744_370C_DE45_41BF_BA698C3F2083",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38E53807_3717_51C3_41C3_684D314D142D, this.camera_A546BE7E_B7E5_2A4B_41CD_61593476FC03); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 8.27,
   "hfov": 15.83,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.09
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_07CC24E9_373B_324F_41A8_D56A8C8F5530",
   "pitch": -6.09,
   "yaw": 8.27,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.83,
   "distance": 100
  }
 ],
 "id": "overlay_2A05EDCE_3775_3245_41C0_54C0BBB0645C",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF, this.camera_A71B1EC3_B7E5_2AB8_41C6_B011204034A1); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 169.91,
   "hfov": 15.22,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.07
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_07CCF4E9_373B_324F_41BF_8EBEB8E0C091",
   "pitch": -17.07,
   "yaw": 169.91,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.22,
   "distance": 100
  }
 ],
 "id": "overlay_2B98DA22_3775_51FD_41BC_83022112DCEB",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E, this.camera_A554EE86_B7E5_2AB8_41E6_264B53E77535); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -107.57,
   "hfov": 12.42,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.46
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_07CD44E9_373B_324F_41B0_0AAEAA4FDE90",
   "pitch": -7.46,
   "yaw": -107.57,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.42,
   "distance": 50
  }
 ],
 "id": "overlay_2B066F65_3775_4E47_4199_638BFDE90524",
 "data": {
  "label": "Arrow 06b Left-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38DF3F39_3715_CFCF_41B9_9107650158A7, this.camera_A6C7DF98_B7E5_2AD7_41B3_F919949F3780); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 65.02,
   "hfov": 16.51,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.71
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_07C104E9_373B_324F_41B7_5B870EC428A0",
   "pitch": -12.71,
   "yaw": 65.02,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.51,
   "distance": 50
  }
 ],
 "id": "overlay_136C7CD0_371B_525C_4187_1258020ED94C",
 "data": {
  "label": "Arrow 06b Left-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A, this.camera_A6FD8F8E_B7E5_2AC8_41E1_6FB4252596E5); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -169.64,
   "hfov": 13.58,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.87
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -169.64,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 229,
      "height": 248
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.87,
   "hfov": 13.58
  }
 ],
 "id": "overlay_134C07F6_371D_3E45_4194_88C6593BF512",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E, this.camera_A6B51F51_B7E5_2A59_41BD_15F832E2F8D0); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 13.83,
   "hfov": 13.59,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.22
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_07CE44E9_373B_324F_4197_D79C812BB6DA",
   "pitch": -8.22,
   "yaw": 13.83,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.59,
   "distance": 100
  }
 ],
 "id": "overlay_162DF47F_377C_D243_4198_EDE325F614A6",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 25)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -173.79,
   "hfov": 13.45,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.57
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_07CE04E9_373B_324F_41A3_B6E557D90A07",
   "pitch": -11.57,
   "yaw": -173.79,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.45,
   "distance": 100
  }
 ],
 "id": "overlay_179B1AC5_377B_3647_41C6_0F626498F549",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38DD01DC_3715_3245_41BF_FED182B98C45, this.camera_A60BEFCC_B7E5_2A48_41B4_B792ED9C4561); this.mainPlayList.set('selectedIndex', 56)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 57.55,
   "hfov": 10.94,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.38
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_679F99A6_3537_72C5_41AD_71B3A0352ED1",
   "pitch": -18.38,
   "yaw": 57.55,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.94,
   "distance": 100
  }
 ],
 "id": "overlay_0DD5943B_350B_51C3_419F_8D34E2ADE565",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38E4D980_3717_72BD_41B8_057AC02161F1, this.camera_A63F2FC4_B7E5_2ABF_41DC_7D26CD171602); this.mainPlayList.set('selectedIndex', 27)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 169.79,
   "hfov": 16.02,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.76
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_679C69A6_3537_72C5_41B3_CA19A36F7107",
   "pitch": -24.76,
   "yaw": 169.79,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.02,
   "distance": 50
  }
 ],
 "id": "overlay_0B09825E_350B_5645_419A_945DD669209E",
 "data": {
  "label": "Arrow 06a Right-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4, this.camera_A687BF62_B7E5_2A78_41D4_8242C9C3FFCB); this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 114.28,
   "hfov": 12.31,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 34,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.9
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_679E79A6_3537_72C5_41C4_B5AF5328180A",
   "pitch": -30.9,
   "yaw": 114.28,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.31,
   "distance": 50
  }
 ],
 "id": "overlay_0DDC64D7_34FF_3243_419B_39B379EF929B",
 "data": {
  "label": "Arrow 06b Right-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 30)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -127.9,
   "hfov": 10.29,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.49
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -127.9,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 173,
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.49,
   "hfov": 10.29
  }
 ],
 "id": "overlay_01061A72_34FD_D65D_4180_0BF098FE1EAD",
 "data": {
  "label": "Arrow Transparent Left-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D0B196_3717_32C5_41AE_3819CFBC2276, this.camera_A6BA6F5A_B7E5_2A48_41D0_6AF0DF19E456); this.mainPlayList.set('selectedIndex', 29)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 11.7,
   "hfov": 10.29,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.7
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 11.7,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 173,
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.7,
   "hfov": 10.29
  }
 ],
 "id": "overlay_0E423D81_34FB_32BF_4196_4133A57D751A",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D, this.camera_A67E8FF0_B7E5_2A57_41E3_A7BAAA391641); this.mainPlayList.set('selectedIndex', 31)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -55.84,
   "hfov": 10.29,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.63
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -55.84,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38C8B2BD_3715_76C4_41B0_D4DAACEC58F8_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 173,
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.63,
   "hfov": 10.29
  }
 ],
 "id": "overlay_5ED1F5D4_353B_3245_41C4_1F93FD76B34E",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206, this.camera_A6BB2CE3_B7E5_2E78_41E3_52C3FA2F8A90); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 80.17,
   "hfov": 9.05,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 41,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.33
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_679239A6_3537_72C5_41C6_2542B91C51F9",
   "pitch": -12.33,
   "yaw": 80.17,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.05,
   "distance": 50
  }
 ],
 "id": "overlay_0757BE38_3715_31CD_41B9_245892298F75",
 "data": {
  "label": "Arrow 06c Left-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD, this.camera_A6AF5CDC_B7E5_2E4F_41C7_7A065E8B79C6); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -66,
   "hfov": 10.7,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 41,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.8
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_6792B9A6_3537_72C5_41C4_B10069A4FCBA",
   "pitch": -11.8,
   "yaw": -66,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.7,
   "distance": 50
  }
 ],
 "id": "overlay_0138449A_3715_D2CD_41A7_BD44803BD98F",
 "data": {
  "label": "Arrow 06c Right-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 14.6,
   "hfov": 15.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 33,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.49
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 14.6,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_1_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 266,
      "height": 126
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.49,
   "hfov": 15.78
  }
 ],
 "id": "overlay_8E77ECBC_905E_8213_41D3_8745B7B4B090",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D0E554_3715_5244_41A6_46AD73AD729B, this.camera_A6A03F36_B7E5_2BD8_41C1_C14D4BE9A97A); this.mainPlayList.set('selectedIndex', 49)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 119.87,
   "hfov": 10.04,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.89
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 119.87,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38C881B1_3715_52DC_41C2_E18801508327_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 173,
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.89,
   "hfov": 10.04
  }
 ],
 "id": "overlay_79AE6F2F_3515_4FC3_4198_C266FBF10A92",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D, this.camera_A70EDC6C_B7E5_2E4F_41D5_78290A0FAFAE); this.mainPlayList.set('selectedIndex', 31)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -174.46,
   "hfov": 10.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.2
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -174.46,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 173,
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.2,
   "hfov": 10.25
  }
 ],
 "id": "overlay_52979F7B_350B_4E4C_41BE_CC7E8613E10B",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38E63971_3717_325F_41B2_8F085CCBFE09, this.camera_A7097C64_B7E5_2E7F_41CE_A7EA695DF030); this.mainPlayList.set('selectedIndex', 30)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 8.41,
   "hfov": 10.74,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 18,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.76
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 8.41,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D164B7_3717_32C3_41C0_EDC40CF41FD3_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 199,
      "height": 173
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.76,
   "hfov": 10.74
  }
 ],
 "id": "overlay_8A0EDB2F_9073_860E_41E0_A6A77C8680B5",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D17585_3714_D2C7_418B_782A51353200, this.camera_A757BF25_B7E5_2BF9_41C0_D8BF64B9331C); this.mainPlayList.set('selectedIndex', 41)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 178.31,
   "hfov": 7.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 19
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.64
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 178.31,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 121,
      "height": 147
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.64,
   "hfov": 7.19
  }
 ],
 "id": "overlay_6D21AF6D_357C_CE47_41A1_798DA2375614",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361, this.camera_A75D2F2E_B7E5_2BCB_41CE_9B0D99887AE2); this.mainPlayList.set('selectedIndex', 40)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.61,
   "hfov": 7.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 20
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.71
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -0.61,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 133,
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.71,
   "hfov": 7.87
  }
 ],
 "id": "overlay_6D7F22E3_357F_3643_41A1_B72F2388CD70",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 168.99,
   "hfov": 7.05,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 35,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.99
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 168.99,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 119,
      "height": 53
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.99,
   "hfov": 7.05
  }
 ],
 "id": "overlay_89716E21_9051_BE32_41BB_D4623073FB1E",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 20.74,
   "hfov": 17.9,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.27
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 20.74,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38D124FA_3714_D24D_41C3_9BA9000E74FC_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 305,
      "height": 133
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.27,
   "hfov": 17.9
  }
 ],
 "id": "overlay_89A20251_9053_8615_41D1_DE5867CF9F8D",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_38D1C363_3717_5643_4195_478CFFE63BBB, this.camera_A69D5CFE_B7E5_2E4B_41E2_6781EE7C4AC9); this.mainPlayList.set('selectedIndex', 38)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -155.15,
   "hfov": 10.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.9
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -155.15,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38DF0603_3715_51C3_41B2_1C7B829E5BD2_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 183,
      "height": 169
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.9,
   "hfov": 10.84
  }
 ],
 "id": "overlay_63477BDC_351D_5645_419B_8C4BCB72DE8E",
 "data": {
  "label": "Image"
 }
},
{
 "maxHeight": 2,
 "maxWidth": 3000,
 "id": "Image_8A9C7876_9A67_29BB_41CB_FAAFE2F9DC15",
 "left": "0%",
 "right": "0%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_8A9C7876_9A67_29BB_41CB_FAAFE2F9DC15.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "bottom": 53,
 "propagateClick": true,
 "minWidth": 1,
 "height": 2,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_outside",
 "data": {
  "name": "white line"
 },
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "children": [
  "this.Image_8874581E_9A63_696B_41D1_D6D5D7A00CCB",
  "this.Image_8BE32B95_9A63_EF79_41D1_71CDB557780C",
  "this.Image_8BD8BD89_9A63_2B69_419D_E0977B9AAFE6",
  "this.Image_95A05FFB_9B84_F67A_41BB_B61431672257"
 ],
 "id": "Container_8A9C4876_9A67_29BB_41D4_31CFBC6BCD23",
 "left": "0%",
 "width": 1199,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "paddingLeft": 30,
 "bottom": "0%",
 "propagateClick": true,
 "minWidth": 1,
 "height": 51,
 "gap": 3,
 "borderSize": 0,
 "layout": "horizontal",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "-button set container"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38E60CEE_3714_D245_4184_002A4B4C6997_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_5E99CD4F_353F_3243_41CB_85BA07D639C4",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D1356B_3714_F243_41C1_0321F472A6FD_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_678669AE_3537_72C5_41C1_B37F6F0AB04E",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38E42E04_3715_51C5_41BF_E65F4D8D956A_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_5E9CDD4F_353F_3243_41B9_9613CE7380F8",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D0B15E_3717_D245_41BC_D63E7A36F16D_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_5EE24D4F_353F_3243_41C2_1834C0F06FC9",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_679B39A6_3537_72C5_41C7_66266D223AAD",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38EB4B3D_3717_57C7_41BA_99F2F1A10361_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_679BB9A6_3537_72C5_4197_5C04A6AF07C8",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38DEB9CD_3715_3247_41C1_28815D6ABBC3_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_5E9C3D4F_353F_3243_41B1_A41545A58C0F",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_678779AF_3537_72C3_41B0_51387DFE3DC0",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D93D39_3714_F3CF_418D_7A8975AB5289_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_5E9B0D4F_353F_3243_41C6_8B779E5A0427",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_679349A6_3537_72C5_41C2_BC78AC7FA0E8",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38DCB6E7_34F7_7E43_41AD_72FC505A6206_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_6793F9A6_3537_72C5_41B6_FA817B4C4924",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D14E9B_3717_4EC3_41B2_5731446C5418_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_07C374E9_373B_324F_419B_F2436CC4F085",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_07CD34E9_373B_324F_41B1_17F76C23A7AD",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D1E2C9_3717_564F_41C0_A9498FAEC52E_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_07CDF4E9_373B_324F_41A4_3761F951DA6C",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D151A6_3717_D2C4_41AC_0A87DA0FC080_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_5EE02D4F_353F_3243_41C9_F75AD5D6857C",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_07CAA4E9_373B_324F_41C6_DF2189429E27",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38E53807_3717_51C3_41C3_684D314D142D_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_07CB04E9_373B_324F_41C5_0465B582FE21",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_07CA04E9_373B_324F_4181_0E82AF969A49",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38E20E75_3715_CE47_41C1_CB433083AD5A_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_07CAE4E9_373B_324F_41B8_2F6935F2CCE5",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_07CBE4E9_373B_324F_4198_0DEABCE3C72D",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D1C20C_3717_31C5_41C0_F267C16FD70A_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_07CC64E9_373B_324F_41C4_489A8C2521BC",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_6790D9A6_3537_72C5_41A4_CBB457363DD2",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3FE39D62_34F7_727D_41C2_512A4AD3630C_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_679149A6_3537_72C5_41BC_3FF604912D02",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D0E554_3715_5244_41A6_46AD73AD729B_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_5E9EED4F_353F_3243_4168_10D8BC19DA1A",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3FEBF5FD_34F7_3247_41C7_6A5D6B068AEF_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_5EE9FD3F_353F_33C3_419E_778CBCFFFE69",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38DEEAD7_3715_7643_41C6_1F55E096C18A_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_676B799E_3537_72C4_41A7_DAD24CE52880",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_679449A6_3537_72C5_41BD_CB5A20CD05F4",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3FE6CFB7_34F7_4EC3_41C8_E0C4D40E7DDD_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_6794F9A6_3537_72C5_4198_A9FC8F1CB321",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D8B9C8_3717_F24D_41BB_9B71463B77ED_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_5EE32D4F_353F_3243_41C6_AACE96198301",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_679A29A6_3537_72C5_41CB_20429E803517",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D94D50_3717_325D_4192_23A4473BE97C_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_679AE9A6_3537_72C5_41B8_C1DD4DE5A849",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_07CE84E9_373B_324F_4195_05D0C1991563",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_876E5AAB_9312_6B04_41D4_10E9C0F12899",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38DF0085_3715_D2C7_41BF_6A1900839E53_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_07CF34E9_373B_324F_41B9_A8153B8AB051",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D0B196_3717_32C5_41AE_3819CFBC2276_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_5EED4D4F_353F_3243_41BC_35399F0EFB55",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D1312F_3717_53C3_4192_0AF0F07EB655_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_22861607_3735_31C4_41A7_834F8ED29242",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_07CE74E9_373B_324F_41BD_1A0D059B265D",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38ED9A4F_3717_3643_41A3_1D1A5D7F4E4E_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_07CDE4E9_373B_324F_41CA_0CC298D732B1",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_07C054E9_373B_324F_41C8_BE2857A1282B",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_07C034E9_373B_324F_41B3_CCEF4CB1BAC2",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38E847E1_3715_FE7F_41AF_8EEB4F1391C4_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_07C094E9_373B_324F_41A8_5A45589A022A",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_6760599E_3537_72C4_419D_B82DA8976BD1",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D1C355_3717_7647_419B_47B5347BBD92_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_6760C99E_3537_72C4_41B9_D744F3A9E840",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38E77BDC_3717_5645_41C4_5C7C39771035_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_679CF9A6_3537_72C5_41B4_26A91CC1B956",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_679A59A6_3537_72C5_4190_7A8159B9B88A",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D1C363_3717_5643_4195_478CFFE63BBB_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_679AD9A6_3537_72C5_41C8_7B4114F9E37C",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_679729A5_3537_72C7_41C3_FC563B963918",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_679759A6_3537_72C5_41A4_EBC7F56ADB8F",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3FE6F37A_34F7_564D_41C9_EE879C295A3E_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_6797C9A6_3537_72C5_41C6_062638063713",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38C94346_3715_5645_41C3_4ABCA1CD7A5E_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_6768399E_3537_72C4_41BE_CD2AB7B89E81",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_679099A6_3537_72C5_4173_E2DCED313587",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_26773AE2_3714_D64A_41C6_A2C4A07E00C1_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_45571AEB_3515_3643_41BE_B70C95FCB8FA",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D0E17A_3717_724D_41BF_5E0DD93A05BF_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_07C3B4F8_373B_324D_41C8_74D076110B28",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38DF1669_3715_3E4F_41A7_EDA9A24ACA79_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_5E9C4D4F_353F_3243_418E_28566ECDB645",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38D17585_3714_D2C7_418B_782A51353200_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_679899AD_3537_72C7_41C1_A5089E00AB62",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38E6BD91_3714_D2DF_41CA_483FA1A96AEF_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_679999AE_3537_72C5_41BA_FC7DE9199509",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_2285B607_3735_31C4_41B0_0D3E27505162",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38E649D7_3717_D243_41CA_441C811EA963_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_07C924E9_373B_324F_413E_4214EBFF2424",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38EB756F_3717_3243_41C1_DAD69B5DB11E_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_679649A5_3537_72C7_41C4_4CE7C96C4457",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_07CC24E9_373B_324F_41A8_D56A8C8F5530",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_07CCF4E9_373B_324F_41BF_8EBEB8E0C091",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38DF3F39_3715_CFCF_41B9_9107650158A7_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_07CD44E9_373B_324F_41B0_0AAEAA4FDE90",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38E8C8F3_3715_D243_41C1_F6E6B520BB3E_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_07C104E9_373B_324F_41B7_5B870EC428A0",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_07CE44E9_373B_324F_4197_D79C812BB6DA",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38DF26BC_3715_DEC5_41C1_A30EC1E6B5B6_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_07CE04E9_373B_324F_41A3_B6E557D90A07",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_679F99A6_3537_72C5_41AD_71B3A0352ED1",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38E1E982_3717_52BD_41C5_1EEF28E81EF4_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_679C69A6_3537_72C5_41B3_CA19A36F7107",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_38E4D980_3717_72BD_41B8_057AC02161F1_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_679E79A6_3537_72C5_41C4_B5AF5328180A",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_679239A6_3537_72C5_41C6_2542B91C51F9",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3FE6AC5E_34F7_3244_41A3_044AB3652055_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_6792B9A6_3537_72C5_41C4_B10069A4FCBA",
 "frameCount": 24
},
{
 "maxHeight": 111,
 "maxWidth": 377,
 "id": "Image_8874581E_9A63_696B_41D1_D6D5D7A00CCB",
 "width": "9.239%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_8874581E_9A63_696B_41D1_D6D5D7A00CCB.png",
 "minHeight": 1,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "50.588%",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.IconButton_886FC271_9AE3_59B9_41E2_4992D859B2A5, true, 0, null, null, false); this.setComponentVisibility(this.Image_88781C60_9AE1_69D7_41E1_3FD5CB6213AD, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_8819AC98_9AE1_2977_41C3_ED5782720D3C, true, 0, null, null, false)",
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image7684"
 },
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "maxHeight": 110,
 "maxWidth": 411,
 "id": "Image_8BE32B95_9A63_EF79_41D1_71CDB557780C",
 "width": "10.248%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_8BE32B95_9A63_EF79_41D1_71CDB557780C.png",
 "minHeight": 1,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "50.98%",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.IconButton_886FC271_9AE3_59B9_41E2_4992D859B2A5, true, 0, null, null, false); this.setComponentVisibility(this.Image_89F9A05D_9B83_C9BE_41D5_887FE8AB1950, true, 0, null, null, false)",
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image8153"
 },
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "maxHeight": 111,
 "maxWidth": 614,
 "id": "Image_8BD8BD89_9A63_2B69_419D_E0977B9AAFE6",
 "width": "13.516%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_8BD8BD89_9A63_2B69_419D_E0977B9AAFE6.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "height": "50.588%",
 "borderSize": 0,
 "paddingBottom": 0,
 "click": "this.openLink('https://maps.app.goo.gl/UMMJfTwJnoXocsFv5', '_blank')",
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image8564"
 },
 "shadow": false,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "maxHeight": 110,
 "maxWidth": 341,
 "id": "Image_95A05FFB_9B84_F67A_41BB_B61431672257",
 "width": "10.009%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_95A05FFB_9B84_F67A_41BB_B61431672257.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "height": "53.333%",
 "borderSize": 0,
 "paddingBottom": 0,
 "click": "this.openLink('https://forms.gle/Dkm9R4govtZgytCo9', '_blank')",
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image2599"
 },
 "shadow": false,
 "cursor": "hand",
 "horizontalAlign": "center"
}],
 "creationPolicy": "inAdvance",
 "propagateClick": false,
 "minWidth": 20,
 "backgroundPreloadEnabled": true,
 "borderSize": 0,
 "layout": "absolute",
 "height": "100%",
 "paddingBottom": 0,
 "mobileMipmappingEnabled": false,
 "gap": 10,
 "desktopMipmappingEnabled": false,
 "paddingTop": 0,
 "vrPolyfillScale": 0.5,
 "contentOpaque": false,
 "class": "Player",
 "scripts": {
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "unregisterKey": function(key){  delete window[key]; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getKey": function(key){  return window[key]; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "registerKey": function(key, value){  window[key] = value; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "existsKey": function(key){  return key in window; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); }
 },
 "data": {
  "name": "Player4626"
 },
 "shadow": false,
 "scrollBarColor": "#000000",
 "mouseWheelEnabled": true,
 "defaultVRPointer": "laser",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
