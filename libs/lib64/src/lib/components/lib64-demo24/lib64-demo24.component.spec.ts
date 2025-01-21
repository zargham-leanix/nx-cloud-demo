import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib64Demo24Component } from './lib64-demo24.component';

describe('Lib64Demo24Component', () => {
  let component: Lib64Demo24Component;
  let fixture: ComponentFixture<Lib64Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib64Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib64Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
