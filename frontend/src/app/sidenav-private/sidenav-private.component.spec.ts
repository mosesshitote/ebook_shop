import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavPrivateComponent } from './sidenav-private.component';

describe('SidenavPrivateComponent', () => {
  let component: SidenavPrivateComponent;
  let fixture: ComponentFixture<SidenavPrivateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavPrivateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavPrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
