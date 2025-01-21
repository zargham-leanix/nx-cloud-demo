import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib80Demo11Component } from './lib80-demo11.component';

describe('Lib80Demo11Component', () => {
  let component: Lib80Demo11Component;
  let fixture: ComponentFixture<Lib80Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib80Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib80Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
