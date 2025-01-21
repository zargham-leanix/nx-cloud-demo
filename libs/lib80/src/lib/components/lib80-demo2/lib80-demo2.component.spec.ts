import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib80Demo2Component } from './lib80-demo2.component';

describe('Lib80Demo2Component', () => {
  let component: Lib80Demo2Component;
  let fixture: ComponentFixture<Lib80Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib80Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib80Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
