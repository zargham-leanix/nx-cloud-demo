import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib39Demo21Component } from './lib39-demo21.component';

describe('Lib39Demo21Component', () => {
  let component: Lib39Demo21Component;
  let fixture: ComponentFixture<Lib39Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib39Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib39Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
