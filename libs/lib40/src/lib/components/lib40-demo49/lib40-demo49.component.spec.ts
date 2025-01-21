import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib40Demo49Component } from './lib40-demo49.component';

describe('Lib40Demo49Component', () => {
  let component: Lib40Demo49Component;
  let fixture: ComponentFixture<Lib40Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib40Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib40Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
