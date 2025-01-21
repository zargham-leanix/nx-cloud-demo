import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib39Demo49Component } from './lib39-demo49.component';

describe('Lib39Demo49Component', () => {
  let component: Lib39Demo49Component;
  let fixture: ComponentFixture<Lib39Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib39Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib39Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
