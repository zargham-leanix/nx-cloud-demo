import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib25Demo43Component } from './lib25-demo43.component';

describe('Lib25Demo43Component', () => {
  let component: Lib25Demo43Component;
  let fixture: ComponentFixture<Lib25Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib25Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib25Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
