import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib90Demo0Component } from './lib90-demo0.component';

describe('Lib90Demo0Component', () => {
  let component: Lib90Demo0Component;
  let fixture: ComponentFixture<Lib90Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib90Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib90Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
