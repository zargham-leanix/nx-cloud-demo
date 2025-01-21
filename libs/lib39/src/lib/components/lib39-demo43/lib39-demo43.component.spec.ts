import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib39Demo43Component } from './lib39-demo43.component';

describe('Lib39Demo43Component', () => {
  let component: Lib39Demo43Component;
  let fixture: ComponentFixture<Lib39Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib39Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib39Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
