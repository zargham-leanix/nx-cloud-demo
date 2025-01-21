import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib90Demo40Component } from './lib90-demo40.component';

describe('Lib90Demo40Component', () => {
  let component: Lib90Demo40Component;
  let fixture: ComponentFixture<Lib90Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib90Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib90Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
