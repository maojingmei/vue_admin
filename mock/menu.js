// 获取菜单树
const menuTreeData = [
    {
      "menuId": 1,
      "parentId": 0,
      "name": "系统管理",
      "url": null,
      "perms": null,
      "type": 0,
      "icon": "el-icon-setting",
      "orderNum": 0,
      "level": 0,
      "children": [
        {
          "menuId": 101,
          "parentId": 1,
          "name": "权限管理",
          "parentName": "系统管理",
          "url": "/miniUser",
          "perms": null,
          "type": 1,
          "icon": "el-icon-service",
          "orderNum": 1,
          "delFlag": 0,
          "level": 1,
          "children": []
        },
        {
          "menuId": 102,
          "parentId": 1,
          "name": "菜单管理",
          "parentName": "系统管理",
          "url": "/menu",
          "perms": null,
          "type": 1,
          "icon": "el-icon-news",
          "orderNum": 2,
          "delFlag": 0,
          "level": 1,
          "children": []
        }
      ]
    },
    {
      "menuId": 2,
      "parentId": 0,
      "name": "用户管理",
      "url": null,
      "perms": null,
      "type": 0,
      "icon": "el-icon-setting",
      "orderNum": 0,
      "level": 0,
      "children": [
        {
          "menuId": 201,
          "parentId": 2,
          "name": "线上用户",
          "parentName": "用户管理",
          "url": "/miniUser",
          "perms": null,
          "type": 1,
          "icon": "el-icon-service",
          "orderNum": 1,
          "delFlag": 0,
          "level": 1,
          "children": []
        },
        {
          "menuId": 202,
          "parentId": 2,
          "name": "线下用户",
          "parentName": "用户管理",
          "url": "/menu",
          "perms": null,
          "type": 1,
          "icon": "el-icon-news",
          "orderNum": 2,
          "delFlag": 0,
          "level": 1,
          "children": []
        }
      ]
    }
  ]
  
export default {
  getMenu: res => {
    return {
      code: 200,
      data: menuTreeData
    }
  }
  //console.log('menu.json');
 
}
