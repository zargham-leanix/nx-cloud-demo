import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib39Demo35Component } from './lib39-demo35.component';

describe('Lib39Demo35Component', () => {
  let component: Lib39Demo35Component;
  let fixture: ComponentFixture<Lib39Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib39Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib39Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
