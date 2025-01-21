import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib39Demo29Component } from './lib39-demo29.component';

describe('Lib39Demo29Component', () => {
  let component: Lib39Demo29Component;
  let fixture: ComponentFixture<Lib39Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib39Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib39Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
