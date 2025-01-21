import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib39Demo42Component } from './lib39-demo42.component';

describe('Lib39Demo42Component', () => {
  let component: Lib39Demo42Component;
  let fixture: ComponentFixture<Lib39Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib39Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib39Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
