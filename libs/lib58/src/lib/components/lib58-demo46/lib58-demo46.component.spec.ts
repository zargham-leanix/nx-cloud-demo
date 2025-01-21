import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib58Demo46Component } from './lib58-demo46.component';

describe('Lib58Demo46Component', () => {
  let component: Lib58Demo46Component;
  let fixture: ComponentFixture<Lib58Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib58Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib58Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
