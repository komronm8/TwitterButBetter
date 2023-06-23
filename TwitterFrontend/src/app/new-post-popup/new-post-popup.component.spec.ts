import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPostPopupComponent } from './new-post-popup.component';

describe('NewPostPopupComponent', () => {
  let component: NewPostPopupComponent;
  let fixture: ComponentFixture<NewPostPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewPostPopupComponent]
    });
    fixture = TestBed.createComponent(NewPostPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
