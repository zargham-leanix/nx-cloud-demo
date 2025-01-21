import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib39Demo0Component } from './lib39-demo0.component';

describe('Lib39Demo0Component', () => {
  let component: Lib39Demo0Component;
  let fixture: ComponentFixture<Lib39Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib39Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib39Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
