import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib39Demo2Component } from './lib39-demo2.component';

describe('Lib39Demo2Component', () => {
  let component: Lib39Demo2Component;
  let fixture: ComponentFixture<Lib39Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib39Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib39Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
