import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib70Demo24Component } from './lib70-demo24.component';

describe('Lib70Demo24Component', () => {
  let component: Lib70Demo24Component;
  let fixture: ComponentFixture<Lib70Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib70Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib70Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
