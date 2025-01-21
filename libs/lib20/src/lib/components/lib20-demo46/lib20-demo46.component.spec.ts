import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib20Demo46Component } from './lib20-demo46.component';

describe('Lib20Demo46Component', () => {
  let component: Lib20Demo46Component;
  let fixture: ComponentFixture<Lib20Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib20Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib20Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
