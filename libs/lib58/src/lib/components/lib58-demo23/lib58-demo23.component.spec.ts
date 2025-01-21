import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib58Demo23Component } from './lib58-demo23.component';

describe('Lib58Demo23Component', () => {
  let component: Lib58Demo23Component;
  let fixture: ComponentFixture<Lib58Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib58Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib58Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
