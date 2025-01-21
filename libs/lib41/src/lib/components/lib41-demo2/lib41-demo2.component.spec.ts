import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib41Demo2Component } from './lib41-demo2.component';

describe('Lib41Demo2Component', () => {
  let component: Lib41Demo2Component;
  let fixture: ComponentFixture<Lib41Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib41Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib41Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
