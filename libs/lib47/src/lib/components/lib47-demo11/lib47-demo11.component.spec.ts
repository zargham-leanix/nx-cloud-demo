import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib47Demo11Component } from './lib47-demo11.component';

describe('Lib47Demo11Component', () => {
  let component: Lib47Demo11Component;
  let fixture: ComponentFixture<Lib47Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib47Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib47Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
