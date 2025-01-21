import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib39Demo36Component } from './lib39-demo36.component';

describe('Lib39Demo36Component', () => {
  let component: Lib39Demo36Component;
  let fixture: ComponentFixture<Lib39Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib39Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib39Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
