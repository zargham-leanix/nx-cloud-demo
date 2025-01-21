import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib90Demo4Component } from './lib90-demo4.component';

describe('Lib90Demo4Component', () => {
  let component: Lib90Demo4Component;
  let fixture: ComponentFixture<Lib90Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib90Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib90Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
