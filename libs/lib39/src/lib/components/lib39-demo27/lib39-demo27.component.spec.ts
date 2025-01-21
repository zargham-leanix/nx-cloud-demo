import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib39Demo27Component } from './lib39-demo27.component';

describe('Lib39Demo27Component', () => {
  let component: Lib39Demo27Component;
  let fixture: ComponentFixture<Lib39Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib39Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib39Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
