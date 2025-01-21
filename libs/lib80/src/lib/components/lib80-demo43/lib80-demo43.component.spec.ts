import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib80Demo43Component } from './lib80-demo43.component';

describe('Lib80Demo43Component', () => {
  let component: Lib80Demo43Component;
  let fixture: ComponentFixture<Lib80Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib80Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib80Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
