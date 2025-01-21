import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib39Demo37Component } from './lib39-demo37.component';

describe('Lib39Demo37Component', () => {
  let component: Lib39Demo37Component;
  let fixture: ComponentFixture<Lib39Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib39Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib39Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
