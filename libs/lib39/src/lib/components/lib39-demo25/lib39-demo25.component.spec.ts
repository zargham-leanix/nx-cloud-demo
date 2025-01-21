import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib39Demo25Component } from './lib39-demo25.component';

describe('Lib39Demo25Component', () => {
  let component: Lib39Demo25Component;
  let fixture: ComponentFixture<Lib39Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib39Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib39Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
