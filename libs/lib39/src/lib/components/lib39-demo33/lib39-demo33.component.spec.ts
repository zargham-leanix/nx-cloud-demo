import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib39Demo33Component } from './lib39-demo33.component';

describe('Lib39Demo33Component', () => {
  let component: Lib39Demo33Component;
  let fixture: ComponentFixture<Lib39Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib39Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib39Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
