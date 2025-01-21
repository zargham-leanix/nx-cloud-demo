import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib39Demo40Component } from './lib39-demo40.component';

describe('Lib39Demo40Component', () => {
  let component: Lib39Demo40Component;
  let fixture: ComponentFixture<Lib39Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib39Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib39Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
