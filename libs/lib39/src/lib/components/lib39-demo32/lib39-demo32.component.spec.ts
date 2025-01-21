import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib39Demo32Component } from './lib39-demo32.component';

describe('Lib39Demo32Component', () => {
  let component: Lib39Demo32Component;
  let fixture: ComponentFixture<Lib39Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib39Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib39Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
