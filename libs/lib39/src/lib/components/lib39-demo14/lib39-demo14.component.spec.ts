import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib39Demo14Component } from './lib39-demo14.component';

describe('Lib39Demo14Component', () => {
  let component: Lib39Demo14Component;
  let fixture: ComponentFixture<Lib39Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib39Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib39Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
