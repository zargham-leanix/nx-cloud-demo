import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib90Demo21Component } from './lib90-demo21.component';

describe('Lib90Demo21Component', () => {
  let component: Lib90Demo21Component;
  let fixture: ComponentFixture<Lib90Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib90Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib90Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
