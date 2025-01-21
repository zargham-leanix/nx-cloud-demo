import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib39Demo45Component } from './lib39-demo45.component';

describe('Lib39Demo45Component', () => {
  let component: Lib39Demo45Component;
  let fixture: ComponentFixture<Lib39Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib39Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib39Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
