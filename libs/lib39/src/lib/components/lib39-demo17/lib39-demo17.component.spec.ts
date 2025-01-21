import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib39Demo17Component } from './lib39-demo17.component';

describe('Lib39Demo17Component', () => {
  let component: Lib39Demo17Component;
  let fixture: ComponentFixture<Lib39Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib39Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib39Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
