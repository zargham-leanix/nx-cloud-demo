import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib2Demo24Component } from './lib2-demo24.component';

describe('Lib2Demo24Component', () => {
  let component: Lib2Demo24Component;
  let fixture: ComponentFixture<Lib2Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib2Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib2Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
