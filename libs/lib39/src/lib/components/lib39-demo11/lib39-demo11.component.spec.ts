import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib39Demo11Component } from './lib39-demo11.component';

describe('Lib39Demo11Component', () => {
  let component: Lib39Demo11Component;
  let fixture: ComponentFixture<Lib39Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib39Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib39Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
