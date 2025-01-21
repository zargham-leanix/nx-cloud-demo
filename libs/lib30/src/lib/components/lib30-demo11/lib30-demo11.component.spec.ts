import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib30Demo11Component } from './lib30-demo11.component';

describe('Lib30Demo11Component', () => {
  let component: Lib30Demo11Component;
  let fixture: ComponentFixture<Lib30Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib30Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib30Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
