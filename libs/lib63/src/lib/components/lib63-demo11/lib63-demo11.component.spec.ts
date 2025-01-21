import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib63Demo11Component } from './lib63-demo11.component';

describe('Lib63Demo11Component', () => {
  let component: Lib63Demo11Component;
  let fixture: ComponentFixture<Lib63Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib63Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib63Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
