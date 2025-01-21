import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib39Demo48Component } from './lib39-demo48.component';

describe('Lib39Demo48Component', () => {
  let component: Lib39Demo48Component;
  let fixture: ComponentFixture<Lib39Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib39Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib39Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
