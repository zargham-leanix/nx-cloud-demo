import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib39Demo44Component } from './lib39-demo44.component';

describe('Lib39Demo44Component', () => {
  let component: Lib39Demo44Component;
  let fixture: ComponentFixture<Lib39Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib39Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib39Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
