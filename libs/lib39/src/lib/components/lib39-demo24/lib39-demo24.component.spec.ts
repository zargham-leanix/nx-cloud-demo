import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib39Demo24Component } from './lib39-demo24.component';

describe('Lib39Demo24Component', () => {
  let component: Lib39Demo24Component;
  let fixture: ComponentFixture<Lib39Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib39Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib39Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
