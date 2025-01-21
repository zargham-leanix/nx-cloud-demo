import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib39Demo16Component } from './lib39-demo16.component';

describe('Lib39Demo16Component', () => {
  let component: Lib39Demo16Component;
  let fixture: ComponentFixture<Lib39Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib39Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib39Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
