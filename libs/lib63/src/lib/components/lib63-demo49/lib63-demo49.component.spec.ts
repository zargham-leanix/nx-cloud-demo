import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib63Demo49Component } from './lib63-demo49.component';

describe('Lib63Demo49Component', () => {
  let component: Lib63Demo49Component;
  let fixture: ComponentFixture<Lib63Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib63Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib63Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
