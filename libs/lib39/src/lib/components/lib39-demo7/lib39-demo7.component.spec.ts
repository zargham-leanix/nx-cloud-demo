import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib39Demo7Component } from './lib39-demo7.component';

describe('Lib39Demo7Component', () => {
  let component: Lib39Demo7Component;
  let fixture: ComponentFixture<Lib39Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib39Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib39Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
