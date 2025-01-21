import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib39Demo13Component } from './lib39-demo13.component';

describe('Lib39Demo13Component', () => {
  let component: Lib39Demo13Component;
  let fixture: ComponentFixture<Lib39Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib39Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib39Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
