import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib47Demo10Component } from './lib47-demo10.component';

describe('Lib47Demo10Component', () => {
  let component: Lib47Demo10Component;
  let fixture: ComponentFixture<Lib47Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib47Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib47Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
