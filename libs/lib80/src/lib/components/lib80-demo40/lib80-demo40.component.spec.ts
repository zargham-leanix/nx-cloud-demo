import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib80Demo40Component } from './lib80-demo40.component';

describe('Lib80Demo40Component', () => {
  let component: Lib80Demo40Component;
  let fixture: ComponentFixture<Lib80Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib80Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib80Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
