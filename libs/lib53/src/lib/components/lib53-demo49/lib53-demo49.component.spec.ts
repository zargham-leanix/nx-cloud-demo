import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib53Demo49Component } from './lib53-demo49.component';

describe('Lib53Demo49Component', () => {
  let component: Lib53Demo49Component;
  let fixture: ComponentFixture<Lib53Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib53Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib53Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
