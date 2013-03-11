//
//  EAGLViewController.m
//  cocos2dx
//
//  Created by Thai Duong on 2/3/13.
//  Copyright (c) 2013 厦门雅基软件有限公司. All rights reserved.
//

#import "EAGLViewController.h"
#include "cocos2d.h"
@interface EAGLViewController ()

@end

@implementation EAGLViewController

- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil
{
    self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil];
    if (self) {
        // Custom initialization
    }
    return self;
}

- (void)viewDidLoad
{
    [super viewDidLoad];
	// Do any additional setup after loading the view.
}

- (void)viewDidUnload
{
    [super viewDidUnload];
    // Release any retained subviews of the main view.
}

- (BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)interfaceOrientation
{
    int orientation = cocos2d::CCApplication::sharedApplication()->getOrientation();
    if (orientation == 0) //landscape
        return UIInterfaceOrientationIsLandscape( interfaceOrientation );
    else
        return UIInterfaceOrientationIsPortrait( interfaceOrientation );
    //return (interfaceOrientation == UIInterfaceOrientationPortrait);
}

@end
