import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib25Demo10Component } from './lib25-demo10.component';

describe('Lib25Demo10Component', () => {
  let component: Lib25Demo10Component;
  let fixture: ComponentFixture<Lib25Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib25Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib25Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
