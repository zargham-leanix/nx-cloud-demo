import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib47Demo2Component } from './lib47-demo2.component';

describe('Lib47Demo2Component', () => {
  let component: Lib47Demo2Component;
  let fixture: ComponentFixture<Lib47Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib47Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib47Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
