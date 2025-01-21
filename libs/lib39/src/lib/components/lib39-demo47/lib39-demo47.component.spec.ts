import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib39Demo47Component } from './lib39-demo47.component';

describe('Lib39Demo47Component', () => {
  let component: Lib39Demo47Component;
  let fixture: ComponentFixture<Lib39Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib39Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib39Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
