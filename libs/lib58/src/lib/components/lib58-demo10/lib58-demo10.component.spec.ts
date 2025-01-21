import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib58Demo10Component } from './lib58-demo10.component';

describe('Lib58Demo10Component', () => {
  let component: Lib58Demo10Component;
  let fixture: ComponentFixture<Lib58Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib58Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib58Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
