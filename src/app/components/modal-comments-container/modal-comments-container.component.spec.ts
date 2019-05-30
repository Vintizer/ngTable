import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCommentsContainerComponent } from './modal-comments-container.component';

describe('ModalCommentsContainerComponent', () => {
  let component: ModalCommentsContainerComponent;
  let fixture: ComponentFixture<ModalCommentsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCommentsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCommentsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
