import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib39Demo1Component } from './lib39-demo1.component';

describe('Lib39Demo1Component', () => {
  let component: Lib39Demo1Component;
  let fixture: ComponentFixture<Lib39Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib39Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib39Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
