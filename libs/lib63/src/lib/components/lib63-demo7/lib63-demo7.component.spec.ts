import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib63Demo7Component } from './lib63-demo7.component';

describe('Lib63Demo7Component', () => {
  let component: Lib63Demo7Component;
  let fixture: ComponentFixture<Lib63Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib63Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib63Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
