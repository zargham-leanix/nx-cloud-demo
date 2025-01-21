import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib39Demo18Component } from './lib39-demo18.component';

describe('Lib39Demo18Component', () => {
  let component: Lib39Demo18Component;
  let fixture: ComponentFixture<Lib39Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib39Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib39Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
