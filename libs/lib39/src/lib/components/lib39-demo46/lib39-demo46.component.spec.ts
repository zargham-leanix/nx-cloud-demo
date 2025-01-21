import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib39Demo46Component } from './lib39-demo46.component';

describe('Lib39Demo46Component', () => {
  let component: Lib39Demo46Component;
  let fixture: ComponentFixture<Lib39Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib39Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib39Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
