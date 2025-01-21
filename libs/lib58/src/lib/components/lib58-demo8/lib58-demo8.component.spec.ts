import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib58Demo8Component } from './lib58-demo8.component';

describe('Lib58Demo8Component', () => {
  let component: Lib58Demo8Component;
  let fixture: ComponentFixture<Lib58Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib58Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib58Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
