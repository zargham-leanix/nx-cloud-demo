import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib39Demo34Component } from './lib39-demo34.component';

describe('Lib39Demo34Component', () => {
  let component: Lib39Demo34Component;
  let fixture: ComponentFixture<Lib39Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib39Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib39Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
