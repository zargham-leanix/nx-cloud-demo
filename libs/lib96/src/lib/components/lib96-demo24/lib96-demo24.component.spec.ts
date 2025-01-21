import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib96Demo24Component } from './lib96-demo24.component';

describe('Lib96Demo24Component', () => {
  let component: Lib96Demo24Component;
  let fixture: ComponentFixture<Lib96Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib96Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib96Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
