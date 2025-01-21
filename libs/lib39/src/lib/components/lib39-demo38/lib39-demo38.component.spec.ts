import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib39Demo38Component } from './lib39-demo38.component';

describe('Lib39Demo38Component', () => {
  let component: Lib39Demo38Component;
  let fixture: ComponentFixture<Lib39Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib39Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib39Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
